import browser from "webextension-polyfill";
import { LRUCache } from "~/libs/cache";
import { CachedFetcher } from "~/libs/fetcher";
import type { RequestMessage } from "~/libs/message";
import type { Course, Professor } from "~/libs/models";

console.log("background running!");

browser.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
});

const courseFetcher = new CachedFetcher<Course>(
  "http://localhost:3000/v1/plugin/course",
  new LRUCache(50)
);
const profFetcher = new CachedFetcher<Professor>("", new LRUCache(50));

// deal with request from content script
chrome.runtime.onMessage.addListener((message, sender, sendResp) => {
  const msg: RequestMessage = message;

  if (msg.type === "fetch_course") {
    const params = new URLSearchParams({
      number: msg.number + "",
      abbr: msg.subject,
    });

    courseFetcher
      .get(params)
      .then((res) => {
        if (res.catalogNumber === msg.number + "") {
          sendResp(res);
        }
      })
      .catch((e) => {
        sendResp(null);
      });
  }

  if (msg.type === "fetch_prof") {
    const params = new URLSearchParams({
      name: msg.name,
    });

    profFetcher
      .post(params)
      .then((res) => {
        if (res.name === msg.name) {
          sendResp(res);
        }
      })
      .catch(null);
  }

  return true;
});

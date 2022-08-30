import {
  ContentQuery,
  ListItemNameQuery,
  ListItemSubjectQuery,
} from "../const";
import Tag from "~/components/Tag.svelte";
import GPA from "~/components/GPA.svelte";
import { LightGreen, LightRed } from "~/libs/const";

type TagItem = [text: string, color: string];

const demoTagList: Array<TagItem> = [
  ["EASY", LightGreen],
  ["HARD", LightRed],
];

export class ListItem {
  private element: HTMLElement;
  private name: string;
  private number: number;
  private subject: string;

  constructor(element: HTMLElement) {
    this.element = element;
    this.name = this.element.querySelector(ListItemNameQuery).innerHTML.trim();

    const subjectStr = this.element
      .querySelector(ListItemSubjectQuery)
      .innerHTML.trim();

    const splitted = subjectStr.split(" ");

    this.number = parseInt(splitted[splitted.length - 1]);
    this.subject = splitted.slice(0, splitted.length - 1).join("");
  }

  public appendCourseInfo() {
    // append GPA to course item
    const GPAElem = appendGPADiv(this.gpa());

    // append tags to course item
    const tagElem = appendTagDiv(demoTagList);

    const content = document.createElement("div");
    content.className = "row eaza-item-content";

    content.appendChild(tagElem);
    content.appendChild(GPAElem);
    this.element.querySelector(ContentQuery).appendChild(content);
  }

  public getSubject() {
    return this.subject;
  }

  public getNumber() {
    return this.number;
  }

  public getName() {
    return this.name;
  }

  public gpa() {
    return (Math.random() * 4).toFixed(2);
  }
}

const createTags = (parent: HTMLElement, tags: Array<TagItem>) => {
  for (const tag of tags) {
    new Tag({
      target: parent,
      props: {
        text: tag[0],
        color: tag[1],
      },
    });
  }
};

const appendTagDiv = (tagList: Array<TagItem>) => {
  const tagDiv = document.createElement("div");
  createTags(tagDiv, tagList);
  return tagDiv;
};

const appendGPADiv = (gpa: string) => {
  const GPADiv = document.createElement("div");
  new GPA({
    target: GPADiv,
    props: {
      gpa,
    },
  });
  return GPADiv;
};

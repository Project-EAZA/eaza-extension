import pkg from "../package.json";

const manifest = {
  web_accessible_resources: ["content-script-style.css"],
  background: {
    scripts: ["src/entries/background/main.ts"],
    persistent: false,
  },
  content_scripts: [
    {
      js: ["src/entries/contentScript/primary/main.ts"],
      matches: ["*://*/*"],
      css: ["src/entries/contentScript/content-script-style.css"],
    },
  ],
  browser_action: {
    default_icon: {
      16: "icons/logo.png",
      19: "icons/logo.png",
      32: "icons/logo.png",
      38: "icons/logo.png",
    },
    default_popup: "src/entries/popup/index.html",
  },
  icons: {
    48: "icons/logo.png",
  },
  options_ui: {
    chrome_style: false,
    open_in_tab: true,
    page: "src/entries/options/index.html",
  },
  permissions: ["*://*/*"],
};

export function getManifest(): chrome.runtime.ManifestV2 {
  return {
    author: pkg.author,
    description: pkg.description,
    name: pkg.displayName ?? pkg.name,
    version: pkg.version,
    manifest_version: 2,
    ...manifest,
  };
}

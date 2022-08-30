import { CourseNameDivClass } from "../const";
import { ListItem } from "../element/listItem";
import { CourseItemHandler } from "./courseItemHandler";

const handler = new CourseItemHandler();

const observer = new MutationObserver((mutationList, observer) => {
  for (const mutation of mutationList) {
    if (mutation.type === "characterData") {
      const parent = mutation.target.parentElement;
      // get parent document from course name
      if (parent.className === CourseNameDivClass) {
        if (parent.parentElement) {
          const rootElem = parent.parentElement.parentElement.parentElement;
          const item = new ListItem(rootElem);
          handler.handle(item);
        }
      }
    }
  }
});

observer.observe(document.querySelector("mat-sidenav-content"), {
  subtree: true,
  characterData: true,
});

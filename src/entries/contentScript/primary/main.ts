import { CourseNameDivClass } from "../const";
import { ListItem } from "../element/listItem";
import { CourseItemHandler } from "./courseItemHandler";
import { GradesHandler } from "./gradesHandler";

const courseHandler = new CourseItemHandler();
const gradesHandler = new GradesHandler();

const observer = new MutationObserver((mutationList, observer) => {
  for (const mutation of mutationList) {
    if (mutation.type === "characterData") {
      const parent = mutation.target.parentElement;
      // handle course items
      // get parent document from course name
      if (parent.className === CourseNameDivClass) {
        if (parent.parentElement) {
          const rootElem = parent.parentElement.parentElement.parentElement;
          const item = new ListItem(rootElem, (item) => {
            gradesHandler.handle(item);
          });
          courseHandler.handle(item);
        }
      }
    }
  }
});

observer.observe(document, {
  subtree: true,
  characterData: true,
});

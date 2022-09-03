import type { RequestMessage } from "~/libs/message";
import type { Course } from "~/libs/models";
import type { ListItem } from "../element/listItem";

export class CourseItemHandler {
  public handle(item: ListItem) {
    chrome.runtime.sendMessage<RequestMessage, Course>(
      {
        type: "fetch_course",
        number: item.getNumber(),
        subject: item.getSubject(),
      },
      (course) => {
        this.handleCourse(item, course);
      }
    );
  }

  private handleCourse(item: ListItem, course: Course) {
    console.log(course);

    item.appendCourseInfo(course);
  }
}

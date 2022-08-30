import type { RequestMessage } from "~/libs/message";
import type { Course } from "~/libs/models";
import type { ListItem } from "../element/listItem";

export class CourseItemHandler {
  public handle(item: ListItem) {
    // chrome.runtime.sendMessage<RequestMessage, Course>(
    //   {
    //     type: 'fetch_course',
    //     number: item.getNumber(),
    //     name: item.getName(),
    //   },
    //   (course) => this.handleCourse(item, course)
    // );
    this.handleCourse(item, null);
  }
  private handleCourse(item: ListItem, course: Course) {
    item.appendCourseInfo();
  }
}

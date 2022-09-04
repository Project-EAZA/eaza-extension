import {
  ContentQuery,
  ListItemNameQuery,
  ListItemSubjectQuery,
} from "../const";
import CourseItem from "~/components/CourseItem.svelte";
import { LightGreen, LightRed, RepeatableTag, TagMap } from "~/libs/const";
import type { TagItem } from "~/libs/types";
import type { Course } from "~/libs/models";

const demoTagList: Array<TagItem> = [
  { text: "EASY", color: LightGreen },
  { text: "HARD", color: LightRed },
];

export class ListItem {
  private element: HTMLElement;
  private name: string;
  private number: number;
  private subject: string;

  constructor(element: HTMLElement, onClick: (item: ListItem) => void) {
    this.element = element;
    this.name = this.element.querySelector(ListItemNameQuery).innerHTML.trim();

    const subjectStr = this.element
      .querySelector(ListItemSubjectQuery)
      .innerHTML.trim();

    const splitted = subjectStr.split(" ");

    this.number = parseInt(splitted[splitted.length - 1]);
    this.subject = splitted
      .slice(0, splitted.length - 1)
      .join(" ")
      .replace("&amp;", "&");

    // when click this item, fetch grades
    this.element.onclick = () => {
      onClick(this);
    };
  }

  public appendCourseInfo(course: Course) {
    if (course == null) {
      return;
    }
    const content = document.createElement("div");

    new CourseItem({
      target: content,
      props: {
        tags: createTags(course),
        gpa: course.GPA,
      },
    });

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

const createTags = (course: Course) => {
  const list: Array<TagItem> = [];

  if (course.breadths.length > 0) {
    for (const b of course.breadths) {
      if (b.Code !== "") {
        list.push(TagMap[b.Code]);
      }
    }
  }

  if (course.ethnicStudies && course.ethnicStudies.Code !== "") {
    list.push(TagMap[course.ethnicStudies.Code]);
  }

  if (course.generalEd && course.generalEd.Code !== "") {
    list.push(TagMap[course.generalEd.Code]);
  }

  if (course.repeatable === "Y") {
    list.push(RepeatableTag);
  }

  return list;
};

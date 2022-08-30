import {
  ContentQuery,
  ListItemNameQuery,
  ListItemSubjectQuery,
} from "../const";
import CourseItem from "~/components/CourseItem.svelte";
import { LightGreen, LightRed } from "~/libs/const";
import type { TagItem } from "~/libs/types";

const demoTagList: Array<TagItem> = [
  { text: "EASY", color: LightGreen },
  { text: "HARD", color: LightRed },
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
    const content = document.createElement("div");

    new CourseItem({
      target: content,
      props: {
        tags: demoTagList,
        gpa: this.gpa(),
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

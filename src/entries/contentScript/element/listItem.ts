import { GPADivQuery, ListItemNameQuery, ListItemSubjectQuery } from "../const";
import Tag from "~/components/Tag.svelte";

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
    const GPADiv = createGPADiv(this.gpa());
    this.element.querySelector(GPADivQuery).appendChild(GPADiv);

    const tagDiv = document.createElement("div");
    createTags(tagDiv, [
      ["EASY", "#198754"],
      ["HARD", "#dc3545"],
    ]);

    this.element.querySelector("div.right.grow").appendChild(tagDiv);

    const content = document.createElement("div");
    content.className = "row";
    content.style.cssText = `
      margin-top: 2px;
      display: flex;
      justify-content: space-between;
    `;
    content.appendChild(tagDiv);
    content.appendChild(GPADiv);
    this.element.querySelector("div.right.grow").appendChild(content);
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

const createTags = (
  parent: HTMLElement,
  tags: Array<[text: string, color: string]>
) => {
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

const createGPADiv = (gpa: string) => {
  const div = document.createElement("div");
  div.innerHTML = "GPA: " + gpa;
  div.style.fontSize = "0.9rem";
  div.style.float = "right";
  return div;
};

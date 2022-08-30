import { GPADivQuery, ListItemNameQuery, ListItemSubjectQuery } from "../const";

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
    const tags = createTags([
      ["EASY", "#198754"],
      ["HARD", "#dc3545"],
    ]);

    tags.forEach((tag) => {
      tagDiv.appendChild(tag);
    });

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
  tags: Array<[text: string, color: string]>
): Array<HTMLElement> => {
  const result = [];
  for (const tag of tags) {
    const TagEle = createTag(tag[0], tag[1]);
    result.push(TagEle);
  }
  return result;
};

const createTag = (text: string, color: string = "black"): HTMLElement => {
  const doc = document.createElement("span");
  doc.innerHTML = text;
  doc.style.cssText = `
  display: inline-flex;
  vertical-align: top;
  -webkit-box-align: center;
  align-items: center;
  max-width: 100%;
  line-height: 1.2;
  outline: transparent solid 2px;
  outline-offset: 2px;
  border-radius: 5px;
  min-height: 1.2rem;
  min-width: 1.5rem;
  font-size: 12px;
  padding-inline-start: 5px;
  padding-inline-end: 5px;
  background: ${color};
  margin-right: 2px;
  color: #fff;
  `;
  return doc;
};

const createGPADiv = (gpa: string) => {
  const div = document.createElement("div");
  div.innerHTML = "GPA: " + gpa;
  div.style.fontSize = "0.9rem";
  div.style.float = "right";
  return div;
};

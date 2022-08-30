import { ListItemNameQuery, ListItemSubjectQuery } from "../const";

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

  public getSubject() {
    return this.subject;
  }

  public getNumber() {
    return this.number;
  }

  public getName() {
    return this.name;
  }
}

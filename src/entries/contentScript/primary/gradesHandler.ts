import type { RequestMessage } from "~/libs/message";
import type { Teaching } from "~/libs/models";
import GradeBoard from "~/components/GradeBoard.svelte";
import type { ListItem } from "../element/listItem";

export class GradesHandler {
  public handle(item: ListItem) {
    chrome.runtime.sendMessage<RequestMessage, { teachings: Array<Teaching> }>(
      {
        type: "fetch_grades",
        number: item.getNumber(),
        subject: item.getSubject(),
      },
      (resp) => {
        this.handleTeachings(resp.teachings);
      }
    );
  }

  private handleTeachings(teachings: Array<Teaching>) {
    const section = document.querySelector("section.wrapper");
    const chart = section.querySelector("#eaza-grades-chart");
    if (chart) {
      section.removeChild(chart);
    }
    new GradeBoard({
      target: section,
      props: {
        teachings,
      },
    });
  }
}

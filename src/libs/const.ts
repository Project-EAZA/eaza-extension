import type { TagItem } from "./types";

export const LightGreen = "#198754";
export const LightRed = "#dc3545";

export const RepeatableTag: TagItem = { text: "Repeatable", color: "#885A89" };

export const TagMap: Record<string, TagItem> = {
  B: { text: "Biology", color: "#A2AD59" },
  H: { text: "Humanity", color: "#513518" },
  L: { text: "Literature", color: "#704E2E" },
  N: { text: "Natural", color: "#1e81b0" },
  P: { text: "Physics", color: "#154c79" },
  S: { text: "Social", color: "#FE6D73 " },
  "ETHNIC ST": { text: "Ethnic", color: "#FFCB77" },
  "COM B": { text: "ComB", color: "#6A7FDB" },
  "COM A": { text: "ComA", color: "#F4D35E" },
  "QR-B": { text: "QR-B", color: "#38686A" },
  "QR-A": { text: "QR-A", color: "#9F956C" },
};

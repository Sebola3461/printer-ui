import { SimpleLabel } from "../core/SimpleLabel";

export enum LabelType {
  Big,
  Small,
}

export class PrintManager {
  public labelType: LabelType = LabelType.Small;
  public serialQueue: string[] = [];
  public app: SimpleLabel;

  constructor(app: SimpleLabel) {
    this.app = app;
  }

  setLabelType(labelType: LabelType) {
    this.labelType = labelType;
  }

  addRawEntriesToSerialQueue(entries: string) {
    this.serialQueue = entries.split("\n").map((entry) => entry.trim());
  }
}

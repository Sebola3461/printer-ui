import { PrintManager } from "../printer/PrintManager";
import { ScreenManager } from "../ui/ScreenManager";

export class SimpleLabel {
  public ScreenManager = new ScreenManager(this);
  public PrintManager = new PrintManager(this);

  constructor() {}

  launch() {
    this.ScreenManager.render();
  }
}

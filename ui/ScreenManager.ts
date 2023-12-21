import blessed from "blessed";
import { SimpleLabel } from "../core/SimpleLabel";
import { SerialForm } from "./components/SerialForm";
import { LabelTypeForm } from "./components/LabelTypeForm";
import { LoadingPrintQueue } from "./components/LoadingPrintQueue";

export class ScreenManager {
  public app: SimpleLabel;
  public screen = blessed.screen({
    smartCSR: true,
  });

  constructor(app: SimpleLabel) {
    this.app = app;
    this.screen.title = "SimpleLabel";
    this.screen.enableKeys();
    this.screen.enableInput();
  }

  requestLabelType() {
    const baseBox = this.screen.children.find(
      (c: any) => c.name == "baseForm"
    ) as blessed.Widgets.BoxElement;

    const selectLabelBox = this.screen.children.find(
      (c: any) => c.name == "requestLabelTypeForm"
    ) as blessed.Widgets.BoxElement;

    baseBox.hide();
    selectLabelBox.show();
    selectLabelBox.focus();
  }

  goToHomeScreen() {
    const baseBox = this.screen.children.find(
      (c: any) => c.name == "baseForm"
    ) as blessed.Widgets.BoxElement;

    const selectLabelBox = this.screen.children.find(
      (c: any) => c.name == "requestLabelTypeForm"
    ) as blessed.Widgets.BoxElement;

    selectLabelBox.hide();

    baseBox.show();

    const serialForm = baseBox.children.find(
      (c: any) => c.name == "serialForm"
    ) as blessed.Widgets.FormElement<unknown>;

    serialForm.focus();
  }

  clearSerialInputEntries() {
    const baseBox = this.screen.children.find(
      (c: any) => c.name == "baseForm"
    ) as blessed.Widgets.BoxElement;

    const serialForm = baseBox.children.find(
      (c: any) => c.name == "serialForm"
    ) as blessed.Widgets.FormElement<unknown>;

    const serialInput = serialForm.children.find(
      (c: any) => c.name == "serialInput"
    ) as blessed.Widgets.TextareaElement;

    serialInput.setValue("");
  }

  showQueueProcessingModal() {
    const loadingQueueModal = this.screen.children.find(
      (c: any) => c.name == "loadingQueueModal"
    ) as blessed.Widgets.BoxElement;

    loadingQueueModal.show();
    loadingQueueModal.focus();
  }

  hideQueueProcessingModal() {
    const loadingQueueModal = this.screen.children.find(
      (c: any) => c.name == "loadingQueueModal"
    ) as blessed.Widgets.BoxElement;

    loadingQueueModal.hide();
    this.goToHomeScreen();
  }

  render() {
    SerialForm(this.screen, this);
    LabelTypeForm(this.screen, this);
    LoadingPrintQueue(this.screen, this);

    this.screen.render();
  }
}

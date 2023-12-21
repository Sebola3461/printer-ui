import blessed from "blessed";
import { LabelTypeForm } from "./LabelTypeForm";
import { ScreenManager } from "../ScreenManager";

export function SerialForm(
  screen: blessed.Widgets.Screen,
  manager: ScreenManager
) {
  const baseBox = blessed.box({
    top: "center",
    left: "center",
    width: "95%",
    height: "95%",
    content: "SimpleLabel - Etiquetas Ágilli",
    tags: true,
    mouse: true,
    keys: true,
    name: "baseForm",
  });

  const form = blessed.form({
    parent: baseBox,
    mouse: true,
    keys: true,
    left: "center",
    top: "10%",
    width: "100%",
    height: "60%",
    padding: 2,
    border: {
      type: "line",
    },
    style: {
      fg: "white",
      border: {
        fg: "#999999",
      },
    },
    autoNext: true,
    content: "Geração de etiqueta",
    name: "serialForm",
  });

  const serialInput = blessed.textarea({
    parent: form,
    top: 3,
    height: "40%",
    bg: "black",
    keys: true,
    inputOnFocus: true,
    border: {
      type: "line",
    },
    style: {
      fg: "white",
      border: {
        fg: "#f0f0f0",
      },
      focus: {
        border: {
          fg: "yellow",
        },
      },
    },
    mouse: true,
    keyable: true,
    focusable: true,
    label: "Serial",
    name: "serialInput",
  });

  serialInput.on("action", () => {
    manager.app.PrintManager.addRawEntriesToSerialQueue(serialInput.getText());
  });

  const printButton = blessed.button({
    parent: form,
    mouse: true,
    keys: true,
    shrink: true,
    padding: {
      left: 5,
      right: 5,
      top: 1,
      bottom: 1,
    },
    left: 1,
    top: "50%",
    name: "printButton",
    content: "Imprimir",
    style: {
      bg: "blue",
      focus: {
        bg: "yellow",
      },
    },
  });

  printButton.on("press", () => {
    manager.requestLabelType();
  });

  screen.append(baseBox);

  serialInput.focus();
}

import blessed from "blessed";
import { ScreenManager } from "../ScreenManager";
import { LabelType } from "../../printer/PrintManager";

export function LabelTypeForm(
  screen: blessed.Widgets.Screen | blessed.Widgets.FormElement<unknown>,
  manager: ScreenManager
) {
  const baseBox = blessed.form({
    top: "center",
    left: "center",
    width: "25%",
    height: "35%",
    content: "Selecione o tipo de etiqueta",
    tags: true,
    mouse: true,
    keys: true,
    hidden: true,
    focusable: true,
    keyable: true,
    border: {
      type: "line",
    },
    padding: {
      right: 1,
      left: 1,
    },
    style: {
      fg: "yellow",
      border: {
        fg: "yellow",
      },
    },
    name: "requestLabelTypeForm",
  });

  screen.append(baseBox);

  const smallLabelButton = blessed.button({
    parent: baseBox,
    mouse: true,
    keys: true,
    shrink: true,
    padding: {
      left: 3,
      right: 3,
      top: 1,
      bottom: 1,
    },
    width: "80%",
    top: "20%",
    left: "center",
    name: "etiquetaPequenaSelect",
    content: "Etiqueta Pequena",
    style: {
      bg: "blue",
      focus: {
        bg: "yellow",
      },
    },
  });

  const bigLabelButton = blessed.button({
    parent: baseBox,
    mouse: true,
    keys: true,
    shrink: true,
    padding: {
      left: 3,
      right: 3,
      top: 1,
      bottom: 1,
    },
    width: "80%",
    top: "40%",
    left: "center",
    name: "etiquetaGrandeSelect",
    content: "Etiqueta Grande",
    style: {
      bg: "blue",
      focus: {
        bg: "yellow",
      },
    },
  });

  const cancelButton = blessed.button({
    parent: baseBox,
    mouse: true,
    keys: true,
    shrink: true,
    padding: {
      left: 3,
      right: 3,
      top: 1,
      bottom: 1,
    },
    width: "80%",
    top: "60%",
    left: "center",
    name: "cancelarSelect",
    content: "Cancelar",
    style: {
      bg: "red",
      focus: {
        bg: "yellow",
      },
    },
  });

  cancelButton.on("press", () => {
    manager.goToHomeScreen();
    manager.clearSerialInputEntries();
  });

  smallLabelButton.on("press", () => {
    manager.goToHomeScreen();
    manager.clearSerialInputEntries();
  });

  bigLabelButton.on("press", () => {
    manager.goToHomeScreen();
  });
}

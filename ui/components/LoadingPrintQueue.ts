import blessed from "blessed";
import { ScreenManager } from "../ScreenManager";
import { LabelType } from "../../printer/PrintManager";

export function LoadingPrintQueue(
  screen: blessed.Widgets.Screen | blessed.Widgets.FormElement<unknown>,
  manager: ScreenManager
) {
  const baseBox = blessed.box({
    top: "center",
    left: "center",
    width: "45%",
    height: "25%",
    content: "Processando etiquetas.",
    hidden: true,
    focusable: true,
    border: {
      type: "line",
    },
    padding: {
      right: 1,
      left: 1,
    },
    style: {
      fg: "blue",
      border: {
        fg: "blue",
      },
    },
    name: "loadingQueueModal",
  });

  setInterval(() => {
    switch (baseBox.content) {
      case "Processando etiquetas.":
        baseBox.setContent("Processando etiquetas..");
        break;
      case "Processando etiquetas..":
        baseBox.setContent("Processando etiquetas...");
        break;
      case "Processando etiquetas...":
        baseBox.setContent("Processando etiquetas.");
        break;
    }
  }, 1000);

  screen.append(baseBox);
}

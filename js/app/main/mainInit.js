import { body, multiSelect, multiSelectControl, multiSelectOptions, selectInput } from "../components.js";
import { multiSelectChoose } from "../multiSelectEvent/multiSelectChoose.js";
import { multiSelectEvent } from "../multiSelectEvent/multiselectEvent.js";
import { resetEvent } from "../reset/resetEvent.js";
import { selectManagers } from "./selectManagers.js";

export function mainInit() {

  selectManagers()

  // закрываем кастомный селект если в другом месте
  body.onclick = resetEvent

  // открываем кастомный селект
  multiSelect.onclick = multiSelectEvent

  // получаем значение из селекта
  multiSelectOptions.onclick = multiSelectChoose

}

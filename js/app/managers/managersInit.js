import { formAddManager } from "../Elements/elements.js";
import { addUserEvent } from "./event/addUserEvent.js";
import { viewManagers } from "./viewManagers.js";

export function managersInit() {

  // Заповнення списку менеджерів
  viewManagers();

  // Добавлення менеджера
  formAddManager.onsubmit = addUserEvent;
}
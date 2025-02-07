import { formAddManager } from "../components.js";
import { addUserEvent } from "./addUserEvent.js";
import { viewManagers } from "./viewManagers.js";

export function managersInit() {

  // Заповнення списку менеджерів
  viewManagers();

  // Добавлення менеджера
  formAddManager.onsubmit = addUserEvent;
}
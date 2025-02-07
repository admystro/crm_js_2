import { multiSelectControl, multiSelectOptions } from "../components.js";

export function multiSelectEvent(event) {
  event.stopPropagation();
  multiSelectControl.classList.add('select-active');
  multiSelectOptions.classList.remove('d-none');

}
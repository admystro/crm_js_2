import { multiSelectControl, multiSelectOptions } from "../components.js";

export function resetEvent() {
  multiSelectControl.classList.remove('select-active');
  multiSelectOptions.classList.add('d-none');
}
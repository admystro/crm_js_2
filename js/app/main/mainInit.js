import { addFormIncoming, addManger } from "../Elements/elements.js";
import { addIncomingEvent } from "../Events/addIncomingEvent.js";
import { addManagerToForm } from "../Events/addManagerToForm.js";
import { multiSelectEvent } from "../Events/multiselectEvent.js";


export function mainInit() {
  multiSelectEvent()

  addFormIncoming.onsubmit = addIncomingEvent
  // addManger.onclick = addManagerToForm
}

import { dayPicker } from "../Elements/dayPicker.js";
import { addFormIncoming } from "../Elements/elements.js";
import { addIncomingEvent } from "../Events/addIncomingEvent.js";
import { multiSelectEvent } from "../Events/multiselectEvent.js";
import { incomingShow } from "../incomingDet/incomingShow.js";


export function mainInit() {
  multiSelectEvent()
  incomingShow()
  dayPicker()



  addFormIncoming.onsubmit = addIncomingEvent
  // addManger.onclick = addManagerToForm
}

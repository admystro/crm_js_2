import { multiSelectOptions } from "../components.js";

export function selectManagersInfo(managerInfo) {

  const date = new Date('d-m-y');


  multiSelectOptions.innerHTML +=
    `<div class='option-item'>${managerInfo.name}</div>`;

}
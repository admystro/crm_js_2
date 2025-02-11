import { cardFoot, managerListFields } from "../Elements/elements.js";
import { multiSelectEvent } from "./multiselectEvent.js";

export function addManagerToForm() {


  const addedField = `
  <div class="row mb-2 manager-row">                             
    <div class="col">                               
      <select required class="day-picker-wrap select-tools" name="manager[${managerListFields.childElementCount}][manager]" multiple placeholder="Select..."></select>                            
    </div>                             
    <div class="col-2">                               
      <input name="manager[${managerListFields.childElementCount}][managerPercent]" type="number" class="form-control manager-percent" value="">                             
    </div>                             
    <div class="col">                               
      <input name="manager[${managerListFields.childElementCount}][comment]" type="text" class="form-control" value="">                             
    </div>                             
    <div class="col-1 align-self-end">                               
      <button type="button" class="btn btn-md btn-danger d-flex align-items-center mx-auto delete-manager">                                 
        <span class="material-icons">delete</span>                               
      </button>                             
    </div>                           
  </div>`;

  managerListFields.insertAdjacentHTML("beforeend", addedField);




  multiSelectEvent();

  // Add delete functionality to the newly added row
  const deleteButtons = document.querySelectorAll('.delete-manager');
  deleteButtons.forEach(button => {
    button.addEventListener('click', deleteManagerRow);
  });

  // Add this new function to handle row deletion
  function deleteManagerRow(event) {
    // Get the parent row element and remove it
    const managerRow = event.target.closest('.manager-row');
    if (managerRow) {
      managerRow.remove();
    }
  }
}
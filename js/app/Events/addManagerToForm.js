import { cardFoot } from "../Elements/elements.js";

export function addManagerToForm() {
  const addedField = `
  <div class="row mb-2 manager-row">                             
    <div class="col">                               
      <select name="manager" id="select-tools" multiple="multiple" placeholder="Select..." tabindex="-1" class="selectized" style="display: none;"></select>
      <div class="selectize-control multi plugin-remove_button">
        <div class="selectize-input items invalid not-full has-options">
          <input type="select-multiple" autocomplete="new-password" autofill="no" tabindex="" id="select-tools-selectized" placeholder="Select..." style="width: 61.8125px;">
        </div>
        <div class="selectize-dropdown multi plugin-remove_button" style="display: none; width: 533.112px; top: 36.4px; left: 0px;">
          <div class="selectize-dropdown-content" tabindex="-1"></div>
        </div>
      </div>                             
    </div>                             
    <div class="col-2">                               
      <input name="mangerPercent" type="number" class="form-control" value="">                             
    </div>                             
    <div class="col">                               
      <input name="comment" type="text" class="form-control" value="">                             
    </div>                             
    <div class="col-1 align-self-end">                               
      <button type="button" class="btn btn-md btn-danger d-flex align-items-center mx-auto delete-manager">                                 
        <span class="material-icons">delete</span>                               
      </button>                             
    </div>                           
  </div>`;

  cardFoot.insertAdjacentHTML('beforebegin', addedField);

  // Добавляем обработчик для новой кнопки удаления
  const lastAddedRow = cardFoot.previousElementSibling;
  const deleteButton = lastAddedRow.querySelector('.delete-manager');

  deleteButton.addEventListener('click', function () {
    this.closest('.manager-row').remove();
  });
}
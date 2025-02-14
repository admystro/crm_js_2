import { managers } from "../../managers/managerData.js";


export async function multiSelectEvent() {

  // Запускамємо бібліотеку Selectize
  $('select.select-tools').selectize({
    closeAfterSelect: true,
    maxItems: null,
    valueField: 'name',
    labelField: 'name',
    searchField: 'name',
    plugins: ['remove_button'], // если нужна кнопка удаления
    theme: 'bootstrap-5', // важно указать тему
    options: managers,
    create: false,
  });
}
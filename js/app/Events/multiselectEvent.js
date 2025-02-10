import { apiUrl, getData } from "../../api/Data.js";

export async function multiSelectEvent() {

  const managers = await getData(apiUrl.users);
  var $select = $('#select-tools').selectize({
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

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  var control = $select[0].selectize;

  $('#button-clear').on('click', function () {
    control.clear();
  });

  $('#button-clearoptions').on('click', function () {
    control.clearOptions();
  });

  $('#button-addoption').on('click', function () {
    control.addOption({
      id: 4,
      title: 'Something New',
      url: 'http://google.com'
    });
  });

  $('#button-additem').on('click', function () {
    control.addItem(2);
  });

  $('#button-maxitems2').on('click', function () {
    control.setMaxItems(2);
  });

  $('#button-maxitems100').on('click', function () {
    control.setMaxItems(100);
  });

  $('#button-setvalue').on('click', function () {
    control.setValue([2, 3]);
  });



}
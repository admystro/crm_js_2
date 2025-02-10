export function dayPicker() {
  flatpickr("#datePicker", {
    enableTime: false,
    dateFormat: "d-m-Y",
    locale: "ru",
    defaultDate: new Date() // Устанавливает текущую дату
  });



}
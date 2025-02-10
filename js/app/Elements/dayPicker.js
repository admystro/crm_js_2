export function dayPicker() {
  flatpickr("#datePicker", {
    enableTime: false,
    dateFormat: "d-m-Y",
    locale: "ru",
    defaultDate: new Date() // Устанавливает текущую дату
  });


  // Функция для получения даты начала недели (понедельник)
  function getMonday(d) {
    d = new Date(d); // копируем текущую дату
    const day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6 : 1); // если воскресенье, то откат на 6 дней
    d.setDate(diff);
    return d;
  }

  // Функция для получения даты конца недели (воскресенье)
  function getSunday(d) {
    d = new Date(d); // копируем текущую дату
    const day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? 0 : 7); // если воскресенье, то не изменяем
    d.setDate(diff);
    return d;
  }

  // Функция для форматирования даты в нужный формат "день-месяц-год"
  function formatDate(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1; // месяцы начинаются с 0
    const year = date.getFullYear();
    return `${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}-${year}`;
  }

  // Получаем текущую дату для отображения диапазона текущей недели
  const today = new Date();
  const monday = getMonday(today);
  const sunday = getSunday(today);

  // Форматируем даты для отображения в инпуте
  const formattedDate = `${formatDate(monday)} - ${formatDate(sunday)}`;

  flatpickr("#datePicker2", {
    dateFormat: "d-m-Y", // Формат даты
    locale: "ru", // Локаль
    defaultDate: [monday, sunday], // Устанавливаем диапазон с понедельника по воскресенье
    enableTime: false, // Без времени
    mode: "range", // Режим выбора диапазона
    onChange: function (selectedDates) {
      if (selectedDates.length === 1) {
        // Если выбрана одна дата, то автоматически выбираем всю неделю

        // Получаем понедельник и воскресенье этой недели
        const monday = getMonday(selectedDates[0]);
        const sunday = getSunday(selectedDates[0]);

        // Обновляем выбранный диапазон
        this.setDate([monday, sunday]);

        // Форматируем и записываем в инпут выбранный диапазон
        const formattedSelectedDate = `${formatDate(monday)} - ${formatDate(sunday)}`;
        document.querySelector("#datePicker2").value = formattedSelectedDate;
      }
    },
    disableMobile: true // Отключаем мобильный интерфейс
  });

  // Устанавливаем выбранный диапазон как значение по умолчанию в инпуте
  document.querySelector("#datePicker2").value = formattedDate;



}
export function formDataObj(form) {
  const dataForm = new FormData(form);
  const incomingDetails = {};

  dataForm.forEach((val, key) => {
    // Розбиваємо ключ, якщо є вкладені рівні (наприклад, manager[0][comment])
    const keys = key.match(/[^[\]]+/g);

    if (keys.length === 1) {
      // Якщо це звичайне поле, зберігаємо його напряму
      incomingDetails[keys[0]] = val;
    } else {
      // Якщо це вкладене поле, будуємо вкладену структуру
      let obj = incomingDetails;

      keys.forEach((k, i) => {
        if (i === keys.length - 1) {
          obj[k] = val;
        } else {
          obj[k] = obj[k] || (isNaN(keys[i + 1]) ? {} : []);
          obj = obj[k];
        }
      });
    }
  });

  return incomingDetails;
}


// Переформатовування даниз API
export function formatApiData(data) {
  const dataNew = [];

  data.forEach((dataItem) => {
    dataNew[dataItem.id] = dataItem;
  });

  return dataNew;
}

export function setProcent(profit, percent) {
  const amount = Math.floor(profit * (percent / 100))

  return amount;
}


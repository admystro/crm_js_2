import { additionalRows, additionalSupervisorRow } from "../incomingDet/incomingsDeteils.js";

export function rowClickEvent(clickedElement) {
  // Находим ближайшую mainRow к элементу, по которому кликнули
  const mainRow = clickedElement.closest('.main-row');
  if (!mainRow) return; // Если не нашли mainRow, прекращаем выполнение

  // Ищем дополнительные строки только после этой конкретной mainRow
  const nextElement = mainRow.nextElementSibling;
  const existingAdditionalRows = [];

  // Собираем все additional-row до следующей main-row
  let currentElement = nextElement;
  while (currentElement && !currentElement.classList.contains('main-row')) {
    if (currentElement.classList.contains('additional-row')) {
      existingAdditionalRows.push(currentElement);
    }
    currentElement = currentElement.nextElementSibling;
  }

  if (existingAdditionalRows.length > 0) {
    // Удаляем все дополнительные строки для этой mainRow
    existingAdditionalRows.forEach(row => row.remove());
  } else {
    // Добавляем новые строки после этой конкретной mainRow

    mainRow.insertAdjacentHTML("afterend", additionalRows);
  }
}


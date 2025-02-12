import { incomingTable } from "../Elements/elements.js";
import { rowClickEvent } from "./rowClickEvent.js";

export function tableEvents() {
  // Обработчик клика по таблице с делегированием события
  incomingTable.addEventListener('click', function (e) {
    const clickedElement = e.target;

    // Проверяем, не кликнули ли мы по кнопке удаления
    if (clickedElement.id === 'delete-button' || clickedElement.id === 'delete-icon') {
      // Здесь можно добавить логику удаления
      return;
    }

    // Если клик был не по кнопке удаления, обрабатываем как обычный клик по строке
    rowClickEvent(clickedElement);
  });
}

import { multiSelectOptions, selectInput, selectInputContainer } from "../components.js";

export function multiSelectChoose(event) {
  event.stopPropagation()
  const clickedOption = `<div class="choosen-cont"><div class="choosen-name">${event.target.closest('.option-item').textContent}</div><div class="remove-choosen"><svg height="14" width="14" viewBox="0 0 20 20"  class="remove-img"><path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path></svg></div></div>`;

  selectInputContainer.insertAdjacentHTML("afterbegin", clickedOption);
  multiSelectOptions.classList.add('d-none');

  // Добавляем обработчик для удаления
  const removeButtons = selectInputContainer.querySelectorAll('.remove-choosen');
  removeButtons.forEach(button => {
    button.onclick = (e) => {
      e.stopPropagation(); // Предотвращаем всплытие события
      button.closest('.choosen-cont').remove(); // Удаляем весь контейнер с выбранным пользователем
    };
  });



}
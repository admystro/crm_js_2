import { addIncomingBtn, sumManagerPersent } from "../../Elements/elements.js";

export function viewBaseManagerPersent() {

  // Відбираємо основний процент
  const basePersent = document.querySelector('#add-incoming-form [name="commonPercent"]').value;

  // Відбираємо всі проценти в менеджерів
  const managerListInputs = document.querySelectorAll('#add-incoming-form .manager-percent');


  // Пройти по менеджерах, щоб повитягувати проценти
  let numMamagerPersent = 0;
  managerListInputs.forEach((managerInput) => {
    numMamagerPersent += Number(managerInput.value);

  });

  // Вивожмо до сторінки процент
  sumManagerPersent.textContent = numMamagerPersent + '%';

  if (numMamagerPersent > basePersent) {
    sumManagerPersent.classList.add('text-danger');
    addIncomingBtn.setAttribute('disabled', true);
    Toastify({
      text: `Распределите правильно проценты! (макс ${basePersent}%) `,
      style: {
        background: "linear-gradient(to right, rgb(255, 95, 109), rgb(255, 195, 113))"
      },
      close: true,

      duration: 3000
    }).showToast();
  } else {
    sumManagerPersent.classList.remove('text-danger');
    addIncomingBtn.removeAttribute('disabled');
  }
}
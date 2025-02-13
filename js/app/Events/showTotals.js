import { sum, sumManager, sumSalary, sumSupervisor } from "../Elements/elements.js";
import { incomingsData } from "../incomingDet/incomingsData.js";
import { totalManagerSum, totalSalarySum, totalSupervisorSum } from "../incomingDet/incomingsDeteils.js";





export function showTotals() {

  // змінна під загальні суми
  let totalSum = 0



  // перебираємо профіти
  incomingsData.forEach((incomings) => {

    const { profit } = incomings;

    totalSum += Number(profit);

  });
  // виводимо загальний профіт в хедер та футер таблиці

  sum.forEach((elem) => elem.innerHTML = `<b>${totalSum}</b>`);

  sumManager.forEach(elem => elem.innerHTML = `<b>${totalManagerSum}</b>`);
  sumSupervisor.forEach(elem => elem.innerHTML = `<b>${totalSupervisorSum}</b>`);
  sumSalary.forEach(elem => elem.innerHTML = `<b>${totalSalarySum}</b>`);


}
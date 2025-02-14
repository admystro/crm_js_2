import { sum, sumManager, sumSalary, sumSupervisor } from "../../Elements/elements.js";
import { getIncomingsDataFromApi, incomingsData, total } from "../incomingsData.js";


export async function showTotals(needUpdateApidata = null) {

  // Дивимося чи потрібно оновити дані з API
  const incomingsDataNew = needUpdateApidata ?? incomingsData;

  // змінна під загальні суми
  let totalSum = 0

  // перебираємо профіти
  incomingsDataNew.forEach((incomings) => {

    const { profit } = incomings;

    totalSum += Number(profit);

  });

  // виводимо загальний профіт в хедер та футер таблиці
  sum.forEach((elem) => elem.innerHTML = `<b>${totalSum}</b>`);

  sumManager.forEach(elem => elem.innerHTML = `<b>${total.managerSum}</b>`);
  sumSupervisor.forEach(elem => elem.innerHTML = `<b>${total.supervisorSum}</b>`);
  sumSalary.forEach(elem => elem.innerHTML = `<b>${total.salarySum}</b>`);


}
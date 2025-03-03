import { sum, sumManager, sumSalary, sumSupervisor, totalCrypto, totalUsd } from "../../Elements/elements.js";
import { totalExpenses } from "../../ExpensesDet/ExpensesData.js";
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
  totalUsd.forEach((elem) => elem.innerHTML = `<b>${totalExpenses.usdSum}</b>`);
  totalCrypto.forEach((elem) => elem.innerHTML = `<b>${totalExpenses.cryptoSum}</b>`);

  sumManager.forEach(elem => elem.innerHTML = `<b>${total.managerSum}</b>`);
  sumSupervisor.forEach(elem => elem.innerHTML = `<b>${total.supervisorSum}</b>`);
  sumSalary.forEach(elem => elem.innerHTML = `<b>${total.salarySum}</b>`);


}
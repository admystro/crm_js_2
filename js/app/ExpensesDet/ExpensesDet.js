import { ExpensesTable } from "../Elements/elements.js";
import { totalExpenses } from "./ExpensesData.js";
export let totalCashSum = 0; // Копілка для загольної суммы кеша
export let totalCryptoSum = 0; // Копілка для загольної суммы крипто
export let totalUsdSum = 0; // Копілка для загольної суммы USD




export function ExpensesDet(ExpensesDeteils) {
  const {id, date, name, value, currency } = ExpensesDeteils; // Робимо змінні з ключів об'єкта

  const rowNumber = ExpensesTable.rows.length + 1; // Номер запрису таблиці
 
  let cash = 0
  let crypto = 0
  let usd = 0
  
  if (currency === 'UAH' || currency === 'USD') {
    cash = value;

  } else if (currency === 'USD') {
    usd = value;
  }else if (currency === 'USDT' || currency === 'BTC') {
    crypto = value;
  }
  
  if (currency === 'UAH') {

    usd = value * 41.30
    
  }else if (currency === 'USD' || currency === 'USDT') {
    usd = value
  }else if (currency === 'BTC') {
    usd = value * 98100
  }
  totalUsdSum += Number(usd)
  console.log(totalCryptoSum);
  
  totalExpenses.usdSum += Number(totalUsdSum)

  totalCryptoSum += Number(crypto)
  totalExpenses.cryptoSum += Number(totalCryptoSum)
  

  // виводимо в таблицю
  ExpensesTable.innerHTML += `
    <tr class="main-row js-main-row" data-main-row="${id}" data-row-number="${rowNumber}" style="cursor: pointer;">
      <td>${rowNumber}</td>
      <td>${date}</td>
      <td>${name}</td>
      <td>${currency}</td>
      <td class="text-end">${cash}</td>
      <td class="text-end">${crypto}</td>
      <td class="text-end">${usd}</td>
      
      <td>
        <button
          class="btn btn-danger btn-sm d-flex align-items-center mx-auto delete-button"
           title="Удалить" delete-button style="padding: 3px 6px;"
          data-type="del"
          data-id="${id}">
          <span class="material-icons" id="delete-icon" style="font-size: 22px; pointer-events: none;">delete</span>
        </button>
      </td>
    </tr>
  `;
}

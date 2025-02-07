import { getData } from "./api/getData.js";
import { multiSelectOptions } from "./app/components.js";

export const addedUsers = await getData(apiUrl.users)


// чистим вывод
// resultTable.innerHTML = ''

// выводим добавленных

// addedUsers.forEach(item => {
//   resultTable.innerHTML += addUser(item)

// });
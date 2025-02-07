import { getData } from "./api/getData";

export const addedUsers = await getData(apiUrl.users)
console.log("addedUsers: ", addedUsers);

// чистим вывод
resultTable.innerHTML = ''

// выводим добавленных

addedUsers.forEach(item => {
  resultTable.innerHTML += addUsers(item)
});
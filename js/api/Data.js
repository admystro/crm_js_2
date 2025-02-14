import { selectInput } from "../app/Elements/elements.js";

export async function getData(url) {

  const res = await fetch(url);
  const data = await res.json();

  return data

}

export async function postData(url, data) {

  fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(data)
  })

}

export async function deleteData(url) {
  await fetch(url, {
    method: 'DELETE'
  })
}

export const apiUrl = {
  users: 'https://67a368c131d0d3a6b7836f70.mockapi.io/users',
  existUser: 'https://67a368c131d0d3a6b7836f70.mockapi.io/users?name=',
  incomings: 'https://67a368c131d0d3a6b7836f70.mockapi.io/incomings',
}


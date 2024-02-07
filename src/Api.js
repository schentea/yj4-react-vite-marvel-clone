const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://gateway.marvel.com:443/v1/public";
import qs from "qs";

// [GET] Comics 리스트
export async function apiGetComics() {
  return await fetch(`${BASE_URL}/comics?apikey=${API_KEY}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
}

// [GET] Event 리스트
export async function apiGetEvents({ pageParam }) {
  const offset = pageParam * 10;
  return await fetch(
    `${BASE_URL}/events?limit=10&offset=${offset}&apikey=${API_KEY}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  ).then((res) => res.json());
}

// [GET] Characters 리스트
export async function apiGetCharacters({ queryKey }) {
  const limit = queryKey[1].limit;
  try {
    return await fetch(
      `${BASE_URL}/characters?limit=${limit}&apikey=${API_KEY}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}

// params : id
//[GET] Characters Detail
export async function apiGetCharactersDetail({ queryKey }) {
  const id = queryKey[1].id;
  try {
    return await fetch(`${BASE_URL}/characters/${id}?apikey=${API_KEY}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}

//params : id
//[Get] Comics Detail
// export async function apiGetComicsDetail({ queryKey }) {
//   const id = queryKey[1].id;
//   try {
//     return await fetch(`${BASE_URL}/comics/${id}?apikey=${API_KEY}`, {
//       method: "GET",
//       headers: { "Content-Type": "application/json" },
//     }).then((res) => res.json());
//   } catch (error) {
//     console.log(error);
//   }
// }

export async function apiPostEmail(data) {
  try {
    return await fetch(
      "https://script.google.com/macros/s/AKfycbxTfW8eHeM_vNjGAPPhjlyskqwHSuKGq_Cs8IZ7Yy2DSbfrCsn5h5akI77nHQ1g1lVb/exec",
      {
        method: "post",
        headers: {
          "Content-Type": `application/x-www-form-urlencoded`,
        },

        body: qs.stringify(data),
      }
    ).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}

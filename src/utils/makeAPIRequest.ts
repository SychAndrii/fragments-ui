import { getUser } from "../auth";

export default async function makeAPIRequest(
  path: string,
  method: string = "get",
  headers: {
    [key: string]: string;
  } = {},
  body: any = undefined
) {
  const user = await getUser();
  const url = `${import.meta.env.VITE_API_URL}${path}`;
  return fetch(url, {
    body,
    method,
    headers: {
      ...headers,
      ...user?.authorizationHeaders(),
    },
  });
}

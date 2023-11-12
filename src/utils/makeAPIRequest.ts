import { getUser } from "../auth";

export default async function makeAPIRequest<T>(
  path: string,
  method: string = "get",
  headers: {
    [key: string]: string;
  } = {},
  body: T | undefined = undefined
) {
  const user = await getUser();
  const url = `${import.meta.env.VITE_API_URL}${path}`;

  // Ensure body is a string if it's not undefined
  const requestBody = body !== undefined ? JSON.stringify(body) : undefined;
  

  return fetch(url, {
    body: requestBody,
    method,
    headers: {
      ...user?.authorizationHeaders(),
      ...headers
    },
  });
}

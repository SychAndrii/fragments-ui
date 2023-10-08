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

  // Ensure body is a string if it's not undefined
  const requestBody = body !== undefined ? body.toString() : undefined;

  return fetch(url, {
    body: requestBody,
    method,
    headers: {
      ...user?.authorizationHeaders(),
      ...headers, // Move headers spread operator to the end to ensure it overrides any previous header values
    },
  });
}

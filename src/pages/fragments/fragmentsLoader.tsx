import { getUser } from "../../auth";

export default async function fragmentsLoader() {
  const user = await getUser();
  const url = `${import.meta.env.VITE_API_URL}/fragments?expand=1`;

  return fetch(url, {
    method: "GET",
    headers: {
      ...user?.authorizationHeaders()
    }
  });
}
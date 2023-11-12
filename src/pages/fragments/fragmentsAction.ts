import { getUser } from "../../auth";

export default async function fragmentsAction({ request }: { request: Request }) {
  const formData = await request.formData();
  const user = await getUser();
  const url = `${import.meta.env.VITE_API_URL}/fragments`;
  const text = formData.get("text") as string;
  const type = formData.get("type") as string;
  console.log(type);

  return fetch(url, {
    method: "POST",
    headers: {
      ...user?.authorizationHeaders(),
      "Content-Type": type,
    },
    body: text,
  });
}

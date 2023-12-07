import { getUser } from "../../auth";

export default async function fragmentsAction({ request }: { request: Request }) {
  const formData = await request.formData();
  const user = await getUser();
  const url = `${import.meta.env.VITE_API_URL}/fragments`;

  const contentItem = formData.get("content");
  let fragmentType: string;
  const body: string | Blob | null = contentItem;

  if (typeof contentItem === 'string') {
    fragmentType = formData.get("type") as string;
  } else if (contentItem instanceof File) {
    fragmentType = contentItem.type;
  } else {
    throw new Error('Unexpected content type');
  }

  console.log(body);
  

  return fetch(url, {
    method: "POST",
    headers: {
      ...user?.authorizationHeaders(),
      "Content-Type": fragmentType,
    },
    body
  });
}
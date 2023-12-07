import { getUser } from "../../auth";

export default async function fragmentAction({ request }: { request: Request }) {
  const formData = await request.formData();
  const id = formData.get("id");
  const contentItem = formData.get("content");
  
  const user = await getUser();
  const url = `${import.meta.env.VITE_API_URL}/fragments/${id}`;

  let fragmentType: string;
  let body: string | Blob;

  if (typeof contentItem === 'string') {
    fragmentType = formData.get("type") as string;
    body = contentItem;
  } else if (contentItem instanceof File) {
    fragmentType = contentItem.type;
    body = contentItem;
  } else {
    throw new Error('Unexpected content type');
  }
  
  return fetch(url, {
    method: "PUT",
    headers: {
      ...user?.authorizationHeaders(),
      "Content-Type": fragmentType,
    },
    body
  });
}
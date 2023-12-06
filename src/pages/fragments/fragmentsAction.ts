import { getUser } from "../../auth";

export default async function fragmentsAction({ request }: { request: Request }) {
  const formData = await request.formData();
  const user = await getUser();
  const url = `${import.meta.env.VITE_API_URL}/fragments`;

  const contentItem = formData.get("content");
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
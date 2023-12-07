import { ActionFunctionArgs } from 'react-router-dom'
import { getUser } from "../../auth";

type Params = {
  id: string;
};

export default async function deleteAction({ params }: ActionFunctionArgs<Params>) {
  const { id } = params;
  console.log('INSIDE OF DELETE ACTION');
  

  const user = await getUser();
  const url = `${import.meta.env.VITE_API_URL}/fragments/${id}`;

  return fetch(url, {
    method: "DELETE",
    headers: {
      ...user?.authorizationHeaders(),
    },
  });
}

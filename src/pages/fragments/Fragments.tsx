import { Link, useLoaderData } from "react-router-dom";
import makeAPIRequest from "../../utils/makeAPIRequest";
import AllFragmentsResponse from "../../interface/api/AllFragmentsResponse";
import { getUser } from "../../auth";

export async function fragmentsLoader() {
  return makeAPIRequest("/fragments?expand=1");
}

export async function fragmentsAction({ request }: { request: Request }) {
  const formData = (await request.formData());
  const user = await getUser();
  const url = `${import.meta.env.VITE_API_URL}/fragments`;
  const text = formData.get("text") as string;
  const type = formData.get("type") as string;
  console.log(type);
  

  return fetch(url, {
    method: "POST",
    headers: {
      ...user?.authorizationHeaders(),
      'Content-Type': type
    },
    body: text
  })

  return makeAPIRequest(
    "/fragments",
    "POST",
    {
      "Content-Type": type,
    },
    text
  );
}

const Fragments = () => {
  const data = useLoaderData() as AllFragmentsResponse;

  return (
    <>
      <h1 className=" text-3xl mb-6">Your fragments:</h1>
      <div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Fragment ID
              </th>
              <th scope="col" className="px-6 py-3">
                Fragment Type
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Details</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.fragments.map((f) => (
              <tr key={f.id}>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {f.id}
                </th>
                <td className="px-6 py-4">{f.type}</td>
                <td className="px-6 py-4 text-right">
                  <Link
                    to={`/fragment/${f.id}`}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    See Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Fragments;

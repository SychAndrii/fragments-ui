import { Link, useLoaderData } from "react-router-dom";
import AllFragmentsResponse from "../../interface/api/AllFragmentsResponse";
import dateFormatter from "../../utils/dateFormatter";

const Fragments = () => {
  const data = useLoaderData() as AllFragmentsResponse;
  console.log(data);

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
                Owner ID
              </th>
              <th scope="col" className="px-6 py-3">
                Fragment Type
              </th>
              <th scope="col" className="px-6 py-3">
                Created At
              </th>
              <th scope="col" className="px-6 py-3">
                Updated At
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
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {f.ownerId}
                </th>
                <td className="px-6 py-4">{f.type}</td>
                <td className="px-6 py-4">{dateFormatter(new Date(f.created))}</td>
                <td className="px-6 py-4">{dateFormatter(new Date(f.updated))}</td>
                <td className="px-6 py-4 text-right">
                  <Link
                    to={`/fragment/${f.id}`}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    See Body
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

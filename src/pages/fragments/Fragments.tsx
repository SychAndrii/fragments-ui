import { useLoaderData } from "react-router-dom";
import makeAPIRequest from "../../utils/makeAPIRequest";

export async function fragmentsLoader() {
  return makeAPIRequest("/fragments?expand=1");
}

export async function fragmentsAction(data: any) {
  return makeAPIRequest(
    "/fragments",
    "POST",
    {
      "Content-Type": "text/plain",
    },
    data.text
  );
}

const Fragments = () => {
  const data: any = useLoaderData();
  console.log(data);

  return (
    <>
      <h1 className=" text-3xl ">Your fragments:</h1>
      <div>
        {data.fragments.map((f) => (
          <h1>{f.id}</h1>
        ))}
      </div>
    </>
  );
};

export default Fragments;

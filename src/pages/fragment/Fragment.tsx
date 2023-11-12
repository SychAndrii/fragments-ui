import { useLoaderData, LoaderFunctionArgs } from "react-router-dom";
import makeAPIRequest from "../../utils/makeAPIRequest";
import FragmentResponse from "../../interface/api/FragmentResponse";
import FragmentBodyDisplayer from "../../utils/fragmentBodyDisplayer";

type Params = {
  params: {
    id: string;
  };
};

export async function fragmentLoader(args: LoaderFunctionArgs<Params>) {
  const { params } = args;
  const res = await makeAPIRequest(`/fragments/${params.id}`);
  const content = await res.text();
  const location = `${import.meta.env.VITE_API_URL}/fragments/${params.id}`;
  const type = res.headers.get("Content-Type");

  return {
    content,
    id: params.id,
    size: +res.headers.get("Content-Length")!,
    type,
    location,
  };
}

const Fragment = () => {
  const data = useLoaderData() as FragmentResponse;
  console.log(data);
  
  return (
    <>
      <h3>
        Content id:{" "}
        <span>
          <b>{data.id}</b>
        </span>
      </h3>
      <h3>
        Content Type:{" "}
        <span>
          <b>{data.type}</b>
        </span>
      </h3>
      <h3>
        Content Size:{" "}
        <span>
          <b>{data.size}</b>
        </span>
      </h3>
      <h3>
        Location:{" "}
        <span>
          <b>{data.location}</b>
        </span>
      </h3>
      <h3>
        Content:{" "}
        <FragmentBodyDisplayer type={data.type} body={data.content} />
      </h3>
    </>
  );
};

export default Fragment;

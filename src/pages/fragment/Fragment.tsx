import { useLoaderData, LoaderFunctionArgs } from "react-router-dom";
import makeAPIRequest from "../../utils/makeAPIRequest";
import FragmentResponse from "../../interface/api/FragmentResponse";

type Params = {
  params: {
    id: string;
  };
};

export async function fragmentLoader(args: LoaderFunctionArgs<Params>) {
  const { params } = args;
  const res = await makeAPIRequest(`/fragments/${params.id}`);
  const content = await res.text();

  return {
    content,
    id: params.id,
    size: +res.headers.get("Content-Length")!,
    type: res.headers.get("Content-Type"),
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
        Content:{" "}
        <span>
          <b>{data.content}</b>
        </span>
      </h3>
    </>
  );
};

export default Fragment;

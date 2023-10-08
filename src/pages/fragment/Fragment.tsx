import { useLoaderData } from "react-router-dom";
import makeAPIRequest from "../../utils/makeAPIRequest";

export async function fragmentLoader({ params }) {
  const res = await makeAPIRequest(`/fragments/${params.id}`);
  const content = await res.text();
  console.log(res.headers.get("Content-Type"));
  console.log(res.headers.get("Content-Length"));

  return {
    content,
    id: params.id,
    size: res.headers.get("Content-Length"),
    type: res.headers.get("Content-Type"),
  };
}

const Fragment = () => {
  const data = useLoaderData();

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

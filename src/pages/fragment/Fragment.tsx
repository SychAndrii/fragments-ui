import { useLoaderData } from "react-router-dom";
import FragmentResponse from "../../interface/api/FragmentResponse";
import ConversionsDisplayer from "../../utils/ConversionsDisplayer";

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
      </h3>
      <ConversionsDisplayer type={data.type} data={data.content} id={data.id} />
    </>
  );
};

export default Fragment;

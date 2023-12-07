import { useLoaderData, useNavigate } from "react-router-dom";
import FragmentResponse from "../../interface/api/FragmentResponse";
import ConversionsDisplayer from "../../utils/ConversionsDisplayer";
import Button from "../../components/ui/Button";

const Fragment = () => {
  const data = useLoaderData() as FragmentResponse;
  const navigate = useNavigate();

  return (
    <>
      <div className=" flex w-full justify-between mb-3">
        <div>
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
        </div>
        <Button value="redirect" type="button" className=' ml-5 self-start' text="Update fragment" clickHandler={() => {
          navigate(`/fragment/${data.id}/update`, { state: { ...data } });
        }} />
      </div>
      <ConversionsDisplayer type={data.type} data={data.content} id={data.id} />
    </>
  );
};

export default Fragment;

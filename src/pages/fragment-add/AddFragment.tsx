import Button from "../../components/ui/Button";
import { Form } from "react-router-dom";

const AddFragment = () => {
  return (
    <>
      <h1 className=" text-3xl mb-5">Create your fragment</h1>
      <Form method="post" action="/fragments">
        <label htmlFor="text">Text: </label>
        <input
          type="text"
          name="text"
          id="text"
          className=" border border-black"
        />
        <br />
        <br />
        <div className="mr-5 inline-block">
          <Button type="submit" value="redirect" text="Create" />
        </div>
      </Form>
    </>
  );
};

export default AddFragment;

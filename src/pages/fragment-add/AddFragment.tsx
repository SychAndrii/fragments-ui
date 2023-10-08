import { Form } from "react-router-dom";
import Button from "../../components/ui/Button";

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
        <Button type="submit" text="Create and go to fragments page" />
        <Button type="submit" text="Create and stay on this page" />
      </Form>
    </>
  );
};

export default AddFragment;

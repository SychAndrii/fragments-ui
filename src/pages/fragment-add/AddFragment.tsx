import TextForm from "./TextForm";
import ImageForm from "./ImageForm";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const AddFragment = () => {
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>Text fragment</Tab>
          <Tab>Image fragment</Tab>
        </TabList>
        <h1 className=" text-3xl mb-5">Create your fragment</h1>
        <TabPanel>
          <TextForm />
        </TabPanel>
        <TabPanel>
          <ImageForm />
        </TabPanel>
      </Tabs>
    </>
  );
};

export default AddFragment;

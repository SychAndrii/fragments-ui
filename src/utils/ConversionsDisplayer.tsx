import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import FragmentBodyDisplayer from "./FragmentBodyDisplayer";
import contentType from 'content-type';
import { Form } from "react-router-dom";
import { useState } from "react";
import makeAPIRequest from "./makeAPIRequest";

const validConversions = {
    'text/markdown': ['html'],
};
const ConversionsDisplayer = ({ type, data, id }: { type: string, data: string, id: string }) => {
    const shortType = contentType.parse(type).type;
    let accessibleConversions: string[] = [];
    const [contents, setContents] = useState<{
        [key: string]: string
    }>({

    });

    if (shortType in validConversions) {
        accessibleConversions = validConversions[shortType as keyof typeof validConversions];
    }

    return (
        <Form>
            <Tabs onSelect={(index: number) => {
                if (index > 0 && !(accessibleConversions[index - 1] in contents)) {
                    updateContents();
                }

                async function updateContents() {
                    const conversion = accessibleConversions[index - 1];
                    const res = await makeAPIRequest(`/fragments/${id}.${conversion}`);
                    const content = await res.text();

                    setContents({
                        ...contents,
                        [conversion]: content
                    })
                }
            }}>
                <TabList>
                    <Tab>As original</Tab>
                    {
                        accessibleConversions.map((conversion, index) => {
                            return <Tab key={index}>As {conversion}</Tab>
                        })
                    }
                </TabList>

                <TabPanel>
                    <div className=" max-w-6xl">
                        <FragmentBodyDisplayer body={data} />
                    </div>
                </TabPanel>
                {
                    accessibleConversions.map((conversion, index) => {
                        return (
                            <TabPanel key={index}>
                                <div className=" max-w-6xl">
                                    <FragmentBodyDisplayer body={contents[conversion]} />
                                </div>
                            </TabPanel>
                        )
                    })
                }
            </Tabs>
        </Form>
    )
}

export default ConversionsDisplayer
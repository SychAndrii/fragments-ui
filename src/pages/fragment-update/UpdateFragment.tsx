import { Form, useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";

const UpdateFragment = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const { content, ...fragment } = location.state;
    const isImage = fragment.type.startsWith('image');

    const getInputsForFragment = () => {
        return isImage ? (
            <>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload file (jpg, png, gif, webp supported)</label>
                <input className="text-sm w-[220px] p-3 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" name='content' type="file" />
            </>
        ) : (
            <>
                <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your text</label>
                <textarea defaultValue={content} id="text" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="content" placeholder="Write your thoughts here..." />
            </>
        );
    };

    return (
        <Form method="put" encType="multipart/form-data" action={`/fragment/${fragment.id}`}>
            <input type='hidden' name='id' value={fragment.id} />
            <input type='hidden' name='type' value={fragment.type} />
            {getInputsForFragment()}
            <br />
            <br />
            <div className="mr-5 inline-block">
                <Button type="submit" value="redirect" text="Update" />
                <Button value="redirect" type="button" className=' ml-5' text="Cancel" clickHandler={() => {
                    navigate(`/fragment/${fragment.id}`);
                }} />
            </div>
        </Form>
    )
}

export default UpdateFragment
import Button from '../../components/ui/Button'
import { Form, useNavigate } from 'react-router-dom'
import Fragment from '../../interface/data/Fragment'

const TextForm = ({ fragment, data }: {
    fragment: Fragment,
    data: string
}) => {
    const navigate = useNavigate();
    return (
        <>
            <Form method="put" action={`/fragment/${fragment.id}`}>
                <input type='hidden' name='form-type' value='text' />
                <input type='hidden' name='id' value={fragment.id} />
                <input type='hidden' name='type' value={fragment.type} />
                <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your text</label>
                <textarea defaultValue={data} id="text" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="content" placeholder="Write your thoughts here..." />
                <br />
                <br />
                <div className="mr-5 inline-block">
                    <Button type="submit" value="redirect" text="Update" />
                    <Button value="redirect" type="button" className=' ml-5' text="Cancel" clickHandler={() => {
                        navigate(`/fragment/${fragment.id}`);
                    }} />
                </div>
            </Form>
        </>
    )
}

export default TextForm
import Button from '../../components/ui/Button'
import { Form } from 'react-router-dom'

const TextForm = () => {
    return (
        <>
            <Form method="post" action="/fragments">
                <input type='hidden' name='form-type' value='text' />
                <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your text</label>
                <textarea id="text" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="content" placeholder="Write your thoughts here..."></textarea>
                <br />
                <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                <select id="type" name="type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="text/plain">Plain text</option>
                    <option value="text/markdown">MD text</option>
                    <option value="text/html">HTML text</option>
                    <option value="application/json">JSON text</option>
                </select>
                <br />
                <br />
                <div className="mr-5 inline-block">
                    <Button type="submit" value="redirect" text="Create" />
                </div>
            </Form>
        </>
    )
}

export default TextForm
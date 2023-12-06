import Button from '../../components/ui/Button'
import { Form } from 'react-router-dom'

const ImageForm = () => {
  return (
    <>
      <Form method="post" action="/fragments" encType="multipart/form-data">
        <input type='hidden' name='form-type' value='image' />
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload file</label>
        <input className="text-sm w-[220px] p-3 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" name='content' type="file" />
        <br />
        <br />
        <div className="mr-5 inline-block">
          <Button type="submit" value="redirect" text="Create" />
        </div>
      </Form>
    </>
  )
}

export default ImageForm
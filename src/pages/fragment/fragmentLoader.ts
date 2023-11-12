import { LoaderFunctionArgs, Params } from "react-router-dom";
import makeAPIRequest from "../../utils/makeAPIRequest";

export default async function fragmentLoader(args: LoaderFunctionArgs<Params>) {
    const { params } = args;
    const res = await makeAPIRequest(`/fragments/${params.id}`);
    const content = await res.text();
    const location = `${import.meta.env.VITE_API_URL}/fragments/${params.id}`;
    const type = res.headers.get("Content-Type");
  
    return {
      content,
      id: params.id,
      size: +res.headers.get("Content-Length")!,
      type,
      location,
    };
  }
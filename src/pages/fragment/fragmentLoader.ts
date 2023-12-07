import { LoaderFunctionArgs, Params } from "react-router-dom";
import { getUser } from "../../auth";

export default async function fragmentLoader(args: LoaderFunctionArgs<Params>) {
    const { params } = args;
    const user = await getUser();
    
    const res = await fetch(`${import.meta.env.VITE_API_URL}/fragments/${params.id}`, {
      headers: {
        ...user?.authorizationHeaders()
      }
    });
    const type = res.headers.get("Content-Type");
    console.log(type);
    
    
    const content = !type?.startsWith('text') ? await res.blob() : await res.text();
    console.log(content);
    

    const location = `${import.meta.env.VITE_API_URL}/fragments/${params.id}`;
  
    return {
      content,
      id: params.id,
      size: +res.headers.get("Content-Length")!,
      type,
      location,
    };
  }
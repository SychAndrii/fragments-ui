import "./Index.css";
import "@aws-amplify/ui-react/styles.css";
import { useLoaderData } from "react-router-dom";

export function indexLoader() {
  const url = `${import.meta.env.VITE_URL}/`;
  return fetch(url);
}

function Index() {
  const data: any = useLoaderData();

  return (
    <div>
      <div className=" text-regular text-md">
        {data.status == "ok" ? (
          "Fragments microservice is ready for work."
        ) : (
          <span>
            Fragments microservice is <b>NOT</b> ready to work!
          </span>
        )}
      </div>
    </div>
  );
}

export default Index;

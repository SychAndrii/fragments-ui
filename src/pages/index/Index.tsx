import "./Index.css";
import "@aws-amplify/ui-react/styles.css";
import { useUser } from "../../hooks";
import { useLoaderData } from "react-router-dom";

export function indexLoader() {
  const url = `${import.meta.env.VITE_URL}/`;
  return fetch(url);
}

function Index() {
  const user = useUser();
  const data: any = useLoaderData();
  console.log(data);

  return (
    <div>
      <div className=" text-regular text-md">
        {data.status == "ok" ? (
          "Fragments microservice is ready for work."
        ) : (
          <span>
            Fragments mciroservice is <b>NOT</b> ready to work!
          </span>
        )}
      </div>
    </div>
  );
}

export default Index;

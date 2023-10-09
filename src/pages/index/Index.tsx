import "./Index.css";
import "@aws-amplify/ui-react/styles.css";
import { useLoaderData } from "react-router-dom";
import HealthCheckResponse from "../../interface/api/HealthCheckResponse";

export function indexLoader() {
  const url = `${import.meta.env.VITE_URL}/`;
  return fetch(url);
}

function Index() {
  const data = useLoaderData() as HealthCheckResponse;

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

import { useRouteError } from "react-router-dom";
const Error = () => {
    const error  = useRouteError();
    console.log("useRouteError",error)
  return (
    <div>
      <div>Oops!!!</div>
      <h2> {error.error.message}</h2>
    </div>
  );
};
export default Error;

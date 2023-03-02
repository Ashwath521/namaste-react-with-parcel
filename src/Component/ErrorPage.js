import ErrorLogo from "../assets/img/something.jpg";
import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const err = useRouteError();

  console.log(err);
  return (
    <>
      <h1>Oops!! Something Went wrong</h1>
      <h2>{err?.status + " " + err?.statusText}</h2>
      <img src={ErrorLogo} />
    </>
  );
};

export default ErrorPage;

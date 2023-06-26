import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <>
        <h1>Oops!! Something went wrong</h1>
        <h2>{error.status} : {error.statusText}</h2>
        </>
    )
}

export default ErrorPage;
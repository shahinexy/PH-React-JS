import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h1>Oops!!</h1>
            <p>
                { error.statusText || error.message }
            </p>
            {
                error.status === 404 && <div>
                    <h2>Page Not Found</h2>
                    <Link to="/"><button>Go back Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;
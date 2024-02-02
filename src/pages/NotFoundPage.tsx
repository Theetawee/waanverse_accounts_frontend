import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <section className="h-screen bg-page-pattern bg-no-repeat bg-center bg-cover flex px-4 items-center justify-center">
            <div className="max-w-lg mx-auto">
                <h1 className="text-3xl font-bold mb-4">
                    Oops! Page Not Found
                </h1>
                <p className="text-gray-700 mb-8">
                    It seems like the page you are looking for has taken a
                    vacation. Don't worry; you can always go back to our{" "}
                    <Link className="text-primary-600 underline" to="/">
                        homepage
                    </Link>{" "}
                    and start a new adventure!
                </p>
                <Link
                    className="bg-primary-600 text-white px-4 py-2 rounded"
                    to="/"
                >
                    Take Me Home
                </Link>
            </div>
        </section>
    );
};

export default NotFoundPage;

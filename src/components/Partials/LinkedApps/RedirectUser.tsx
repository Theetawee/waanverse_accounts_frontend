
const RedirectUser = () => {
            const app_name = sessionStorage.getItem("app_name");

    const handleRedirect = () => {
        const redirect = sessionStorage.getItem("redirect_uri");
        if (!redirect) return;
        sessionStorage.removeItem("redirect_uri");
        sessionStorage.removeItem("app_name");
        const url = `${redirect}/authenticate-user`;
        window.location.href = url;
    };

    return (
        <section className="fixed px-4 inset-0 z-50 overflow-auto bg-gray-50 flex items-center justify-center">
            <div className="bg-white max-w-md w-full rounded-lg shadow p-8">
                <p className="text-2xl font-semibold mb-4">
                    Continue to {app_name}
                </p>
                <p>
                    You have been authenticated with your Waanverse account successfully.
                    Press confirm to continue to {app_name}.Thanks for using Waanverse Accounts.
                </p>
                <div className="mt-3 text-right">
                <button
                    onClick={handleRedirect}
                    className="px-5 py-1.5 bg-primary-500 text-white rounded hover:bg-primary-600 transition duration-300"
                >
                    Confirm
                    </button>
                    </div>
            </div>
        </section>
    );
};

export default RedirectUser;

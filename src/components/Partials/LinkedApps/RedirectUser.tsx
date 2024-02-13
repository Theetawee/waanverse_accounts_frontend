
const RedirectUser = () => {

    const handleRedirect = () => {
        const redirect = sessionStorage.getItem("redirect_uri");
        if (!redirect) return;
        sessionStorage.removeItem("redirect_uri");
        const url = `${redirect}/authenticate-user`;
        window.location.href = url;
    };

    return (
        <section className="fixed inset-0 z-50 overflow-auto bg-gray-900 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-8">
                <p className="text-xl font-semibold mb-4">Redirect user</p>
                <button
                    onClick={handleRedirect}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
                >
                    Confirm
                </button>
            </div>
        </section>
    );
};

export default RedirectUser;

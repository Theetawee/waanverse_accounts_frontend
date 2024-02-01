import { Helmet } from "react-helmet-async";

const Seo = () => {
    return (
        <>
            <Helmet>
                <title>WaanVerse Accounts</title>
                <meta
                    name="description"
                    content="Manage and control your authentication flow with WaanVerse Accounts. Streamlined user authentication, secure access, and personalized user profiles."
                />
                <meta
                    name="keywords"
                    content="WaanVerse, Accounts, Authentication, Security, User Profiles"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <link rel="canonical" href="https://www.yourwebsite.com/" />

                {/* Open Graph Tags */}
                <meta property="og:title" content="WaanVerse Accounts" />
                <meta
                    property="og:description"
                    content="Manage and control your authentication flow with WaanVerse Accounts. Streamlined user authentication, secure access, and personalized user profiles."
                />
                <meta
                    property="og:image"
                    content="URL to an image for sharing"
                />
                <meta
                    property="og:url"
                    content="https://www.yourwebsite.com/"
                />
                <meta property="og:type" content="website" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="WaanVerse Accounts" />
                <meta
                    name="twitter:description"
                    content="Manage and control your authentication flow with WaanVerse Accounts. Streamlined user authentication, secure access, and personalized user profiles."
                />
                <meta
                    name="twitter:image"
                    content="URL to an image for sharing"
                />
                <meta
                    name="twitter:url"
                    content="https://www.yourwebsite.com/"
                />

                {/* Robots Meta Tag */}
                <meta name="robots" content="index, follow" />

                {/* Favicon */}
                <link
                    rel="icon"
                    href="path/to/favicon.ico"
                    type="image/x-icon"
                />
            </Helmet>
        </>
    );
};

export default Seo;

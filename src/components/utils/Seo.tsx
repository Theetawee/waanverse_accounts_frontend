import { Helmet } from "react-helmet-async";

const Seo = ({title, description}: {title: string, description: string}) => {
    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta
                    name="description"
                    content={description}
                />
                <meta
                    name="keywords"
                    content="WaanVerse, Accounts, Authentication, Security, User Profiles"
                />
                <link rel="canonical" href="https://www.waanverse.com/" />

                {/* Open Graph Tags */}
                <meta property="og:title" content={title} />
                <meta
                    property="og:description"
                    content={description}
                />
<meta name="twitter:title" content={title} />
                <meta
                    name="twitter:description"
                    content={description}
                />

            </Helmet>
        </>
    );
};

export default Seo;

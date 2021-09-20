import Head from "next/head";
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

export default function ApolloApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

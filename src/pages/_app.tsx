import type { AppProps } from 'next/app';
import "@/style/globals.css";
import Layout from '@/components/Layout';


const MyApp = ({ Component, pageProps } : AppProps) => {
  return (

    <Layout>
      <Component {...pageProps} />
    </Layout>
  
);
};

export default MyApp;

import Head from 'next/head'
import "../styles/Home.module.css";
import App from '../src/components/App/App';

function Home() {
  return (
    <>
      <Head>
        <title>
          MY WEB-PAGE
        </title>
      </Head>
      <App />

    </>
      
  )

}

export default Home
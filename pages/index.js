import Head from 'next/head'
import HomePage from '../components/homepage/HomePage';


export default function Home(props) {
  return (
    <div >
      <Head>
        <title>Ergo PI</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;700&display=swap" rel="stylesheet"/>
      </Head>     
        <HomePage/>
     
    </div>
  )
}

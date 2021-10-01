import About from "../../components/aboutPage/about.js";
import {Fragment} from 'react'
import Head from 'next/head';


function AboutPage(props) {

    
    return (
        <Fragment>
          <Head>
            <title>Documentation for ErgoPI</title>
            <meta
              name='description'
              content='Documentation for ErgoPI'
            />
          </Head>
          <About />
        </Fragment>
      );
    }
    
export default AboutPage;

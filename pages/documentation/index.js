import { Fragment } from 'react';
import Head from 'next/head';
import Documentation from '../../components/documentation/Documentation';
import { useRouter } from 'next/router';
// import prism from 'react-syntax-highlighter/dist/cjs/prism';



function DocumentationPage(props) {

    
    return (
        <Fragment>
          <Head>
            <title>Documentation for ErgoPI</title>
            <meta
              name='description'
              content='Documentation for ErgoPI'
            />
          </Head>
          <Documentation />
        </Fragment>
      );
    }
    
export default DocumentationPage;

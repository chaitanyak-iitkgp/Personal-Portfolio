import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect, useState } from 'react';


function MyApp({ Component, pageProps }: AppProps) {




  return (
    <>
      <Head>
        <title>
          Chaitanya Khiratkar
        </title>

        {/*Other Addtional Data  */}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        {/* Adding up the Meta Tags For Better SEO Optimizations */}
        <meta property="og:title" content="Chaitanya Khiratkar" />
        <meta property="og:url" content="https://chaitanya-khiratkar.web.app" />
        <meta property="og:description" content="I am Chaitanya Khiratkar, a third-year undergraduate student at the Indian Institute of Technology, Kharagpur, one of the top universities in India. I am currently pursuing a major in Chemical Engineering ( B.Tech). During my course of study, I have developed a keen interest in Software Development." />
        <meta property="og:type" content="profile" />
        <meta property="og:image" content="https://chaitanya-khiratkar.web.app/static/media/profile.e890939f.jpeg" />


        

      </Head>
      <div className={'GlobalDiv '}>

          {/* Page Data */}
          <div className='Content'>
            <Component {...pageProps} />

          </div>

      </div>


    </>
  )
}

export default MyApp

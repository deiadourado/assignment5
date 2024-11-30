/*Student Name: Andreia Araujo Dourado
Student number: 200560835
E-mail: 200560835@student.georgianc.on.ca*/

import Head from 'next/head';
import Image from 'next/image';
import '../styles/about.css'; 

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Me - Andreia's Portfolio</title>
        <meta
          name="description"
          content="Learn more about Andreia, a Computer Programming student excited to start her journey in tech."
        />
        <link rel="icon" href="favicon.ico" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fleur+De+Leah&family=Sour+Gummy:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="about-container">
        <h1 className="about-title">Hi, I'm Andreia!</h1>
        <div className="about-content">
          <Image
            src="/woman.png"
            alt="profile image"
            width={150}
            height={150}
            className="about-image"
          />
          <p className="about-description">
            I am a Computer Programming student at Georgian College, just starting my
            journey in the tech world. I don’t have professional experience yet, but I am
            very excited to learn and grow in this field! I come from Uberaba, MG, a charming
            city in Brazil.
          </p>
        </div>
      </div>
    </>
  );
}

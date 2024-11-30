import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>My Portfolio</title>
        <link rel="icon" href="/candy.png" />
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}

import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Righteous&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="font-righteous bg-dark text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;

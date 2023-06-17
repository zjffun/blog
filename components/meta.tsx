import Head from "next/head";
import { CMS_NAME } from "../lib/constants";

const Meta = () => {
  return (
    <Head>
      <link rel="icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content={`A statically generated blog example using Next.js and ${CMS_NAME}.`}
      />
    </Head>
  );
};

export default Meta;

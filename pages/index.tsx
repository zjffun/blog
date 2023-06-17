import Head from "next/head";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import DateFormatter from "../components/date-formatter";
import Header from "../components/header";
import Layout from "../components/layout";
import Doc from "../interfaces/doc";
import { getDocs } from "../lib/api";
import { CMS_NAME } from "../lib/constants";

import indexStyle from "./index.module.scss";

type Props = {
  docs: Doc[];
};

export default function Index({ docs }: Props) {
  let docsFiltered = docs;

  const searchParams = useSearchParams();

  const tag = searchParams.get("tag");

  if (tag) {
    docsFiltered = docs.filter((doc) => {
      return doc.tags?.includes?.(tag);
    });
  }

  return (
    <>
      <Layout>
        <Head>
          <title>{CMS_NAME}</title>
        </Head>
        <div className={indexStyle.index}>
          <Header />
          <main className={indexStyle.main}>
            <ul className={indexStyle.list}>
              {docsFiltered.map((doc) => {
                const href = `/${doc.slug}`;

                return (
                  <li className={indexStyle.item} key={href}>
                    <Link className={indexStyle.link} href={href}>
                      <h2 className={indexStyle.title}>{doc.title}</h2>
                    </Link>
                    <p className={indexStyle.info}>
                      <span className={indexStyle.date}>
                        <DateFormatter unixTime={doc.date}></DateFormatter>
                      </span>
                      {doc.tags?.map?.((d) => {
                        return (
                          <span className={indexStyle.tag} key={d}>
                            {d}
                          </span>
                        );
                      })}
                    </p>
                    <p className={indexStyle.excerpt}>{doc.excerpt}</p>
                  </li>
                );
              })}
            </ul>
          </main>
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const docs = getDocs(["slug", "title", "date", "tags", "excerpt"]);

  return {
    props: {
      docs,
    },
  };
};

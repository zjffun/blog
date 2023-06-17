import classnames from "classnames";
import ErrorPage from "next/error";
import Head from "next/head";
import { useRouter } from "next/router";
import type Doc from "../interfaces/doc";
import { CMS_NAME } from "../lib/constants";
import BlogBody from "./blog-body";
import BlogHeader from "./blog-header";
import Container from "./container";
import DateFormatter from "./date-formatter";
import Layout from "./layout";

import "github-markdown-css/github-markdown-light.css";
import blogStyle from "./blog.module.scss";

export type blogProps = {
  doc: Doc;
};

export default function Blog({ doc }: blogProps) {
  const router = useRouter();
  if (!router.isFallback && !doc?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      <BlogHeader />
      <Container>
        {router.isFallback ? (
          <p>Loading…</p>
        ) : (
          <>
            <article
              className={classnames(
                "mb-32",
                "markdown-body",
                blogStyle["markdown-body"]
              )}
            >
              <Head>
                <title>{`${doc.title} - ${CMS_NAME}`}</title>
              </Head>
              <h1>{doc.title}</h1>
              <p>
                {doc.updated && (
                  <span className={blogStyle.date}>
                    更新于{" "}
                    <DateFormatter unixTime={doc.updated}></DateFormatter>
                  </span>
                )}
                {doc.date && (
                  <span className={blogStyle.date}>
                    写于 <DateFormatter unixTime={doc.date}></DateFormatter>
                  </span>
                )}
                {doc.tags?.map?.((d) => {
                  return (
                    <span className={blogStyle.tag} key={d}>
                      {d}
                    </span>
                  );
                })}
              </p>
              <p></p>
              <div className={classnames(blogStyle["post-body"])}>
                <BlogBody content={doc.content} />
              </div>
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

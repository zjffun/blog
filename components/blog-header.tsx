import Link from "next/link";
import AlgoliaSearch from "./algolia-search";

const BlogHeader = () => {
  return (
    <header className="mx-auto px-5 bg-black h-12 flex items-center">
      <h1 className="text-white text-xl font-bold">
        <Link href={"/"} className="hover:underline">
          zjffun blog
        </Link>
      </h1>

      <div className="flex-1"></div>

      <AlgoliaSearch></AlgoliaSearch>
    </header>
  );
};

export default BlogHeader;

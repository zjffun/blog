import Link from "next/link";

const BlogHeader = () => {
  return (
    <header className="container mx-auto px-5 bg-black h-12 flex items-center">
      <h1 className="text-white text-xl font-bold">
        <Link href={"/"} className="hover:underline">
          zjffun blog
        </Link>
      </h1>
    </header>
  );
};

export default BlogHeader;

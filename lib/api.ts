import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import Doc from "../interfaces/doc";
import markdownToHtml from "./markdownToHtml";
import { getTime } from "./utils";

interface getDocProps {
  dir: string;
  slug: string;
}

const postsDirectory = join(process.cwd(), "blogs");

export async function getDoc({ slug }: getDocProps) {
  const doc = getDocBySlug(slug, [
    "title",
    "date",
    "updated",
    "tags",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);

  const content = await markdownToHtml(doc.content || "");

  return {
    ...doc,
    content,
  };
}

export function getPaths() {
  const docs = getDocs(["slug"]);

  const paths = docs.map((doc) => {
    return {
      params: {
        slug: doc.slug,
      },
    };
  });

  return paths;
}

export function getDocSlugs() {
  const files = fs.readdirSync(join(postsDirectory));
  const result = files.filter((file) => file.endsWith(".md"));
  return result;
}

export function getDocBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items: Partial<Doc> = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }

    if (field === "title") {
      items[field] = data.title || realSlug;
    }

    if (field === "content") {
      items[field] = content;
    }

    if (field === "excerpt") {
      items[field] = data.excerpt || content.substring(0, 150);
    }

    if (field === "date") {
      items[field] = getTime(data.date);
    }

    if (field === "updated") {
      items[field] = getTime(data.updated) || getTime(data.date);
    }

    if (field === "tags") {
      items[field] = data.tags || [];
    }
  });

  return items;
}

export function getDocs(fields: string[] = []) {
  const slugs = getDocSlugs();

  const docs = slugs.map((slug) => getDocBySlug(slug, fields));

  docs.sort((doc1, doc2) => {
    if (doc1?.date !== undefined && doc2?.date !== undefined) {
      return doc1.date > doc2.date ? -1 : 1;
    }

    return 0;
  });

  return docs;
}

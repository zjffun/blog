import { glob } from "glob";
import fs from "fs";
import path from "path";

const mdImgReg = /!{1}\[([^\[\]]*)\]\((\S*)\s?(?:".*")?\)/g;

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const mdPath = path.join(__dirname, "../", "blogs", "**", "*.md");

const mdFiles = await glob(mdPath);

for (const mdFile of mdFiles) {
  const content = await fs.promises.readFile(mdFile, "utf8");
  const matches = content.matchAll(mdImgReg);
  for (const match of matches) {
    let [, , imgPath] = match;

    if (imgPath.startsWith("http")) {
      continue;
    }

    if (imgPath.startsWith("/")) {
      imgPath = path.join(__dirname, "../", "public", imgPath);
    }

    const imgExists = await fs.promises
      .access(imgPath)
      .then(() => true)
      .catch(() => false);

    if (!imgExists) {
      console.log(`File "${mdFile}" has broken image link ${imgPath}`);
    }
  }
}

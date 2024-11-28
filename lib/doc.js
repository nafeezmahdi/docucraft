import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "docs");

export function getDocuments() {
  // console.log(postsDirectory);
  // all file name of docs dir
  const fileNames = fs.readdirSync(postsDirectory);
  // console.log(fileNames);

  const allDocuments = fileNames.map((fileName) => {
    // file name without .md e-introduction
    const id = fileName.replace(".md", "");
    // path = postsDirectory/filename  e- docucraft\docs\introduction
    const fullPath = path.join(postsDirectory, fileName);
    //will return full content of this file
    const fileContents = fs.readFileSync(fullPath, "utf8");
    //
    const matterResult = matter(fileContents);
    // console.log(matterResult);

    return {
      id,
      ...matterResult.data,
    };
  });

  const sortedAllDocuments = allDocuments.sort((a, b) => {
    if (a.order < b.order) {
      return -1;
    }
    if (a.order > b.order) {
      return 1;
    }

    return 0;
  });

  // console.log(sortedAllDocuments);
  return sortedAllDocuments;
}

export async function getDocumentContent(id) {
  // postsDirectory/id.md  ex- docucraft\docs\analysis.md
  const fullPath = path.join(postsDirectory, `${id}.md`);
  // console.log(fullPath);
  //will return full content of this file
  const fileContents = fs.readFileSync(fullPath, "utf8");
  // console.log(fileContents);
  //
  const matterResult = matter(fileContents);
  // console.log(matterResult);
  //content in html
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  // console.log(processedContent);
  // html content in string
  const contentHtml = processedContent.toString();
  // console.log(contentHtml);

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

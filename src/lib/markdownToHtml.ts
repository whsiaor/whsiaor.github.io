import { remark } from "remark";
import html from "remark-html";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import rehypeRaw from "rehype-raw";
import rehypePrism from "@mapbox/rehype-prism";

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
  .use(remarkParse)
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypeRaw)
  .use(rehypeFormat)
  // @ts-ignore
  .use(rehypePrism)
  .use(rehypeStringify)
  .process(markdown);
  
  return result.toString();
}

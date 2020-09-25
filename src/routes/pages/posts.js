// Source: https://stackoverflow.com/questions/58417881/sapper-svelte-how-do-i-add-markdown-files
// Additional attributes added
import fs from "fs";
import frontMatter from "front-matter";
import marked from "marked";

const blogPosts = fs.readdirSync("./src/content/posts").map((postFileName) => {
  const postContent = fs.readFileSync(`./src/content/posts/${postFileName}`, {
    encoding: "utf-8",
  });
  const postFrontMatter = frontMatter(postContent);
  return {
    title: postFrontMatter.attributes.title,
    date: postFrontMatter.attributes.date,
    slug: postFrontMatter.attributes.slug,
    html: marked(postFrontMatter.body),
  };
});

blogPosts.forEach((post) => {
  post.html = post.html.replace(/^\t{4}/gm, "");
});

export default blogPosts;

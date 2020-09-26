// Source: https://stackoverflow.com/questions/58417881/sapper-svelte-how-do-i-add-markdown-files
// Additional attributes added
// import fs from "fs";
// import frontMatter from "front-matter";
// import marked from "marked";

// export const blogPosts = fs
//   .readdirSync("./src/content/posts")
//   .map((postFileName) => {
//     const postContent = fs.readFileSync(`./src/content/posts/${postFileName}`, {
//       encoding: "utf-8",
//     });
//     const postFrontMatter = frontMatter(postContent);
//     return {
//       title: postFrontMatter.attributes.title,
//       date: postFrontMatter.attributes.date,
//       tags: postFrontMatter.attributes.tags,
//       tags: postFrontMatter.attributes.tags,
//       summary: postFrontMatter.attributes.summary,
//       layout: postFrontMatter.attributes.layout,
//       html: marked(postFrontMatter.body),
//     };
//   });

// blogPosts.forEach((post) => {
//   post.html = post.html.replace(/^\t{5}/gm, "");
// });

import RSS from 'rss';
import fs from 'fs';
import matter from 'gray-matter';
// import { getSortedPost } from './mdx';

async function getSortedPost() {
    // const staticPaths = fs
    // .readdirSync("_posts")
    // .map((staticPagePath) => {
    //   return `${staticPagePath.replace('.md', '')}`;
    // });

    // return staticPaths

    const files = fs.readdirSync('_posts');

  const allPostsData = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`_posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });


  return allPostsData;


}

export default async function generateRssFeed() {
 const site_url = 'https://blog.ballerina.io/';

 const allPosts = await getSortedPost();

 const feedOptions = {
    title: 'Blog posts | RSS Feed',
    description: 'Welcome to this blog posts!',
    site_url: site_url,
    feed_url: `${site_url}rss.xml`,
    image_url: `${site_url}logo.png`,
    pubDate: new Date(),
    copyright: `2018-2023 WSO2 LLC`,
   };

 const feed = new RSS(feedOptions);

 allPosts.map((post) => {
  feed.item({
   title: `${post.frontmatter.title.toString()}`,
   description: post.frontmatter.abstract,
   url: `${site_url}posts/${post.slug}`,
   date: post.date,
  });
 });

 fs.writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
}

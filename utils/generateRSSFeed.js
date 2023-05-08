/**
 * Copyright (c) 2023, WSO2 LLC (http://www.wso2.com) All Rights Reserved.
 *
 * WSO2 LLC licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import RSS from 'rss';
import fs from 'fs';
import matter from 'gray-matter';

async function getSortedPost() {

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
        feed_url: `${site_url}feed.xml`,
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

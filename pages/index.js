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

import React from "react";
import fs from 'fs';
import matter from 'gray-matter';
import { Row, Col, Container } from "react-bootstrap";
import Head from "next/head";

import Layout from "../layouts/LayoutHome";

export async function getStaticProps() {
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

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {

  const [blogs, setBlogs] = React.useState(allPostsData);
  React.useEffect(() => setBlogs(allPostsData.reverse()), []);

  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Ballerina is a comprehensive language that is easy to grasp for anyone with prior programming experience. Start learning with the material below."
        />
        <meta name="author" content="WSO2 LLC" />
        <meta
          name="keywords"
          content="ballerina, learn, documentation, docs, programming language"
        />
        <link rel="shortcut icon" href="/img/favicon.ico" />
        <title>Ballerina Blog</title>

        {/* FB */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Ballerina Blog" />
        <meta
          property="og:description"
          content="Ballerina is a comprehensive language that is easy to grasp for anyone with prior programming experience. Start learning with the material below."
        />
        <meta
          property="og:image"
          itemProp="image"
          content="https://ballerina.io/images/ballerina-generic-social-media-image-2023.png"
        />

        {/* LINKED IN */}
        <meta property="og:title" content="Ballerina Blog" />
        <meta
          property="og:image"
          content="https://ballerina.io/images/ballerina-generic-social-media-image-2023.png"
        />
        <meta
          property="og:description"
          itemProp="image"
          content="Ballerina is a comprehensive language that is easy to grasp for anyone with prior programming experience. Start learning with the material below."
        />

        {/* TWITTER */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@ballerinalang" />
        <meta name="twitter:creator" content="@ballerinalang" />
        <meta name="twitter:title" content="Ballerina" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:description"
          content="Ballerina is a comprehensive language that is easy to grasp for anyone with prior programming experience. Start learning with the material below."
        />
        <meta
          name="twitter:image"
          content="https://ballerina.io/images/ballerina-generic-social-media-image-2023.png"
        />
        <meta
          property="twitter:text:description"
          content="Ballerina is a comprehensive language that is easy to grasp for anyone with prior programming experience. Start learning with the material below."
        />
        <meta
          property="twitter:image"
          content="https://ballerina.io/images/ballerina-generic-social-media-image-2023.png"
        />
      </Head>

      <Layout>

        <Col sm={12}>
          <Row className="pageHeader pageContentRow bloglanding">

            <Col xs={12}>
              <Container>
                <h1>Ballerina Blog</h1>
              </Container>
            </Col>


          </Row>

          {/* <Row className="pageContentRow bloglanding blogDesc">

            <Col xs={12} md={12}>
              <Container>
                <p>
                  This is the official Ballerina blog. You’ll find official release announcements and other important news
                  related to Ballerina here. For blog posts written by the members of our community on various topics
                  around Ballerina, see the community-driven <a href="https://medium.com/ballerina-techblog" target='_blank' rel='noreffer'>Tech Blog</a>.
                </p>
              </Container>
            </Col>
          </Row> */}

          <Row className="pageContentRow bloglanding">

            <Col xs={12} md={12}>
              <Container>

                {blogs.map(({ slug, frontmatter }, index) => (
                  <>

                    <div key={index} className='blogInfo'>
                      <p className='blogDate'>{frontmatter[`published-date`]}</p>
                      <a className='blogLink' target="_blank" rel="noreferrer" href={`/posts/${slug}`} >
                        <h4 className='blogTitle'>{frontmatter.title}</h4>
                      </a>
                      <p className='blogAuthor'>{frontmatter.author}</p>
                    </div>
                  </>
                ))}
              </Container>
            </Col>
          </Row>
        </Col>


      </Layout>
    </>
  );
}

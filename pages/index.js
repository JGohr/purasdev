import * as fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Landing from '../comps/Landing/Landing';
import Header from '../comps/Header';

export default function Home({ postList }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>purasdev</title>
      </Head>
      <Header />
      <Landing />
    </div>
  )
};

export async function getStaticProps() {

  //Get markdown files from posts directory
  const markdownFiles = fs.readdirSync(path.join('posts'));

  //Get slugs and frontmatter from markdownFiles
  const posts = markdownFiles.map((file) => {

    const slug = file.replace('.md', '');

    const markdownWithMeta = fs.readFileSync(path.join('posts', file), 'utf-8');

    const { data: frontmatter, content } = matter(markdownWithMeta);

    return { slug, frontmatter, content };
  });

  return { 
    props: {
      postList: posts
    },
  };
};

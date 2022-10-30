import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Landing from '../comps/Landing/Landing';
import Header from '../comps/Header';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default function Home(props) {

  return (
    <div className={styles.container}>
      <Head>
        <title>purasdev</title>
      </Head>
      <Header />
      <Landing props={props} />
    </div>
  )
};

export async function getStaticProps() {

  const posts = fs.readdirSync(path.join('posts'));

  const postData = posts.map((post) => {

    const { data: frontmatter } = matter(fs.readFileSync(path.join('posts', post)));

    return {
      slug: post.replace('.md', ''),
      title: frontmatter.title,
      desc: frontmatter.desc,
      tags: frontmatter.tags,
    }
  });

  return {
    props: { data: postData }
  };
}

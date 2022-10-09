import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Landing from '../comps/Landing/Landing';
import Header from '../comps/Header';

export default function Home() {
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

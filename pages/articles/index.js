import styles from '../../styles/AllArticles.module.css';
import Header from '../../comps/Header';
import ViewAllCard from '../../comps/Articles/ViewAllCard';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export default function ViewAllArticles({ allPostMetaData }) {
    return(<div className={styles.container}>
        <Header />
        <div className={styles.AllArticlesHeader}>
            <h1>All Articles</h1>
            <div className={styles.HeaderFilters}>
                <span className='color-span'>Sort By</span>
                <span className='color-span'>Filter</span>
            </div>
        </div>
        <div className={styles.AllCards}>
            { allPostMetaData.map((post, index) => {
                return <ViewAllCard frontmatter={post.frontmatter} slug={post.fileSlug} index={index} />
            }) }
        </div>
    </div>);
};

export async function getStaticProps() {
    const allMarkdownFiles = fs.readdirSync(path.join('posts'));

    const postList = allMarkdownFiles.map((file) => {

        const singleMarkdownFile = fs.readFileSync(path.join('posts', file), 'utf-8');

        const fileSlug = file.replace('.md', '');

        const { data: frontmatter } = matter(singleMarkdownFile);

        return({ frontmatter, fileSlug });
    });

    return {
        props: {
            allPostMetaData: postList,
        },
    };
}


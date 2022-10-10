import * as fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { marked } from 'marked';
import ViewBlogPost from '../../comps/ViewBlogPost';
import Header from '../../comps/Header';
import FollowPrompt from '../../comps/FollowPrompt';
import styles from '../../styles/[slug].module.css';

export default function SingleBlog({ content, frontmatter }) {

    return(<div>
        <Header />
        <div className={styles.content}>
            <ViewBlogPost
            tags={frontmatter.tags}
            date={frontmatter.date}
            title={frontmatter.title}
            desc={frontmatter.desc}
            body={marked(content)} />
            <FollowPrompt />
        </div>
    </div>);
};

export async function getStaticPaths() {
    
    //Pre render all slug urls to display individual blogs
    const markdownFiles = fs.readdirSync(path.join('posts'));

    const paths = markdownFiles.map((file) => ({
        params: { slug: file.replace('.md', '') }
    }));

    return {
        paths: paths,
        fallback: false,
    };
};

export async function getStaticProps({ params: { slug } }) {

    //Fetch individual blog content
    const markdownFile = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8');

    const { data: frontmatter, content } = matter(markdownFile);

    return {
        props: {
            slug,
            frontmatter,
            content
        }
    };
};
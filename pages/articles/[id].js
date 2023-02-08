import { withSSRContext } from "aws-amplify";
import Head from "next/head";
import { useRouter } from "next/router";
import { Post } from "../../models";
import Blogs from "../components/Blogs";

export default function PostComponent({ post }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Blogs post={post} />
    </div>
  );
}

export async function getStaticPaths(req) {
  const { DataStore } = withSSRContext(req);
  const posts = await DataStore.query(Post);
  const paths = posts.map((post) => ({ params: { id: post.id } }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(req) {
  const { DataStore } = withSSRContext(req);
  const { params } = req;
  const { id } = params;
  const post = await DataStore.query(Post, id);

  return {
    props: {
      post: JSON.parse(JSON.stringify(post)),
    },
    revalidate: 1,
  };
}

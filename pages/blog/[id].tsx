import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

type Blog = {
  id: string;
  title: string;
  publishedAt: string;
  eyecatch?: { url: string };
  content?: string;
};

export default function BlogDetail({ blog }: { blog: Blog | null }) {
  const router = useRouter();
  if (router.isFallback) return <div>Loading...</div>;
  if (!blog) return <div>記事が見つかりません</div>;

  return (
    <Layout>
      <div className="max-w-2xl mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">{blog.title}</h1>
        {blog.eyecatch && <img src={blog.eyecatch.url} alt="" width={400} className="mb-4 rounded" />}
        <div className="text-gray-500 text-sm mb-4">{blog.publishedAt}</div>
        <div dangerouslySetInnerHTML={{ __html: blog.content || '' }} />
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    `https://${process.env.MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/blogs`,
    { headers: { 'X-API-KEY': process.env.MICROCMS_API_KEY! } }
  );
  const data = await res.json();
  const paths = (data.contents || []).map((blog: Blog) => ({
    params: { id: blog.id },
  }));
  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;
  if (!id || Array.isArray(id)) return { props: { blog: null } };
  try {
    const res = await fetch(
      `https://${process.env.MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/blogs/${id}`,
      { headers: { 'X-API-KEY': process.env.MICROCMS_API_KEY! } }
    );
    if (!res.ok) return { props: { blog: null } };
    const blog = await res.json();
    return { props: { blog } };
  } catch (e) {
    return { props: { blog: null } };
  }
}; 
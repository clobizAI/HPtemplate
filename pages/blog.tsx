import { GetStaticProps } from 'next';
import { useTranslations } from 'next-intl';
import Layout from '../components/Layout';

type Blog = {
  id: string;
  title: string;
  publishedAt: string;
  eyecatch?: { url: string };
};

type Props = {
  blogs: Blog[];
};

export default function BlogList({ blogs }: Props) {
  const t = useTranslations();

  return (
    <Layout>
      <div className="max-w-2xl mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">{t('blog')}</h1>
        <ul className="space-y-6">
          {blogs.length === 0 && <li>{t('noArticles')}</li>}
          {blogs.map((blog) => (
            <li key={blog.id} className="border-b pb-4">
              {blog.eyecatch && (
                <img src={blog.eyecatch.url} alt="" width={240} className="mb-2 rounded" />
              )}
              <a href={`/blog/${blog.id}`} className="text-xl text-primary font-semibold hover:underline">
                {blog.title}
              </a>
              <div className="text-gray-500 text-sm mt-1">{blog.publishedAt}</div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await fetch(
      `https://${process.env.MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/blogs`,
      {
        headers: { 'X-API-KEY': process.env.MICROCMS_API_KEY! },
      }
    );
    const data = await res.json();
    console.log('microCMS response:', data);
    return { props: { blogs: data && data.contents ? data.contents : [] } };
  } catch (e) {
    console.error('microCMS fetch error:', e);
    return { props: { blogs: [] } };
  }
}; 
import { motion } from 'framer-motion';
import Image from 'next/image';
import Layout from '../components/Layout';
import { GetStaticProps } from 'next';
import { useTranslations } from 'next-intl';

const featuredPlaces = [
  {
    id: 'kobe',
    image: '/images/kobe.jpg',
  },
  {
    id: 'himeji',
    image: '/images/himeji.jpg',
  },
  {
    id: 'takeda',
    image: '/images/takeda.jpg',
  },
  {
    id: 'byakugouji',
    image: '/images/byakugouji.jpg',
  },
  {
    id: 'awaji',
    image: '/images/awaji.jpg',
  },
  {
    id: 'sonbun',
    image: '/images/sonbun.jpg',
  },
];

type Blog = {
  id: string;
  title: string;
  publishedAt: string;
  eyecatch?: { url: string };
};

type Props = {
  blogs: Blog[];
};

export default function Home({ blogs }: Props) {
  const t = useTranslations();

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="Hyogo Prefecture"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-3xl px-4 sm:px-6 lg:px-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              {t('siteTitle')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-xl text-gray-300"
            >
              Hyogo Business & Tourism
            </motion.p>
          </div>
        </div>
      </div>

      {/* Featured Places Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              {t('mainAttractions')}
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              {t('discoverDescription')}
            </p>
          </div>

          <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPlaces.map((place, index) => (
              <motion.div
                key={place.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={place.image}
                    alt={t(`featuredPlaces.${place.id}.title`)}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {t(`featuredPlaces.${place.id}.title`)}
                  </h3>
                  <p className="mt-2 text-gray-500">
                    {t(`featuredPlaces.${place.id}.description`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{t('blog')}</h2>
            <p className="mt-4 text-lg text-gray-500">{t('latestNews')}</p>
          </div>
          <div className="mt-8 max-w-2xl mx-auto">
            <ul className="space-y-6">
              {blogs.length === 0 && <li>{t('noArticles')}</li>}
              {blogs.slice(0, 4).map((blog) => (
                <li key={blog.id} className="border-b pb-4">
                  <div className="flex items-center gap-4">
                    {blog.eyecatch && (
                      <img src={blog.eyecatch.url} alt="" width={100} height={100} className="rounded object-cover flex-shrink-0" />
                    )}
                    <div>
                      <a href={`/blog/${blog.id}`} className="text-xl text-primary font-semibold hover:underline">
                        {blog.title}
                      </a>
                      <div className="text-gray-500 text-sm mt-1">{blog.publishedAt}</div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-center">
              <a href="/blog" className="inline-block px-6 py-2 bg-primary text-white rounded hover:bg-primary-dark transition">
                {t('more')}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              {t('contact')}
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              {t('contactDescription')}
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center">
                <p className="text-gray-900 font-medium">
                  {t('officeAddress')}
                </p>
                <p className="mt-4 text-gray-900 font-medium">
                  {t('officeTel')}
                </p>
              </div>
            </div>
          </div>
        </div>
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
    return { props: { blogs: data && data.contents ? data.contents : [] } };
  } catch (e) {
    return { props: { blogs: [] } };
  }
}; 
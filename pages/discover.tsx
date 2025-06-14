import Layout from '../components/Layout';
import Image from 'next/image';
import { useTranslations, useMessages } from 'next-intl';

export default function Discover() {
  const t = useTranslations();
  const messages = useMessages();
  const events = messages.discoverEvents as Record<string, any>;
  return (
    <Layout>
      <div className="bg-gradient-to-br from-gray-50 to-white py-16 min-h-screen">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row gap-8 items-center">
          {/* 左：魅力データ */}
          <div className="flex-1 w-full">
            <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-8 border-b pb-4">{t('discover')}</h1>
            <table className="w-full text-left text-gray-700 border-separate border-spacing-y-2">
              <tbody>
                <tr>
                  <th className="font-semibold w-32 align-top">{t('discoverTable.worldHeritage')}</th>
                  <td>{t('discoverTable.worldHeritageValue')}</td>
                </tr>
                <tr>
                  <th className="font-semibold align-top">{t('discoverTable.onsen')}</th>
                  <td>{t('discoverTable.onsenValue')}</td>
                </tr>
                <tr>
                  <th className="font-semibold align-top">{t('discoverTable.nature')}</th>
                  <td>{t('discoverTable.natureValue')}</td>
                </tr>
                <tr>
                  <th className="font-semibold align-top">{t('discoverTable.culture')}</th>
                  <td>{t('discoverTable.cultureValue')}</td>
                </tr>
                <tr>
                  <th className="font-semibold align-top">{t('discoverTable.gourmet')}</th>
                  <td>{t('discoverTable.gourmetValue')}</td>
                </tr>
                <tr>
                  <th className="font-semibold align-top">{t('discoverTable.cities')}</th>
                  <td>{t('discoverTable.citiesValue')}</td>
                </tr>
                <tr>
                  <th className="font-semibold align-top">{t('discoverTable.events')}</th>
                  <td>{t('discoverTable.eventsValue')}</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* 右：イメージ画像 */}
          <div className="flex-1 flex justify-center items-center w-full">
            <Image
              src="/images/discover-region.jpg"
              alt={t('discoverImageAlt')}
              width={350}
              height={350}
              className="rounded-lg shadow-md object-cover bg-white"
            />
          </div>
        </div>
        {/* イベントカレンダー */}
        <div className="max-w-5xl mx-auto mt-16">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">{t('discoverEventsTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.values(events).map((event, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-2">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg font-bold text-primary">{event.month}</span>
                  <span className="text-gray-700 font-semibold">{event.title}</span>
                </div>
                <img src={`/images/event-${String(idx+1).padStart(3,'0').slice(-2)}.jpg`} alt={event.title} className="rounded mb-2 object-cover h-40 w-full" />
                <p className="text-gray-700 text-sm">{event.desc}</p>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-primary underline text-xs">{event.link}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
} 
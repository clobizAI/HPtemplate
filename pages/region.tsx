import Layout from '../components/Layout';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Region() {
  const t = useTranslations();
  return (
    <Layout>
      <div className="bg-gradient-to-br from-gray-50 to-white py-16 min-h-screen">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row gap-8 items-center">
          {/* 左：地域データ */}
          <div className="flex-1 w-full">
            <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-8 border-b pb-4">{t('regionTitle')}</h1>
            <table className="w-full text-left text-gray-700 border-separate border-spacing-y-2">
              <tbody>
                <tr>
                  <th className="font-semibold w-32 align-top">{t('regionTable.established')}</th>
                  <td>{t('regionTable.establishedValue')}</td>
                </tr>
                <tr>
                  <th className="font-semibold align-top">{t('regionTable.population')}</th>
                  <td>{t('regionTable.populationValue')}</td>
                </tr>
                <tr>
                  <th className="font-semibold align-top">{t('regionTable.area')}</th>
                  <td>{t('regionTable.areaValue')}</td>
                </tr>
                <tr>
                  <th className="font-semibold align-top">{t('regionTable.gdp')}</th>
                  <td>{t('regionTable.gdpValue')}</td>
                </tr>
                <tr>
                  <th className="font-semibold align-top">{t('regionTable.cities')}</th>
                  <td>{t('regionTable.citiesValue')}</td>
                </tr>
                <tr>
                  <th className="font-semibold align-top">{t('regionTable.symbol')}</th>
                  <td>{t('regionTable.symbolValue')}</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* 右：地図画像 */}
          <div className="flex-1 flex justify-center items-center w-full">
            <Image
              src="/images/region-map.jpg"
              alt={t('regionTable.map')}
              width={400}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
} 
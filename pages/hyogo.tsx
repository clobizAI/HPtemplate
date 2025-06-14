import Layout from '../components/Layout';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Hyogo() {
  const t = useTranslations();
  return (
    <Layout>
      <div className="bg-gradient-to-br from-gray-50 to-white py-16 min-h-screen">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row gap-8 items-center">
          {/* 左：県データ */}
          <div className="flex-1 w-full">
            <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-8 border-b pb-4">{t('hyogoTitle')}</h1>
            <table className="w-full text-left text-gray-700 border-separate border-spacing-y-2">
              <tbody>
                <tr>
                  <th className="font-semibold w-32 align-top">{t('hyogoTable.established')}</th>
                  <td>{t('hyogoTable.establishedValue')}</td>
                </tr>
                <tr>
                  <th className="font-semibold align-top">{t('hyogoTable.population')}</th>
                  <td>{t('hyogoTable.populationValue')}</td>
                </tr>
                <tr>
                  <th className="font-semibold align-top">{t('hyogoTable.area')}</th>
                  <td>{t('hyogoTable.areaValue')}</td>
                </tr>
                <tr>
                  <th className="font-semibold align-top">{t('hyogoTable.gdp')}</th>
                  <td>{t('hyogoTable.gdpValue')}</td>
                </tr>
                <tr>
                  <th className="font-semibold align-top">{t('hyogoTable.cities')}</th>
                  <td>{t('hyogoTable.citiesValue')}</td>
                </tr>
                <tr>
                  <th className="font-semibold align-top">{t('hyogoTable.flower')}</th>
                  <td>{t('hyogoTable.flowerValue')}</td>
                </tr>
                <tr>
                  <th className="font-semibold align-top">{t('hyogoTable.tree')}</th>
                  <td>{t('hyogoTable.treeValue')}</td>
                </tr>
                <tr>
                  <th className="font-semibold align-top">{t('hyogoTable.bird')}</th>
                  <td>{t('hyogoTable.birdValue')}</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* 右：地図画像 */}
          <div className="flex-1 flex justify-center items-center w-full">
            <Image
              src="/images/hyogo-map.png"
              alt={t('hyogoMapAlt')}
              width={350}
              height={350}
              className="rounded-lg shadow-md object-contain bg-white"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
} 
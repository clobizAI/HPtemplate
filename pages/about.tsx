import Layout from '../components/Layout';
import { BuildingOffice2Icon, PhoneIcon, MapPinIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline';
import { useTranslations, useMessages } from 'next-intl';

export default function About() {
  const t = useTranslations();
  const messages = useMessages();
  const businessList = messages.aboutBusinessList as unknown as Record<string, string>;
  return (
    <Layout>
      <div className="bg-gradient-to-br from-gray-50 to-white py-16 min-h-screen">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-10 text-center">センター概要</h1>

          {/* 名称・英語表記 */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8 flex items-center gap-4">
            <BuildingOffice2Icon className="h-10 w-10 text-primary flex-shrink-0" />
            <div>
              <div className="font-bold text-lg">地域ビジネス・ツーリズムセンター</div>
              <div className="text-gray-500">Business & Tourism Centre</div>
            </div>
          </div>

          {/* 所在地・連絡先 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4">
              <MapPinIcon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold text-gray-700 mb-1">所在地</div>
                <div className="text-gray-700 text-sm">Room 2903, 29/F, Windsor House, 311 Gloucester Road, Causeway Bay, Hong Kong</div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4">
              <PhoneIcon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold text-gray-700 mb-1">連絡先</div>
                <div className="text-gray-700 text-sm">Tel：+852-3427-9660<br/>Fax：+852-3427-9366</div>
                <div className="text-gray-700 text-sm mt-2">営業時間：火～金 14:00-19:00／土 10:00-13:00<br/>休業日：月・日・香港の祝日</div>
              </div>
            </div>
          </div>

          {/* 業務内容 */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8 flex items-start gap-4">
            <ClipboardDocumentListIcon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <div className="font-semibold text-gray-700 mb-1">業務内容</div>
              <ul className="list-disc ml-5 text-gray-700 text-sm space-y-1">
                <li>地域の企業・団体の活動支援</li>
                <li>地域への外国人旅行者増加に向けた観光PR</li>
                <li>友好都市との交流推進</li>
                <li>ビジネス・観光に関する各種相談対応</li>
              </ul>
            </div>
          </div>

          {/* アクセス */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8 flex items-start gap-4">
            <MapPinIcon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
            <div className="w-full">
              <div className="font-semibold text-gray-700 mb-1">アクセス</div>
              <div className="text-gray-700 text-sm mb-2">
                MTR銅鑼灣（Causeway Bay）駅 E出口より徒歩1分<br/>
                IKEA向かいのWindsor House 29階<br/>
                <span className="text-xs text-gray-500">（ビル1階にスターバックスあり）</span>
              </div>
              <div className="w-full rounded overflow-hidden border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.982282019994!2d114.1834953154316!3d22.28002898533747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400d6e2e2e2e2%3A0x1234567890abcdef!2sWindsor%20House!5e0!3m2!1sja!2shk!4v1710000000000!5m2!1sja!2shk"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Googleマップ サンプル"
                ></iframe>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
} 
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
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-10 text-center">{t('aboutTitle')}</h1>

          {/* 名称・英語表記 */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8 flex items-center gap-4">
            <BuildingOffice2Icon className="h-10 w-10 text-primary flex-shrink-0" />
            <div>
              <div className="font-bold text-lg">{t('aboutOfficeName')}</div>
              <div className="text-gray-500">{t('aboutOfficeNameEn')}</div>
            </div>
          </div>

          {/* 所在地・連絡先 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4">
              <MapPinIcon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold text-gray-700 mb-1">{t('aboutAddress')}</div>
                <div className="text-gray-700 text-sm">{t('aboutAddressValue')}</div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4">
              <PhoneIcon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold text-gray-700 mb-1">{t('aboutContact')}</div>
                <div className="text-gray-700 text-sm" style={{ whiteSpace: 'pre-line' }}>{t('aboutContactValue')}</div>
              </div>
            </div>
          </div>

          {/* 業務内容 */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8 flex items-start gap-4">
            <ClipboardDocumentListIcon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <div className="font-semibold text-gray-700 mb-1">{t('aboutBusiness')}</div>
              <ul className="list-disc ml-5 text-gray-700 text-sm space-y-1">
                {Object.values(businessList).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* アクセス */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8 flex items-start gap-4">
            <MapPinIcon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <div className="font-semibold text-gray-700 mb-1">{t('aboutAccess')}</div>
              <div className="text-gray-700 text-sm">{t('aboutAccessValue')}</div>
              <div className="mt-2">
                <a href="https://goo.gl/maps/2Qw2Qw2Qw2Qw2Qw2A" target="_blank" rel="noopener noreferrer" className="text-primary underline inline-flex items-center gap-1">
                  <MapPinIcon className="h-5 w-5" /> {t('aboutAccessMap')}
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
} 
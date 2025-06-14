import Layout from '../components/Layout';
import { GlobeAltIcon, BuildingOffice2Icon, LinkIcon } from '@heroicons/react/24/outline';

const links = [
  { name: '在香港日本総領事館', url: 'https://www.hk.emb-japan.go.jp/itprtop_ja/index.html', icon: <BuildingOffice2Icon className="h-6 w-6 text-primary" /> },
  { name: 'JETRO（日本貿易振興機構）香港', url: 'https://www.jetro.go.jp/world/asia/hk/', icon: <GlobeAltIcon className="h-6 w-6 text-primary" /> },
  { name: 'JNTO（日本政府観光局）香港', url: 'https://www.japan.travel/hk/ja/', icon: <GlobeAltIcon className="h-6 w-6 text-primary" /> },
  { name: '香港貿易発展局（HKTDC）', url: 'https://www.hktdc.com/', icon: <GlobeAltIcon className="h-6 w-6 text-primary" /> },
  { name: '香港投資促進局（Invest HK）', url: 'https://www.investhk.gov.hk/ja/home.html', icon: <GlobeAltIcon className="h-6 w-6 text-primary" /> },
  { name: '香港政府観光局', url: 'https://www.discoverhongkong.com/jp/index.html', icon: <GlobeAltIcon className="h-6 w-6 text-primary" /> },
  { name: '香港の祝日（英文）', url: 'https://www.gov.hk/en/about/abouthk/holiday/', icon: <GlobeAltIcon className="h-6 w-6 text-primary" /> },
];

export default function Links() {
  return (
    <Layout>
      <div className="bg-gradient-to-br from-gray-50 to-white py-16 min-h-screen">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-8 text-center border-b pb-4">リンク集</h1>
          <ul className="space-y-4">
            {links.map((link) => (
              <li key={link.name} className="bg-gray-50 rounded-lg shadow flex items-center gap-4 p-4 hover:bg-primary/10 transition">
                {link.icon}
                <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-primary hover:underline">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-12 text-center text-gray-400 text-sm border-t pt-6">
            Copyright © Hyogo Business & Tourism Centre (HK). All Rights Reserved.
          </div>
        </div>
      </div>
    </Layout>
  );
} 
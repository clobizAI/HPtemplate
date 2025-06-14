import Layout from '../components/Layout';
import Image from 'next/image';

export default function Index2() {
  return (
    <Layout>
      {/* Heroバナー（全幅） */}
      <section className="w-full bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white py-24 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight drop-shadow">地域ビジネス・ツーリズムセンター</h1>
            <p className="text-lg sm:text-xl mb-8 drop-shadow">あなたのビジネスやお店の魅力を、<br className="hidden sm:block"/>シンプル＆スマートに伝えるホームページを無料で。</p>
            <a href="#contact" className="inline-block bg-white text-blue-900 font-bold px-8 py-3 rounded-lg shadow hover:bg-blue-100 transition">無料相談はこちら</a>
          </div>
          <div className="flex-1 flex justify-center">
            <Image src="/images/modern-hero.jpg" alt="今っぽいバナー" width={420} height={280} className="rounded-xl shadow-lg object-cover" />
          </div>
        </div>
      </section>

      {/* サービス紹介（3カラム） */}
      <section className="w-full bg-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">サービス</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-xl shadow p-6 flex flex-col items-center">
              <span className="inline-block bg-blue-100 text-blue-600 rounded-full p-3 mb-4">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M12 6v6l4 2" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <div className="font-semibold mb-2">スピード公開</div>
              <div className="text-sm text-gray-600 text-center">写真と文章を送るだけ。最短1日でホームページ公開。</div>
            </div>
            <div className="bg-green-50 rounded-xl shadow p-6 flex flex-col items-center">
              <span className="inline-block bg-green-100 text-green-600 rounded-full p-3 mb-4">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <div className="font-semibold mb-2">スマホ対応</div>
              <div className="text-sm text-gray-600 text-center">どの端末でも見やすい、レスポンシブデザイン。</div>
            </div>
            <div className="bg-yellow-50 rounded-xl shadow p-6 flex flex-col items-center">
              <span className="inline-block bg-yellow-100 text-yellow-600 rounded-full p-3 mb-4">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M12 20h9" stroke="#eab308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="6" cy="6" r="3" stroke="#eab308" strokeWidth="2"/><path d="M6 9v11" stroke="#eab308" strokeWidth="2" strokeLinecap="round"/></svg>
              </span>
              <div className="font-semibold mb-2">相談・サポート</div>
              <div className="text-sm text-gray-600 text-center">困ったときはいつでも相談OK。ITが苦手でも安心。</div>
            </div>
          </div>
        </div>
      </section>

      {/* お知らせ（シンプルリスト） */}
      <section className="w-full bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">最新のお知らせ</h2>
          <ul className="divide-y divide-gray-200 bg-white rounded-xl shadow">
            <li className="p-4 flex flex-col md:flex-row md:items-center md:justify-between">
              <span className="font-semibold text-gray-700">2024/06/01</span>
              <span className="text-gray-600 mt-1 md:mt-0">新サービス「無料HP作成」受付開始</span>
            </li>
            <li className="p-4 flex flex-col md:flex-row md:items-center md:justify-between">
              <span className="font-semibold text-gray-700">2024/05/20</span>
              <span className="text-gray-600 mt-1 md:mt-0">事例ページを追加しました</span>
            </li>
            <li className="p-4 flex flex-col md:flex-row md:items-center md:justify-between">
              <span className="font-semibold text-gray-700">2024/05/01</span>
              <span className="text-gray-600 mt-1 md:mt-0">サイトを公開しました</span>
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
} 
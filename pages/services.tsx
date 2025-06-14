import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '../components/Layout';
import Image from 'next/image';
import { 
  ChartBarIcon, 
  ComputerDesktopIcon, 
  UserGroupIcon, 
  CurrencyYenIcon, 
  MegaphoneIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

export default function Services() {
  const t = useTranslations('Services');
  const router = useRouter();

  const services = [
    {
      title: '経営コンサルティング',
      icon: ChartBarIcon,
      description: '企業の成長と持続可能な発展を支援します',
      items: [
        '事業戦略の立案と実行支援',
        '組織改革と業務改善',
        'コスト最適化と収益改善',
        'M&A・事業承継支援'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'ITコンサルティング',
      icon: ComputerDesktopIcon,
      description: 'デジタルトランスフォーメーションを推進します',
      items: [
        'DX戦略の立案と実行',
        'システム導入・開発支援',
        'セキュリティ対策',
        'クラウド移行支援'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: '人事コンサルティング',
      icon: UserGroupIcon,
      description: '人材マネジメントの最適化を実現します',
      items: [
        '採用戦略と人材確保',
        '教育研修プログラム設計',
        '評価制度の構築',
        '働き方改革推進'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      title: '財務コンサルティング',
      icon: CurrencyYenIcon,
      description: '財務基盤の強化と資金調達を支援します',
      items: [
        '資金調達支援',
        '財務分析と改善提案',
        '税務戦略の立案',
        '投資戦略の策定'
      ],
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      title: 'マーケティングコンサルティング',
      icon: MegaphoneIcon,
      description: '効果的なマーケティング戦略を構築します',
      items: [
        '市場調査と分析',
        'ブランド戦略の立案',
        'デジタルマーケティング支援',
        '顧客分析とCRM構築'
      ],
      color: 'from-red-500 to-red-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <Layout>
      <div className="text-center mt-8 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">サービスごとのテンプレート</h1>
      </div>

      <section className="py-16 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-4">テンプレート1（コンサルティング）</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              お客様のビジネス課題に最適なソリューションを提供し、持続的な成長をサポートします
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="group relative bg-white/90 backdrop-blur-md rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className="p-6 relative">
                  <div className="flex items-center mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${service.color} text-white`}>
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 ml-3">{service.title}</h2>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-3">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start group/item">
                        <CheckCircleIcon className="h-5 w-5 text-primary mt-0.5 mr-2 group-hover/item:text-green-500 transition-colors duration-300" />
                        <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* サービスBセグメント */}
      <section className="py-24 bg-gradient-to-br from-green-100 via-teal-100 to-emerald-100">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-4">テンプレート2（コースメニューのご紹介）</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              季節の食材をふんだんに使った、シェフ自慢のコース料理をお楽しみください。特別な日やご会食に最適なプランをご用意しています。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 左側：画像と説明 */}
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
                  alt="コース料理イメージ"
                  layout="fill"
                  objectFit="cover"
                  className="transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <CheckCircleIcon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">旬の味覚を堪能</h3>
                </div>
                <p className="text-gray-600">
                  四季折々の新鮮な食材を厳選し、シェフが一皿一皿丁寧に仕上げます。見た目にも美しい料理で、特別なひとときを演出します。
                </p>
              </div>
            </div>

            {/* 右側：コースメニューリスト */}
            <div className="space-y-8">
              <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">コース例</h3>
                <ul className="space-y-4">
                  <li>
                    <p className="text-gray-900 font-medium">季節のスペシャルコース <span className="text-sm text-gray-500">（全7品）</span></p>
                    <p className="text-gray-600 text-sm mt-1">前菜・スープ・魚料理・肉料理・デザートなど、旬の味覚を贅沢に味わえるコース。</p>
                  </li>
                  <li>
                    <p className="text-gray-900 font-medium">シェフおすすめコース <span className="text-sm text-gray-500">（全5品）</span></p>
                    <p className="text-gray-600 text-sm mt-1">シェフが厳選した食材を使った、バランスの良い人気コース。</p>
                  </li>
                  <li>
                    <p className="text-gray-900 font-medium">記念日コース <span className="text-sm text-gray-500">（全6品・乾杯ドリンク付）</span></p>
                    <p className="text-gray-600 text-sm mt-1">大切な日を彩る特別なコース。メッセージプレートやサプライズ演出もご相談ください。</p>
                  </li>
                </ul>
              </div>

              <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">おすすめポイント</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
                    ゆったりとした個室・半個室あり
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
                    アレルギーや苦手食材にも柔軟に対応
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
                    記念日・お祝いのサプライズ演出OK
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* サービスCセグメント */}
      <section className="py-20 bg-gradient-to-br from-indigo-100 via-violet-100 to-purple-100">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-4">テンプレート3（学習塾コースのご案内）</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              小学生から高校生まで、一人ひとりに合わせた指導で「わかる」「できる」を実感。志望校合格・成績アップを全力でサポートします。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* カード1 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20v-6m0 0V4m0 10l3-3m-3 3l-3-3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">個別指導コース</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  先生1人に生徒2人までの徹底サポート
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  苦手克服・基礎固めに最適
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  学年・科目自由に選択可能
                </li>
              </ul>
            </motion.div>

            {/* カード2 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2a4 4 0 014-4h2a4 4 0 014 4v2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">集団授業コース</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></span>
                  切磋琢磨できる少人数クラス
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></span>
                  定期テスト・受験対策に特化
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></span>
                  わかりやすい解説と演習
                </li>
              </ul>
            </motion.div>

            {/* カード3 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">受験対策特訓コース</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full mr-2"></span>
                  志望校別カリキュラム
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full mr-2"></span>
                  過去問演習・徹底解説
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full mr-2"></span>
                  面接・小論文対策も充実
                </li>
              </ul>
            </motion.div>
          </div>

          {/* 特徴セクション */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">サポート体制</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircleIcon className="h-6 w-6 text-primary mr-3" />
                  <span className="text-gray-700">自習室完備・質問対応OK</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="h-6 w-6 text-primary mr-3" />
                  <span className="text-gray-700">保護者面談・進路相談</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="h-6 w-6 text-primary mr-3" />
                  <span className="text-gray-700">定期的な学習状況レポート</span>
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">学習の流れ</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-6 h-6 flex items-center justify-center bg-primary text-white rounded-full font-bold mr-4">1</span>
                  <span className="text-gray-700">目標設定・学力診断</span>
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-6 flex items-center justify-center bg-primary text-white rounded-full font-bold mr-4">2</span>
                  <span className="text-gray-700">個別カリキュラム作成</span>
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-6 flex items-center justify-center bg-primary text-white rounded-full font-bold mr-4">3</span>
                  <span className="text-gray-700">授業・演習・確認テスト</span>
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-6 flex items-center justify-center bg-primary text-white rounded-full font-bold mr-4">4</span>
                  <span className="text-gray-700">定期的な振り返り・フォロー</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
} 
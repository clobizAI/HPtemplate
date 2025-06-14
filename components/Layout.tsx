import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Bars3Icon, XMarkIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { useTranslations } from 'next-intl';

const languages = [
  { code: 'zh-Hant', name: '繁體中文' },
  { code: 'en', name: 'English' },
  { code: 'ja', name: '日本語' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const t = useTranslations();

  const navigation = [
    { name: t('about'), href: '/about' },
    { name: t('hyogo'), href: '/hyogo' },
    { name: t('discover'), href: '/discover' },
    { name: t('links'), href: '/links' },
    { name: t('blog'), href: '/blog' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-primary">
                {t('siteTitle')}
              </Link>
            </div>
            
            {/* Desktop navigation */}
            <div className="hidden md:flex md:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Language selector */}
            <div className="hidden md:flex md:items-center md:space-x-2 border rounded px-3 py-1 bg-white">
              <GlobeAltIcon className="h-5 w-5 text-gray-400 mr-1" />
              {languages.map((lang, idx) => (
                <button
                  key={lang.code}
                  onClick={() => router.push(router.pathname, router.asPath, { locale: lang.code })}
                  className={`text-sm px-1 ${router.locale === lang.code ? 'text-primary font-bold' : 'text-gray-700'} ${idx !== 0 ? 'ml-2' : ''}`}
                >
                  {lang.name}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                className="text-gray-700"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-gray-200 pt-4">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      router.push(router.pathname, router.asPath, { locale: lang.code });
                      setMobileMenuOpen(false);
                    }}
                    className={`block w-full text-left px-3 py-2 text-base font-medium ${
                      router.locale === lang.code ? 'text-primary' : 'text-gray-500'
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('officeName')}</h3>
              <p className="text-gray-300">
                {t('officeAddress')}
              </p>
              <p className="text-gray-300 mt-2">{t('officeTel')}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('linksTitle')}</h3>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-gray-300 hover:text-white">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('languageTitle')}</h3>
              <ul className="space-y-2">
                {languages.map((lang) => (
                  <li key={lang.code}>
                    <button
                      onClick={() => router.push(router.pathname, router.asPath, { locale: lang.code })}
                      className="text-gray-300 hover:text-white"
                    >
                      {lang.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-300">
            <p>{t('copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 
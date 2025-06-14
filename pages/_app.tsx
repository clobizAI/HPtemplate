import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { IntlProvider } from 'next-intl';
import ja from '../locales/ja/common.json';
import en from '../locales/en/common.json';
import zh from '../locales/zh-Hant/common.json';
import { useRouter } from 'next/router';

const messages = { ja, en, 'zh-Hant': zh };

type Locale = keyof typeof messages;

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const locale: Locale = (router.locale as Locale) || 'ja';
  return (
    <IntlProvider messages={messages[locale]} locale={locale}>
      <Component {...pageProps} />
    </IntlProvider>
  );
} 
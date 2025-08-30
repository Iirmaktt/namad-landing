import { getRequestConfig } from 'next-intl/server';

const locales = ['en', 'tr'];

export default getRequestConfig(async ({ locale }) => {
  // Ensure we always have a valid locale
  const validLocale = locale && locales.includes(locale) ? locale : 'en';

  try {
    const messages = (await import(`./messages/${validLocale}.json`)).default;
    return {
      messages,
      locale: validLocale
    };
  } catch (error) {
    // Fallback to English if the locale file doesn't exist
    const fallbackMessages = (await import(`./messages/en.json`)).default;
    return {
      messages: fallbackMessages,
      locale: 'en'
    };
  }
});
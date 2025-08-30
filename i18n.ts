import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
const locales = ['en', 'tr'];

export default getRequestConfig(async ({ locale }) => {
  // Debug logging to see what locale we're getting
  console.log('Received locale:', locale);
  
  // Ensure we always have a valid locale
  const validLocale = locale && locales.includes(locale) ? locale : 'en';
  
  console.log('Using locale:', validLocale);

  try {
    const messages = (await import(`./messages/${validLocale}.json`)).default;
    return {
      messages,
      locale: validLocale // Explicitly return the locale
    };
  } catch (error) {
    console.error('Error loading locale file:', error);
    // Fallback to English if the locale file doesn't exist
    const fallbackMessages = (await import(`./messages/en.json`)).default;
    return {
      messages: fallbackMessages,
      locale: 'en' // Explicitly return the fallback locale
    };
  }
});
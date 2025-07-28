// import { getRequestConfig } from 'next-intl/server';
// import { defaultLocale, locales } from './config';

// export default getRequestConfig(async ({ locale }) => {
//   const validatedLocale = locales.includes(locale as any) ? locale : defaultLocale;

//   const messages = (await import(`@/messages/${validatedLocale}.json`)).default;

//   return {
//     locale: validatedLocale,
//     messages
//   };
// });
import { createCookie } from '@remix-run/node';

export const userLangPrefs = createCookie('user-lang-prefs', {
  maxAge: 31_536_000, // one year
});

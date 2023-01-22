import { createCookie } from '@remix-run/node';

export const userLanguageCookie = createCookie('user-language', {
  maxAge: 31_536_000, // one year
});

export const userIsAuthCookie = createCookie('user-authentication', {
  maxAge: 604_800, // one week
});

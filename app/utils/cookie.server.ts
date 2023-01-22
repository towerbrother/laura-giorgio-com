import { createCookie } from '@remix-run/node';

export const userCookie = createCookie('user-cookie', {
  maxAge: 604_800, // one week
});

import { createCookie } from '@remix-run/node';

export const userCookie = createCookie('user-cookie', {
  maxAge: 31_536_000, // one year
});

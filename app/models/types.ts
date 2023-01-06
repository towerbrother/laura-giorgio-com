// Only temp - waiting for an automatic type generating solution from Sanity.io

export type HeaderType = {
  company: { name: string; url: string };
  employee: { name: string; role: string };
  externalLinks: [{ text: string; url: string }];
  internalLinks: [{ text: string; slug: string }];
};

export type FooterType = {
  copyright: string;
};

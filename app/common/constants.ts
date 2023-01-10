const sizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

const onlyScreen = 'only screen and';

export const devices = {
  mobileS: `${onlyScreen} (min-width: ${sizes.mobileS})`,
  mobileM: `${onlyScreen} (min-width: ${sizes.mobileM})`,
  mobileL: `${onlyScreen} (min-width: ${sizes.mobileL})`,
  tablet: `${onlyScreen} (min-width: ${sizes.tablet})`,
  laptop: `${onlyScreen} (min-width: ${sizes.laptop})`,
  laptopL: `${onlyScreen} (min-width: ${sizes.laptopL})`,
  desktop: `${onlyScreen} (min-width: ${sizes.desktop})`,
};

export const colors = {
  offBlack: '#0f0f0f',
  offWhite: '#f4f4f4',
  offGray: '#e5e5e5',
  offGreen: '#186e0d',
  offRed: '#6e1a0d',
  primaryBackground: '#256ce1',
  secondaryBackground: '#819dc9',
};

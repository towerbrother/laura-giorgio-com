export const getIndex = (language: string): number => {
  switch (language) {
    case "en":
      return 0;
    case "de":
      return 1;
    case "it":
      return 2;
    default:
      return 0;
  }
};

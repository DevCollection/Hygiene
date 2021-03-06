/* eslint-disable */
export const colors = {
  light: '#ffffff',
  dark: '#151A25',
  backgroundDark: '#191919',
  deepDark: '#000000',
  blue_80: '#2F38C7',
  blue_70: '#1E6EFA',
  blue_60: '#217DFE',
  paleBlue_10: '#8bc9ff',
  paleBlue_05: '#e2f2ff',
  green_30: '#00D4AB',
  green_10: '#A1EEDB',
  gray_80: '#676c7a',
  gray_70: '#545966',
  gray_60: '#676c7a',
  gray_50: '#8f94a3',
  gray_40: '#AFB4C3',
  gray_30: '#d3d8e8',
  gray_05: '#f3f9ff',
  apple: '#151E22',
  google: '#E04238',
  facebook: '#345997',
};
/* eslint-enable */

export const light = {
  primary: colors.blue_70,
  background: colors.light,
  backgroundDark: '#f7f7f7',
  btnPrimary: colors.blue_70,
  btnPrimaryFont: 'white',
  btnPrimaryLight: colors.light,
  btnPrimaryLightFont: 'black',
  textDisabled: '#969696',
  btnDisabled: 'rgb(224,224,224)',
  font: 'black',
  fontSecondary: '#444444',
  placeholder: '#808080',
  tint: '#333333',
  appleIcon: colors.apple,
  appleText: colors.apple,
  appleBackground: colors.light,
  facebookIcon: colors.light,
  facebookText: colors.light,
  facebookBackground: colors.facebook,
  googleIcon: colors.light,
  googleText: colors.light,
  googleBackground: colors.google,
  link: colors.blue_70,
  tabBackground: colors.light,
  card: colors.light,
  border: '#E6E6E6',
  accent: '#1C77FF',
  firstRank: '#00A8F0',
  secondRank: '#1C77FF',
  thirdRank: '#1363DB',
};

export type Theme = typeof light;

export const dark = {
  primary: colors.deepDark,
  background: colors.backgroundDark,
  backgroundDark: '#222222',
  btnPrimary: colors.paleBlue_10,
  btnPrimaryFont: 'white',
  btnPrimaryLight: colors.dark,
  btnPrimaryLightFont: 'black',
  textDisabled: '#969696',
  btnDisabled: 'rgb(224,224,224)',
  font: 'white',
  fontSecondary: '#E6E6E6',
  placeholder: '#808080',
  tint: '#a3a3a3',
  appleIcon: colors.apple,
  appleText: colors.apple,
  appleBackground: colors.light,
  facebookIcon: colors.light,
  facebookText: colors.light,
  facebookBackground: colors.facebook,
  googleIcon: colors.light,
  googleText: colors.light,
  googleBackground: colors.google,
  link: colors.paleBlue_05,
  tabBackground: '#191919',
  card: '#222222',
  border: '#444444',
  accent: '#00A8F0',
  firstRank: '#00A8F0',
  secondRank: '#1C77FF',
  thirdRank: '#1363DB',
};

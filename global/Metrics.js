// @flow

import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

// metrics based on iPhone Xs Max
// see: https://www.paintcodeapp.com/news/ultimate-guide-to-iphone-resolutions
const ratioX = screenWidth / 414;
const ratioY = screenHeight / 896;

export default {
  fontSizeGiant: 45 * ratioX,
  fontSizeHuge: 26 * ratioX,
  fontSizeBiggest: 22 * ratioX,
  fontSizeBigger: 20 * ratioX,
  fontSizeBig: 18 * ratioX,
  fontSizeMedium: 17 * ratioX,
  fontSizelarge: 16 * ratioX,
  fontSizeNormal: 15.5 * ratioX,
  fontSizeOK: 15 * ratioX,
  fontTabBar: 14 * ratioX,
  fontSizeLight: 13 * ratioX,
  fontSizeSmall: 11 * ratioX,
  spacingGiant: 45 * ratioX,
  spacingHuge: 36 * ratioX,
  spacingExtra: 30 * ratioX,
  spacingBig: 24 * ratioX,
  spacingNormal: 16 * ratioX,
  spacingSmall: 10 * ratioX,
  spacingTiny: 6 * ratioX,
  navBarHeight: 80 * ratioX,
  footerHeight: 80 * ratioX,
  rowHeightSmall: 35 * ratioX,
  rowHeight: 44 * ratioX,
  rowHeightMedium: 55 * ratioX,
  rowHeightBig: 66 * ratioX,
  circlesize: 32 * ratioX,
  circleblack: 31 * ratioX,
  marginHuge: 36 * ratioX,
  marginBig: 24 * ratioX,
  marginNormal: 16 * ratioX,
  marginSmall: 10 * ratioX,
  marginTiny: 6 * ratioX,
  marginHugeY: 36 * ratioY,
  marginBigY: 24 * ratioY,
  marginNormalY: 16 * ratioY,
  marginSmallY: 10 * ratioY,
  marginTinyY: 6 * ratioY,
  screenHeaderHeight: 60 * ratioX,
  inputHeight: 44 * ratioY,
  // according to IG 59 pts from top, safeareaview pads 44pts
  safeHeaderMargin: 13 * ratioY,
  statusbarHeight: 20 * ratioY,
  spaceNormal: 24 * ratioX,
  trackTab: 63 * ratioX,
  trackHeight: 102 * ratioX,
  trackVerticalMargin: 5 * ratioY,
  studioBtns: 36 * ratioX,
  screenWidth,
  screenHeight,
  ratioX,
  ratioY,
  avatar: 45 * ratioX,
  avatarsmall: 40 * ratioX,
  avatarbig: 82 * ratioX,
  smallcrafts: 80 * ratioX,
  bigcrafts: 130 * ratioX,
  storecrafts: 170 * ratioX,
  craftborder: 10 * ratioX,
  storewidth: 140 * ratioX,
  storeheight: 100 * ratioY,
  sliderthumb: 8 * ratioX,
  sliderpadding: 7 * ratioX,
  sliderpadvertical: 4 * ratioX,
  circlecheck: 23.5 * ratioX,
  checkbox: 19 * ratioX,
  followbuttonwidth: 110 * ratioX,
  followbuttonheight: 30 * ratioX,
  followspacing: 12 * ratioX,
  sendbuttonheight: 35 * ratioX,
  tabbar: 23 * ratioX,
  tabavatar: 28 * ratioX,
  logosize: 40 * ratioX,
  rightarrow: 35 * ratioX,
  dropdown: 26 * ratioX,
  taboffset: 750 * ratioY,
  userSearchModalHeight: 330 * ratioX,
  attachmentIconSize: 27 * ratioX,
};
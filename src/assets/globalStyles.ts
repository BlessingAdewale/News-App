import { StyleSheet } from 'react-native';
import { layout } from '@utils';
import { colors } from '@constants';

export const globalStyles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: '#fff' },
  container: {
    paddingHorizontal: layout.pixelSizeHorizontal(15),
    flexGrow: 1,
  },
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowAround: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  rowStart: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  rowEnd: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: '400',
    fontSize: layout.fontPixel(16),
  },
  ImageItem: {
    borderRadius: layout.fontPixel(20),
    height: layout.heightPixel(75),
    width: layout.heightPixel(75),
  },

  ImageItemOutline: {
    backgroundColor: colors.primaryWhite,
    borderColor: colors.secondaryBlue,
    borderWidth: layout.heightPixel(3),
    borderRadius: layout.fontPixel(20),
    height: layout.heightPixel(85),
    width: layout.heightPixel(85),
  },

  newsItem: {
    borderRadius: layout.fontPixel(5),
    height: layout.heightPixel(150),
    width: layout.heightPixel(80),
  },
});

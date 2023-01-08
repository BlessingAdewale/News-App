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
    borderRadius: layout.fontPixel(5),
    height: layout.heightPixel(15),
    width: layout.heightPixel(15),
  },

  ImageItemOutline: {
    backgroundColor: colors.primaryWhite,
    borderColor: colors.secondaryBlue,
    borderRadius: layout.fontPixel(5),
    height: layout.heightPixel(18),
    width: layout.heightPixel(18),
  },

  newsItem: {
    borderRadius: layout.fontPixel(5),
    height: layout.heightPixel(25),
    width: layout.heightPixel(15),
  },
});

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
  item: {
    backgroundColor: colors.primaryColorLight,
    borderRadius: layout.fontPixel(6),
    height: layout.heightPixel(40),
    width: layout.heightPixel(40),
  },
});

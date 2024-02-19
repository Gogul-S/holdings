import {ColorValue} from 'react-native';
import {COLORS} from './appColors';

export enum Colors {
  Primary = 'PRIMARY',
  Secondary = 'SECONDARY',
  PrimaryText = 'PRIMARY_TEXT',
  SecondaryText = 'SECONDARY_TEXT',
  Border = 'BORDER',
  BgLight = 'BACKGROUND_LIGHT',
  BgDark = 'BACKGROUND_LIGHT',
}

type ColorPallete = Record<Colors, ColorValue> & {
  [key: string]: ColorValue;
};

export const COLOR_PALLETE: ColorPallete = {
  PRIMARY: COLORS.purple,
  SECONDARY: COLORS.white,
  PRIMARY_TEXT: COLORS.black,
  SECONDARY_TEXT: COLORS.white,
  LIGHT_TEXT: COLORS.grey,
  BORDER: COLORS.grey,
  BACKGROUND_LIGHT: COLORS.white,
  BACKGROUND_DARK: COLORS.grey,
};

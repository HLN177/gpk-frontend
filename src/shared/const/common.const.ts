import type { Color, ColorType } from '@/types/widget';

export const COLOR: Record<string, ColorType> = {
  BLUE: 'blue',
  GREEN: 'green',
  BEIGE: 'beige',
  WHITE: 'white',
  BLACK: 'black'
};

export const COLOR_MAP = {
  [COLOR.BLUE]: '#2E3A8C',
  [COLOR.GREEN]: '#3B755F',
  [COLOR.BEIGE]: '#F2EBDB',
  [COLOR.WHITE]: '#FFFFFF',
  [COLOR.BLACK]: '#212121'
} as Record<ColorType, Color>;

export const COLOR_LIST = Object.entries(COLOR_MAP) as [ColorType, Color][];

export function genBadgeFontColor(bgColor: string) {
  switch (bgColor) {
    case COLOR.WHITE:
    case COLOR.BEIGE:
      return COLOR.GREEN;
    case COLOR.GREEN:
    case COLOR.BLACK:
    case COLOR.BLUE:
      return COLOR.WHITE;
    default:
      return COLOR.WHITE;
  }
}

export const COMPONENT_COLOR = '#3B755F';

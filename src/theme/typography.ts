export enum TextType {
  Title = 'TITLE',
  Subtitle = 'SUBTITLE',
  Body = 'BODY',
  Caption = 'CAPTION',
  Body1 = 'BODY_1',
}

interface TypographyFields {
  fontSize: number;
  fontWeight:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  // extra params like fontFamily, lineHeight & letterSpacing can also be added
}

type Typography = Record<TextType, TypographyFields> & {
  [key: string]: TypographyFields;
};

export const TYPOGRAPHY: Readonly<Typography> = {
  TITLE: {
    fontSize: 24,
    fontWeight: '600',
  },
  SUBTITLE: {
    fontSize: 18,
    fontWeight: '400',
  },
  BODY: {
    fontSize: 14,
    fontWeight: 'normal',
  },
  BODY_1: {
    fontSize: 14,
    fontWeight: '700',
  },
  CAPTION: {
    fontSize: 16,
    fontWeight: '700',
  },
};

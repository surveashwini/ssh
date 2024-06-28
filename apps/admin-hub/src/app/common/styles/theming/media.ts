import { css, CSSObject, Interpolation } from 'styled-components';

type Sizes = {
  mobile: number;
  tablet: number;
  desktop: number;
};

const sizes: Sizes = {
  mobile: 320,
  tablet: 768,
  desktop: 1024,
};

type Media = {
  [key in keyof Sizes]: (
    first: TemplateStringsArray | CSSObject,
    ...interpolations: Interpolation<{}>[]
  ) => ReturnType<typeof css>;
};

export const media: Media = Object.keys(sizes).reduce((acc, label) => {
  acc[label as keyof Sizes] = (
    first: TemplateStringsArray | CSSObject,
    ...interpolations: Interpolation<{}>[]
  ) => css`
    @media (max-width: ${sizes[label as keyof Sizes]}px) {
      ${css(first, ...interpolations)};
    }
  `;
  return acc;
}, {} as Media);

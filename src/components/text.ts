import styled from "styled-components";
import {
  color,
  ColorProps,
  compose,
  space,
  SpaceProps,
  typography,
  TypographyProps
} from "styled-system";

interface Props extends TypographyProps, SpaceProps, ColorProps {}

const props = compose(typography, space, color);

export const UIText = styled.span<Props>`
  ${props};
`;

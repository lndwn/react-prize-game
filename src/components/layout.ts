import styled from "styled-components";
import {
  background,
  BackgroundProps,
  borders,
  BordersProps,
  color,
  ColorProps,
  compose,
  flex,
  flexbox,
  FlexboxProps,
  FlexProps,
  grid,
  gridArea,
  GridAreaProps,
  GridProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  position,
  PositionProps
} from "styled-system";

interface Props
  extends SpaceProps,
    ColorProps,
    FlexProps,
    FlexboxProps,
    BordersProps,
    GridProps,
    GridAreaProps,
    BackgroundProps,
    LayoutProps,
    PositionProps {}

const props = compose(
  position,
  space,
  color,
  flex,
  flexbox,
  borders,
  grid,
  gridArea,
  background,
  layout
);

export const Block = styled.div<Props>`
  display: block;
  ${props};
`;

export const Inline = styled.div<Props>`
  display: flex;
  ${props};
`;

export const Stack = styled.div<Props>`
  display: flex;
  flex-direction: column;
  ${props};
`;

export const Grid = styled.div<Props>`
  display: grid;
  ${props};
`;

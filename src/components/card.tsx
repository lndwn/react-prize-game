import styled from "styled-components";
import {
  useSpring,
  animated,
  config,
  useTransition,
  SpringValue
} from "@react-spring/web";
import { Block } from "./layout";

const Button = styled(animated.button)`
  cursor: pointer;
  transition: transform 1s;
  transform-style: preserve-3d;
  position: relative;
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardFace = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;

  font-size: 4rem;
  line-height: 1;
`;

const CardFront = styled(CardFace)`
  background-color: ${({ theme }) => theme.colors.whites[0]};
  transform: rotateY(180deg);
`;

const CardBack = styled(CardFace)`
  background-color: ${({ theme }) => theme.colors.blacks[0]};
  color: ${({ theme }) => theme.colors.blacks[3]};
`;

interface CardProps {
  frontLabel: string;
  frontImage: string;
  backLabel: string;
  onClick: () => void;
  style?: {
    transform: SpringValue<string>;
  };
}

export const Card = (props: CardProps) => {
  return (
    <Button style={props.style} onClick={props.onClick}>
      <CardFront>
        <Block
          as="img"
          width="50%"
          src={props.frontImage}
          style={{ aspectRatio: "1/1" }}
        />
        {/* {props.frontLabel} */}
      </CardFront>
      <CardBack>
        {props.backLabel}
        {/* <Block
          position="absolute"
          bottom="1rem"
          right="1rem"
          style={{ fontSize: "1rem" }}
        >
          {props.frontLabel}
        </Block> */}
        <Block
          as="img"
          width="10%"
          position="absolute"
          bottom="1rem"
          right="1rem"
          src={props.frontImage}
          style={{ aspectRatio: "1/1" }}
        />
      </CardBack>
    </Button>
  );
};

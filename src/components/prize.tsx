import { Fragment } from "react";
import { Block, Inline, Stack } from "./layout";
import { UIText } from "./text";

interface PrizeProps {
  value: number;
  kind: string;
  imageUrl?: string;
  logoUrl?: string;
}

export const Prize = (props: PrizeProps) => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      bg="whites.0"
      borderRadius="1.5rem"
      p="1rem"
      overflow="hidden"
      width="256px"
    >
      {props.imageUrl && (
        <Block
          as="img"
          src={props.imageUrl}
          mb="1rem"
          width="100%"
          borderRadius="0.5rem"
          bg="whites.2"
          border="none"
          style={{ objectFit: "cover", aspectRatio: "3/2" }}
        />
      )}
      <Inline alignItems="center" justifyContent="center">
        {props.logoUrl && (
          <Block
            as="img"
            src={props.logoUrl}
            width="56px"
            height="56px"
            mr="0.5rem"
          />
        )}
        <UIText fontSize="3rem" mr="0.5rem">
          {new Intl.NumberFormat("en", {
            style: "currency",
            currency: "AUD",
            currencyDisplay: "narrowSymbol",
            minimumFractionDigits: 0
          }).format(props.value)}
        </UIText>
        <UIText>
          {props.kind.split(" ").map((k, i) => (
            <Fragment key={i}>
              {k}
              <br />
            </Fragment>
          ))}
        </UIText>
      </Inline>
    </Stack>
  );
};

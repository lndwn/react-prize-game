import { Block, Inline, Stack } from "../components/layout";
import { NavLink } from "../components/nav-link";
import { UIText } from "../components/text";
import { paths } from "./routes";

export const WelcomeView = () => {
  return (
    <Stack color="whites.0">
      <UIText as="h1" textAlign="center">
        Match &amp; Win
      </UIText>
      <UIText mb="0.5rem" as="p">
        Turn the cards, two by two
        <br />
        Until a pair is revealed to you
      </UIText>
      <UIText mb="0.5rem" as="p">
        Once you find a matching pair
        <br />
        You'll see your prize over there!
      </UIText>

      <Inline justifyContent="center" mt="2rem">
        <NavLink to={paths.play}>Play Now</NavLink>
      </Inline>
    </Stack>
  );
};

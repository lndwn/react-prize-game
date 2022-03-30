import { Block, Inline } from "../components/layout";
import { MuteButton } from "../components/mute-button";
import { NavLink } from "../components/nav-link";
import { paths } from "./routes";

export const NavigationView = () => {
  return (
    <Inline p="1rem" width="100%" justifyContent="space-between">
      <Block>
        <MuteButton />
      </Block>
      <Inline>
        <NavLink activeClassName="active" to={paths.welcome}>
          Home
        </NavLink>
        <NavLink activeClassName="active" to={paths.play}>
          Play
        </NavLink>
      </Inline>
      <Block width="1.5rem" />
    </Inline>
  );
};

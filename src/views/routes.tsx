import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { GameView } from "./game";
import { CongratsView } from "./congrats";
import { WelcomeView } from "./welcome";
import { NavigationView } from "./navigation";
import { animated, useTransition } from "@react-spring/web";
import { Stack, Grid, Inline } from "../components/layout";
import { useTheme } from "styled-components";
import { IsMutedProvider } from "../components/mute-context";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";

export const paths = {
  welcome: "/welcome",
  play: "/play",
  congrats: "/congrats"
};

export const Routes = () => {
  const theme = useTheme();
  const location = useLocation();
  const transitions = useTransition(location, {
    from: { transform: "translateY(-100px)", opacity: 0 },
    enter: { transform: "translateY(0px)", opacity: 1 },
    leave: { transform: "translateY(100px)", opacity: 0 }
  });

  const [width, height] = useWindowSize();
  return (
    <IsMutedProvider>
      <Grid
        flex="1"
        gridTemplateColumns="1fr"
        gridTemplateRows="auto max-content"
        gridTemplateAreas={`
        "content"
        "nav"
      `}
      >
        <Inline
          gridArea="content"
          justifyContent="center"
          alignItems="center"
          position="relative"
        >
          <Switch>
            <Route path={paths.congrats}>
              <Confetti width={width} height={height} />
            </Route>
          </Switch>
          {transitions((props, item) => (
            <animated.main
              style={{ ...props, position: "absolute", zIndex: 10 }}
            >
              <Switch location={item}>
                <Route path={paths.welcome}>
                  <WelcomeView />
                </Route>
                <Route path={paths.play}>
                  <GameView />
                </Route>
                <Route path={paths.congrats}>
                  <CongratsView />
                </Route>
                <Route>
                  <Redirect to={paths.welcome} />
                </Route>
              </Switch>
            </animated.main>
          ))}
        </Inline>
        <Inline gridArea="nav" as="nav" justifyContent="center">
          <NavigationView />
        </Inline>
      </Grid>
    </IsMutedProvider>
  );
};

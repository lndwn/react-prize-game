import { useLocation } from "react-router-dom";
import { NavLink as Link } from "../components/nav-link";
import { paths } from "./routes";
import { PRIZES } from "../data";
import { useEffect, useState } from "react";
import { Prize as PrizeType } from "../types";
import { Prize } from "../components/prize";
import { Block, Inline } from "../components/layout";
import { UIText } from "../components/text";
import { useAudio } from "../components/use-audio";
import { winnerUrl } from "../assets/audio";
import { useWindowSize } from "@react-hook/window-size";
import Confetti from "react-confetti";

export const CongratsView = () => {
  const location = useLocation();

  const [prize, setPrize] = useState<PrizeType | null>(null);
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const prizeId = params.get("prize");
    console.log(prizeId);
    if (prizeId) {
      const p = PRIZES.find((p) => p.id === prizeId);
      if (p) {
        console.log(p);
        setPrize(p);
      }
    }
  }, [location.search]);

  const winner = useAudio(winnerUrl, { volume: 0.7 });
  useEffect(() => {
    if (prize) {
      winner.play();
    }
  }, [prize]);

  return (
    <>
      {prize && (
        <>
          {/* <Confetti
            width={windowSize[0]}
            height={windowSize[1]}
            style={{ position: "fixed", top: "0px", left: "0px" }}
          /> */}

          <UIText as="h1" color="whites.0" textAlign="center">
            You've won a <br />
            {prize.name}!
          </UIText>
          <Inline justifyContent="center">
            <Prize
              value={prize.value}
              kind={prize.kind}
              imageUrl={prize.imageUrl}
              logoUrl={prize.logoUrl}
            />
          </Inline>
        </>
      )}
      <Inline justifyContent="center" mt="2rem">
        <Link to={paths.play}>Play Again</Link>
      </Inline>
    </>
  );
};

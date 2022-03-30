import { useEffect, useState } from "react";
import { Card } from "../components/card";
import { Block, Grid, Stack } from "../components/layout";
import { PRIZES } from "../data";
import { shuffle } from "../utils";
import { Card as CardType } from "../types";
import { nanoid } from "nanoid";
import * as images from "../assets/bitmaps";
import { useHistory } from "react-router-dom";
import { paths } from "./routes";
import { correctUrl, startUrl, waitingUrl, wrongUrl } from "../assets/audio";
import { useAudio } from "../components/use-audio";
import { useSprings } from "@react-spring/web";

const imgs: Record<string, string> = images;

const shuffledPrizes = shuffle(PRIZES);

const imageKeys = shuffle(Object.keys(imgs));

const createCardPair = (_: unknown, key: number): CardType[] => {
  return [
    {
      id: nanoid(),
      name: imageKeys[key],
      image: imgs[imageKeys[key]],
      prize: shuffledPrizes[key]
    },
    {
      id: nanoid(),
      name: imageKeys[key],
      image: imgs[imageKeys[key]],
      prize: shuffledPrizes[key]
    }
  ];
};

const initialCards = Array.from({ length: shuffledPrizes.length }).flatMap(
  createCardPair
);

export const GameView = () => {
  const [cards, setCards] = useState(shuffle(initialCards));
  const [heldCards, setHeldCards] = useState<string[] | null>(null);
  const [seen, setSeen] = useState<string[]>([]);

  const [springs, api] = useSprings(cards.length, (i) => ({
    from: { transform: "rotateY(0deg) scale(1)" },
    to: { transform: "rotateY(360deg) scale(1.1)" },
    duration: 200,
    delay: i * 200
  }));

  const backgroundMusic = useAudio(waitingUrl, { loop: true, volume: 0.7 });
  const gameStartMusic = useAudio(startUrl, {
    volume: 0.8,
    onEnded: () => {
      backgroundMusic.play();
      setCards(shuffle(initialCards));
      setHeldCards([]);
    }
  });

  useEffect(() => {
    if (heldCards !== null) {
      api.start((i) => ({
        to: {
          transform: heldCards.includes(cards[i].id)
            ? "rotateY(180deg) scale(1.1)"
            : "rotateY(360deg) scale(1)"
        },
        delay: 0
      }));
    }
  }, [heldCards]);

  useEffect(() => {
    gameStartMusic.play();
  }, []);

  const handleClick = (id: string) => () => {
    if (!heldCards) return;
    if (heldCards.length > 1) return;
    setHeldCards([...(heldCards ?? []), id]);
    setSeen([...seen, id]);
  };

  const getPrizeId = () => {
    const [id] = heldCards!;
    const found = cards.find((c) => c.id === id);
    return found?.prize?.id;
  };

  const history = useHistory();

  const correctMusic = useAudio(correctUrl);
  const handleWin = () => {
    correctMusic.play();
    setTimeout(() => {
      history.push(`${paths.congrats}/?prize=${getPrizeId()}`);
    }, 2000);
  };

  const cardsMatch = () => {
    if (!heldCards) return false;
    const [first] = heldCards;
    const firstName = cards.find((c) => c.id === first)?.name;
    if (
      heldCards.every((i) => {
        return cards.find((c) => c.id === i)?.name === firstName;
      })
    ) {
      return true;
    }
    return false;
  };

  const wrongMusic = useAudio(wrongUrl, { volume: 0.7 });
  useEffect(() => {
    if (heldCards && heldCards.length > 1) {
      if (cardsMatch()) {
        handleWin();
        return;
      }
      const timeoutId = setTimeout(() => {
        wrongMusic.play();
        setHeldCards([]);
      }, 2000);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [heldCards]);

  return (
    <Stack alignItems="center" justifyContent="center">
      <Grid
        as="ul"
        gridTemplateColumns="repeat(4, 128px)"
        gridTemplateRows="repeat(3, 128px)"
        gridGap="1.5rem"
        p="2rem"
        m="0rem"
      >
        {springs.map((spring, i) => (
          <Block
            as="li"
            m="0px"
            p="0px"
            key={cards[i].id}
            style={{ aspectRatio: "1/1", perspective: "600px" }}
          >
            <Card
              frontLabel={cards[i].name}
              backLabel="?"
              // isFlipped={heldCards.includes(card.id)}
              onClick={handleClick(cards[i].id)}
              frontImage={cards[i].image}
              style={spring}
            />
          </Block>
        ))}
      </Grid>
    </Stack>
  );
};

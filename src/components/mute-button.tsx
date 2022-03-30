import styled from "styled-components";
import { IconVolume, IconVolumeMute } from "../assets/icons";
import { Inline } from "./layout";
import { useIsMuted } from "./mute-context";
import { UIText } from "./text";

const Label = styled(Inline)`
  cursor: pointer;
  transition: color 150ms ease, background-color 150ms ease;

  :hover {
    background-color: ${({ theme }) => theme.colors.whites[0]};
    color: ${({ theme }) => theme.colors.blacks[0]};

    svg path {
      fill: ${({ theme }) => theme.colors.fadedBlue};
    }
  }
  svg {
    display: block;
  }
  svg path {
    transition: fill 150ms ease;
    fill: ${({ theme }) => theme.colors.whites[0]};
  }
`;

export const MuteButton = () => {
  const { isMuted, setIsMuted } = useIsMuted();

  return (
    <>
      <input
        id="global-mute"
        type="checkbox"
        checked={isMuted}
        onChange={(e) => setIsMuted(e.target.checked)}
        style={{ display: "none" }}
      />
      <Label
        as="label"
        alignItems="center"
        justifyContent="center"
        htmlFor="global-mute"
        width="2rem"
        height="2rem"
        borderWidth="2px"
        borderStyle="solid"
        borderColor="whites.0"
        borderRadius="999px"
        color="whites.0"
      >
        {isMuted ? <IconVolumeMute /> : <IconVolume fill="#fff" />}
      </Label>
    </>
  );
};

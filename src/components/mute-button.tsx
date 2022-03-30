import styled from "styled-components";
import { IconVolume, IconVolumeMute } from "../assets/icons";
import { Inline } from "./layout";
import { useIsMuted } from "./mute-context";
import { UIText } from "./text";

const Label = styled(Inline)`
  cursor: pointer;
  svg {
    display: block;
  }
  svg path {
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
        borderWidth="1px"
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

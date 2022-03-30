import { useEffect, useRef, useState } from "react";
import { useIsMuted } from "./mute-context";

type TransportState = "PLAYING" | "PAUSED" | "STOPPED";

interface UseAudioOptions {
  volume: number;
  mute: boolean;
  loop: boolean;
  onEnded?: () => void;
}

const defaults: UseAudioOptions = {
  volume: 1,
  mute: false,
  loop: false
};

export const useAudio = (url: string, options?: Partial<UseAudioOptions>) => {
  const opts = {
    ...defaults,
    ...options
  };
  const audioRef = useRef(new Audio());
  const { isMuted } = useIsMuted();

  useEffect(() => {
    audioRef.current.volume = opts.volume;
    audioRef.current.muted = isMuted ?? opts.mute;
    audioRef.current.loop = opts.loop;
  }, [opts]);

  const [transportState, setTransportState] = useState<TransportState>(
    "STOPPED"
  );

  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(audioRef.current.duration);
  const [progress, setProgress] = useState<number>(0);
  const [canPlay, setCanPlay] = useState<boolean>(false);

  useEffect(() => {
    setProgress(currentTime / duration);
  }, [currentTime, duration]);

  useEffect(() => {
    try {
      audioRef.current.src = url;
    } catch (err) {
      console.error(err);
      return;
    }
    const handleCanPlay = () => setCanPlay(true);
    const handlePlay = () => setTransportState("PLAYING");
    const handlePause = () => setTransportState("PAUSED");
    const handleEnded = () => {
      setTransportState("STOPPED");
      if (opts.onEnded) opts.onEnded();
    };
    const handleTimeUpdate = () => setCurrentTime(audioRef.current.currentTime);
    const handleDurationChange = () => setDuration(audioRef.current.duration);

    audioRef.current.addEventListener("canplay", handleCanPlay);
    audioRef.current.addEventListener("play", handlePlay);
    audioRef.current.addEventListener("pause", handlePause);
    audioRef.current.addEventListener("ended", handleEnded);
    audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
    audioRef.current.addEventListener("durationchange", handleDurationChange);

    return () => {
      audioRef.current.removeEventListener("canplay", handleCanPlay);
      audioRef.current.removeEventListener("play", handlePlay);
      audioRef.current.removeEventListener("pause", handlePause);
      audioRef.current.removeEventListener("ended", handleEnded);
      audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
      audioRef.current.removeEventListener(
        "durationchange",
        handleDurationChange
      );
    };
  }, [url]);

  const play = () => {
    try {
      audioRef.current.play();
    } catch (err) {
      console.error(err);
    }
  };

  const pause = () => {
    try {
      audioRef.current.pause();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if ("mediaSession" in navigator) {
      navigator.mediaSession.setActionHandler("play", play);
      navigator.mediaSession.setActionHandler("pause", pause);
    }
    return () => {
      audioRef.current.pause();
      if ("mediaSession" in navigator) {
        navigator.mediaSession.setActionHandler("play", null);
        navigator.mediaSession.setActionHandler("pause", null);
      }
    };
  }, []);

  return {
    canPlay,
    play,
    pause,
    transportState,
    currentTime,
    duration,
    progress
  } as const;
};

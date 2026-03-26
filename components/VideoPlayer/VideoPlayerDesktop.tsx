"use client";
import { Dispatch, SetStateAction } from "react";
import VideoPlayer from "./VideoPlayer";

interface VideoPlayerDesktopProps {
  playIntro: boolean;
  setPlayIntro: Dispatch<SetStateAction<boolean>>;
}
export default function VideoPlayerDesktop(props: VideoPlayerDesktopProps) {
  return (
    <>
      <VideoPlayer {...props} />
    </>
  );
}

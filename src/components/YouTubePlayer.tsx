import React from "react";
import ReactPlayer from "react-player";

interface Props {
  url: string;
}

const YouTubePlayer: React.FC<Props> = ({ url }) => (
  <div className="aspect-video w-full overflow-hidden rounded-xl shadow-lg">
    <ReactPlayer src={url} controls width="100%" height="100%" />
  </div>
);

export default YouTubePlayer;

import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";

import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
type MediaItem = {
  name: string;
  resource_type: "video" | "image";
  resource_value: string;
  thumbnail_url?: string;
};

type MediaGalleryProps = {
  media: MediaItem[];
};

const MediaGallery: React.FC<MediaGalleryProps> = ({ media }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const nextMedia = () => {
    setSelectedIndex((prev) => (prev + 1) % media.length);
  };

  const prevMedia = () => {
    setSelectedIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  // Scroll active thumbnail into view when index changes
  useEffect(() => {
    thumbnailRefs.current[selectedIndex]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [selectedIndex]);

  const selectedMedia = media[selectedIndex];

  const getMediaThumbnail = (item: MediaItem) =>
    item.resource_type === "video" ? item.thumbnail_url : item.resource_value;

  return (
    <div className="mx-auto w-full overflow-hidden lg:max-w-sm">
      {/* Main Preview */}
      <div className="relative h-56 w-full bg-black">
        {selectedMedia.resource_type === "video" ? (
          <ReactPlayer
            src={`https://www.youtube.com/watch?v=${selectedMedia.resource_value}`}
            width="100%"
            height="100%"
            controls
          />
        ) : (
          <img
            src={selectedMedia.resource_value}
            alt="Selected media"
            className="h-full w-full object-cover"
          />
        )}

        {/* Navigation Arrows */}
        <button
          onClick={prevMedia}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/70 p-1 text-center shadow hover:bg-white"
        >
          <RiArrowLeftSLine className="h-6 w-6 text-center text-black" />
        </button>
        <button
          onClick={nextMedia}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/70 p-1 text-center shadow hover:bg-white"
        >
          <RiArrowRightSLine className="h-6 w-6 text-black" />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="mt-2 flex flex-nowrap justify-start gap-2 overflow-x-auto px-2">
        {media.map((item, index) => (
          <button
            key={index}
            ref={(el) => {
              thumbnailRefs.current[index] = el;
            }}
            onClick={() => setSelectedIndex(index)}
            className={`h-16 w-28 flex-shrink-0 overflow-hidden rounded-md border-2 ${
              index === selectedIndex ? "border-green-500" : "border-gray-300"
            }`}
          >
            <img
              src={getMediaThumbnail(item)}
              alt={`Thumbnail ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default MediaGallery;

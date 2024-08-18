import React from "react";
import Image from "next/image";

interface CaptionedImageProps {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}

export const CaptionedImage: React.FC<CaptionedImageProps> = ({
  src,
  alt,
  caption,
  width,
  height,
}) => {
  return (
    <figure className="my-8">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="rounded-lg"
      />
      <figcaption className="mt-2 text-center text-sm italic text-gray-500">
        {caption}
      </figcaption>
    </figure>
  );
};

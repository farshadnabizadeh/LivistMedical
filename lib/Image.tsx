import { FC, forwardRef } from "react";
import NextImage, { ImageProps as NextImageProps } from "next/image";

export type UiImageProps = NextImageProps & {
  aspectW?: number;
  aspectH?: number;
};

const aspectWClasses: Record<number, string> = {
  1: "aspect-w-1",
  2: "aspect-w-2",
  3: "aspect-w-3",
  4: "aspect-w-4",
  5: "aspect-w-5",
  6: "aspect-w-6",
  7: "aspect-w-7",
  8: "aspect-w-8",
  9: "aspect-w-9",
  10: "aspect-w-10",
  11: "aspect-w-11",
  12: "aspect-w-12",
  13: "aspect-w-13",
  14: "aspect-w-14",
  15: "aspect-w-15",
  16: "aspect-w-16",
};

const aspectHClasses: Record<number, string> = {
  1: "aspect-h-1",
  2: "aspect-h-2",
  3: "aspect-h-3",
  4: "aspect-h-4",
  5: "aspect-h-5",
  6: "aspect-h-6",
  7: "aspect-h-7",
  8: "aspect-h-8",
  9: "aspect-h-9",
  10: "aspect-h-10",
  11: "aspect-h-11",
  12: "aspect-h-12",
  13: "aspect-h-13",
  14: "aspect-h-14",
  15: "aspect-h-15",
  16: "aspect-h-16",
};

const UiImage: FC<UiImageProps> = forwardRef((props, ref) => {
  const { aspectW, aspectH, ...rest } = props;

  if (typeof aspectW === "number" && typeof aspectH === "number") {
    return (
      <div className={`${aspectWClasses[aspectW]} ${aspectHClasses[aspectH]}`}>
        <div>
          <div className="relative w-full h-full">
            <NextImage
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              {...rest}
            />
          </div>
        </div>
      </div>
    );
  }

  return <NextImage {...rest} />;
});


  UiImage.displayName = "UiImage";


export default UiImage;

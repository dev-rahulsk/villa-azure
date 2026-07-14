import { useState } from "react";
import type { CSSProperties, ImgHTMLAttributes } from "react";
import { IMAGE_PLACEHOLDERS } from "@/lib/constants/image-placeholders";

interface ImageProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "width" | "height"> {
  src: string;
  alt: string;
  width?: number | `${number}`;
  height?: number | `${number}`;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
}

export default function Image({
  src,
  alt,
  width,
  height,
  fill,
  priority,
  loading,
  style,
  onLoad,
  ...props
}: ImageProps) {
  const [loaded, setLoaded] = useState(false);
  const placeholder = fill ? IMAGE_PLACEHOLDERS[src] : undefined;

  const fillStyle: CSSProperties | undefined = fill
    ? {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
      }
    : undefined;

  const img = (
    <img
      src={src}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      loading={priority ? "eager" : (loading ?? "lazy")}
      onLoad={(event) => {
        setLoaded(true);
        onLoad?.(event);
      }}
      style={{
        ...fillStyle,
        opacity: placeholder && !loaded ? 0 : 1,
        transition: placeholder ? "opacity 400ms ease" : undefined,
        ...style,
      }}
      {...props}
    />
  );

  if (!placeholder) {
    return img;
  }

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${placeholder})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(20px)",
          transform: "scale(1.1)",
          opacity: loaded ? 0 : 1,
          transition: "opacity 400ms ease",
        }}
      />
      {img}
    </div>
  );
}

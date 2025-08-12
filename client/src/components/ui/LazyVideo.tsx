import React, { useEffect, useRef, useState } from "react";

type LazyVideoProps = {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  playsInline?: boolean;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLVideoElement>) => void;
};

export function LazyVideo({
  src,
  poster,
  className,
  autoPlay = false,
  muted = false,
  loop = false,
  controls = false,
  playsInline = true,
  style,
  onClick,
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const element = videoRef.current;
    if (!element) return;

    let observer: IntersectionObserver | null = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer?.disconnect();
            observer = null;
          }
        });
      },
      { root: null, rootMargin: "200px", threshold: 0.01 },
    );

    observer.observe(element);

    return () => {
      observer?.disconnect();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      poster={poster}
      muted={muted}
      loop={loop}
      controls={controls}
      playsInline={playsInline}
      // Avoid fetching full file up-front; we'll attach <source> only when visible
      preload="none"
      // Only enable autoplay once the element is in view to avoid background fetch
      autoPlay={shouldLoad && autoPlay}
      style={style}
      onClick={onClick}
    >
      {shouldLoad ? <source src={src} type="video/mp4" /> : null}
      Your browser does not support the video tag.
    </video>
  );
}

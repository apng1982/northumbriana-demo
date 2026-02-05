import React, { JSX, useMemo, useState } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

import PhotoAlbum, { type Photo } from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import styles from "./styles.module.css";

type GalleryPhoto = Photo & { filename: string };

function loadGalleryPhotos(): GalleryPhoto[] {
  const req = require.context(
      "@site/static/img/gallery",
      false,
      /\.(png|jpe?g|gif|webp|svg)$/i
  );

  return req
      .keys()
      .map((k) => k.replace(/^\.\//, ""))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .map((filename) => {
        const src = `/img/gallery/${filename}`;
        const alt = filename.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " ");
        return { filename, src, alt, width: 4, height: 3 };
      });
}

export default function Gallery(): JSX.Element {
  const base = useBaseUrl("/");
  const withBase = (p: string) =>
      p.startsWith("/") ? `${base.replace(/\/$/, "")}${p}` : p;

  const photos = useMemo(() => loadGalleryPhotos(), []);
  const [index, setIndex] = useState(-1);

  return (
      <>
        <PhotoAlbum
            layout="columns"
            photos={photos.map((p) => ({ ...p, src: withBase(p.src) }))}
            columns={(w) => (w < 500 ? 2 : w < 900 ? 3 : 4)}
            padding={0}
            spacing={12}
            onClick={({ index }) => setIndex(index)}
            componentsProps={{
              container: { className: styles.albumContainer },
              image: ({ imageProps }) => ({
                ...imageProps,
                className: styles.thumbImg,
              }),
            }}
        />

        <Lightbox
            open={index >= 0}
            close={() => setIndex(-1)}
            index={index}
            slides={photos.map((p) => ({
              src: withBase(p.src),
              alt: p.alt,
            }))}
            render={{
              slide: ({ slide }) => (
                  <img
                      src={slide.src}
                      alt={slide.alt}
                      style={{
                        maxWidth: "400vw",
                        maxHeight: "400vh",
                        width: "auto",
                        height: "auto",
                        objectFit: "contain",
                      }}
                  />
              ),
            }}
        />


      </>
  );
}

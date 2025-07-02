'use client';
import { useEffect, useState } from 'react';

interface Gallery {
  _id: string;
  images: { url: string; caption?: string }[];
}

export default function GalleryGrid() {
  const [galleries, setGalleries] = useState<Gallery[]>([]);
  useEffect(() => {
    fetch('/api/galleries')
      .then((res) => res.json())
      .then(setGalleries);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
      {galleries.flatMap((g) =>
        g.images.map((img) => (
          <img key={img.url} src={img.url} alt={img.caption} className="w-full h-auto" />
        ))
      )}
    </div>
  );
}

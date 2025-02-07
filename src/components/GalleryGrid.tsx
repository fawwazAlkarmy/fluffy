import Image from "next/image";

export default function GalleryGrid() {
  const images = [
    { src: "/contact.svg", alt: "Gallery image 1" },
    { src: "/g1.svg", alt: "Gallery image 2" },
    { src: "/g2.svg", alt: "Gallery image 3" },
    { src: "/g3.svg", alt: "Gallery image 4" },
    { src: "/g4.svg", alt: "Gallery image 5" },
    { src: "/g5.svg", alt: "Gallery image 6" },
    { src: "/g6.svg", alt: "Gallery image 7" },
    { src: "/g7.svg", alt: "Gallery image 8" },
    { src: "/g8.svg", alt: "Gallery image 9" },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg"
          >
            <div className="relative w-full aspect-square">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="rounded-lg object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Overlay inside the image container */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

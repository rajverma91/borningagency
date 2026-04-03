"use client";


const images = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
  "/images/img5.jpg",
];

export default function ImageGallery() {
  return (
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div className="flex gap-6 px-4 py-6 min-w-max">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative w-[320px] h-[220px] rounded-2xl overflow-hidden flex-shrink-0"
          >
            <img
              src={src}
              alt={`gallery-${index}`}
              fill
              className="object-cover hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
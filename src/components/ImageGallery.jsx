"use client";


const images = [
   "../src/img/13.jpg",
  "../src/img/14.jpg",
  "../src/img/15.jpg",
  "../src/img/16.jpg",
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
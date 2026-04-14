"use client";


const images = [
  "https://res.cloudinary.com/deydhfxgg/image/upload/v1776191238/who-we-are01_wjulhk.jpg",
  "https://res.cloudinary.com/deydhfxgg/image/upload/v1776191238/who-we-are02_hsgpas.jpg",
  "https://res.cloudinary.com/deydhfxgg/image/upload/v1776191238/who-we-are03_yxml5b.jpg",
  "https://res.cloudinary.com/deydhfxgg/image/upload/v1776191238/who-we-are04_rx0lch.jpg",
];

export default function ImageGallery() {
  return (
    <div className="w-full overflow-hidden"> 
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
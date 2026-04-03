"use client";


const images = [
  "https://res.cloudinary.com/deydhfxgg/image/upload/v1775227385/w12_d4m3b1.png",
  "https://res.cloudinary.com/deydhfxgg/image/upload/v1775227385/w16_rywiwf.png",
  "https://res.cloudinary.com/deydhfxgg/image/upload/v1775227385/w13_ghnd19.png",
  "https://res.cloudinary.com/deydhfxgg/image/upload/v1775227383/w15_qkkvkv.png",
];

export default function ImageGallery() {
  return (
    <div className="w-full overflow-hidden"> ">
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
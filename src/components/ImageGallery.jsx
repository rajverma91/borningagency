"use client";


const images = [
   "https://framerusercontent.com/images/kFPS1Qb6vl1AWJTvqXVAT5vhxWY.png",
  "https://framerusercontent.com/images/BReNkikWaCJZF2Bj04jLXGn26w.png",
  "https://framerusercontent.com/images/MI3z40IAAs8YpJ39EtPI479jW4A.png",
  "https://framerusercontent.com/images/DLrAVWztrtoKQ8NSNMg1Uaiurw.png",
  "https://framerusercontent.com/images/82Sov4wFOHIoNVFxGYqBQSAX5s.png",
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
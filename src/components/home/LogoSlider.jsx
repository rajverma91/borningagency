"use client";

export default function LogoSlider() {
  const logos = [
    "https://res.cloudinary.com/deydhfxgg/image/upload/q_auto/f_auto/v1777406061/1726578733-john-lewis-logo-black_qxedal.svg",
    "https://res.cloudinary.com/deydhfxgg/image/upload/q_auto/f_auto/v1777406060/1726578732-amazon-logo-logo-black_s4fcsw.svg",
    "https://res.cloudinary.com/deydhfxgg/image/upload/q_auto/f_auto/v1777406061/1726578733-laithwaites-logo-black_kgzde4.svg",
    "https://res.cloudinary.com/deydhfxgg/image/upload/q_auto/f_auto/v1777406059/1726578730-specsavers-logo-black_bd0ob5.svg",
    "https://res.cloudinary.com/deydhfxgg/image/upload/q_auto/f_auto/v1777406060/1726578730-sprots-direct-logo-black_wunq18.svg",
    "https://res.cloudinary.com/deydhfxgg/image/upload/q_auto/f_auto/v1777406060/1726578730-xero-logo-black_l8dmpr.svg",
    "https://res.cloudinary.com/deydhfxgg/image/upload/q_auto/f_auto/v1777406059/1726578730-reed-logo-black_u1pdkn.svg",
    "https://res.cloudinary.com/deydhfxgg/image/upload/q_auto/f_auto/v1777406058/1726578730-itvx-logo-black_or1pv1.svg",
    "https://res.cloudinary.com/deydhfxgg/image/upload/q_auto/f_auto/v1777406057/1726578730-bighams-logo-logo-black_gcl7mx.svg",
    "https://res.cloudinary.com/deydhfxgg/image/upload/q_auto/f_auto/v1777406057/1725360722-waitrose_lxuqng.svg",
    "https://res.cloudinary.com/deydhfxgg/image/upload/q_auto/f_auto/v1777406057/1726578729-halfords-logo-black_pnsquq.svg",
  ];

  return (
    <section className="logo-slider overflow-hidden py-20 bg-white">
      <div className="slider-track flex w-max gap-12 animate-scroll items-center">
        {logos.concat(logos).map((logo, index) => (
          <div
            className="flex items-center justify-center min-w-[140px]"
            key={index}
          >
            <img
              src={logo}
              alt="Brand Logo"
              className="w-[90px] h-auto object-contain opacity-80 hover:opacity-100 transition"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
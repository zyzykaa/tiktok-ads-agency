import React from 'react';

export default function LogoMarquee() {
  const logos = [
    "https://framerusercontent.com/images/fKJnaZjkIgKjvrP3sM5x9vTS4.png?width=149&height=43",
    "https://framerusercontent.com/images/s7CS1vBA3mze35Gy9ZMq3pgII4.png?width=329&height=133",
    "https://framerusercontent.com/images/pHFi86AZoj4MY10AFiIlnoAnFeI.png?width=130&height=66",
    "https://framerusercontent.com/images/sf3tEfTyhQJeMcgO5338KyKy4.png?scale-down-to=512&width=5727&height=1897",
    "https://framerusercontent.com/images/Bv1ZfwFkinPHQpUJKy23736eXYM.png?width=168&height=41",
    "https://framerusercontent.com/images/xFzcVr0s7g6lmlyk5qZhdVFBw.png?width=500&height=94",
    "https://framerusercontent.com/images/QqEbXwPEuanz3A0sa5UpCJRkgUk.png?width=858&height=162",
    "https://framerusercontent.com/images/LRZz20U1DjrZVvq0GrKUXtvUyAM.png?width=184&height=51",
    "https://framerusercontent.com/images/Hoie7evPF1uv7VZQw5qOlv4dGSw.png?width=600&height=120",
    "https://framerusercontent.com/images/sdZLyiz3rzky2omQNFT3p5KJSEc.png?width=2000&height=408",
    "https://framerusercontent.com/images/9Y54qCjvH7YcLQSWRfouNXB8M.png?width=1255&height=132",
    "https://framerusercontent.com/images/IQNRIkNycrbgtzMaMkUG0OVFKQ.png?width=154&height=15",
    "https://framerusercontent.com/images/QVekfbM3Yd1MwQjIjVgqhhyd68.png?width=1500&height=200",
    "https://framerusercontent.com/images/X64SXMWJyQGeV4EuaHcXjZeG0.png?width=700&height=155",
    "https://framerusercontent.com/images/fMJkqqTcMKw3O3s70IdSO9epnDk.png?width=113&height=33"
  ];

  return (
    <section className="marquee relative flex overflow-hidden bg-surface border-y border-outline-variant/30 py-12 select-none">
      <div className="absolute top-0 left-0 w-24 md:w-40 h-full bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-24 md:w-40 h-full bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none"></div>

      <div className="absolute top-2 w-full text-center z-20">
        <p className="text-[10px] md:text-xs font-bold text-on-surface-variant uppercase tracking-[0.25em]">
          Infrastructure integrated with industry leaders
        </p>
      </div>

      <div className="marquee-track relative z-0 flex w-max items-center mt-10 min-h-[48px]">
        {[...logos, ...logos].map((src, index) => {
          const isPrimary = index < logos.length;
          return (
          <div key={index} className="flex justify-center items-center px-12 md:px-20">
            <img
              src={src}
              alt={`Partner logo ${index + 1}`}
              className="h-10 md:h-12 max-w-[200px] object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 dark:invert dark:opacity-80 dark:hover:opacity-100"
              loading={isPrimary ? "eager" : "lazy"}
              fetchpriority={isPrimary ? "high" : "auto"}
              decoding={isPrimary ? "sync" : "async"}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        )})}
      </div>
    </section>
  );
}

import React, { useState } from "react";
import { FaMapMarkerAlt, FaChevronUp, FaChevronDown } from "react-icons/fa";

const cards = [
  // Card 1
  {
    content: (
      <div className="flex flex-col justify-center items-center gap-4 h-full w-full text-center animate-fadein leading-relaxed sm:leading-loose md:leading-loose">
        <h1 className="text-base sm:text-lg md:text-2xl font-bold font-serif mb-1 text-center text-brown-900 drop-shadow-lg break-words">Hello, my name is Muhamad Syarif</h1>
        <div className="flex items-center gap-2 text-brown-700 text-xs sm:text-sm mb-1 animate-bounce justify-center leading-relaxed sm:leading-loose md:leading-loose">
          <FaMapMarkerAlt className="text-red-400 animate-pulse" />
          <span className="text-brown-700">Based in Jakarta, Indonesia</span>
        </div>
        <div className="text-xs sm:text-sm text-brown-700 font-mono mb-2 text-center break-words leading-relaxed sm:leading-loose md:leading-loose">UI/UX Designer, Frontend Developer, and Product Manager.</div>
      </div>
    ),
  },
  // Card 2
  {
    content: (
      <div className="flex flex-col justify-center items-center h-full w-full text-center animate-fadein">
        <div className="font-bold italic text-xs sm:text-sm md:text-base text-center text-yellow-900 bg-yellow-100/80 rounded-lg px-2 py-4 sm:px-4 sm:py-6 shadow-sm drop-shadow-lg break-words leading-relaxed sm:leading-loose md:leading-loose">
          "I know how it feels to have an idea and not know where to begin.<br/>
          I know what it’s like to feel unsure if someone will understand your vision or worse, not care enough."
        </div>
      </div>
    ),
  },
  // Card 3
  {
    content: (
      <div className="flex flex-col justify-center items-center h-full w-full text-center animate-fadein">
        <div className="text-xs sm:text-sm md:text-base text-brown-900 text-center drop-shadow-lg break-words leading-relaxed sm:leading-loose md:leading-loose">
          That’s why I develop product the way I do. With listening ears. With questions before mockups. With empathy over ego.
        </div>
      </div>
    ),
  },
  // Card 4
  {
    content: (
      <div className="flex flex-col justify-center items-center h-full w-full text-center animate-fadein">
        <div className="text-xs sm:text-sm md:text-base text-brown-900 text-center drop-shadow-lg break-words leading-relaxed sm:leading-loose md:leading-loose">
          I’ve worked with companies, startups, brands, and people like you! People with passion, sometimes stuck, sometimes lost, but always with something worth building.
        </div>
      </div>
    ),
  },
  // Card 5
  {
    content: (
      <div className="flex flex-col justify-center items-center h-full w-full text-center animate-fadein">
        <div className="text-xs sm:text-sm md:text-base text-brown-900 text-center drop-shadow-lg break-words leading-relaxed sm:leading-loose md:leading-loose">
          If you’re here, maybe you don’t just want a polished website or app.<br/>
          Maybe you want someone who gets it.
        </div>
      </div>
    ),
  },
  // Card 6
  {
    content: (
      <div className="flex flex-col justify-center items-center gap-6 h-full w-full text-center animate-fadein">
        <div className="text-xs sm:text-sm md:text-base text-brown-900 text-center drop-shadow-lg break-words leading-relaxed sm:leading-loose md:leading-loose">
          Let’s have a real conversation. And together, we’ll make something that feels like home—for you and your potential users.
        </div>
        <a
          href="https://calendly.com/syarifamhar/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 sm:px-6 sm:py-3 bg-brown-700 text-white rounded-full font-semibold shadow hover:bg-brown-800 transition text-xs sm:text-sm md:text-lg"
        >
          Book a Call
        </a>
      </div>
    ),
  },
];

export default function Carousel({ cardBg = "bg-white/70" }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for down, -1 for up

  const goUp = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + cards.length) % cards.length);
  };
  const goDown = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % cards.length);
  };
  const goTo = (idx) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  // Only show prev, current, next
  const prevIdx = (current - 1 + cards.length) % cards.length;
  const nextIdx = (current + 1) % cards.length;

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[70vh]">
      <div
        className={`relative w-full min-w-0 max-w-[95vw] sm:max-w-[40rem] md:max-w-[60rem] lg:max-w-[72rem] min-h-[60vh] flex flex-col items-center justify-center p-2 sm:p-4 md:p-8 bg-transparent rounded-2xl sm:rounded-3xl transition-all duration-500`}
        style={{ boxShadow: "none", border: "none" }}
      >
        {/* Arrow controls on the right, glassy container */}
        <div className="absolute right-2 md:right-4 top-[70%] md:top-1/2 -translate-y-1/2 md:-translate-y-1/2 flex flex-col gap-4 z-30 bg-white/60 backdrop-blur-lg rounded-full border border-white/40 shadow-lg p-1 md:p-2">
          <button
            aria-label="Previous"
            onClick={goUp}
            className="mb-2 bg-white/40 hover:bg-white/70 text-brown-700 rounded-full p-2 shadow transition border border-white/30"
          >
            <FaChevronUp size={20} />
          </button>
          <button
            aria-label="Next"
            onClick={goDown}
            className="bg-white/40 hover:bg-white/70 text-brown-700 rounded-full p-2 shadow transition border border-white/30"
          >
            <FaChevronDown size={20} />
          </button>
        </div>
        <div className="relative w-full flex flex-col items-center justify-center min-h-[300px] h-[340px] overflow-visible" style={{perspective:'1200px'}}>
          {/* Previous Card */}
          <div
            className={`absolute left-1/2 top-1/2 z-10 transition-all duration-500 ease-in-out card-stack ${direction === -1 ? 'slide-down' : ''}`}
            style={{
              transform: `translate(-50%, -50%) scale(0.92) translateY(60px) rotateX(8deg)`,
              opacity: 0.5,
              pointerEvents: 'none',
              filter: 'blur(1.5px)',
            }}
            key={`prev-${prevIdx}-${current}`}
          >
            <div className={`w-full min-w-[90vw] max-w-[95vw] sm:min-w-0 sm:max-w-[40rem] md:max-w-[60rem] lg:max-w-[72rem] min-h-[60vh] p-2 sm:p-4 md:p-8 flex flex-col justify-center items-center ${cardBg} backdrop-blur-lg rounded-2xl sm:rounded-3xl shadow-2xl border border-white/30`}>{cards[prevIdx].content}</div>
          </div>
          {/* Current Card */}
          <div
            className={`absolute left-1/2 top-1/2 z-20 transition-all duration-500 ease-in-out card-stack ${direction === 1 ? 'slide-up' : direction === -1 ? 'slide-down' : ''}`}
            style={{
              transform: `translate(-50%, -50%) scale(1) translateY(0px) rotateX(0deg)`,
              opacity: 1,
              filter: 'none',
            }}
            key={`current-${current}`}
          >
            <div className={`w-full min-w-[90vw] max-w-[95vw] sm:min-w-0 sm:max-w-[40rem] md:max-w-[60rem] lg:max-w-[72rem] min-h-[60vh] p-2 sm:p-4 md:p-8 flex flex-col justify-center items-center ${cardBg} backdrop-blur-lg rounded-2xl sm:rounded-3xl shadow-2xl border border-white/30`}>{cards[current].content}</div>
          </div>
          {/* Next Card */}
          <div
            className={`absolute left-1/2 top-1/2 z-0 transition-all duration-500 ease-in-out card-stack ${direction === 1 ? 'slide-up' : ''}`}
            style={{
              transform: `translate(-50%, -50%) scale(0.92) translateY(-60px) rotateX(-8deg)`,
              opacity: 0.5,
              pointerEvents: 'none',
              filter: 'blur(1.5px)',
            }}
            key={`next-${nextIdx}-${current}`}
          >
            <div className={`w-full min-w-[90vw] max-w-[95vw] sm:min-w-0 sm:max-w-[40rem] md:max-w-[60rem] lg:max-w-[72rem] min-h-[60vh] p-2 sm:p-4 md:p-8 flex flex-col justify-center items-center ${cardBg} backdrop-blur-lg rounded-2xl sm:rounded-3xl shadow-2xl border border-white/30`}>{cards[nextIdx].content}</div>
          </div>
        </div>
        <div className="flex justify-center gap-2 mt-6 z-30">
          {cards.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className={`w-3 h-3 rounded-full border-2 border-brown-700 transition-all duration-300 ${
                idx === current ? "bg-brown-700 scale-125" : "bg-brown-200"
              }`}
              aria-label={`Go to card ${idx + 1}`}
            />
          ))}
        </div>
      </div>
      <style>{`
        .card-stack {
          will-change: transform, opacity;
        }
        .slide-up {
          animation: slideUp 0.5s cubic-bezier(.4,0,.2,1);
        }
        .slide-down {
          animation: slideDown 0.5s cubic-bezier(.4,0,.2,1);
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translate(-50%, 40px) scale(1) rotateX(0deg); }
          to { opacity: 1; transform: translate(-50%, 0) scale(1) rotateX(0deg); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translate(-50%, -40px) scale(1) rotateX(0deg); }
          to { opacity: 1; transform: translate(-50%, 0) scale(1) rotateX(0deg); }
        }
      `}</style>
    </div>
  );
} 
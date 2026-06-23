"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect, useState } from "react";

export default function LandingPageTyla() {
  const birthYear = 1999;
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;

  const [rank, setRank] = useState<any>(null);
  const [clicked, setClicked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/opgg");
        const data = await res.json();
        setRank(data);
      } catch (err) {
        console.error("Failed to load OP.GG data", err);
      }
    }

    load();
  }, []);

  // ✅ Check localStorage on load
  useEffect(() => {
    const stored = localStorage.getItem("TylaNudeClicked");

    if (stored === "true") {
      setClicked(true);
      setShowPopup(true);
    }
  }, []);

  const handleClick = () => {
    localStorage.setItem("TylaNudeClicked", "true");
    setClicked(true);
    setShowPopup(true);
  };

  return (
    <div className="section__tyla-landing flex min-h-screen flex-col items-center justify-center p-4 relative">

      {/* 🔥 POPUP */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="rounded-2xl bg-white p-6 text-black shadow-xl w-[300px] text-center">
            <h2 className="text-lg font-bold">Notice</h2>
            <p className="mt-2 text-sm">
              You've clicked to see his nudes 👀
            </p>

            <button
              onClick={() => {
                window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
              }}
              className="mt-4 btn"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <h1 className="mb-2 text-4xl font-bold text-white">
        Swipe Through Tyla&apos;s Pictures
      </h1>

      <div className="flex w-full max-w-5xl flex-col items-center gap-6 md:flex-row md:justify-center md:items-start">

        {/* SWIPER CARD */}
        <div className="relative h-[600px] w-[340px] overflow-hidden rounded-3xl shadow-2xl">
          <div className="h-full w-full">
            <Swiper slidesPerView={1} className="h-full w-full">

              <SwiperSlide className="h-full">
                <div className="relative h-full w-full">
                  <Image src="/images/tyla-profile.png" alt="Tyla" fill className="object-cover" />
                </div>
              </SwiperSlide>

              <SwiperSlide className="h-full">
                <div className="relative h-full w-full">
                  <Image src="/images/tyla-profile-1.png" alt="Tyla 2" fill className="object-cover" />
                </div>
              </SwiperSlide>

              <SwiperSlide className="h-full">
                <div className="relative h-full w-full">
                  <Image src="/images/tyla-profile-2.png" alt="Tyla 3" fill className="object-cover" />
                </div>
              </SwiperSlide>

            </Swiper>

            {/* OVERLAY */}
            <div className="absolute bottom-0 left-0 right-0 z-[1] bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 text-white">
              <h2 className="text-3xl font-bold">
                Tyla <span className="font-normal">{age}</span>
              </h2>
              <p className="mt-1 text-sm opacity-90">
                Kansas • League • Blackjack
              </p>
            </div>
          </div>
        </div>

        {/* STATS / BIO SECTION */}
        <div className="w-full max-w-md rounded-2xl border border-white/10 bg-black/85 p-4 text-white md:w-[340px]">

          <div>
            <p className="text-sm leading-relaxed opacity-90">
              Tyla was the kind of guy who always had confidence right up until the moment the cards were dealt or the match loaded.
            </p>

            <p className="mt-2 text-sm leading-relaxed opacity-90">
              He lived in a small apartment filled with snack wrappers, secondhand furniture, and the steady glow of a monitor that had seen far too many late-night losses. Tyla loved games—maybe a little too much for his own good.
            </p>

            <p className="mt-2 text-sm leading-relaxed opacity-90">
              League of Legends wasn’t much kinder to him. He queued up again and again, convinced the next game would be the one.
            </p>

            <p className="mt-2 text-sm leading-relaxed opacity-90">
              His black cat Toast silently supervises every decision.
            </p>
          </div>

          {/* 🔥 RANK SECTION */}
          <div className="mt-6 border-t border-white/10 pt-4">
            <h3 className="text-lg font-semibold">Ranked Solo/Duo</h3>

            {rank ? (
              <div className="mt-2 space-y-1 text-sm opacity-90">
                <p>Tier: <b>{rank.tier || "Unranked"}</b></p>
                <p>LP: <b>{rank.lp || "0 LP"}</b></p>
                <p>Record: <b>{rank.wins}W / {rank.losses}L</b></p>
                <p>Winrate: <b>{rank.winrate ? `${rank.winrate}%` : "0%"}</b></p>
              </div>
            ) : (
              <p className="mt-2 text-sm opacity-60">Loading rank...</p>
            )}

            {/* 🔘 BUTTON */}
            <button
              onClick={handleClick}
              className="mt-4 w-full btn"
            >
              Click Here to see his Nudes 👀
            </button>

            {clicked && (
              <p className="mt-2 text-xs text-white/70">
                You're weird 👀
              </p>
            )}
          </div>

        </div>

      </div>

      {/* Swiper fix */}
      <style jsx global>{`
        .swiper,
        .swiper-wrapper,
        .swiper-slide {
          height: 100% !important;
        }

        .swiper-wrapper {
          display: flex;
        }
      `}</style>
    </div>
  );
}
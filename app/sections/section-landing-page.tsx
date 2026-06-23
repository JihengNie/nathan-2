"use client";

import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="ghost-hero">
          <h1 className="ghost-text">NATHAN 2.0</h1>

          <div className="ghost-container">
            <div className="ghost">
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
          </div>
        </div>

        <div className="content flex text-white flex-col items-center">
          <p>Go and explore some pages</p>

          <div className="flex my-4 gap-3 flex-wrap justify-center">
            <Link href="/quotes" className="btn">
              Quotes
            </Link>
            <Link href="/about" className="btn">
              About
            </Link>
            <Link href="/tyla" className="btn w-full">Nathan's Best friend, Tyla</Link>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap");

        .ghost-hero {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 40vh;
        }

        .ghost-text {
          font-size: clamp(3rem, 10vw, 10rem);
          font-weight: 900;
          font-family: "Montserrat", sans-serif;
          color: white;
          z-index: 2;
          position: relative;
          text-align: center;
        }

        .ghost-container {
          position: absolute;
          inset: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          pointer-events: none;
          z-index: 1;
        }

        .ghost {
          width: 8vmin;
          height: 12vmin;
          background: white;

          background-image: radial-gradient(
              ellipse at 35% 40%,
              #000 8%,
              transparent 0%
            ),
            radial-gradient(ellipse at 65% 40%, #000 8%, transparent 0%),
            radial-gradient(ellipse at 50% 60%, #000 8%, transparent 0%);

          border-radius: 100% / 70% 70% 0% 0%;
          opacity: 0.9;
          mix-blend-mode: difference;

          animation: ghostMove 5s linear infinite;
        }

        @keyframes ghostMove {
          0% {
            transform: translateX(40vw) rotateZ(-90deg);
          }
          100% {
            transform: translateX(-40vw) rotateZ(-90deg);
          }
        }

        .ghost div {
          position: absolute;
          width: 20%;
          background: white;
        }

        .ghost div:nth-of-type(1) {
          height: 7vmin;
          left: 0;
          bottom: -6vmin;
          border-radius: 0 0 50% 50%;
        }

        .ghost div:nth-of-type(2),
        .ghost div:nth-of-type(4) {
          height: 4vmin;
          left: 20%;
          bottom: -3vmin;
          background: transparent;
        }

        .ghost div:nth-of-type(3) {
          height: 4vmin;
          left: 40%;
          bottom: -3.95vmin;
        }

        .ghost div:nth-of-type(4) {
          left: 60%;
        }

        .ghost div:nth-of-type(5) {
          height: 3vmin;
          left: 80%;
          bottom: -2.9vmin;
        }

        .content {
          max-width: 600px;
        }
      `}</style>
    </>
  );
}
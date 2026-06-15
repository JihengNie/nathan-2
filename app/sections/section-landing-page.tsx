"use client";

export default function LandingPage() {
  return (
    <div className="shadow-dance-container mt-4">
      <h1 className="shadow-dance-text">Nathan 2.0 Is Here</h1>
      <p>Go and explore some pages</p>
      <style jsx>{`
        .shadow-dance-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .shadow-dance-text {
          font-size: 4rem;
          color: #fff;
          text-shadow: 5px 5px 0 #ff005e, 10px 10px 0 #00d4ff;
          animation: shadow-dance 2s infinite;
          font-family: Arial, sans-serif;
        }

        @keyframes shadow-dance {
          0%,
          100% {
            text-shadow: 5px 5px 0 #ff005e, 10px 10px 0 #00d4ff;
          }
          50% {
            text-shadow: -5px -5px 0 #00d4ff, -10px -10px 0 #ff005e;
          }
        }
      `}</style>
    </div>
  );
}
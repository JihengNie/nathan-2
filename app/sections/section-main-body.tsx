"use client";

import Infobox from "../components/infobox";
import Image from "next/image";

export default function SectionMainBody() {
  return (
    <main className="">
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col lg:flex-row gap-8">
        
        {/* LEFT: Main text */}
        <div className="flex-1">
          <h1 className="text-2xl font-semibold mb-6">
            In Remembrance of Nathan Smith
          </h1>

          <p className="mb-4 leading-relaxed">
            "In loving memory of Nathan Smith, whose kindness, generosity, and
            infectious laughter brightened the lives of everyone who knew him.
            This space is dedicated to celebrating his life, his passions, and
            the lasting impact he had on our hearts."
          </p>

          <p className="mb-4 leading-relaxed">
            "Nathan Smith was born on [Date] and spent his life making the world
            a better place with his genuine care for others. Whether through his
            work, friendships, or family, Nathan's love for life and people was
            evident in everything he did. He had a remarkable talent for
            [mention passions or skills], and his presence will be deeply missed
            by all who had the privilege of knowing him."
          </p>

          <div className="mb-2 grid grid-cols-2 gap-2">
            <Image
              src="/images/nathan-club-1.png"
              alt="nathan at club"
              width={260}
              height={260}
              className="mx-auto h-full w-full object-cover"
            />
            <Image
              src="/images/nathan-club-2.png"
              alt="nathan at club"
              width={260}
              height={260}
              className="mx-auto h-full w-full object-cover"
            />
          </div>

          <p className="mb-4 leading-relaxed">
            "Nathan Smith was a quiet presence at The Junction, the local club where he’d made his mark without ever trying to. He wasn’t the loudest or most in-your-face person, but there was something about him that made people listen. He’d started coming three months ago, blending into the background with his leather jacket and calm demeanor. Over time, though, he became the steady force everyone relied on. When a fight broke out one night, Nathan didn’t rush in; he simply approached the scene, placed a hand on the troublemaker’s shoulder, and spoke with quiet authority, defusing the tension in an instant. It wasn’t about being a hero—it was about knowing how to keep the peace with subtlety and confidence. He wasn’t here for attention, but everyone felt it when Nathan was around: things just seemed to go right when he was in the room."
          </p>
        </div>

        {/* RIGHT: Infobox */}
        <div className="w-full lg:w-[280px] shrink-0">
          <Infobox
            title="Nathan Smith"
            image="/images/nathan-profile.png"
            caption="In memoriam"
            rows={[
              {
                label: "Born",
                value: "[Date]",
              },
              {
                label: "Known for",
                value: "Kindness, humor, friendship",
              },
              {
                label: "Legacy",
                value: "Positive impact on everyone around him",
              },
              {
                label: "Remembered by",
                value: "Your Mom",
              },
            ]}
          />
        </div>
      </div>
    </main>
  );
}
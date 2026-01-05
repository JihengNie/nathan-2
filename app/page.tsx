import Image from "next/image";
import Navigation from "./components/nav";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <main className="flex w-full">
        <div className="h-full w-full">
          <Image
            className="flex h-full w-full object-contain"
            src="/images/nathan-wave.gif"
            alt="Simpson Wave"
            width={100}
            height={100}
            unoptimized
          />
         </div>
      </main>
    </div>
  );
}

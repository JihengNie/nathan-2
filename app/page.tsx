import Image from "next/image";
import Navigation from "./components/nav";
import NathanQuotes from "./components/section-nathan-quotes";


export default function Home() {
  return (
    <main className="">
      <Navigation/>
      <div>
        <NathanQuotes />
      </div>
    </main>
  );
}

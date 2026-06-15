import Navigation from "../components/nav";
import SectionMainBody from "../sections/section-main-body";


export default function Home() {
  return (
    <main className="">
      <Navigation/>
      <div>
        <SectionMainBody />
      </div>
    </main>
  );
}
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import './globals.css';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col font-worksans bg-black">
      <Navbar />
      <HeroSection />
      <HeroSection />
    </main>
  );
}

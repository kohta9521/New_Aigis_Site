// components
import Header from "@/components/organisms/Header";
import Hero from "@/components/organisms/Hero";
import About from "@/components/organisms/About";
import Profile from "@/components/organisms/Pfofile";

export default function Home() {
  return (
    <div className="w-screen h-auto">
      <Header />
      <Hero />
      <About />
      <Profile />
      {/* <Footer /> */}
    </div>
  );
}

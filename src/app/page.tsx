// components
import Header from "@/components/organisms/Header";
import Hero from "@/components/organisms/Hero";
import About from "@/components/organisms/About";
import Philosophy from "@/components/organisms/Philosophy";
import Profile from "@/components/organisms/Profile";
import Footer from "@/components/organisms/Footer";
import Howto from "@/components/organisms/Howto";
import Client from "@/components/organisms/Client";
import Flow from "@/components/organisms/Flow";
import Contact from "@/components/organisms/Contact";
import News from "@/components/organisms/News";

export default function Home() {
  return (
    <div className="w-screen h-auto">
      <Header />
      <Hero />
      <About />
      <Philosophy />
      <Profile />
      <Howto />
      <Client />
      <Flow />
      <News />
      <Contact />
      <Footer />
    </div>
  );
}

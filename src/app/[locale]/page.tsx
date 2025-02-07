import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GalleryGrid from "@/components/GalleryGrid";
import Hero from "@/components/Hero";
import LocationGrid from "@/components/LocationGrid";
import MenuCategories from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Video from "@/components/Video";

export default function Home() {
  return (
    <main>
      <section className="container-main">
        <Navbar />
      </section>
      <section id="home" className="spacing-y-main">
        <Hero />
      </section>
      <section id="menu" className="container-main">
        <MenuCategories />
      </section>
      <section className="container-main spacing-y-main">
        <Video />
      </section>
      <section id="about" className="container-main spacing-y-main">
        <About />
      </section>
      <section id="locations" className="container-main spacing-y-main">
        <LocationGrid />
      </section>
      <section id="gallery" className="container-main spacing-y-main">
        <GalleryGrid />
      </section>
      <Footer />
    </main>
  );
}

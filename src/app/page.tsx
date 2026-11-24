import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="icerik" className="flex-1">
        <Hero />
        <Projects />
        <Services />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}

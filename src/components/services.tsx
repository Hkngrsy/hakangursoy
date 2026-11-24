import { Building2, LayoutDashboard, Rocket, Search, ShoppingCart, Wrench } from "lucide-react";
import { services, type Service } from "@/content/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const icons: Record<Service["icon"], typeof Building2> = {
  building: Building2,
  cart: ShoppingCart,
  layout: LayoutDashboard,
  rocket: Rocket,
  search: Search,
  wrench: Wrench,
};

export function Services() {
  return (
    <section id="hizmetler" className="scroll-mt-20 border-y border-border bg-card/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          index="02"
          label="hizmetler"
          title="Sizin için neler yapabilirim?"
          description="Küçük bir tanıtım sitesinden kapsamlı bir web uygulamasına kadar uçtan uca hizmet."
        />

        <ul className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <li key={service.title} className="bg-background">
                <Reveal delay={i * 0.05} className="group h-full p-7 transition-colors hover:bg-accent">
                  <span className="inline-flex size-11 items-center justify-center rounded-lg border border-primary/40 bg-primary/10 text-brand transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold">{service.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{service.description}</p>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

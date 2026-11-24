import { process } from "@/content/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function About() {
  return (
    <section id="hakkimda" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2">
        <div>
          <SectionHeading
            index="03"
            label="hakkımda"
            title="Fikirden yayına, tek muhatap"
          />
          {/* TODO: kişisel tanıtım metni */}
          <Reveal className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              Merhaba, ben Hakan. İşletmelerin internetteki yüzünü tasarlıyor ve
              geliştiriyorum. Tasarımdan kodlamaya, yayına almaktan bakıma kadar
              sürecin her adımında yanınızdayım.
            </p>
            <p>
              Önceliğim; hızlı açılan, telefonda kusursuz görünen ve ziyaretçiyi
              müşteriye dönüştüren siteler.
            </p>
          </Reveal>
        </div>

        <ol className="relative space-y-8 border-l border-border pl-8 lg:mt-24">
          {process.map((item, i) => (
            <li key={item.step} className="relative">
              <Reveal delay={i * 0.08}>
                <span
                  aria-hidden="true"
                  className="absolute top-1.5 -left-[2.4rem] size-3 rounded-full border-2 border-primary bg-background"
                />
                <p className="font-mono text-sm text-brand">{item.step}</p>
                <h3 className="mt-1 font-heading text-lg font-bold">{item.title}</h3>
                <p className="mt-1 text-muted-foreground">{item.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

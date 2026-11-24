import { ArrowUpRight } from "lucide-react";
import { projects } from "@/content/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ProjectGallery } from "@/components/project-gallery";

export function Projects() {
  return (
    <section id="projeler" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          index="01"
          label="projeler"
          title="Yaptığım işlerden seçmeler"
          description="Farklı sektörler için tasarlayıp geliştirdiğim web sitelerinden bazıları."
        />

        <Reveal>
          <ProjectGallery />
        </Reveal>

        <ul className="grid gap-5 sm:grid-cols-2">
          {projects.map((project, i) => (
            <li key={project.title}>
              <Reveal delay={i * 0.06} className="h-full">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/60">
                  {/* Görsel alanı: ekran görüntüsü eklenene kadar desenli yer tutucu */}
                  <div
                    aria-hidden="true"
                    className="relative aspect-[16/10] overflow-hidden border-b border-border bg-[radial-gradient(circle_at_30%_20%,#dc262633,transparent_60%),linear-gradient(135deg,#171717,#0a0a0a)]"
                  >
                    <span className="absolute bottom-4 left-5 font-mono text-5xl font-bold text-white/5 transition-transform duration-500 group-hover:-translate-y-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <p className="font-mono text-xs uppercase tracking-wider text-brand">
                      {project.category}
                    </p>
                    <h3 className="mt-2 flex items-center justify-between gap-3 font-heading text-xl font-bold">
                      {project.href ? (
                        <a href={project.href} target="_blank" rel="noreferrer" className="after:absolute after:inset-0">
                          {project.title}
                        </a>
                      ) : (
                        project.title
                      )}
                      <ArrowUpRight
                        className="size-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
                        aria-hidden="true"
                      />
                    </h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{project.summary}</p>
                    <ul className="mt-auto flex flex-wrap gap-2 pt-5" aria-label="Kullanılan teknolojiler">
                      {project.stack.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-md border border-border bg-muted px-2 py-1 font-mono text-xs text-muted-foreground"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

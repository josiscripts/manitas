import { ArrowRight } from "lucide-react";
import logo from "@/assets/manitas-logo.svg.asset.json";
import { StoreBadges } from "./StoreBadges";
import { Reveal } from "./Reveal";

export function FinalCta() {
  return (
    <section aria-labelledby="cta-final" className="bg-brand-dark">
      <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-[1.3fr_0.7fr] lg:py-28">
        <Reveal>
          <h2
            id="cta-final"
            className="text-[30px] leading-tight font-extrabold tracking-tight text-brand-foreground sm:text-[38px] lg:text-[44px]"
          >
            ¿Necesitas ayuda en casa?
          </h2>
          <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-brand-foreground/80 lg:text-lg">
            Manitas está aquí para ayudarte a encontrar profesionales para las tareas de tu hogar.
          </p>
          <a
            href="#contacto"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand-foreground px-7 py-4 text-base font-semibold text-brand-dark transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-soft"
          >
            Descargar la aplicación
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
          <StoreBadges variant="dark" className="mt-7" />
        </Reveal>

        <Reveal delay={120} className="hidden justify-self-center lg:block">
          <div className="rounded-3xl bg-background p-6">
            <img
              src={logo.url}
              alt="Profesional de Manitas listo para ayudarte"
              width={240}
              height={240}
              loading="lazy"
              className="size-52 object-contain"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

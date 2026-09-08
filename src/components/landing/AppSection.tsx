import { ArrowRight } from "lucide-react";
import mockup from "@/assets/app-mockup.png";
import { StoreBadges } from "./StoreBadges";
import { Reveal } from "./Reveal";

export function AppSection() {
  return (
    <section id="app" className="bg-secondary">
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <Reveal>
          <h2 className="text-[30px] leading-tight font-extrabold tracking-tight text-brand-dark sm:text-[38px] lg:text-[44px]">
            Todo lo que necesitas, en tu móvil
          </h2>
          <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-muted-foreground lg:text-lg">
            Gestiona tus servicios del hogar desde una aplicación sencilla, rápida y pensada para ti.
          </p>
          <a
            href="#contacto"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand px-7 py-4 text-base font-semibold text-brand-foreground shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-card-hover"
          >
            Descargar aplicación
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
          <p className="mt-8 text-sm font-medium text-muted-foreground">Disponible próximamente</p>
          <StoreBadges className="mt-3" />
        </Reveal>

        <Reveal delay={120} className="order-first lg:order-none">
          <img
            src={mockup}
            alt="Vista previa de la aplicación de Manitas en dos teléfonos móviles"
            width={1024}
            height={1024}
            loading="lazy"
            className="mx-auto h-auto w-full max-w-[420px] lg:max-w-[520px]"
          />
        </Reveal>
      </div>
    </section>
  );
}

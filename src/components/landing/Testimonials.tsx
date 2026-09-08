import { Star } from "lucide-react";
import { Reveal } from "./Reveal";

const testimonials = [
  {
    tag: "Intuitiva",
    text: "Una aplicación intuitiva: en pocos pasos encuentras el servicio que necesitas para tu casa.",
    initials: "MG",
  },
  {
    tag: "Rápida",
    text: "Rápida y directa. Solicitas la ayuda que necesitas sin complicaciones ni esperas.",
    initials: "JR",
  },
  {
    tag: "Confiable",
    text: "Confiable de principio a fin: sabes en todo momento con quién cuentas para tu hogar.",
    initials: "LS",
  },
];

export function Testimonials() {
  return (
    <section id="opiniones" className="bg-background">
      <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 md:py-24 lg:py-28">
        <Reveal className="max-w-2xl">
          <h2 className="text-[30px] leading-tight font-extrabold tracking-tight text-brand-dark sm:text-[38px] lg:text-[44px]">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-muted-foreground lg:text-lg">
            Tres ideas que resumen la experiencia Manitas.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal as="li" key={item.tag} delay={i * 90} className="h-full">
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <div className="flex gap-1 text-brand" aria-label="Cinco de cinco estrellas">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-[16px] leading-relaxed text-foreground">
                  {item.text}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <span className="flex size-10 items-center justify-center rounded-full bg-brand-soft text-sm font-bold text-brand">
                    {item.initials}
                  </span>
                  <span className="text-sm font-semibold text-brand-dark">{item.tag}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
        <p className="mt-8 text-sm text-muted-foreground">
          Opiniones ilustrativas de la propuesta de Manitas. Se sustituirán por testimonios
          verificados de clientes tras el lanzamiento.
        </p>
      </div>
    </section>
  );
}

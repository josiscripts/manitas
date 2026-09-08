import { HeartHandshake, ShieldCheck, Smartphone, Zap } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  {
    icon: ShieldCheck,
    title: "Profesionales de confianza",
    text: "Encuentra ayuda para tu hogar.",
  },
  { icon: Zap, title: "Rápido y sencillo", text: "Solicita lo que necesitas fácilmente." },
  { icon: Smartphone, title: "Todo desde una app", text: "Gestiona tus servicios desde un mismo lugar." },
  { icon: HeartHandshake, title: "Atención personalizada", text: "Estamos para ayudarte." },
];

export function TrustBar() {
  return (
    <section aria-labelledby="ventajas" className="border-b border-border bg-background">
      <h2 id="ventajas" className="sr-only">
        Por qué elegir Manitas
      </h2>
      <ul className="mx-auto grid max-w-[1280px] gap-8 px-5 py-14 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:py-20">
        {items.map((item, i) => (
          <Reveal as="li" key={item.title} delay={i * 80} className="flex gap-4">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
              <item.icon className="size-5" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <h3 className="text-base font-bold text-brand-dark">{item.title}</h3>
              <p className="mt-1 text-[15px] leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

import {
  ArrowRight,
  Check,
  Droplets,
  House,
  Sparkles,
  Star,
  Zap,
  type LucideIcon,
} from "lucide-react";
import logo from "@/assets/manitas-logo.svg.asset.json";
import { StoreBadges } from "./StoreBadges";

const services: Array<{
  name: string;
  rating: string;
  icon: LucideIcon;
  position: string;
  delay: string;
}> = [
  {
    name: "Fontanería",
    rating: "4.9",
    icon: Droplets,
    position: "left-0 top-[17%] sm:-left-4 lg:-left-8",
    delay: "[animation-delay:150ms]",
  },
  {
    name: "Electricidad",
    rating: "4.8",
    icon: Zap,
    position: "right-0 top-[8%] sm:right-2 lg:-right-4",
    delay: "[animation-delay:280ms]",
  },
  {
    name: "Limpieza",
    rating: "4.9",
    icon: Sparkles,
    position: "bottom-[10%] right-0 sm:right-5 lg:-right-3",
    delay: "[animation-delay:410ms]",
  },
];

const trustItems = ["Profesionales verificados", "Precios transparentes", "Servicio seguro"];

function Stars({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex gap-0.5 text-rating ${className}`} aria-label="5 estrellas">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className="size-3 fill-current" aria-hidden="true" />
      ))}
    </span>
  );
}

export function Hero() {
  return (
    <section id="inicio" className="hero-surface relative overflow-hidden">
      <div className="relative mx-auto grid max-w-[1280px] grid-cols-1 px-5 pb-14 pt-12 sm:px-8 sm:pt-16 lg:min-h-[690px] lg:grid-cols-[minmax(0,0.93fr)_minmax(0,1.07fr)] lg:grid-rows-[1fr_auto] lg:items-center lg:gap-x-10 lg:pb-14 lg:pt-14 xl:gap-x-16">
        <div className="relative z-20 min-w-0 text-center lg:self-end lg:pb-7 lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/10 bg-brand-soft px-4 py-2 text-[13px] font-bold text-brand shadow-sm">
            <House className="size-3.5" aria-hidden="true" />
            Servicios para el hogar
          </span>
          <h1 className="mx-auto mt-6 max-w-[680px] text-[40px] leading-[1.03] font-extrabold text-brand-dark sm:text-[52px] lg:mx-0 lg:text-[58px] xl:text-[64px]">
            Todo lo que tu hogar necesita, <span className="text-brand">en buenas manos.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-[520px] text-[17px] leading-[1.7] text-muted-foreground lg:mx-0 lg:text-lg">
            Encuentra profesionales de confianza para resolver cualquier tarea de tu hogar.
            Solicita, gestiona y sigue tus servicios desde una sola app.
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#app"
              className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-brand px-7 py-3.5 text-base font-bold text-brand-foreground shadow-cta transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-cta-hover sm:w-auto"
            >
              Descargar la aplicación
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#servicios"
              className="inline-flex min-h-14 w-full items-center justify-center rounded-2xl border border-border bg-card px-7 py-3.5 text-base font-bold text-brand-dark shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/20 hover:bg-secondary sm:w-auto"
            >
              Ver servicios
            </a>
          </div>
        </div>

        <div className="relative z-10 order-2 mt-8 min-h-[430px] w-full lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-0 lg:min-h-[610px]">
          <div aria-hidden="true" className="hero-visual-halo absolute inset-[8%_4%_4%_8%] rounded-[42%]" />
          <div aria-hidden="true" className="absolute left-[12%] top-[16%] size-2 rounded-full bg-brand/20" />
          <div aria-hidden="true" className="absolute right-[9%] top-[36%] size-3 rounded-full border border-brand/15" />
          <div aria-hidden="true" className="absolute bottom-[19%] left-[7%] size-1.5 rounded-full bg-brand/25" />
          <div className="hero-illustration-enter absolute inset-x-[5%] bottom-0 top-[2%] flex items-end justify-center sm:inset-x-[10%] lg:inset-x-[3%]">
            <img
              src={logo.url}
              alt="Ilustración del profesional de Manitas con caja de herramientas frente a una casa"
              width={520}
              height={520}
              className="relative z-10 h-auto max-h-full w-full object-contain object-bottom mix-blend-multiply drop-shadow-illustration"
            />
          </div>

          {services.map((service) => (
            <div
              key={service.name}
              className={`hero-float-card absolute z-20 flex items-center gap-2.5 rounded-[18px] border border-border/80 bg-card/95 p-2.5 pr-3 shadow-float backdrop-blur-sm sm:gap-3 sm:p-3 sm:pr-4 ${service.position} ${service.delay}`}
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand sm:size-10">
                <service.icon className="size-4.5" aria-hidden="true" />
              </span>
              <span className="min-w-0 text-left">
                <span className="block text-xs font-extrabold text-brand-dark sm:text-sm">{service.name}</span>
                <span className="mt-0.5 flex items-center gap-1 text-[11px] font-bold text-muted-foreground">
                  <Stars /> {service.rating}
                </span>
              </span>
            </div>
          ))}

          <div aria-hidden="true" className="hero-ground-shadow absolute bottom-[3%] left-1/2 h-8 w-3/5 -translate-x-1/2 rounded-full" />
        </div>

        <div className="relative z-20 order-3 mt-8 min-w-0 lg:col-start-1 lg:row-start-2 lg:mt-0 lg:self-start lg:pt-1">
          <div className="flex flex-col items-center gap-5 border-t border-border/70 pt-6 sm:flex-row sm:justify-center sm:gap-7 lg:items-start lg:justify-start">
            <div className="shrink-0 text-center sm:text-left">
              <div className="flex items-center justify-center gap-2 sm:justify-start">
                <Stars className="[&>svg]:size-4" />
                <span className="text-sm font-extrabold text-brand-dark">4.9/5</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">Valorado por nuestros usuarios</p>
            </div>
            <div className="hidden h-11 w-px bg-border sm:block" aria-hidden="true" />
            <ul className="grid gap-1.5 text-left">
              {trustItems.map((item) => (
                <li key={item} className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                  <span className="grid size-4 shrink-0 place-items-center rounded-full bg-trust-soft text-trust">
                    <Check className="size-2.5 stroke-[3]" aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-6 text-center text-xs font-semibold text-muted-foreground lg:text-left">
            Disponible próximamente en
          </p>
          <StoreBadges className="mt-2 justify-center lg:justify-start" />
        </div>
      </div>
    </section>
  );
}

import { ArrowRight, HeartHandshake, House, KeyRound, Plug, Sparkles, Wrench } from "lucide-react";
import limpieza from "@/assets/servicio-limpieza.jpg";
import fontaneria from "@/assets/servicio-fontaneria.jpg";
import electricidad from "@/assets/servicio-electricidad.jpg";
import cerrajeria from "@/assets/servicio-cerrajeria.jpg";
import cuidado from "@/assets/servicio-cuidado.jpg";
import { Reveal } from "./Reveal";

const services = [
  {
    icon: Sparkles,
    name: "Limpieza",
    text: "Profesionales para mantener tu hogar limpio y cuidado.",
    image: limpieza,
    alt: "Profesional de limpieza trabajando en la cocina de una vivienda",
  },
  {
    icon: Wrench,
    name: "Fontanería",
    text: "Soluciones para averías, instalaciones y problemas de fontanería.",
    image: fontaneria,
    alt: "Fontanero reparando el desagüe de un fregadero",
  },
  {
    icon: Plug,
    name: "Electricidad",
    text: "Ayuda profesional para instalaciones y reparaciones eléctricas.",
    image: electricidad,
    alt: "Electricista instalando un enchufe en una pared",
  },
  {
    icon: KeyRound,
    name: "Cerrajería",
    text: "Asistencia para cerraduras, aperturas y necesidades urgentes.",
    image: cerrajeria,
    alt: "Cerrajero ajustando la cerradura de una puerta de entrada",
  },
  {
    icon: HeartHandshake,
    name: "Cuidado de personas",
    text: "Servicios de apoyo y cuidado adaptados a las necesidades de cada persona.",
    image: cuidado,
    alt: "Cuidadora acompañando a una mujer mayor en el salón de su casa",
  },
];

export function Services() {
  return (
    <section id="servicios" className="relative overflow-hidden bg-secondary">
      <div aria-hidden="true" className="absolute -right-16 top-24 size-52 rounded-full bg-brand-soft/40 blur-3xl" />
      <div aria-hidden="true" className="absolute left-[7%] top-48 size-1.5 rounded-full bg-brand/20" />

      <div className="relative mx-auto max-w-[1280px] px-5 py-16 sm:px-8 md:py-24 lg:py-25">
        <Reveal className="max-w-[760px]">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/10 bg-brand-soft px-4 py-2 text-xs font-extrabold text-brand">
            <House className="size-3.5" aria-hidden="true" />
            SERVICIOS PARA TU HOGAR
          </span>
          <h2 className="mt-5 text-[32px] leading-[1.12] font-extrabold text-brand-dark sm:text-[39px] lg:text-[44px]">
            Soluciones para cada rincón de tu hogar
          </h2>
          <p className="mt-5 max-w-[620px] text-[16px] leading-[1.7] text-muted-foreground sm:text-[17px] lg:text-lg">
            Encuentra profesionales de confianza para las tareas que necesitas, desde una sola app.
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-6">
          {services.map((service, i) => (
            <Reveal
              as="li"
              key={service.name}
              delay={(i % 3) * 70}
              className={`group h-full lg:col-span-2 ${i >= 3 ? "lg:col-span-3" : ""}`}
            >
              <article className="flex h-full min-h-[470px] flex-col overflow-hidden rounded-3xl border border-border/90 bg-card shadow-card transition-[transform,box-shadow,border-color] duration-300 ease-out group-hover:-translate-y-1 group-hover:border-brand/15 group-hover:shadow-card-hover">
                <div className="relative h-[205px] shrink-0 overflow-hidden sm:h-[220px]">
                  <img
                    src={service.image}
                    alt={service.alt}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]"
                  />
                  <span className="absolute bottom-4 left-5 flex size-11 items-center justify-center rounded-xl border border-card/80 bg-card/95 text-brand shadow-sm backdrop-blur-sm sm:left-6">
                    <service.icon className="size-5" aria-hidden="true" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-[19px] font-bold text-brand-dark">{service.name}</h3>
                  <p className="mt-2 text-sm leading-[1.65] text-muted-foreground">
                    {service.text}
                  </p>
                  <a
                    href="#contacto"
                    className="mt-auto inline-flex min-h-11 w-fit items-center gap-2 pt-5 text-[15px] font-semibold text-brand transition-colors duration-200 hover:text-brand-dark"
                  >
                    Ver servicio
                    <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-9 flex justify-center sm:mt-10" delay={100}>
          <a
            href="#contacto"
            className="group/all inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-brand/15 bg-card px-5 py-3 text-[15px] font-semibold text-brand shadow-sm transition-[transform,background-color,border-color] duration-300 hover:-translate-y-0.5 hover:border-brand/25 hover:bg-brand-soft focus-visible:outline-offset-4"
          >
            Ver todos los servicios
            <ArrowRight className="size-4 transition-transform duration-200 group-hover/all:translate-x-1" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

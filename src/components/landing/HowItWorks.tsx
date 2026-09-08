import { Reveal } from "./Reveal";

const steps = [
  { n: "01", title: "Elige un servicio", text: "Selecciona qué necesitas para tu hogar." },
  { n: "02", title: "Encuentra un profesional", text: "Consulta las opciones disponibles." },
  { n: "03", title: "Solicita el servicio", text: "Indica cuándo necesitas ayuda." },
  { n: "04", title: "Disfruta del resultado", text: "El profesional se encarga del trabajo." },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-background">
      <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 md:py-24 lg:py-28">
        <Reveal className="max-w-2xl">
          <h2 className="text-[30px] leading-tight font-extrabold tracking-tight text-brand-dark sm:text-[38px] lg:text-[44px]">
            Así de fácil es
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-muted-foreground lg:text-lg">
            Encuentra la ayuda que necesitas en pocos pasos.
          </p>
        </Reveal>

        <ol className="relative mt-12 grid gap-8 lg:grid-cols-4 lg:gap-6">
          <span
            aria-hidden="true"
            className="absolute top-6 left-6 hidden h-[calc(100%-3rem)] w-px bg-border sm:block lg:top-6 lg:left-6 lg:h-px lg:w-[calc(100%-3rem)]"
          />
          {steps.map((step, i) => (
            <Reveal as="li" key={step.n} delay={i * 100} className="relative">
              <span className="relative z-10 flex size-12 items-center justify-center rounded-full bg-brand text-base font-bold text-brand-foreground shadow-card">
                {step.n}
              </span>
              <h3 className="mt-5 text-lg font-bold text-brand-dark">{step.title}</h3>
              <p className="mt-2 max-w-xs text-[15px] leading-relaxed text-muted-foreground">
                {step.text}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

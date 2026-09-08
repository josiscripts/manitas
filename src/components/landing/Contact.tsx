import { useState, type FormEvent } from "react";
import { CheckCircle2, Clock, MapPin, MessageSquare } from "lucide-react";
import { Reveal } from "./Reveal";

type Errors = { nombre?: string; email?: string; mensaje?: string };

export function Contact() {
  const [values, setValues] = useState({ nombre: "", email: "", mensaje: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const validate = (v: typeof values): Errors => {
    const e: Errors = {};
    if (v.nombre.trim().length < 2) e.nombre = "Indica tu nombre.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim()))
      e.email = "Introduce un email válido.";
    if (v.mensaje.trim().length < 10) e.mensaje = "Escribe al menos 10 caracteres.";
    return e;
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const e = validate(values);
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    setSent(true);
    setValues({ nombre: "", email: "", mensaje: "" });
  };

  const field =
    "w-full rounded-xl border border-border bg-card px-4 py-3.5 text-base text-foreground placeholder:text-muted-foreground/70 transition-colors duration-200 hover:border-brand/40 focus:border-brand focus:outline-none";

  return (
    <section id="contacto" className="bg-secondary">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <Reveal>
          <h2 className="text-[30px] leading-tight font-extrabold tracking-tight text-brand-dark sm:text-[38px] lg:text-[44px]">
            ¿Tienes alguna pregunta?
          </h2>
          <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-muted-foreground lg:text-lg">
            Estamos preparando el lanzamiento de Manitas. Si quieres saber más sobre la aplicación,
            nuestros servicios o el lanzamiento, ponte en contacto con nosotros.
          </p>

          <ul className="mt-10 space-y-5">
            <li className="flex gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <MessageSquare className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-base font-bold text-brand-dark">Escríbenos</h3>
                <p className="mt-1 text-[15px] text-muted-foreground">
                  Rellena el formulario y te contamos todo sobre el lanzamiento.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <Clock className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-base font-bold text-brand-dark">Respuesta</h3>
                <p className="mt-1 text-[15px] text-muted-foreground">
                  Revisamos los mensajes de lunes a viernes.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <MapPin className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-base font-bold text-brand-dark">Manitas App S.L.</h3>
                <p className="mt-1 text-[15px] text-muted-foreground">España</p>
              </div>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8"
          >
            <div className="space-y-5">
              <div>
                <label htmlFor="nombre" className="block text-sm font-semibold text-brand-dark">
                  Nombre
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  autoComplete="name"
                  value={values.nombre}
                  onChange={(e) => setValues((v) => ({ ...v, nombre: e.target.value }))}
                  aria-invalid={Boolean(errors.nombre)}
                  aria-describedby={errors.nombre ? "error-nombre" : undefined}
                  placeholder="Tu nombre"
                  className={`mt-2 ${field}`}
                />
                {errors.nombre && (
                  <p id="error-nombre" role="alert" className="mt-2 text-sm text-destructive">
                    {errors.nombre}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-brand-dark">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "error-email" : undefined}
                  placeholder="tu@email.com"
                  className={`mt-2 ${field}`}
                />
                {errors.email && (
                  <p id="error-email" role="alert" className="mt-2 text-sm text-destructive">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-semibold text-brand-dark">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={5}
                  value={values.mensaje}
                  onChange={(e) => setValues((v) => ({ ...v, mensaje: e.target.value }))}
                  aria-invalid={Boolean(errors.mensaje)}
                  aria-describedby={errors.mensaje ? "error-mensaje" : undefined}
                  placeholder="Cuéntanos en qué podemos ayudarte"
                  className={`mt-2 resize-y ${field}`}
                />
                {errors.mensaje && (
                  <p id="error-mensaje" role="alert" className="mt-2 text-sm text-destructive">
                    {errors.mensaje}
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="mt-7 w-full rounded-xl bg-brand px-6 py-4 text-base font-semibold text-brand-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-dark"
            >
              Enviar mensaje
            </button>

            <p aria-live="polite" className="mt-4 min-h-6 text-sm">
              {sent && (
                <span className="inline-flex items-center gap-2 font-medium text-brand">
                  <CheckCircle2 className="size-4" aria-hidden="true" />
                  ¡Gracias! Hemos recibido tu mensaje.
                </span>
              )}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

import logo from "@/assets/manitas-logo.svg.asset.json";
import { navLinks } from "./nav";

const servicios = ["Limpieza", "Fontanería", "Electricidad", "Cerrajería", "Cuidado de personas"];
const legal = ["Términos y condiciones", "Política de privacidad", "Política de cookies"];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-5 py-14 sm:px-8 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:py-16">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="Logo de Manitas" width={44} height={44} loading="lazy" className="size-11" />
            <span className="text-xl font-extrabold tracking-tight text-brand-dark">MANITAS</span>
          </div>
          <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-muted-foreground">
            Tu casa en las mejores manos.
          </p>
        </div>

        <nav aria-labelledby="footer-servicios">
          <h2 id="footer-servicios" className="text-sm font-bold tracking-wide text-brand-dark uppercase">
            Servicios
          </h2>
          <ul className="mt-4 space-y-3">
            {servicios.map((item) => (
              <li key={item}>
                <a
                  href="#servicios"
                  className="text-[15px] text-muted-foreground transition-colors duration-200 hover:text-brand"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-labelledby="footer-manitas">
          <h2 id="footer-manitas" className="text-sm font-bold tracking-wide text-brand-dark uppercase">
            Manitas
          </h2>
          <ul className="mt-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[15px] text-muted-foreground transition-colors duration-200 hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-labelledby="footer-legal">
          <h2 id="footer-legal" className="text-sm font-bold tracking-wide text-brand-dark uppercase">
            Legal
          </h2>
          <ul className="mt-4 space-y-3">
            {legal.map((item) => (
              <li key={item}>
                <a
                  href="#contacto"
                  className="text-[15px] text-muted-foreground transition-colors duration-200 hover:text-brand"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-[1280px] px-5 py-6 text-sm text-muted-foreground sm:px-8">
          © 2026 Manitas App S.L. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

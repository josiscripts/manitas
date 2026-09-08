import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/manitas-logo.svg.asset.json";
import { navLinks } from "./nav";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur-md transition-shadow duration-200",
        scrolled ? "border-border shadow-[0_1px_12px_oklch(0_0_0/0.06)]" : "border-transparent",
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center gap-6 px-5 sm:px-8 lg:h-20">
        <a href="#inicio" className="flex shrink-0 items-center gap-3" aria-label="Manitas, inicio">
          <img src={logo.url} alt="Logo de Manitas" width={48} height={48} className="size-11 lg:size-12" />
          <span className="text-xl font-extrabold tracking-tight text-brand-dark lg:text-[22px]">
            MANITAS
          </span>
        </a>

        <nav aria-label="Navegación principal" className="ml-auto hidden lg:block">
          <ul className="flex items-center gap-9">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[15px] font-medium text-muted-foreground transition-colors duration-200 hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#app"
          className="ml-auto hidden rounded-xl bg-brand px-5 py-3 text-[15px] font-semibold text-brand-foreground shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-dark lg:ml-0 lg:inline-flex"
        >
          Descargar app
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="ml-auto inline-flex size-11 items-center justify-center rounded-xl border border-border text-foreground transition-colors duration-200 hover:bg-secondary lg:hidden"
        >
          {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>
      </div>

      <div
        id="menu-movil"
        hidden={!open}
        className="border-t border-border bg-background lg:hidden"
      >
        <nav aria-label="Navegación móvil" className="mx-auto max-w-[1280px] px-5 py-4 sm:px-8">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-3.5 text-base font-medium text-foreground transition-colors duration-200 hover:bg-secondary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#app"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-xl bg-brand px-5 py-3.5 text-center text-base font-semibold text-brand-foreground"
          >
            Descargar app
          </a>
        </nav>
      </div>
    </header>
  );
}

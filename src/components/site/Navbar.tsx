import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#equipo", label: "Equipo" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#contacto", label: "Contacto" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "bg-background/85 backdrop-blur-md shadow-card" : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between h-20">
        <a href="#inicio" className="flex items-center gap-2" aria-label="CIL Venezuela — Inicio">
          <img src={logo} alt="CIL Venezuela — Financiamiento de cirugías estéticas" className="h-12 w-auto" />
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-wide text-foreground/80 hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="hidden lg:inline-flex items-center px-6 py-2.5 text-xs uppercase tracking-[0.2em] border border-plum text-plum hover:bg-plum hover:text-primary-foreground transition-colors"
        >
          Reservar Cita
        </a>

        <button
          className="lg:hidden text-plum"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="container py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-foreground/80 hover:text-gold py-1"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center items-center px-6 py-3 text-xs uppercase tracking-[0.2em] border border-plum text-plum"
            >
              Reservar Cita
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

import { Instagram, Facebook, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-plum text-primary-foreground/80">
      <div className="container py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="bg-background/95 inline-block p-3 rounded">
            <img src={logo} alt="CIL Venezuela" className="h-14 w-auto" />
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            Cirugía estética y medicina del bienestar de alta gama, donde la elegancia
            se encuentra con la ciencia.
          </p>
          <div className="flex gap-3 mt-6">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 flex items-center justify-center border border-primary-foreground/20 hover:border-gold hover:text-gold transition-colors">
                <Icon size={16} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-gold text-xs uppercase tracking-[0.25em] mb-4">Clínica</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#nosotros" className="hover:text-gold transition-colors">Sobre nosotros</a></li>
            <li><a href="#equipo" className="hover:text-gold transition-colors">Equipo médico</a></li>
            <li><a href="#servicios" className="hover:text-gold transition-colors">Tratamientos</a></li>
            <li><a href="#testimonios" className="hover:text-gold transition-colors">Testimonios</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold text-xs uppercase tracking-[0.25em] mb-4">Contacto</h4>
          <ul className="space-y-2 text-sm">
            <li>Calle Serrano 45</li>
            <li>28001 Madrid</li>
            <li>+34 900 123 456</li>
            <li>hola@maisonestetica.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 flex flex-col sm:flex-row justify-between gap-4 text-xs text-primary-foreground/60">
          <span>© {new Date().getFullYear()} Maison Estética. Todos los derechos reservados.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold">Política de privacidad</a>
            <a href="#" className="hover:text-gold">Aviso legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

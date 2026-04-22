import { Instagram, Facebook, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-plum text-primary-foreground/80">
      <div className="container py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="bg-background/95 inline-block p-3 rounded">
            <img src={logo} alt="CIL Venezuela" className="h-20 w-auto" />
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            Pioneros en el financiamiento de cirugías plásticas estéticas en Venezuela.
            Crédito europeo al 0% de interés, +26 años de trayectoria.
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
          <h4 className="text-gold text-xs uppercase tracking-[0.25em] mb-4">Empresa</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#nosotros" className="hover:text-gold transition-colors">Sobre nosotros</a></li>
            <li><a href="#planes" className="hover:text-gold transition-colors">Planes de financiamiento</a></li>
            <li><a href="#proceso" className="hover:text-gold transition-colors">Proceso paso a paso</a></li>
            <li><a href="#testimonios" className="hover:text-gold transition-colors">Testimonios</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold text-xs uppercase tracking-[0.25em] mb-4">Contacto</h4>
          <ul className="space-y-2 text-sm">
            <li>Av. La Estancia con calle Ernesto Blohm</li>
            <li>Torre A, Piso 9, Ofic. 910</li>
            <li>Chuao, Caracas</li>
            <li>+58 414 127 1960</li>
            <li>@cirugiacredito</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 flex flex-col sm:flex-row justify-between gap-4 text-xs text-primary-foreground/60">
          <span>© {new Date().getFullYear()} CIL Venezuela. RIF J-40726877-5. Todos los derechos reservados.</span>
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

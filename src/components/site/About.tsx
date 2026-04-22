import clinicImg from "@/assets/clinic.jpg";
import { Check } from "lucide-react";

const points = [
  "Cirujanos certificados con experiencia internacional",
  "Tecnología médica de última generación",
  "Atención personalizada y discreta en todo el proceso",
  "Instalaciones acreditadas y seguras",
];

const About = () => {
  return (
    <section id="nosotros" className="py-28 bg-cream">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-gold hidden md:block" />
          <img
            src={clinicImg}
            alt="Interior de clínica de cirugía estética de lujo"
            width={1280}
            height={896}
            loading="lazy"
            className="relative w-full aspect-[4/3] object-cover shadow-soft"
          />
          <div className="absolute -bottom-8 -right-4 md:-right-8 bg-plum text-primary-foreground p-8 max-w-[260px] shadow-soft hidden md:block">
            <div className="font-serif text-4xl text-gold mb-2">15+</div>
            <p className="text-sm leading-relaxed text-primary-foreground/80">
              Años transformando vidas con resultados naturales y duraderos.
            </p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="flex items-center gap-3 mb-6">
            <span className="gold-line" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Sobre Nosotros</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-plum text-balance">
            Una clínica donde la <em className="text-gold not-italic">excelencia</em> se siente
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            En Maison Estética concebimos la belleza como una expresión auténtica de quien eres.
            Nuestro equipo multidisciplinar trabaja con la precisión del arte y la seguridad de
            la ciencia, creando experiencias donde cada detalle ha sido pensado para ti.
          </p>

          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-1 w-5 h-5 flex items-center justify-center bg-gold/20 text-gold">
                  <Check size={12} strokeWidth={3} />
                </span>
                <span className="text-foreground/80">{p}</span>
              </li>
            ))}
          </ul>

          <a
            href="#contacto"
            className="inline-flex mt-10 items-center px-8 py-4 bg-plum text-primary-foreground text-xs uppercase tracking-[0.25em] hover:bg-gold hover:text-plum transition-all duration-500"
          >
            Conocer más
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

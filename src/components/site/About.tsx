import recepcionImg from "@/assets/recepcion.jpg";
import { Check } from "lucide-react";

const points = [
  "Más de 26 años de trayectoria financiando cirugías en Venezuela",
  "Convenio con 20 clínicas a nivel nacional y 15 sedes propias",
  "Cirujanos plásticos certificados con tecnología de vanguardia",
  "Acompañamiento integral: pre, intra y postoperatorio",
  "Crédito al 0% de interés, sin trámites engorrosos",
];

const About = () => {
  return (
    <section id="nosotros" className="py-28 bg-background">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-gold hidden md:block" />
          <img
            src={recepcionImg}
            alt="Recepción y sala de espera de la clínica estética de CIL Venezuela"
            width={1280}
            height={896}
            loading="lazy"
            className="relative w-full aspect-[4/3] object-cover shadow-soft"
          />
          <div className="absolute -bottom-8 -right-4 md:-right-8 bg-plum text-primary-foreground p-8 max-w-[260px] shadow-soft hidden md:block">
            <div className="font-serif text-4xl text-gold mb-2">+30.000</div>
            <p className="text-sm leading-relaxed text-primary-foreground/80">
              Mujeres han confiado en nosotros para transformar sus vidas.
            </p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="flex items-center gap-3 mb-6">
            <span className="gold-line" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Sobre Nosotros</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-plum text-balance">
            Pioneros en <em className="text-gold not-italic">crédito europeo</em> para cirugías estéticas
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            En CIL Venezuela asesoramos, organizamos, planificamos, presupuestamos y financiamos
            cirugías plásticas y generales. Nuestra misión es brindar una experiencia segura,
            confiable y de calidad, con asesoría médica especializada en cada etapa del proceso.
          </p>

          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-1 w-5 h-5 flex items-center justify-center bg-gold/20 text-gold shrink-0">
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
            Quiero afiliarme
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

import { Sparkles, Smile, Heart, Flower2, Syringe, Scissors } from "lucide-react";

const services = [
  { icon: Smile, title: "Rinoplastia", desc: "Armoniza tu rostro con una nariz natural y proporcionada a tus facciones." },
  { icon: Heart, title: "Aumento Mamario", desc: "Resultados elegantes con implantes de última generación y técnica avanzada." },
  { icon: Flower2, title: "Lifting Facial", desc: "Recupera la firmeza y luminosidad de tu rostro con un acabado natural." },
  { icon: Syringe, title: "Medicina Estética", desc: "Bótox, ácido hialurónico y tratamientos no invasivos de máxima calidad." },
  { icon: Scissors, title: "Liposucción", desc: "Esculpe tu silueta con técnicas seguras de contorno corporal de precisión." },
  { icon: Sparkles, title: "Rejuvenecimiento", desc: "Tratamientos láser y peelings para una piel renovada y radiante." },
];

const Services = () => {
  return (
    <section id="servicios" className="py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="gold-line" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Nuestros Servicios</span>
            <span className="gold-line" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-plum text-balance">
            Tratamientos a la medida de tu <em className="text-gold not-italic">belleza</em>
          </h2>
          <p className="mt-6 text-muted-foreground">
            Combinamos técnica, arte y ciencia para ofrecer resultados que realzan tu identidad
            sin perder lo que te hace única.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="group bg-background p-10 hover:bg-cream transition-colors duration-500"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-blush text-plum mb-6 group-hover:bg-gold group-hover:text-primary-foreground transition-colors duration-500">
                <Icon size={24} strokeWidth={1.4} />
              </div>
              <h3 className="font-serif text-2xl text-plum mb-3">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              <a href="#contacto" className="inline-block mt-6 text-xs uppercase tracking-[0.25em] text-gold hover:text-plum transition-colors">
                Saber más →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

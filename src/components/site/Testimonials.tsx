const items = [
  {
    quote: "Una experiencia transformadora. El equipo me acompañó en cada paso con una calidez excepcional. Los resultados son exactamente lo que soñaba: naturales y elegantes.",
    name: "Carolina M.",
    treatment: "Rinoplastia",
  },
  {
    quote: "Profesionalismo y arte en cada detalle. La clínica es un oasis de tranquilidad y los resultados superaron todas mis expectativas.",
    name: "Valentina R.",
    treatment: "Aumento Mamario",
  },
  {
    quote: "Confianza desde la primera consulta. Recibí un trato personalizado y discreto, y hoy me siento radiante. Lo recomiendo sin dudarlo.",
    name: "Sofía L.",
    treatment: "Medicina Estética",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonios" className="py-28 bg-plum text-primary-foreground">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="inline-block w-12 h-px bg-gold" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Testimonios</span>
            <span className="inline-block w-12 h-px bg-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-balance">
            Historias que <em className="text-gold not-italic">inspiran</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((t) => (
            <article key={t.name} className="border border-primary-foreground/10 p-10 hover:border-gold/50 transition-colors duration-500">
              <div className="text-gold font-serif text-5xl leading-none mb-4">“</div>
              <p className="text-primary-foreground/85 leading-relaxed italic font-serif">
                {t.quote}
              </p>
              <div className="mt-8 pt-6 border-t border-primary-foreground/10">
                <div className="text-primary-foreground">{t.name}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-gold mt-1">{t.treatment}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

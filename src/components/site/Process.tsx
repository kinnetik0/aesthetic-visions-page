const steps = [
  {
    n: "01",
    title: "Afiliación",
    desc: "Firmamos un acuerdo formal que te da acceso a planificación, asesoría y gestión integral de tu cirugía. La afiliación no caduca.",
  },
  {
    n: "02",
    title: "Plan de Financiamiento",
    desc: "Elegimos juntos el plan que mejor se adapte a ti: Semicontado, Prepagado, Europeo o Cooperativas.",
  },
  {
    n: "03",
    title: "Evaluación Médica",
    desc: "Cita garantizada con cirujanos plásticos certificados. Evalúan tu caso y emiten un diagnóstico preciso.",
  },
  {
    n: "04",
    title: "Presupuesto",
    desc: "Uno de nuestros ejecutivos te presenta el presupuesto final y reservamos fecha de quirófano y cirujano.",
  },
  {
    n: "05",
    title: "Exámenes Preoperatorios",
    desc: "Mínimo con 7 a 10 días de anticipación, para que los doctores los revisen y tomen previsiones si es necesario.",
  },
  {
    n: "06",
    title: "Cirugía",
    desc: "Tres días antes acudes a nuestras oficinas a firmar los documentos reglamentarios. Coordinamos toda la logística.",
  },
  {
    n: "07",
    title: "Postoperatorio",
    desc: "Consultas con tu cirujano y masajes postoperatorios con terapeuta profesional, para garantizar el resultado óptimo.",
  },
];

const Process = () => {
  return (
    <section id="proceso" className="py-28 bg-cream">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="gold-line" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Cómo trabajamos</span>
            <span className="gold-line" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-plum text-balance">
            Tu proceso, paso a paso, <em className="text-gold not-italic">acompañada en todo momento</em>
          </h2>
          <p className="mt-6 text-muted-foreground">
            Nos encargamos del antes, durante y después de tu cirugía. Tú solo te concentras en tu transformación.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border max-w-6xl mx-auto">
          {steps.map((s) => (
            <article
              key={s.n}
              className="bg-background p-10 hover:bg-blush/40 transition-colors duration-500"
            >
              <div className="font-serif text-5xl text-gold/80 mb-4">{s.n}</div>
              <h3 className="font-serif text-2xl text-plum mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </article>
          ))}
        </div>

        <p className="text-center mt-16 text-sm italic text-plum-light max-w-xl mx-auto">
          “El resultado de la cirugía depende única y exclusivamente de la constancia y del cuidado postoperatorio.”
        </p>
      </div>
    </section>
  );
};

export default Process;

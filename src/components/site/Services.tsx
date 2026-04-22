import { Wallet, CalendarClock, FileSignature, Users } from "lucide-react";

const plans = [
  {
    icon: Wallet,
    title: "Plan Semicontado",
    desc: "Abonas el día de la consulta y cancelas el resto el día de la cirugía.",
    tag: "Más rápido",
  },
  {
    icon: CalendarClock,
    title: "Plan Prepagado",
    desc: "Abonas el día de la consulta y vas cancelando semanal, quincenal o mensualmente. Al terminar, te operas.",
    tag: "Más flexible",
  },
  {
    icon: FileSignature,
    title: "Plan Europeo",
    desc: "Cancelas el 50%, te operas y el resto en 5 cuotas mensuales. Requiere dos fiadores y contrato notariado.",
    tag: "Te operas antes",
  },
  {
    icon: Users,
    title: "Plan de Cooperativas",
    desc: "Cupos de 3, 6 o 12 personas con cuotas de $300, $600 o $1.200. Una paciente se opera cada mes según el cupo.",
    tag: "En grupo",
  },
];

const Services = () => {
  return (
    <section id="planes" className="py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="gold-line" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Planes de Financiamiento</span>
            <span className="gold-line" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-plum text-balance">
            Un plan adaptado a <em className="text-gold not-italic">tus posibilidades</em>
          </h2>
          <p className="mt-6 text-muted-foreground">
            Trabajamos con créditos europeos al <strong className="text-plum">0% de interés comercial</strong>.
            Elige el plan que mejor se ajuste a tu economía y comienza tu proceso hoy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border">
          {plans.map(({ icon: Icon, title, desc, tag }) => (
            <article
              key={title}
              className="group bg-background p-10 hover:bg-cream transition-colors duration-500"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 flex items-center justify-center bg-blush text-plum group-hover:bg-gold group-hover:text-primary-foreground transition-colors duration-500">
                  <Icon size={24} strokeWidth={1.4} />
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold border border-gold/40 px-3 py-1">
                  {tag}
                </span>
              </div>
              <h3 className="font-serif text-2xl text-plum mb-3">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              <a href="#contacto" className="inline-block mt-6 text-xs uppercase tracking-[0.25em] text-gold hover:text-plum transition-colors">
                Quiero este plan →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

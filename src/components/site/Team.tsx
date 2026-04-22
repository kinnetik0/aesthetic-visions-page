import doc1 from "@/assets/doctor1.jpg";
import doc2 from "@/assets/doctor2.jpg";

const team = [
  { img: doc1, name: "Dra. Isabella Romero", role: "Cirugía Facial & Rinoplastia", credential: "MD, PhD — 12 años" },
  { img: doc2, name: "Dr. Andrés Vidal", role: "Cirugía Corporal & Mamaria", credential: "MD — 15 años" },
];

const Team = () => {
  return (
    <section id="equipo" className="py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="gold-line" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Nuestro Equipo</span>
            <span className="gold-line" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-plum text-balance">
            Manos expertas, <em className="text-gold not-italic">mirada artística</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {team.map((m) => (
            <article key={m.name} className="group">
              <div className="relative overflow-hidden bg-blush aspect-[4/5]">
                <img
                  src={m.img}
                  alt={`Retrato de ${m.name}`}
                  width={768}
                  height={896}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-overlay opacity-60" />
              </div>
              <div className="mt-6 text-center">
                <h3 className="font-serif text-2xl text-plum">{m.name}</h3>
                <p className="text-gold text-sm mt-1 tracking-wide">{m.role}</p>
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-2">{m.credential}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

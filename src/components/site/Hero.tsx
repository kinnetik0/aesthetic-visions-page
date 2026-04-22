import heroImg from "@/assets/hero.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden pt-20">
      <div className="container grid lg:grid-cols-2 gap-12 items-center py-16">
        <div className="animate-fade-up">
          <div className="flex items-center gap-3 mb-6">
            <span className="gold-line" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Financiamiento de Cirugías Estéticas</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-plum text-balance">
            Tu cirugía soñada,<br />
            <em className="text-gold not-italic font-normal">a crédito 0% de interés</em>
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-lg leading-relaxed">
            Asesoramos, organizamos, planificamos y financiamos tu cirugía plástica
            estética. Sin trámites engorrosos, sin papeleos, con planes flexibles
            adaptados a ti.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center px-8 py-4 bg-plum text-primary-foreground text-xs uppercase tracking-[0.25em] hover:bg-gold hover:text-plum transition-all duration-500 shadow-soft"
            >
              Solicitar afiliación
            </a>
            <a
              href="#planes"
              className="inline-flex items-center px-8 py-4 border border-plum/30 text-plum text-xs uppercase tracking-[0.25em] hover:border-gold hover:text-gold transition-all duration-500"
            >
              Ver planes
            </a>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6 max-w-md">
            {[
              { n: "+26", l: "Años de trayectoria" },
              { n: "+30K", l: "Mujeres operadas" },
              { n: "20", l: "Clínicas aliadas" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-serif text-3xl text-plum">{s.n}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-in">
          <div className="absolute -inset-6 bg-gradient-gold opacity-20 blur-3xl rounded-full" />
          <div className="relative aspect-[4/5] overflow-hidden shadow-soft">
            <img
              src={heroImg}
              alt="Financiamiento de cirugías estéticas en Venezuela — CIL"
              width={1536}
              height={1024}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-background p-6 shadow-card max-w-[240px] hidden md:block">
            <div className="text-gold font-serif text-3xl mb-1">0%</div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Crédito europeo sin intereses comerciales, accesible a todos los niveles económicos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

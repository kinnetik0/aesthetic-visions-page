import { useState } from "react";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Solicitud enviada", {
        description: "Te contactaremos en menos de 24 horas para iniciar tu afiliación.",
      });
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <section id="contacto" className="py-28 bg-gradient-hero">
      <div className="container grid lg:grid-cols-2 gap-16">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="gold-line" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Contacto</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-plum text-balance">
            Inicia tu <em className="text-gold not-italic">afiliación</em>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-md leading-relaxed">
            Completa tus datos y un asesor te contactará para explicarte los planes
            de financiamiento y agendar tu evaluación médica.
          </p>

          <ul className="mt-12 space-y-6">
            {[
              { icon: MapPin, label: "Av. La Estancia con calle Ernesto Blohm, Torre A, Piso 9, Ofic. 910. Chuao, Caracas." },
              { icon: Phone, label: "+58 414 127 1960" },
              { icon: Mail, label: "info@cilvenezuela.com" },
              { icon: Instagram, label: "@cirugiacredito · +76.000 seguidores" },
            ].map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-start gap-4">
                <span className="w-10 h-10 flex items-center justify-center bg-plum text-gold shrink-0">
                  <Icon size={16} strokeWidth={1.5} />
                </span>
                <span className="text-foreground/80">{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={onSubmit} className="bg-background p-10 shadow-soft space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-plum">Nombre</label>
              <input required type="text" className="mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-2 text-foreground" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-plum">Apellido</label>
              <input required type="text" className="mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-2 text-foreground" />
            </div>
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-plum">Email</label>
            <input required type="email" className="mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-2 text-foreground" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-plum">Teléfono / WhatsApp</label>
            <input required type="tel" className="mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-2 text-foreground" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-plum">Plan de interés</label>
            <select required className="mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-2 text-foreground">
              <option value="">Selecciona…</option>
              <option>Plan Semicontado</option>
              <option>Plan Prepagado</option>
              <option>Plan Europeo</option>
              <option>Plan de Cooperativas</option>
              <option>Aún no lo sé, necesito asesoría</option>
            </select>
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-plum">Cirugía de interés</label>
            <textarea rows={3} placeholder="Cuéntanos qué procedimiento te interesa" className="mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-2 text-foreground resize-none placeholder:text-muted-foreground/60" />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 px-8 py-4 bg-plum text-primary-foreground text-xs uppercase tracking-[0.25em] hover:bg-gold hover:text-plum transition-all duration-500 disabled:opacity-60"
          >
            {loading ? "Enviando…" : "Solicitar afiliación"}
          </button>
          <p className="text-xs text-muted-foreground text-center mt-2">
            Tus datos se tratan con absoluta confidencialidad.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;

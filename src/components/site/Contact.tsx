import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Solicitud enviada", {
        description: "Te contactaremos en menos de 24 horas para confirmar tu consulta.",
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
            Reserva tu <em className="text-gold not-italic">consulta privada</em>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-md leading-relaxed">
            La primera consulta es totalmente confidencial. Cuéntanos lo que deseas y
            diseñaremos un plan a tu medida.
          </p>

          <ul className="mt-12 space-y-6">
            {[
              { icon: MapPin, label: "Calle Serrano 45, 28001 Madrid" },
              { icon: Phone, label: "+34 900 123 456" },
              { icon: Mail, label: "hola@maisonestetica.com" },
              { icon: Clock, label: "Lun – Vie  ·  09:00 – 20:00" },
            ].map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-4">
                <span className="w-10 h-10 flex items-center justify-center bg-plum text-gold">
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
            <label className="text-xs uppercase tracking-[0.2em] text-plum">Teléfono</label>
            <input required type="tel" className="mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-2 text-foreground" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-plum">Tratamiento de interés</label>
            <select required className="mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-2 text-foreground">
              <option value="">Selecciona…</option>
              <option>Rinoplastia</option>
              <option>Aumento mamario</option>
              <option>Lifting facial</option>
              <option>Liposucción</option>
              <option>Medicina estética</option>
              <option>Otro</option>
            </select>
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-plum">Mensaje</label>
            <textarea rows={3} className="mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-2 text-foreground resize-none" />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 px-8 py-4 bg-plum text-primary-foreground text-xs uppercase tracking-[0.25em] hover:bg-gold hover:text-plum transition-all duration-500 disabled:opacity-60"
          >
            {loading ? "Enviando…" : "Solicitar consulta"}
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

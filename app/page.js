import Link from "next/link";
import Weather from "../components/Weather";
import { perfil } from "../lib/data";

export default function Home() {
  return (
    <section className="hero wrap">
      <div>
        <h1>Eu confiro os detalhes. Agora também escrevo o código.</h1>
        <p className="lead">{perfil.resumo}</p>
        <div className="cta">
          <Link href="/projetos" className="btn">Ver projetos</Link>
          <Link href="/profissional" className="btn ghost">Experiência profissional</Link>
        </div>
        <p className="contact">{perfil.emails[0]} · {perfil.telefone}</p>
      </div>
      <Weather />
    </section>
  );
}

import { academico, cursos } from "../../lib/data";

export default function Academica() {
  return (
    <div className="wrap page">
      <h1>Experiência acadêmica</h1>
      <h2>Graduação</h2>
      {academico.map((a) => (
        <article className="item" key={a.titulo}>
          <h3>{a.titulo}</h3><p>{a.local}</p><p className="muted">{a.periodo}</p><p>{a.nota}</p>
        </article>
      ))}
      <h2>Cursos</h2>
      {cursos.map((c) => (
        <article className="item" key={c.titulo}><h3>{c.titulo}</h3><p className="muted">{c.local}</p></article>
      ))}
    </div>
  );
}

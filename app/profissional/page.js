import { experiencias } from "../../lib/data";

export default function Profissional() {
  return (
    <div className="wrap page">
      <h1>Experiência profissional</h1>
      <ol className="timeline">
        {experiencias.map((e) => (
          <li key={e.cargo + e.periodo}>
            <h3>{e.cargo}</h3>
            <p className="muted">{e.empresa} · {e.periodo}</p>
            <ul>{e.itens.map((i) => <li key={i}>{i}</li>)}</ul>
          </li>
        ))}
      </ol>
    </div>
  );
}

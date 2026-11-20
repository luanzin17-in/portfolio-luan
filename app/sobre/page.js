import { habilidades } from "../../lib/data";

const stack = [
  ["Next.js 15", "Framework React com App Router: rotas por pastas, layout compartilhado e build para a Vercel."],
  ["React 19", "Componentes e hooks (useState, useEffect) para a interface e as chamadas às APIs."],
  ["next/font", "Carrega Bricolage Grotesque e Figtree (Google Fonts) sem layout shift."],
  ["next/link e usePathname", "Navegação entre páginas e destaque do item ativo no menu."],
  ["CSS puro (globals.css)", "Variáveis CSS, grid, clamp() e prefers-reduced-motion, sem biblioteca de UI."],
  ["Open-Meteo API", "Clima atual do Recife na Home, via fetch no cliente."],
  ["GitHub REST API", "Lista meus repositórios públicos na página Projetos."],
  ["Git, GitHub e Vercel", "Controle de versão e publicação do site."],
];

export default function Sobre() {
  return (
    <div className="wrap page">
      <h1>Sobre</h1>
      <p className="lead">Tenho 24 anos, moro no Recife e cursei até aqui o 3º período de Sistemas para Internet. Minha rotina de trabalho me ensinou responsabilidade, atenção aos detalhes e boa comunicação.</p>
      <h2>Habilidades</h2>
      <ul className="tags">{habilidades.map((h) => <li key={h}>{h}</li>)}</ul>
      <h2>Tecnologias usadas neste site</h2>
      <dl className="stack">
        {stack.map(([t, d]) => (<div key={t}><dt>{t}</dt><dd>{d}</dd></div>))}
      </dl>
    </div>
  );
}

"use client";
import { useEffect, useState } from "react";
import { GITHUB_USER } from "../../lib/data";

export default function Projetos() {
  const [repos, setRepos] = useState(null);
  const [erro, setErro] = useState("");

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=12`)
      .then((r) => { if (!r.ok) throw new Error(); return r.json(); })
      .then((j) => setRepos(j.filter((r) => !r.fork)))
      .catch(() => setErro(`Não encontrei repositórios para "${GITHUB_USER}". Troque GITHUB_USER em lib/data.js.`));
  }, []);

  return (
    <div className="wrap page">
      <h1>Projetos desenvolvidos</h1>
      <p className="lead">Repositórios públicos carregados ao vivo da API do GitHub.</p>
      {erro && <p className="alert">{erro}</p>}
      {!repos && !erro && <p>Carregando projetos…</p>}
      {repos && repos.length === 0 && <p>Nenhum repositório público ainda.</p>}
      <div className="grid">
        {repos?.map((r) => (
          <a key={r.id} href={r.html_url} target="_blank" rel="noreferrer" className="card">
            <h3>{r.name}</h3>
            <p>{r.description || "Sem descrição."}</p>
            <p className="muted">{r.language || "—"} · atualizado em {new Date(r.updated_at).toLocaleDateString("pt-BR")}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

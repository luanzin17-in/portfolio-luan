"use client";
import { useEffect, useState } from "react";

// API pública Open-Meteo (sem chave): clima atual do Recife
const URL = "https://api.open-meteo.com/v1/forecast?latitude=-8.05&longitude=-34.88&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&timezone=America%2FRecife";
const codes = { 0: "Céu limpo", 1: "Quase limpo", 2: "Parcialmente nublado", 3: "Nublado", 45: "Neblina", 51: "Garoa", 61: "Chuva fraca", 63: "Chuva", 65: "Chuva forte", 80: "Pancadas de chuva", 95: "Trovoada" };

export default function Weather() {
  const [d, setD] = useState(null);
  const [erro, setErro] = useState(false);
  useEffect(() => {
    fetch(URL).then((r) => r.json()).then((j) => setD(j.current)).catch(() => setErro(true));
  }, []);
  return (
    <aside className="receipt" aria-live="polite">
      <p className="r-head">Conferência do dia</p>
      <div className="r-row"><span>Local</span><span>Recife, PE</span></div>
      {erro && <p>Não foi possível carregar o clima. Recarregue a página.</p>}
      {!d && !erro && <p>Conferindo…</p>}
      {d && (<>
        <div className="r-row"><span>Temperatura</span><b>{Math.round(d.temperature_2m)} °C</b></div>
        <div className="r-row"><span>Umidade</span><b>{d.relative_humidity_2m}%</b></div>
        <div className="r-row"><span>Vento</span><b>{Math.round(d.wind_speed_10m)} km/h</b></div>
        <div className="r-row"><span>Condição</span><b>{codes[d.weather_code] ?? "—"}</b></div>
      </>)}
      <p className="r-foot">Dados ao vivo · Open-Meteo API</p>
    </aside>
  );
}

import React, { useEffect, useState } from "react";
import Card from "../components/ui/Card";

export default function Agenda() {

  type AgendaItem = {
    time: string;
    title: string;
  }

  const [sessions, setSessions] = useState<AgendaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    async function loadAgenda() {
      try {
        const res = await fetch("https://evento-innova-api-lsh2.onrender.com/agenda");
        if (!res.ok) throw new Error("Error al cargar la agenda");

        const data = await res.json();

        setSessions(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadAgenda();
  }, []);

  return (
    <section className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Agenda</h2>

      <Card>
        {loading && <p className="p-4 text-gray-500">Cargando agenda...</p>}
        {error && <p className="p-4 text-red-500">{error}</p>}

        {!loading && !error && (
          <ol className="space-y-4">
            {sessions.map((s, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="w-20 text-sm font-semibold">{s.time}</div>
                <div>{s.title}</div>
              </li>
            ))}
          </ol>
        )}
      </Card>
    </section>
  );
}
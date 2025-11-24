import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Card from '../components/ui/Card'

export default function Home(){

  const [speakers, setSpeakers] = useState([]);
  const [agenda, setAgenda] = useState([]);

  const [loadingSpeakers, setLoadingSpeakers] = useState(true);
  const [loadingAgenda, setLoadingAgenda] = useState(true);

  // Cargar ponentes
  useEffect(() => {
    fetch("https://evento-innova-api.onrender.com/speakers")
      .then(res => res.json())
      .then(data => {
        setSpeakers(data);
        setLoadingSpeakers(false);
      })
      .catch(err => {
        console.error("Error cargando ponentes:", err);
        setLoadingSpeakers(false);
      });
  }, []);

  // Cargar agenda
  useEffect(() => {
    fetch("https://evento-innova-api.onrender.com/agenda")
      .then(res => res.json())
      .then(data => {
        console.log(agenda);
        setAgenda(data);
        setLoadingAgenda(false);
      })
      .catch(err => {
        console.error("Error cargando agenda:", err);
        setLoadingAgenda(false);
      });
  }, []);

  return (
    <section className="max-w-6xl mx-auto">
      <Hero />

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* COLUMNA IZQUIERDA */}
        <div className="lg:col-span-2">

          {/* AGENDA DESDE API */}
          <Card>
            <h3 className="text-xl font-bold mb-2">Agenda Destacada</h3>

            {loadingAgenda && (
              <div className="opacity-60 text-sm">Cargando agenda...</div>
            )}

            {!loadingAgenda && (
              <ul className="space-y-3">
                {agenda.slice(0, 3).map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <strong>{item.time}</strong>
                    <span>{item.title}</span>
                  </li>
                ))}
              </ul>
            )}

            <Link to="/agenda" className="mt-4 inline-block text-sm underline">
              Ver agenda completa
            </Link>
          </Card>

          {/* LISTA DE PONENTES */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">

            {loadingSpeakers && (
              <div className="col-span-2 text-center opacity-60">Cargando ponentes...</div>
            )}

            {!loadingSpeakers && speakers.map(s => (
              <motion.div key={s.id} whileHover={{ y: -6 }} className="bg-white/5 p-4 rounded-xl">
                <div className="flex items-center gap-4">
                  <img
                    src={s.photo}
                    alt={s.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold">{s.name}</div>
                    <div className="text-sm opacity-80">{s.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* COLUMNA DERECHA */}
        <aside>
          <Card>
            <h4 className="font-bold">Registro rápido</h4>
            <p className="text-sm opacity-80">Regístrate en menos de 1 minuto.</p>
            <Link to="/registro" className="mt-4 inline-block bg-cian-electrico text-azul-nocturno px-4 py-2 rounded-lg font-semibold">
              Inscribirme
            </Link>
          </Card>

          <Card className="mt-4">
            <h4 className="font-bold">Patrocinadores</h4>
            <p className="text-sm opacity-80">
              Paquetes disponibles. <a className="underline" href="#">Solicitar info</a>
            </p>
          </Card>
        </aside>
      </div>
    </section>
  )
}

function Hero(){
  return (
    <section className="rounded-3xl overflow-hidden bg-[url('https://images.unsplash.com/photo-1526378721066-196a46b14b36?w=1600&q=60')] bg-cover bg-center p-8 md:p-12 lg:p-20 text-azul-nocturno">

      <div className="backdrop-blur-sm bg-white/80 rounded-2xl p-6 md:p-12">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-extrabold">
            Innova U — Encuentro de Innovación y Tecnología
          </h1>

          <p className="mt-3 text-sm md:text-base opacity-90">
            24 Nov · Universidad Central · Regístrate gratis
          </p>

          <div className="mt-6 flex gap-4">
            <Link to="/registro" className="bg-cian-electrico text-azul-nocturno px-5 py-3 rounded-lg font-bold">
              Inscribirme
            </Link>
            <Link to="/agenda" className="px-5 py-3 rounded-lg border border-white/10">
              Ver agenda
            </Link>
          </div>
        </div>
      </div>

    </section>
  )
}

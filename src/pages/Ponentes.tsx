import React from 'react'
import { speakers } from '../data/speakers'
import Card from '../components/ui/Card'

export default function Ponentes(){
  return (
    <section className="max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Ponentes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {speakers.map(s => (
          <Card key={s.id} className="text-azul-nocturno">
            <img src={s.photo} alt={s.name} className="w-full h-60 object-cover rounded-lg mb-4"/>
            <div className="font-bold text-white text-lg">{s.name}</div>
            <div className="text-sm text-white opacity-70">{s.role}</div>
            <p className="mt-2 text-sm text-white opacity-80">{s.bio}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
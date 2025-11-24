import React, { useState } from 'react'
import Card from '../components/ui/Card'

export default function Register(){
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')
  const [form, setForm] = useState({ name: '', email: '', role: 'Estudiante', institution: '' })

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('https://evento-innova-api-lsh2.onrender.com/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      console.log(form);
      console.log(data);
      if(res.ok){
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section className="max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Registro</h2>
      <Card>
        {status === 'success' ? (
          <div className="p-6 text-center">
            <h3 className="font-bold text-lg">Registro completado ✅</h3>
            <p className="mt-2 text-sm opacity-80">Revisa tu correo para la confirmación.</p>
          </div>
        ) : (
          <form onSubmit={submit} className="space-y-3">
            <input required value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Nombre completo" className="w-full p-3 rounded-lg text-azul-nocturno" />
            <input required value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="Correo electrónico" type="email" className="w-full p-3 rounded-lg text-azul-nocturno" />
            <select value={form.role} onChange={e => setForm({...form, role: e.target.value})} className="w-full p-3 rounded-lg text-azul-nocturno">
              <option>Estudiante</option>
              <option>Profesional</option>
              <option>Patrocinador</option>
            </select>
            <input value={form.institution} onChange={e => setForm({...form, institution: e.target.value})} placeholder="Institución / Empresa (opcional)" className="w-full p-3 rounded-lg text-azul-nocturno" />

            <div className="flex gap-2">
              <button type="submit" className="bg-cian-electrico text-azul-nocturno px-4 py-2 rounded-lg font-bold">Enviar</button>
              <button type="button" onClick={() => { setForm({ name: '', email: '', role: 'Estudiante', institution: '' }); setStatus('idle') }} className="px-4 py-2 rounded-lg border">Limpiar</button>
            </div>

            {status === 'loading' && <div className="text-sm opacity-80">Enviando...</div>}
            {status === 'error' && <div className="text-sm text-magenta-suave">Ocurrió un error, intenta otra vez.</div>}
          </form>
        )}
      </Card>
    </section>
  )
}
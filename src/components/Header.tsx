import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Header(){
  return (
    <header className="bg-gradient-to-r from-azul-nocturno to-black/80 text-white sticky top-0 z-30 shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4 md:p-6">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cian-electrico flex items-center justify-center text-azul-nocturno font-bold">IN</div>
          <div>
            <div className="font-bold">Innova U</div>
            <div className="text-xs opacity-80">Encuentro de Innovación</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/agenda" className={({isActive}) => isActive ? 'underline' : ''}>Agenda</NavLink>
          <NavLink to="/ponentes" className={({isActive}) => isActive ? 'underline' : ''}>Ponentes</NavLink>
          <NavLink to="/registro" className={({isActive}) => isActive ? 'underline' : ''}>Registro</NavLink>
        </nav>

        <div className="md:hidden">
          {/* mobile menu simplified */}
          <MobileMenu />
        </div>

        <div className="hidden md:block">
          <Link to="/registro" className="inline-block bg-cian-electrico text-azul-nocturno px-4 py-2 rounded-lg font-semibold">Inscribirme</Link>
        </div>
      </div>
    </header>
  )
}

function MobileMenu(){
  return (
    <details className="text-right">
      <summary className="cursor-pointer">Menu</summary>
      <div className="bg-white/5 rounded mt-2 p-3 text-sm text-white/90">
        <a href="/agenda" className="block py-1">Agenda</a>
        <a href="/ponentes" className="block py-1">Ponentes</a>
        <a href="/registro" className="block py-1">Registro</a>
      </div>
    </details>
  )
}
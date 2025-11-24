import React from 'react'

export default function Footer(){
  return (
    <footer className="border-t border-white/5 mt-8 py-6">
      <div className="max-w-6xl mx-auto text-center text-sm opacity-80">© {new Date().getFullYear()} Innova U · Hecho con ❤️</div>
    </footer>
  )
}
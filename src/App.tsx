import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Home from './pages/Home'
import Agenda from './pages/Agenda'
import Ponentes from './pages/Ponentes'
import Register from './pages/Register'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-8 px-4 md:px-8 lg:px-16">
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/agenda" element={<Agenda/>} />
            <Route path="/ponentes" element={<Ponentes/>} />
            <Route path="/registro" element={<Register/>} />
          </Routes>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
import React from 'react'

export default function Card({children, className = ''}: any){
  return (
    <div className={`card-bg p-4 rounded-2xl shadow-lg ${className}`}>
      {children}
    </div>
  )
}
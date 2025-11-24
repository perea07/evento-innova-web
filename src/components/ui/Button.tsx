import React from 'react'

export default function Button({children, className = '', ...props}: any){
  return (
    <button className={`inline-flex items-center justify-center rounded-lg px-4 py-2 font-semibold shadow ${className}`} {...props}>
      {children}
    </button>
  )
}
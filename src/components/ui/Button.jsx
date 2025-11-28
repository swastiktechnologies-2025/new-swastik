import React from 'react'

export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const base = 'px-6 py-3 rounded-lg font-medium transition-colors duration-300 text-sm md:text-base'
  const variants = {
  primary: "bg-sky-600 text-white hover:bg-sky-700",
  outline: "border border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white",
  ghost: "text-slate-700 hover:text-sky-600"
}


  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

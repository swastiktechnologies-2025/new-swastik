import React from "react"

export default function Card({ title, icon, children, footer }) {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
      {icon && <div className="mx-auto mb-4 text-accent text-4xl">{icon}</div>}
      <h3 className="text-lg font-semibold text-slate-800 mb-2">{title}</h3>

      {/* Text should be a paragraph only */}
      <p className="text-slate-600 text-sm mb-4">{children}</p>

      {/* Footer/CTA should be separate */}
      {footer && <div className="mt-4">{footer}</div>}
    </div>
  )
}

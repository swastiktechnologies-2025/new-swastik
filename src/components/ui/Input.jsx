import React from "react"
import Icon from "./Icon"

export default function Input({
  label,
  type = "text",
  placeholder,
  icon,
  required = false,
  className = "",
  ...props
}) {
  return (
    <div className="flex flex-col space-y-1">
      {label && (
        <label className="text-sm font-medium text-slate-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <div className="relative">
        {icon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
            <Icon name={icon} size={18} />
          </span>
        )}

        <input
          type={type}
          placeholder={placeholder}
          required={required}
          className={`w-full p-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-sky-400 focus:border-sky-500 outline-none transition-colors ${
            icon ? "pl-10" : ""
          } ${className}`}
          {...props}
        />
      </div>
    </div>
  )
}

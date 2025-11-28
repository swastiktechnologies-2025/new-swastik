import React from "react"
import * as Icons from "lucide-react"

/**
 * <Icon name="Mail" size={20} className="text-sky-500" />
 */
export default function Icon({ name, size = 20, className = "" }) {
  const LucideIcon = Icons[name]

  if (!LucideIcon) {
    console.warn(`Icon "${name}" not found in lucide-react.`)
    return null
  }

  return <LucideIcon size={size} className={className} />
}

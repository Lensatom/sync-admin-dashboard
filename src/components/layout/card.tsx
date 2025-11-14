import React from 'react'

interface ICardProps {
  children: React.ReactNode
  className?: string
}

export function Card({
  children,
  className
}:ICardProps) {
  return (
    <div className={`card bg-white border border-gray.4 p-6 rounded-lg ${className}`}>
      {children}
    </div>
  )
}
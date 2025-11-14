import React from 'react'

interface IContainerProps {
  children: React.ReactNode
  className?: string
}

export function Container({
  children,
  className
}:  IContainerProps) {
  return (
    <section className={`px-10 ${className}`}>
      {children}
    </section>
  )
}
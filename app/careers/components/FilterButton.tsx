'use client'

import React from 'react'

interface FilterButtonProps {
  label: string
  isActive: boolean
  onClick: () => void
}

export default function FilterButton({ label, isActive, onClick }: FilterButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        px-5 py-2.5 rounded-full text-sm font-medium transition-all
        ${isActive
          ? 'bg-mint text-grey-900'
          : 'bg-transparent border border-grey-50/20 text-grey-50 hover:bg-grey-50/5'
        }
      `}
    >
      {label}
    </button>
  )
}

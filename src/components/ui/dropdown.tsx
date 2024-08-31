'use client'
import React, { useState } from 'react'
import {
  ArrowBigDownDash,
  ArrowBigUpDash
} from 'lucide-react'
import Typography from './typography'

interface DropdownProps {
  primaryText: string
  secondaryText: string
}

const Dropdown: React.FC<DropdownProps> = ({
  primaryText,
  secondaryText
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div
      className="border border-purple-300/35 bg-gray-500/5 rounded-lg p-4
        w-full cursor-pointer filterHighlight"
      onClick={toggleDropdown}
    >
      <div className="flex justify-between items-center">
        <Typography
        className='font-bold'
          variant="h6"
        >
          {primaryText}
        </Typography>
        {isOpen ? <ArrowBigUpDash /> : <ArrowBigDownDash />}
      </div>
      {isOpen && (
        <div className="mt-2">
          <Typography
            variant="p"
          >
            {secondaryText}
          </Typography>
        </div>
      )}
    </div>
  )
}

export default Dropdown

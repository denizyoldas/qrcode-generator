import React from 'react'

interface Props {
  label: string
  options: string[]
  value: string
  onChange: (value: string) => void
}

const Select = ({ label, options, value, onChange }: Props) => {
  return (
    <div className="flex flex-col">
      <label className="text-gray-500 text-sm mb-1">{label}</label>
      <select
        className="border border-gray-300 rounded-md p-2"
        value={value}
        onChange={e => onChange(e.target.value)}
      >
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select

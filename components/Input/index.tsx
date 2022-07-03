/* eslint-disable react/display-name */
import React, { forwardRef } from 'react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export const Input = forwardRef(({ label, ...rest }: Props, ref) => {
  return (
    <div className="flex gap-3 items-center justify-between">
      <label htmlFor={label}>{label}</label>
      <input
        className="border p-1 rounded text-black"
        id={label}
        ref={ref}
        {...rest}
      />
    </div>
  )
})

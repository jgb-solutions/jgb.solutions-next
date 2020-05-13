import React from 'react'

export interface InputProps {
  type: string
  name?: string
  inputRef: (ref: HTMLInputElement) => void
  label: string
  value?: string
  placeholder: string
  errorText?: any
  id?: string,
  containerClassName?: string
  labelClassName?: string
  inputClassName?: string
  errorTextClassName?: string
  error?: boolean
}

export default function Input(props: InputProps) {
  return (
    <div className={`${props.containerClassName || "mb-6"}`}>
      <label
        className={`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ${props.labelClassName}`}
        htmlFor={props.id} dangerouslySetInnerHTML={{ __html: props.label }}
      />

      <input
        className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded-large py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${props.inputClassName} ${props.error ? 'border-red-500' : ''}`}
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        ref={props.inputRef}
        name={props.name}
        value={props.value}
      />

      {!!props.error && (
        <p className={`text-red-500 text-xs italic ${props.errorTextClassName}`}>{props.errorText}</p>
      )}
    </div>
  )
}
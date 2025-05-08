"use client";
import React, {useState, useEffect, useRef, useCallback, PropsWithChildren } from 'react'

type UserFormProps = {
  onSubmit: (data: {name: string; email: string}) => void;
}

const UserForm = ({onSubmit, children}: PropsWithChildren<UserFormProps>) => {
  const nameRef = useRef<HTMLInputElement>(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
   nameRef.current?.focus()
  },[])

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      onSubmit({name, email})
    },
    [name, email, onSubmit]
  )

  return (
    <form onSubmit={handleSubmit} className='p-4 border rounded space-y-2'>
      <div>
        <label className='block text-sm'>Name:</label>
        <input
         ref={nameRef}
         type='text'
         value={name}
         onChange={(e) => setName(e.target.value)}
         className='border p-1 w-full'
        />
      </div>
      <div>
        <label className='block text-sm'>Email:</label>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='border p-1 w-full'
        />
      </div>
      <button type='submit' className='bg-blue-500 text-white px-4 py-1 rounded'>
        Submit
      </button>
      {children && <div className='mt-4'>{children}</div>}
    </form>
  )
}

export default UserForm
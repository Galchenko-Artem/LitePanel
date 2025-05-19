"use client"

import { useState } from "react"

type UserFormProps = {
  onSubmit: (data: { name: string; email: string }) => void
  children?: React.ReactNode
}

export default function UserForm({ onSubmit, children }: UserFormProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ name, email })
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block mb-1">Имя</label>
        <input
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          className="border p-2 w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label  htmlFor="email" className="block mb-1">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="border p-2 w-full"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        Отправить
      </button>
      {submitted && <p>Форма успешно отправлена</p>} 
      {children}
    </form>
  )
}

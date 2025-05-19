"use client"

import UserForm from "@/components/UserForm"

export default function FormPage() {
  const handleSubmit = (data: { name: string; email: string }) => {
    console.log("Отправлено:", data)
  }

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Форма</h2>
      <UserForm onSubmit={handleSubmit}>
        <p className="text-sm text-gray-600">Заполните все поля.</p>
      </UserForm>
    </div>
  )
}

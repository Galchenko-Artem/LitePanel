"use client";

import GenericTable from "@/components/GenericTable";

type User = {
  id: number;
  name: string;
  email: string;
};

const users: User[] = [
  { id: 1, name: "Иван", email: "ivan@example.com" },
  { id: 2, name: "Мария", email: "maria@example.com" },
];

export default function TablePage() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Таблица пользователей</h2>
      <GenericTable
        data={users}
        columns={[
          { key: "id", label: "ID" },
          { key: "name", label: "Имя" },
          { key: "email", label: "Email" },
        ]}
      />
    </div>
  );
}

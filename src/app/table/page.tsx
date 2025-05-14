"use client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

type User = {
  id: number;
  name: string;
  email: string;
};

export default function TablePage() {
  const queryClient = useQueryClient();
  const { data: users = [], isLoading } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3001/users");
      if (!res.ok) throw new Error("Ошибка загрузки пользователей");
      return res.json();
    },
  });
  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      const res = await fetch(`http://localhost:3001/users/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Ошибка удаления");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Пользователи</h1>
      {isLoading ? (
        <p>Загрузка...</p>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Имя</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Удалить</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="odd:bg-white even:bg-gray-50">
                <td className="px-4 py-2 border">{u.id}</td>
                <td className="px-4 py-2 border">{u.name}</td>
                <td className="px-4 py-2 border">{u.email}</td>
                <td className="px-4 py-2 border">
                  <button
                    onClick={() => deleteMutation.mutate(u.id)}
                    className="text-red-600 hover:underline"
                  >
                    ✖
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export default async function SSRPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store", // SSR
  });
  const users = await res.json();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">SSR: Пользователи</h1>
      <ul className="list-disc list-inside">
        {users.map((u: any) => (
          <li key={u.id}>{u.name} ({u.email})</li>
        ))}
      </ul>
    </div>
  );
}

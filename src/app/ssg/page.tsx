/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useQuery } from '@tanstack/react-query';

export default function SSGQueryPage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!res.ok) throw new Error('Ошибка загрузки');
      return res.json();
    },
  });
  if (isLoading) return <p className="text-gray-500">Загрузка...</p>;
  if (isError) return <p className="text-red-500">Ошибка загрузки</p>;
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">SSG через React Query</h1>
      <ul className="space-y-2">
        {data.slice(0, 5).map((post: any) => (
          <li key={post.id}>
            <a href={`/post/${post.id}`} className="text-blue-600 hover:underline">
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

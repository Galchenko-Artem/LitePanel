/* eslint-disable @typescript-eslint/no-explicit-any */
export default async function SSGPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">SSG: Посты</h1>
      <ul className="space-y-2">
        {posts.slice(0, 5).map((post: any) => (
          <li key={post.id} className="border-b pb-2">
            <a href={`/post/${post.id}`} className="text-blue-600 hover:underline">
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

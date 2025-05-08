type Params = {
  params: { id: string };
};

export default async function PostPage({ params }: Params) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const post = await res.json();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">Пост #{post.id}</h1>
      <h2 className="text-lg font-semibold mb-1">{post.title}</h2>
      <p className="text-gray-700">{post.body}</p>
    </div>
  );
}

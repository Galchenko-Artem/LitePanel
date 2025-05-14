"use client";
import {
  useState,
  useEffect,
  useRef,
  useCallback,
  PropsWithChildren,
} from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type UserFormProps = {
  onSuccess?: () => void;
};

type FormData = {
  name: string;
  email: string;
};

const UserForm = ({ onSuccess, children }: PropsWithChildren<UserFormProps>) => {
  const queryClient = useQueryClient(); 
  const nameRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      const res = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Ошибка отправки");
      return res.json();
    },
    onSuccess: () => {
      setName("");
      setEmail("");
      queryClient.invalidateQueries({ queryKey: ["users"] }); // 👈 вот он!
      onSuccess?.();
    },
  });
  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      mutation.mutate({ name, email });
    },
    [name, email, mutation]
  );

  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded space-y-2 bg-white">
      <div>
        <label className="block text-sm">Имя:</label>
        <input
          ref={nameRef}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-1 w-full"
        />
      </div>
      <div>
        <label className="block text-sm">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-1 w-full"
        />
      </div>
      <button
        type="submit"
        disabled={mutation.isPending}
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {mutation.isPending ? "Отправка..." : "Отправить"}
      </button>
      {mutation.isSuccess && (
        <p className="text-green-600 text-sm">Успешно отправлено!</p>
      )}
      {mutation.isError && (
        <p className="text-red-600 text-sm">Ошибка: {(mutation.error as Error).message}</p>
      )}
      {children}
    </form>
  );
};

export default UserForm;

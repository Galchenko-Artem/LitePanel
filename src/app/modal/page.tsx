"use client";

import { useState } from "react";
import Modal from "@/components/Modal";

export default function ModalPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Модальное окно</h1>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Открыть модалку
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="text-xl font-semibold mb-2">Привет!</h2>
        <p className="text-sm text-gray-700 mb-4">
          Это универсальное модальное окно.
        </p>
        <button
          onClick={() => setIsOpen(false)}
          className="mt-2 px-4 py-2 bg-red-600 text-white rounded"
        >
          Закрыть
        </button>
      </Modal>
    </div>
  );
}

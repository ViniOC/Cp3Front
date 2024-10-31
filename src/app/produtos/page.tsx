"use client"
import { TipoProduto } from "@/types";
import { useEffect, useState } from "react";

export default function Produtos() {
  const [produtos, setProduto] = useState<TipoProduto[]>([]);

  useEffect(() => {
    const chamadaApi = async () => {
      const response = await fetch("http://localhost:3000/api/produtos");
      const data = await response.json();
      setProduto(data);
      console.log(data);
    };
    chamadaApi();
  }, []);

  const handleDelete = async (id: number) => {
    if (confirm("Tem certeza que deseja excluir este produto?")) {
      // Faça a chamada para deletar o produto aqui
      await fetch(`http://localhost:3000/api/produtos/${id}`, { method: "DELETE" });
      setProduto(produtos.filter((produto) => produto.id !== id));
    }
  };

  const handleEdit = (id: number) => {
    // Redirecionar para a página de edição
    window.location.href = `/produto/${id}`;
  };

  return (
    <main>
      <div className='flex flex-wrap justify-center p-6 gap-4'>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">Nome</th>
              <th className="py-2">Marca</th>
              <th className="py-2">Descrição</th>
              <th className="py-2">Preço</th>
              <th className="py-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((produto) => (
              <tr key={produto.id} className="border-b">
                <td className="py-2 px-4">{produto.nome}</td>
                <td className="py-2 px-4">{produto.marca}</td>
                <td className="py-2 px-4">{produto.descricao}</td>
                <td className="py-2 px-4">R${produto.preco},00</td>
                <td className="py-2 px-4 flex justify-center">
                  <button
                    className="bg-blue-500 text-white py-1 px-3 rounded mr-2 hover:bg-blue-600"
                    onClick={() => handleEdit(produto.id)}
                  >
                    Editar
                  </button>
                  <button
                    className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                    onClick={() => handleDelete(produto.id)}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

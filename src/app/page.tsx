'use client'
import Carrossel from "@/components/Carrosel";
import { TipoProduto } from "@/types";
import { useEffect, useState } from "react";



export default function Home() {
  const [produtos, setProduto] = useState<TipoProduto[]>([]);

    useEffect(()=>{
            const chamadaApi = async () => {
            const response = await fetch("http://localhost:3000/api/produtos")
            const data = await response.json()
            setProduto(data)
            console.log(data);            
        }
        chamadaApi()
    },[])
  return (
    <main className="flex flex-col items-center justify-center grow min-h-full-screen">

      <Carrossel/>
      <div className='flex flex-wrap justify-center p-6 gap-4'>
            {produtos.map((t, i) => (
            <div key={i} className='border border-gray-300 rounded-lg shadow-md p-4 max-w-xs'>
            <img src={t.imagem} alt={t.nome} className='w-full h-48 object-cover rounded-t-lg' />
            <div className='p-4'>
                <h2 className='text-xl font-bold mb-2'>{t.nome}</h2>
                <p className='text-gray-600 mb-2'>{t.marca}</p>
                <p className='text-gray-800 mb-4'>{t.descricao}</p>
                <p className='text-lg font-semibold text-blue-600'>R${t.preco},00</p>
            </div>
        </div>
            ))}
</div>

    </main>
  );
}

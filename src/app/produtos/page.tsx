"use client"
import { TipoProduto } from "@/types";
import { useEffect, useState } from "react";



export default function Produtos(){

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


    return(
        <main>
            <div>
                {produtos.map((t, i) => (
                    <div key={i}>
                        <h2>{t.nome}</h2>
                        <p>{t.marca}</p>
                        <p>{t.descricao}</p>
                        <p>{t.preco}</p>
                    </div>
                )
            
            )}
            </div>
            
        </main>
    );
}




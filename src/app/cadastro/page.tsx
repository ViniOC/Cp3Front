"use client"
import { TipoProduto } from "@/types";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Cadastro(){

    const navigate = useRouter()

    const [produto, setProduto] = useState<TipoProduto>({
        id:0,
        marca:"",
        nome:"",
        descricao:"",
        preco:0,
        imagem:""
        
    })

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
            const {name,value} = e.target
            setProduto({...produto, [name]:value})
    }

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        const cabecalho={
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(produto)
        }

        try{
            const response = await fetch("http://localhost:3000/api/produtos",cabecalho)

            if(response.ok){
                alert(`${produto.nome} cadastrado com sucesso!`)
                setProduto({id:0, marca:"",nome:"",descricao:"", preco:0, imagem:""})
                navigate.push('/produtos')
            }else{
                alert("Erro ao cadastrar!")
            }
        }catch(error){
            console.error("Erro ao cadastrar o produto",error);
        }
    }

    return(
        <main className="grow flex flex-col items-center">
            <h1 className="text-3xl">Cadastro de Produtos</h1>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <label className="" htmlFor="idmarca">Marca</label>
                    <input className="border border-gray-900 rounded-md" type="text" name="marca" value={produto.marca} id="idmarca" 
                    onChange={handleChange}/>
                </div>
                <div className="flex flex-col">
                    <label className="" htmlFor="idnome">Nome</label>
                    <input className="border border-gray-900 rounded-md" type="text" name="nome" value={produto.nome} id="idnome" 
                    onChange={handleChange}/>
                </div>
                <div className="flex flex-col">
                    <label className="" htmlFor="iddesc">Descrição</label>
                    <input className="border border-gray-900 rounded-md" type="text" name="descricao" value={produto.descricao} id="iddesc" 
                    onChange={handleChange}/>
                </div>
                <div className="flex flex-col ">
                    <label className="" htmlFor="idpreco">Preço</label>
                    <input className="border border-gray-900 rounded-md" step={'0.01'} type="number" name="preco" value={produto.preco} id="idpreco" 
                    onChange={handleChange}/>
                </div>
                <div className="flex justify-center items-center mt-4">
                    <button className="border border-gray-900 rounded-md bg-gray-200 hover:bg-gray-400 p-2" type="submit">Cadastrar Produto</button>
                </div>
            </form>

        </main>

    )
}
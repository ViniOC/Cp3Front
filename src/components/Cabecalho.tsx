'use client'
import { headers } from "next/headers";
import Link from "next/link";

export default function Cabecalho (){
    return(
        <header className='flex justify-between p-4 items-center bg-gray-300'>
            <h1 className='text-6xl font-bold'>Anime Store</h1>
                <Link href='/'>Home</Link>

                <Link href='/produtos'>Produtos</Link>

                <Link href= '/cadastro'>Cadastro</Link>
            

        </header>
    );
}
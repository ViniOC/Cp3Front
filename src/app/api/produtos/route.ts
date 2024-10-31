import { TipoProduto } from "@/types";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function GET() {

    const file = await fs.readFile(process.cwd() + '/src/data/produtos.json', 'utf-8');
    const produtos = JSON.parse(file);

    return NextResponse.json(produtos);

}

export async function POST(request: Request) {

    const file = await fs.readFile(process.cwd() + '/src/data/produtos.json', 'utf-8')
    const data = JSON.parse(file)
    const {  marca ,nome, descricao,preco, imagem } = await request.json()
    const produto = { marca ,nome, descricao, preco, imagem } as TipoProduto
    produto.id = Number(Date.now())
    data.push(produto)
    const json = JSON.stringify(data)
    await fs.writeFile(process.cwd() + '/src/data/produtos.json', json)
    return NextResponse.json(produto)
}


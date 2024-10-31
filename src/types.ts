export type TipoProduto = {
    id:number;
    nome:string;
    marca:string;
    descricao:string;
    preco: number;
    imagem: string;
}
export type ModalProps = {
    open:boolean;
    onClose:()=>void;
    children: React.ReactNode;
}
import { produtos } from "@/dados/dados-produtos";

export const buscarProduto = (textoDigitado) => {
    return produtos.filter (
        (produto) => 
            produto.nome.toLowerCase().includes(textoDigitado.toLowerCase()) ||
            produto.descricao.toLocaleLowerCase().includes(textoDigitado.toLocaleLowerCase())
    );
}

export const filtrarProdutos = (categoria) => {
    return produtos.filter((produto) => produto.categoria === categoria);
}

export const produtosEntrada = filtrarProdutos("Entradas");
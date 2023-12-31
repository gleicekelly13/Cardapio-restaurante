import React, { useState } from 'react';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Topo from '@/componentes/Topo';
import Categorias from '@/componentes/Categorias';
import CampoDeBusca from '@/componentes/CampoDeBusca';
import Cards from '@/componentes/Cards';
import { buscarProduto, filtrarProdutos, produtosEntrada } from '@/service/service';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [dadosFiltrados, setDadosFiltrados] = useState(produtosEntrada);
  const [textoBuscaDigitado, setTextoBuscaDigitado] = useState("");

  const [botaoClicado, setBotaoClicado] = useState("Entradas")

  const handleBuscarProduto = (textoDigitado) => {
    setTextoBuscaDigitado(textoDigitado);
    textoDigitado.length >= 3 && setDadosFiltrados(buscarProduto(textoDigitado))
    setBotaoClicado("");
  }

  const handleFiltrarProdutos = (categoria) => {
    setTextoBuscaDigitado("");
    setDadosFiltrados(filtrarProdutos(categoria));
    setBotaoClicado(categoria);
  }

  return (
    <div>
      <Head>
        <title>Cardápio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Poppins&display=swap" rel="stylesheet"></link>
      </Head>
      
      <Topo />

      <main className={styles.container_principal}>
        <Categorias 
          botaoClicado = {botaoClicado}
          handleFiltrarProdutos = {handleFiltrarProdutos} />

        <CampoDeBusca 
          textoBuscaDigitado = {textoBuscaDigitado}
          handleBuscarProduto = {handleBuscarProduto} />

        <section className={[styles.secao_cards, styles.limitar_secao].join(" ")}>
          <div>
            <h2>Cardápio</h2>
          </div>

          <div className={styles.container_cards}>
            {dadosFiltrados.map((produto) => (
              <Cards key={produto.id} produto={produto} />
            ))}
          </div>
        </section>
      </main>
        
    </div>
  )
}

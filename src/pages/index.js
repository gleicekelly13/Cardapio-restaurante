import React from 'react';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Topo from '@/componentes/Topo';
import Categorias from '@/componentes/Categorias';
import CampoDeBusca from '@/componentes/CampoDeBusca';
import { produtos } from '../dados/dados-produtos';
import Cards from '@/componentes/Cards';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
        <Categorias />

        <CampoDeBusca />

        <section className='secao-cards limitar-secao'>
          <div>
            <h2>Cardápio</h2>
          </div>

          <div className='container-cards'>
            {produtos.map((produto) => (
              <Cards key={produto.id} produto={produto} />
            ))}
          </div>
        </section>
      </main>
        
    </div>
  )
}

import styles from "./Categorias.module.css";

import Image from "next/image";

import Entradas from "../../../public/assets/entrada.png";
import Massas from "../../../public/assets/massa.png";
import Carnes from "../../../public/assets/carne.png";
import Bebidas from "../../../public/assets/bebidas.png";
import Saladas from "../../../public/assets/salada.png";
import Sobremesas from "../../../public/assets/sobremesa.png";

const Categorias = () => {
    return (
        <section className={[styles.secao_categorias, styles.limitar_secao].join(" ")}>
            <div className={styles.container_buttons}>
                <button>
                    <Image className={styles.icone} src={Entradas} alt="icone-entrada" />
                    Entradas
                </button>

                <button>
                    <Image className={styles.icone} src={Massas} alt="icone-massa" />
                    Massas
                </button>
                
                <button>
                    <Image className={styles.icone} src={Carnes} alt="icone-carnes" />   
                    Carnes                 
                </button>

                <button>
                    <Image className={styles.icone} src={Bebidas} alt="icone-bebidas" />
                    Bebidas
                </button>

                <button>
                    <Image className={styles.icone} src={Saladas} alt="icone-saladas" />
                    Saladas
                </button>

                <button>
                    <Image className={styles.icone} src={Sobremesas} alt="icone-sobremesas" />
                    Sobremesas
                </button>
            </div>
        </section>
    );
}

export default Categorias;
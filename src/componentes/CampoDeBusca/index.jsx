import styles from "./CampoDeBusca.module.css";
import Image from "next/image";
import Lupa from "../../../public/assets/lupa.png";

export default function CampoDeBusca ({handleBuscarProduto, textoBuscaDigitado}) {
    return (
        <div className={[styles.container_input, styles.limitar_secao].join(" ")}>
            <Image src={Lupa} alt="icone-lupa" />
            <input 
                type="text"
                value={textoBuscaDigitado}
                onChange={Event => handleBuscarProduto(Event.target.value)}
                placeholder="Pesquise aqui um dos pratos do nosso cardápio"
            />
        </div>
    );
}

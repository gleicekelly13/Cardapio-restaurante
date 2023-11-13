import styles from "./CampoDeBusca.module.css";
import Image from "next/image";
import Lupa from "../../../public/assets/lupa.png";

export default function CampoDeBusca () {
    return (
        <div className="container-input limitar-secao">
            <Image src={Lupa} alt="icone-lupa" />
            <input 
                type="text"
                placeholder="Pesquise aqui um dos pratos do nosso cardápio"
            />
        </div>
    );
}

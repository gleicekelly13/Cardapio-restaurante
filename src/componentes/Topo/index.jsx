import Image from "next/image";
import Banner from "../../../public/assets/banner.png"


export default function Topo () {
    return (
        <header>
            <Image src={Banner} alt="banner"/>
            <div>
                <h1>Restaurante</h1>
                <p>
                    De pratos clássicos a criações surpreendentes, nosso cardápio é um
                    requinte de sabores refinados.
                </p>
            </div>
        </header>
    );
}

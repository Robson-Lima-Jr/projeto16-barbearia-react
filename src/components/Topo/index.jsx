import styles from "./Topo.module.css"
import Image from "next/image";

// import icones
import { BsSun, BsMoon } from "react-icons/bs";

// import da imagem
import Logo from "../../../public/barbearia.png";

export default function Topo() {
    return (
        <header className={styles.topo_area}>
            <div className={styles.container_base}>
                <Image src={Logo} alt="logo barbearia" className={styles.img_logo}></Image>

                <button className={styles.btn_config}>click</button>
            </div>
        </header>
    );
}
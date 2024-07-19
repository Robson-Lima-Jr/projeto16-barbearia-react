// imports globais
"use client";
import styles from "./Topo.module.css"
import { useState } from "react";
import Image from "next/image";

// import icones
import { BsSun, BsMoon } from "react-icons/bs";

// import da imagem
import Logo from "../../../public/barbearia.png";

export default function Topo() {
    const [fundoTela, setFundoTela] = useState (false);

    function mudarTela () {
        setFundoTela(!fundoTela);
    }

    return (
        <header className={styles.topo_area}>
            <div className={styles.container_base}>
                <Image src={Logo} alt="logo barbearia" className={styles.img_logo}></Image>

                <button onClick={mudarTela} className={styles.btn_config}>{fundoTela ?  <BsSun /> : <BsMoon />}</button>
            </div>
        </header>
    );
}
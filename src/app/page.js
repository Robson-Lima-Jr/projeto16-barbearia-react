// imports globais
"use client";
import styles from "./page.module.css";
import Image from "next/image";
import { useState } from "react";

// import imagem (cortei as areas em branco da imagem pra poder deixar o topo melhor visivel)
import Logo from "../../public/barbearia.png"

// import icones
import { BsSun, BsMoon } from "react-icons/bs";

export default function Home() {
  const [fundoTela, setFundoTela] = useState (false);

  function mudarTela () {
      setFundoTela(!fundoTela);
  }

  return (
    <main className={fundoTela ? styles.tema_dark : styles.tema_light}>
      <header className={styles.topo_area}>
        <div className={styles.container_topo}>
          <Image src={Logo} alt="logo barbearia" className={styles.img_logo}></Image>

          <button onClick={mudarTela} className={styles.btn_config}>{fundoTela ? <BsSun className={styles.icon} /> : <BsMoon className={styles.icon} />}</button>
        </div>
      </header>

      <section className={styles.banner}>
      </section>

      <section className={styles.conteudo}>
        <div className={styles.container_base}>
          <h1>Bem-vindo a Barber Shop</h1>

          <p>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.</p>

          <p>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.</p>

          <p className={styles.letra_especial}>S. Kelly</p>
        </div>
      </section>
    </main>
  );
}

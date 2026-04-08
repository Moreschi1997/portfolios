"use client";
import TypeFontsDevice from "../hook/TypeFontsDevice";
import "../style/global.css";
import "@/public/photo.svg"
import TypeGraphy from "../util/TypeGraphy";
import { CertScroll } from "./animation/CertScroll";

export default function HomePage() {
  const device = TypeFontsDevice();

  return (
    <>
      <main className={`main-wrapper ${device}`}>
        <div
        // Verify the device type and apply the corresponding class to the main wrapper
          className={`content-layout-home-page ${device === "mobile" ? "mobile" : device === "tablet" ? "tablet" : "desktop"}`}
        >
            <div className="photo-container">
              <TypeGraphy typeText="hero">
                <img src="/photo.jpg" alt="Moreschi" />
              </TypeGraphy>
            </div>
                <div className="glass-effect">
                  <div className="text-effect-reflection">
                    <TypeGraphy typeText="body" className="fede-in-text">
                      <dl>
                        <dt>Olá eu sou Desenvolvedor Full-Stack:</dt>
                        <dd>
                          Me chamo Moreschi, sou desenvolvedor com mais de um ano de experiência
                          criando aplicações web, backend e mobile. Já trabalhei com
                          tecnologias como Expo, React, Java, C, CSS, HTML, SQL, MongoDB e
                          Docker. Atualmente estou desenvolvendo um projeto pessoal em C
                          puro, focado na criação de uma biblioteca para manipulação de
                          JSON. O objetivo desse projeto é facilitar e tornar mais
                          eficiente o processo de criação e manipulação de JSON em C,
                          ajudando desenvolvedores que utilizam essa linguagem a
                          trabalhar de forma mais simples e produtiva. Estou sempre
                          buscando aprender novas tecnologias, aprofundar meus
                          conhecimentos e evoluir como desenvolvedor, com o objetivo de
                          criar soluções inovadoras, eficientes e de alta qualidade.
                        </dd>
                      </dl>
                    </TypeGraphy>
                  </div>
                </div>
                <CertScroll />
        </div>
      </main>
    </>
  );
}

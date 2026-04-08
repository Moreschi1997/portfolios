'use client'

import TypeFontsDevice from "../hook/TypeFontsDevice";
import "../style/global.css";
import TypeGraphy from "../util/TypeGraphy";
import Experience from "../component/animation/ComponentToExperienceOpen";

export default function ExperienceHome() {
  const device = TypeFontsDevice();

  return (
    <>
      <main className={`main-wrapper ${device}`}>
        <div
          className={`content-layout-experience-page ${device === "mobile" ? "mobile" : device === "tablet" ? "tablet" : "desktop"}`}
        >
            <TypeGraphy typeText="title" className="text-effect-reflection">
              Experiência
            </TypeGraphy>
            <Experience />
        </div>
      </main>
    </>
  );
}

          
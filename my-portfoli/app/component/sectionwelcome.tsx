"use client";
import TypeFontsDevice from "../hook/TypeFontsDevice";
import "../style/global.css";
import TypeGraphy from "../util/TypeGraphy";

export default function HomePage() {
  const device = TypeFontsDevice();

  return (
    <>
      <main className={`main-wrapper ${device}`}>
        <div
        // Verify the device type and apply the corresponding class to the main wrapper
          className={`content-layout ${device === "mobile" ? "mobile" : device === "tablet" ? "tablet" : "desktop"}`}
        >
            <TypeGraphy typeText="title" className="text-effect-reflection">
              Bem vindo!
            </TypeGraphy>
        </div>
      </main>
    </>
  );
}
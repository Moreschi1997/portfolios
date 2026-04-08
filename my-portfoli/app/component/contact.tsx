'use client'

import TypeFontsDevice from "../hook/TypeFontsDevice";
import "../style/global.css";
import TypeGraphy from "../util/TypeGraphy";
import Contacts from "../component/animation/ContactPage";

export default function Contact() {
    const device = TypeFontsDevice();

    return (
        <main className={`contact ${device}`}>
            <div
                className={`main-wrapper ${device === "mobile" ? "mobile" : device === "tablet" ? "tablet" : "desktop"}`}
                >
                    <TypeGraphy typeText="title" className="experience-header">
                        Contato
                    </TypeGraphy>
                    <Contacts />
            </div>
        </main>
    )
}
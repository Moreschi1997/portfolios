import { useState } from "react";
import experience from "../../type/typeExperience";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import TypeFontsDevice from "../../hook/TypeFontsDevice";
import "../../style/global.css";

export default function ComponentToExperienceOpen() {
    const deviceType = TypeFontsDevice();

    return (
    <main className={`main-wrapper ${deviceType}`}>
    <section className="accordion-item">
        {experience.map((item) => (
            <div key={item.id} className="block-solid">
                <div className="experience-header">
                    <h2>{item.title}</h2>
                </div>
                <div className="color-button">
                    {Array.isArray(item.description) ? (
                        item.description.map((line, index) => (
                            <p key={index}>{line}</p>
                        ))
                    ) : (
                        <p>{item.description}</p>
                    )}
                </div>
            </div>
        ))}
        </section>
    </main>
    )
}
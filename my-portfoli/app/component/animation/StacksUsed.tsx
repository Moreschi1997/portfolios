import { useState } from "react";
import stack from "../../type/TypeStacksUtilization";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import TypeFontsDevice from "../../hook/TypeFontsDevice";
import "../../style/global.css";

export default function StacksUsed() {
    const deviceType = TypeFontsDevice();

    return (
        <main className={`main-wrapper ${deviceType}`}>
            <section className="accordion-item-collun">
                {stack.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div key={item.id} className="block-solid-olther">
                            <div className="experience-header">
                                <Icon size={35} color="#0059ff" />
                                <h3>{item.stack}</h3>
                            </div>

                            <div className="color-button">
                                {Array.isArray(item.description) ? (
                                    item.description.map((line, index) => (
                                        <span key={index} className="">
                                            {line}
                                        </span>
                                    ))
                                ) : (
                                    <p className="color-button">{item.description}</p>
                                )}
                            </div>
                        </div>
                    );
                })}
            </section>
        </main>
    );
}
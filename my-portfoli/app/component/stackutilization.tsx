'use client'

import TypeFontsDevice from "../hook/TypeFontsDevice";
import "../style/global.css";
import TypeGraphy from "../util/TypeGraphy";
import StackUsed from "../component/animation/StacksUsed";

export default function StackUtilization(){
    const device = TypeFontsDevice();

    return(
        <main className={`stack-utilization ${device}`}>
            <div className={`main-wrapper ${device === "mobile" ? "mobile" : device === "tablet" ? "tablet" : "desktop"}`}>
                <TypeGraphy typeText="title" className="text-effect-reflection">
                    Stacks Utilizadas
                </TypeGraphy>
                <StackUsed />
            </div>
        </main>
    )
}

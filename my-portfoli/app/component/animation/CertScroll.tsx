import TypeCertification from "../../type/TypeCertification";
import TypeDevice from "../../hook/TypeFontsDevice";
import { GraduationCap } from 'lucide-react';
import "../../style/global.css";


export function CertScroll() {

    const certification = [...TypeCertification, ...TypeCertification, ...TypeCertification, ...TypeCertification];
    const device = TypeDevice();

    return (
        <main className={`cert-scroll-container ${device}`}>

            <div className="marquee-track">
                {certification.map((cert: any, index: number) => (
                    <div className="cert-scroll-item" key={index}>
                        <GraduationCap color="#0059ff" size={40} />
                        <img alt={cert.name} className="cert-scroll-image" />
                        <div className="cert-scroll-name">{cert.institution}</div>
                    </div>
                ))}
            </div>
            
        </main>
    );
}
                
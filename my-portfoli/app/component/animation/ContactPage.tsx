import TypeFontsDevice from "../../hook/TypeFontsDevice";
import contact from "../../type/TypeContact";
import "../../style/global.css";

export default function ContactPage() {
    const deviceType = TypeFontsDevice();

    return(
        <main className={`main-wrapper ${deviceType}`}>
            <section className="contact-accordion-item">
                <div className={deviceType}>
                    {contact.map((item) => {
                    const Icon = item.icon;

                    return (
                        <a 
                            key={item.id} 
                            href={item.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <div className="color-button">
                                <Icon size={35}/>
                                <h3>{item.name}</h3>
                            </div>
                        </a>
                    );
                })}
            </div>
            </section>
        </main>
    );
} 
            
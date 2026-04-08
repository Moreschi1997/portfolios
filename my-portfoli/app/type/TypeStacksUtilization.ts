import { RiJavaLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { TbBrandTypescript } from "react-icons/tb";

const Stack = [
    {
        id: 1,
        stack: "Java/Quarkus",
        icon: RiJavaLine,
        description: [
            "Java é uma linguagem robusta e amplamente utilizada para desenvolvimento de aplicações seguras e de alto desepenho. O Quarkus é um framework Java moderno, otimizado para contêineres e nuvem, que oferece tempos de inicialização rápidos e baixo consumo de memória, ideal para microserviços e aplicações serverless."
        ]
    },

    {
        id: 2,
        stack: "React",
        icon: FaReact,
        description: [
            "React é uma biblioteca robusta para a construção de interfaces de usuário baseadas em componentes. Ele permite a criação de aplicações escaláveis, integrando de forma eficiente a lógica de negócio à componentização visual."
        ]
    },

    {
        id: 2,
        stack: "TypeScript",
        icon: TbBrandTypescript,
        description: [
            "Como um superconjunto tipado de JavaScript, o TypeScript otimiza o ciclo de desenvolvimento ao detectar erros em tempo de compilação. É uma ferramenta indispensável para arquiteturas modernas, promovendo a componentização eficiente e garantindo a integridade dos dados em aplicações complexas de ponta a ponta."
        ]
    },
]

export default Stack;
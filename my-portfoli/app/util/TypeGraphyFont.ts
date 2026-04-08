import { TypeFont } from '../type/TypeFont';

// Define a mapping of TypeFont to corresponding CSS classes for typography styling
export const TypeGraphyFont: Record<TypeFont, string> = {
    hero: "text-[clamp(2rem,5vw,4rem)] font-bold",
    title: "text-[clamp(1.5rem,4vw,2.5rem)] font-semibold",
    body: "text-[clamp(1rem,3vw,1.5rem)] font-normal",
};

export default TypeGraphyFont;
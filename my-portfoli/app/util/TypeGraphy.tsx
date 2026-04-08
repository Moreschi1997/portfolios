import TypeFont from "../type/TypeFont";
import TypeGraphyFont from "./TypeGraphyFont";

type Props = {
    // types of text and fonts
    typeText: TypeFont;
    children: React.ReactNode;
    className?: string;
};

export default function TypeGraphy({ typeText, children, className }: Props) {
    return (
        <p className={`${TypeGraphyFont[typeText]} ${className}`}>
        {children}
        </p>
    );
}

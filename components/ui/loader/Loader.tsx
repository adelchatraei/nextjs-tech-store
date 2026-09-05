import styles from "./Loader.module.css";

type LoaderProps = {
    size?: number;
    color1?: string;
    color2?: string;
    className?: string;
};

export default function Loader2({
    size = 0.5,
    color1 = "#22ff01",
    color2 = "#22ff01",
    className = "",
}: LoaderProps) {
    return (
        <span
            className={`${styles.loader} ${className}`}
            style={
                {
                    "--color-1": color1,
                    "--color-2": color2,
                    "--size": `${size}px`,
                } as React.CSSProperties
            }
            role="status"
        />
    );
}

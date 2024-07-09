import { ReactNode } from "react";
import styles from "./Button.module.css";

type Props = {
  children: ReactNode;
  isLoading?: boolean; // el signo de interrogacion le dice que la propiedad es opcional.
  onClick: () => void;
};

console.log(styles);
function Button({ children, isLoading, onClick }: Props) {
  const className = [
    `btn btn-${isLoading ? "secondary" : "primary"}`,
    styles.button,
    styles.padded,
  ].join(" ");
  return (
    <button
      disabled={isLoading}
      onClick={onClick}
      type="button"
      className={className}
      // className={[styles.button, styles.padded].join(" ")}
    >
      {isLoading ? "Cargando" : children}
    </button>
  );
}

export default Button;

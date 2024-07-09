import { ReactNode } from "react";
import "./Button.css";

type Props = {
  children: ReactNode;
  isLoading?: boolean; // el signo de interrogacion le dice que la propiedad es opcional.
  onClick: () => void;
};

function Button({ children, isLoading, onClick }: Props) {
  return (
    <button
      disabled={isLoading}
      onClick={onClick}
      type="button"
      className={`btn btn-${isLoading ? "secondary" : "primary"}`}
    >
      {isLoading ? "Cargando" : children}
    </button>
  );
}

export default Button;

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  isLoading?: boolean; // el signo de interrogacion le dice que la propiedad es opcional.
  onClick: () => void;
};

const styles = {
  backgroundColor: "#F555",
};

function Button({ children, isLoading, onClick }: Props) {
  return (
    <button
      style={styles}
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

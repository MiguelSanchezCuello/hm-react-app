import { ReactNode } from "react";
// import styles from "./Button.module.css";
import styled from "styled-components";

type BtnProps = {
  isLoading: boolean;
};

const Btn = styled.button<BtnProps>`
  padding: 25px 30px;
  background-color: ${(props) => (props.isLoading ? "gray" : "red")};
`;

type Props = {
  children: ReactNode;
  isLoading?: boolean; // el signo de interrogacion le dice que la propiedad es opcional.
  onClick: () => void;
};

// Codigo usando CSS en JS
function Button({ children, isLoading, onClick }: Props) {
  return (
    <Btn onClick={onClick} disabled={isLoading} isLoading={isLoading}>
      {isLoading ? "Cargando" : children}
    </Btn>
  );
}

// Codigo con modules
// console.log(styles);
// function Button({ children, isLoading, onClick }: Props) {
//   const className = [
//     `btn btn-${isLoading ? "secondary" : "primary"}`,
//     styles.button,
//     styles.padded,
//   ].join(" ");
//   return (
//     <button
//       disabled={isLoading}
//       onClick={onClick}
//       type="button"
//       className={className}
//       // className={[styles.button, styles.padded].join(" ")}
//     >
//       {isLoading ? "Cargando" : children}
//     </button>
//   );
// }

export default Button;

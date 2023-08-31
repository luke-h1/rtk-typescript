import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Box = ({ children }: Props) => {
  return <div style={{ padding: "1rem", fontWeight: "bold" }}>{children}</div>;
};
export default Box;

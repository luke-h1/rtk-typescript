import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  title?: string;
};

const Button = ({ title, children, style, ...rest }: Props) => {
  return (
    <button
      {...rest}
      style={{
        ...style,
        backgroundColor: "red",
        color: "white",
        fontSize: "xx-large",
      }}
    >
      {title ?? children}
    </button>
  );
};
export default Button;

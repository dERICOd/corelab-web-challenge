import { HtmlHTMLAttributes } from "react";

type ColorButtonProps = HtmlHTMLAttributes<HTMLButtonElement>;

export function ColorButton({ ...props }: ColorButtonProps) {
  return <button {...props} />;
}

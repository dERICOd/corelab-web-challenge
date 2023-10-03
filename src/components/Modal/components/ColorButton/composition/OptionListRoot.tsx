import { HtmlHTMLAttributes, ReactNode } from "react";

interface ButtonColorProps extends HtmlHTMLAttributes<HTMLLIElement> {
  children: ReactNode;
}

export function OptionListRoot({ children, ...props }: ButtonColorProps) {
  return <li {...props}>{children}</li>;
}

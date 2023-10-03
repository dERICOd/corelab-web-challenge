import { HtmlHTMLAttributes, ReactNode } from "react";

interface ColorButtonProps extends HtmlHTMLAttributes<HTMLUListElement> {
  children: ReactNode;
}

export function OptionsRoot({ children, ...props }: ColorButtonProps) {
  return <ul {...props}>{children}</ul>;
}

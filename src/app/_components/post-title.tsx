import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="text-7xl lg:text-8xl font-black tracking-tighter leading-tight md:leading-none mb-4 text-left">
      {children}
    </h1>
  );
}

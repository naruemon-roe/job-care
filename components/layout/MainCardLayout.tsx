import { ReactNode } from "react";

export default function MainCardLayout({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`max-w-md rounded-xl p-6 shadow-xl backdrop-blur-md border border-white/20 
      bg-gradient-to-b from-[#1c0032] to-[#2b0048] text-white ${className}`}
    >
      {children}
    </div>
  );
}

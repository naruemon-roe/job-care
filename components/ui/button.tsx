import * as React from "react";

// components/ui/button.tsx
export function Button({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded" {...props}>
      {children}
    </button>
  );
}

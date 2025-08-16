import * as React from "react";

// components/ui/input.tsx
export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className="border p-2 rounded w-full" {...props} />;
}

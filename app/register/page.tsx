// app/register/page.tsx
"use client";

import JobForm from "@/components/JobForm"; // หรือวางโค้ดเต็มไว้ตรงนี้ก็ได้

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-4">
      <JobForm />
    </main>
  );
}

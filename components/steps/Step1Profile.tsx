
// ✅ Step1Profile.tsx
"use client";

import { Button } from "@/components/ui/button";

interface Props {
  onNext: () => void;
}

export default function Step1Profile({ onNext }: Props) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-2">📝 กรอกข้อมูลเบื้องต้น</h2>
      <p className="text-gray-600 mb-4">ชื่อ, ความสามารถ, เขตที่อยู่</p>
      {/* Add form inputs here */}
      <Button onClick={onNext}>ถัดไป</Button>
    </div>
  );
}
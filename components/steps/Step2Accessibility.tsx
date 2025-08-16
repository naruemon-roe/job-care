
// ✅ Step2Accessibility.tsx
"use client";

import { Button } from "@/components/ui/button";

interface Props {
  onNext: () => void;
  onBack: () => void;
}

export default function Step2Accessibility({ onNext, onBack }: Props) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-2">♿ รองรับการเข้าถึง</h2>
      <p className="text-gray-600 mb-4">ปรับขนาดตัวอักษร, โหมด high contrast, ระบบอ่านข้อความ</p>
      <div className="flex justify-between mt-4">
        <Button variant="outline" onClick={onBack}>ย้อนกลับ</Button>
        <Button onClick={onNext}>ถัดไป</Button>
      </div>
    </div>
  );
}

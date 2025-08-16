
// ✅ Step4Submit.tsx
"use client";

import { Button } from "@/components/ui/button";

interface Props {
  onBack: () => void;
}

export default function Step4Submit({ onBack }: Props) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-2">🎉 สมัครงานสำเร็จ</h2>
      <p className="text-gray-600 mb-4">คุณสามารถพูดคุยกับนายจ้าง หรือติดตามสถานะการสมัครได้จากหน้า Dashboard</p>
      <Button variant="outline" onClick={onBack}>ย้อนกลับ</Button>
    </div>
  );
}

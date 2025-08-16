"use client";

import { useState } from "react";
import { Plus, Minus, Search, Volume2 } from "lucide-react";
import MainCardLayout from "@/components/layout/MainCardLayout";

export default function AccessibilityPanel() {
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);

  const speakText = () => {
    const msg = new SpeechSynthesisUtterance(
      "ยินดีต้อนรับเข้าสู่ระบบสมัครงานออนไลน์! คุณสามารถปรับแต่งเพื่อความสะดวกได้ที่นี่"
    );
    msg.lang = "th-TH";
    window.speechSynthesis.speak(msg);
  };

  return (
    <MainCardLayout className={highContrast ? "high-contrast" : ""}>
      <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Search size={18} />
        รองรับการเข้าถึง (Accessibility)
      </h2>

      <div className="flex items-center gap-3 mb-3">
        <span>ขนาดฟอนต์:</span>
        <button
          onClick={() => setFontSize((prev) => Math.max(50, prev - 10))}
          className="bg-pink-500 text-white px-3 py-1 rounded-full"
        >
          <Minus size={14} />
        </button>
        <span>{fontSize}%</span>
        <button
          onClick={() => setFontSize((prev) => Math.min(200, prev + 10))}
          className="bg-pink-500 text-white px-3 py-1 rounded-full"
        >
          <Plus size={14} />
        </button>
      </div>

      <div className="mb-3 flex justify-between items-center">
        <span>โหมดคอนทราสต์สูง:</span>
        <button
          onClick={() => setHighContrast(!highContrast)}
          className="bg-purple-500 px-4 py-1 text-white rounded-full"
        >
          {highContrast ? "ปิด" : "เปิด"}
        </button>
      </div>

      <div className="mb-3 flex justify-between items-center">
        <span>อ่านข้อความ:</span>
        <button
          onClick={speakText}
          className="bg-blue-500 px-4 py-1 text-white rounded-full flex items-center gap-1"
        >
          <Volume2 size={14} />
          อ่านออกเสียง
        </button>
      </div>

      <div
        className="mt-4 p-3 border border-white/20 rounded-md"
        style={{ fontSize: `${fontSize}%` }}
      >
        ✨ ยินดีต้อนรับเข้าสู่ระบบสมัครงานออนไลน์! คุณสามารถปรับแต่งเพื่อความสะดวกได้ที่นี่
      </div>
    </MainCardLayout>
  );
}

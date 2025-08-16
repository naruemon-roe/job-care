"use client";

import { Heart, User } from "lucide-react";
import { useState } from "react";
import MainCardLayout from "@/components/layout/MainCardLayout";

interface Story {
  name: string;
  content: string;
}

export default function EncouragementBoard() {
  const [stories, setStories] = useState<Story[]>([
    {
      name: "ป้าสายสมร",
      content:
        "แม้อายุ 65 แล้ว แต่ยังได้งานเป็นแม่บ้านใกล้บ้าน ขอบคุณระบบนี้ที่ช่วยหางานให้ป้า ❤️",
    },
    {
      name: "ลุงชัย",
      content: "ดีใจมาก ได้งานเป็น รปภ. หลังจากว่างงานมานาน 🙏",
    },
  ]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const submitStory = () => {
    if (!name || !content) return;
    setStories([{ name, content }, ...stories]);
    setName("");
    setContent("");
  };

  return (
    <MainCardLayout>
      <div className="p-4 text-white">
        {/* Header */}
        <div className="flex items-center mb-2 space-x-2">
          <Heart className="text-pink-400" />
          <h2 className="text-xl font-bold">พื้นที่ให้กำลังใจ</h2>
        </div>
        <p className="text-sm text-gray-300 mb-4">
          แชร์เรื่องราวประสบการณ์การหางานเพื่อสร้างแรงบันดาลใจ
        </p>

        {/* Form */}
        <div className="space-y-2 mb-6">
          <input
            className="w-full p-2 rounded-md bg-white text-black text-sm"
            placeholder="ชื่อของคุณ (เช่น ป้าสายสมร)"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            className="w-full p-2 rounded-md bg-white text-black text-sm"
            placeholder="เล่าประสบการณ์ของคุณ..."
            rows={3}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button
            onClick={submitStory}
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-4 py-2 rounded-md"
          >
            ❤️ แชร์เรื่องราว
          </button>
        </div>

        {/* Stories */}
        <div className="space-y-4">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-xl p-3 shadow-md"
            >
              <div className="flex items-center mb-1 space-x-2 text-sm font-bold">
                <User className="w-4 h-4 text-gray-500" />
                <span>{story.name}</span>
              </div>
              <p className="text-sm">{story.content}</p>
            </div>
          ))}
        </div>
      </div>
    </MainCardLayout>
  );
}

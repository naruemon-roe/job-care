"use client";
import { useEffect, useState } from "react";

// path นี้ชี้ไปที่ public/video/IMG_4075.mp4
const initialVideoUrl = "/video/IMG_4075.mp4";

export default function SimpleProfile() {
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [isVideo, setIsVideo] = useState<boolean>(false);

  // ✅ set default on mount
  useEffect(() => {
    // เซ็ท video preload เป็นตัวอย่าง
    setFileUrl(initialVideoUrl);
    setIsVideo(true);
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0];
    if (!uploadedFile) return;

    const allowedTypes = [
      "video/mp4",
      "video/webm",
      "audio/mpeg",
      "audio/mp3",
      "audio/wav",
    ];
    if (!allowedTypes.includes(uploadedFile.type)) {
      alert("กรุณาอัปโหลดเฉพาะไฟล์ .mp4, .webm, .mp3 หรือ .wav เท่านั้น");
      return;
    }

    const url = URL.createObjectURL(uploadedFile);
    setFileUrl(url);
    setIsVideo(uploadedFile.type.startsWith("video"));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gradient-to-b from-[#20002c] to-[#4c0033] rounded-2xl text-white shadow-lg space-y-4">
      <h2 className="text-xl font-bold flex items-center gap-2">
        <span>🧑‍💼</span> โปรไฟล์แบบเรียบง่าย
      </h2>

      <p className="text-sm text-gray-300">
        แสดง timeline งานก่อนหน้า และอัปโหลดเสียง/คลิปแนะนำตัว
      </p>

      {/* Timeline (example) */}
      <div>
        <h3 className="font-semibold mb-2">🕒 ประวัติการทำงาน</h3>
        <ul className="pl-4 border-l-2 border-pink-500 space-y-1">
          <li>2022 — พนักงานขาย - Lotus Express</li>
          <li>2020 — แม่บ้าน - โรงแรม A</li>
          <li>2019 — ดูแลผู้สูงอายุ</li>
        </ul>
      </div>

      {/* Upload */}
      <div>
        <h3 className="font-semibold mb-2">🎤 อัปโหลดเสียง/วิดีโอแนะนำตัว</h3>
        <label className="inline-block px-4 py-2 bg-pink-600 rounded-lg cursor-pointer hover:bg-pink-700 transition">
          📁 เลือกไฟล์
          <input
            type="file"
            accept="video/mp4,video/webm,audio/mpeg,audio/mp3,audio/wav"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
        {fileUrl && (
          <div className="mt-4">
            {isVideo ? (
              <div className="relative w-full">
                <video controls className="w-full rounded-lg">
                  <source src={fileUrl} />
                </video>

                {/* ✅ ลายน้ำ */}
                <span className="absolute inset-0 flex items-center justify-center text-white/60 text-6xl font-bold pointer-events-none">
                  ตัวอย่าง
                </span>
              </div>
            ) : (
              <audio controls className="w-full">
                <source src={fileUrl} />
              </audio>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

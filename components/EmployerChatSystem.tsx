"use client";

import { useState } from "react";
import MainCardLayout from "@/components/layout/MainCardLayout";

const jobs = [
  {
    id: 1,
    title: "ผู้ช่วยดูแลร้านขายของชำ",
    employer: "คุณสมหมาย",
    method: ["chat", "video"],
  },
  {
    id: 2,
    title: "เจ้าหน้าที่รับสายโทรศัพท์",
    employer: "บริษัท XYZ",
    method: ["chat"],
  },
  {
    id: 3,
    title: "ผู้ช่วยงานบ้าน (นั่งทำได้)",
    employer: "คุณธนพร",
    method: ["video"],
  },
];

export default function EmployerChatSystem() {
  const [viewMode, setViewMode] = useState<"chat" | "video" | "all">("all");

  const filteredJobs =
    viewMode === "all"
      ? jobs
      : jobs.filter((job) => job.method.includes(viewMode));

  return (
    <MainCardLayout>
      {/* Toggle */}
      <div className="flex gap-4 justify-center mb-6">
        <button
          onClick={() => setViewMode("all")}
          className={`px-4 py-2 rounded-full ${
            viewMode === "all"
              ? "bg-blue-600 text-white"
              : "bg-gray-400 text-white"
          }`}>
          🗂 ทั้งหมด
        </button>
        <button
          onClick={() => setViewMode("chat")}
          className={`px-4 py-2 rounded-full ${
            viewMode === "chat"
              ? "bg-green-600 text-white"
              : "bg-gray-400 text-white"
          }`}>
          💬 แชท
        </button>
        <button
          onClick={() => setViewMode("video")}
          className={`px-4 py-2 rounded-full ${
            viewMode === "video"
              ? "bg-purple-600 text-white"
              : "bg-gray-400 text-white"
          }`}>
          🎥 วิดีโอคอล
        </button>
      </div>

      {/* Job Cards */}
      <div className="grid gap-4">
        {filteredJobs.map((job) => (
            
          <div
            key={job.id}
            className="flex justify-between items-center bg-white rounded-xl p-3 shadow mb-3">
            <div>
              <h3 className="text-lg text-gray-900 font-bold">{job.title}</h3>
              <p className="text-sm text-gray-600">นายจ้าง: {job.employer}</p>
            </div>
             <div className="flex gap-2">
            {/* ปุ่มเริ่มแชท */}
            <button className="bg-gradient-to-r from-green-500 to-green-400 text-white px-3 py-1.5 text-sm rounded-full font-semibold flex items-center gap-1 shadow hover:scale-105 transition">
              💬 
            </button>

            {/* ปุ่มวิดีโอคอล */}
            <button className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-3 py-1.5 text-sm rounded-full font-semibold flex items-center gap-1 shadow hover:scale-105 transition">
              🎥 
            </button>
            </div>
          </div>
        ))}
      </div>
    </MainCardLayout>
  );
}

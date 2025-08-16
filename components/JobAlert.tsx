"use client";

import { Smartphone, MessageCircle, PhoneCall, Bell } from "lucide-react";
import { useState } from "react";
import MainCardLayout from "@/components/layout/MainCardLayout"; // ✅ สำคัญ

export default function JobNotification() {
  const [channels, setChannels] = useState<string[]>([]);
  const [group, setGroup] = useState("all");

  const toggleChannel = (channel: string) => {
    setChannels((prev) =>
      prev.includes(channel)
        ? prev.filter((c) => c !== channel)
        : [...prev, channel]
    );
  };

  return (
    <MainCardLayout>
      <div className="p-4 text-white">
        {/* Header */}
        <div className="flex items-center mb-2 space-x-2">
          <Bell className="text-yellow-400" />
          <h2 className="text-xl font-bold">ระบบแจ้งเตือนงานใหม่</h2>
        </div>
        <p className="text-sm text-gray-300 mb-4">
          ตั้งค่ารับการแจ้งเตือนผ่าน SMS, LINE หรือโทรกลับ
        </p>

        {/* Toggle Group */}
        <div className="flex mb-4 space-x-2">
          {["all", "elderly", "disabled"].map((g) => (
            <button
              key={g}
              onClick={() => setGroup(g)}
              className={`rounded-full px-4 py-1 text-sm font-medium transition-all
              ${group === g
                ? "bg-white text-[#220033] shadow"
                : "bg-[#444] text-gray-300 hover:bg-[#555]"
              }`}
            >
              {g === "all"
                ? "ทั้งหมด"
                : g === "elderly"
                ? "ผู้สูงอายุ"
                : "ผู้พิการ"}
            </button>
          ))}
        </div>

        {/* Notification Channel Buttons */}
        <div className="bg-white p-4 rounded-xl grid grid-cols-3 gap-3">
          <button
            onClick={() => toggleChannel("sms")}
            className={`flex flex-col items-center justify-center rounded-xl px-2 py-3 font-semibold text-sm border-2 transition-all
            ${
              channels.includes("sms")
                ? "bg-yellow-400 text-black border-yellow-500 hover:bg-yellow-500"
                : "bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200"
            }`}
          >
            <Smartphone className="w-5 h-5 mb-1" />
            SMS
          </button>

          <button
            onClick={() => toggleChannel("line")}
            className={`flex flex-col items-center justify-center rounded-xl px-2 py-3 font-semibold text-sm border-2 transition-all
            ${
              channels.includes("line")
                ? "bg-green-500 text-white border-green-600 hover:bg-green-600"
                : "bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200"
            }`}
          >
            <MessageCircle className="w-5 h-5 mb-1" />
            LINE
          </button>

          <button
            onClick={() => toggleChannel("call")}
            className={`flex flex-col items-center justify-center rounded-xl px-2 py-3 font-semibold text-sm border-2 transition-all
            ${
              channels.includes("call")
                ? "bg-blue-500 text-white border-blue-600 hover:bg-blue-600"
                : "bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200"
            }`}
          >
            <PhoneCall className="w-5 h-5 mb-1" />
            โทรกลับ
          </button>
        </div>
      </div>
    </MainCardLayout>
  );
}

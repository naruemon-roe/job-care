"use client";

import { useState } from "react";
import dayjs from "dayjs";

export default function InterviewSchedule() {
  // ❗ demo: ใช้ input type="date" / "time" แทน DatePicker จริง
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [sent, setSent] = useState(false);

  // mock data เพื่อแสดง warning บน Dashboard
  const [upcoming, setUpcoming] = useState<null | {
    date: string;
    time: string;
  }>(null);

  const handleSend = () => {
    if (!date || !time) return;
    // 👉 mock: save / send to candidate
    setSent(true);
    setUpcoming({ date, time });
  };

  return (
    <div className="bg-[#1c0037] rounded-xl p-4 text-white space-y-4">
      <h2 className="font-semibold text-lg">📆 ระบบนัดสัมภาษณ์</h2>

      {!sent && (
        <>
          <label className="text-sm">เลือกวันสัมภาษณ์</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full bg-white text-black rounded p-2 text-sm"
          />

          <label className="text-sm mt-2 block">เลือกช่วงเวลา</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full bg-white text-black rounded p-2 text-sm"
          />

          <button
            onClick={handleSend}
            className="bg-purple-600 hover:bg-purple-700 text-white rounded-md px-4 py-2 text-sm mt-3"
          >
            ✉️ ส่งให้ผู้สมัครเลือก
          </button>
        </>
      )}

      {sent && (
        <p className="text-sm text-green-400">
          ✅ ลิงก์การนัดสัมภาษณ์ถูกส่งให้ผู้สมัครแล้ว
        </p>
      )}

      {upcoming && (
        <div className="mt-4 bg-yellow-600/20 border border-yellow-500 text-yellow-300 rounded-md p-2 text-sm">
          ⚠️ สัมภาษณ์วันนี้ เวลา {dayjs(upcoming.time, "HH:mm").format("HH:mm")}
        </div>
      )}
    </div>
  );
}

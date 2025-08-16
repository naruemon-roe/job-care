"use client";

import { useState } from "react";

export default function RecruitmentDashboard() {
  const [selectedJob, setSelectedJob] = useState("all");

  // mock funnel data
  const funnel = {
    totalApplied: 50,
    screened: 30,
    interviewed: 12,
    hired: 4,
  };

  const avgScreeningDays = 3.4;

  return (
    <div className="bg-[#1c0037] rounded-xl p-4 text-white space-y-5">
      <h2 className="font-semibold text-lg">📊 Dashboard รายงานการรับสมัคร</h2>

      {/* Dropdown filter */}
      <select
        className="bg-white text-black rounded p-2 text-sm"
        value={selectedJob}
        onChange={(e) => setSelectedJob(e.target.value)}
      >
        <option value="all">ตำแหน่งทั้งหมด</option>
        <option value="data-entry">พนักงานคีย์ข้อมูล</option>
        <option value="packer">พนักงานแพ็คสินค้า</option>
      </select>

      {/* Funnel */}
      <div className="space-y-2">
        <div className="text-sm">สมัครทั้งหมด: {funnel.totalApplied}</div>
        <progress
          className="w-full"
          max={funnel.totalApplied}
          value={funnel.screened}
        />
        <div className="text-sm">ผ่านคัดกรอง: {funnel.screened}</div>
        <progress
          className="w-full"
          max={funnel.totalApplied}
          value={funnel.interviewed}
        />
        <div className="text-sm">สัมภาษณ์: {funnel.interviewed}</div>
        <progress
          className="w-full"
          max={funnel.totalApplied}
          value={funnel.hired}
        />
        <div className="text-sm">รับเข้าทำงาน: {funnel.hired}</div>
      </div>

      {/* Metric Card */}
      <div className="bg-white/20 rounded p-3 mt-2 text-sm flex justify-between items-center">
        <span>เวลาคัดกรองเฉลี่ย</span>
        <span className="font-semibold">{avgScreeningDays} วัน</span>
      </div>
    </div>
  );
}

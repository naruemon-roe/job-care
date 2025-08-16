"use client";

import { useState } from "react";
import MainCardLayout from "@/components/layout/MainCardLayout";

const jobs = [
  {
    id: 1,
    title: "เจ้าหน้าที่ดูแลผู้สูงอายุ",
    description: "ทำงานเป็นพาร์ทไทม์ จัดเตียง พูดคุย ดูแลกิจวัตรประจำวัน",
    target: "elderly",
  },
  {
    id: 2,
    title: "เจ้าหน้าที่รับโทรศัพท์ (นั่งทำได้)",
    description: "ทำงานที่บ้าน รับโทรศัพท์ลูกค้า",
    target: "disabled",
  },
  {
    id: 3,
    title: "แพ็คสินค้า (ใกล้บ้าน)",
    description: "งานเบา ไม่ใช้แรงมาก เหมาะกับผู้สูงอายุ",
    target: "elderly",
  },
];

export default function TargetedJobList() {
  const [targetGroup, setTargetGroup] = useState<"elderly" | "disabled">("elderly");

  const filteredJobs = jobs.filter((job) => job.target === targetGroup);

  return (
    <MainCardLayout >
      {/* Toggle */}
      <div className="flex gap-4 items-center justify-center mb-6">
        <button
          onClick={() => setTargetGroup("elderly")}
          className={`px-4 py-2 rounded-full text-white ${
            targetGroup === "elderly" ? "bg-blue-600" : "bg-gray-500"
          }`}
        >
          👵 ผู้สูงอายุ
        </button>
        <button
          onClick={() => setTargetGroup("disabled")}
          className={`px-4 py-2 rounded-full text-white ${
            targetGroup === "disabled" ? "bg-blue-600" : "bg-gray-500"
          }`}
        >
          ♿ ผู้พิการ
        </button>
      </div>

      {/* Job Cards */}
      <div className="grid gap-4">
        {filteredJobs.map((job) => (
          <div key={job.id} className="bg-white text-black rounded-xl p-4 shadow">
            <h3 className="text-lg font-bold">{job.title}</h3>
            <p className="text-sm mt-1">{job.description}</p>
            <button className="mt-3 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
              ดูรายละเอียด
            </button>
          </div>
        ))}
      </div>
    </MainCardLayout>
  );
}

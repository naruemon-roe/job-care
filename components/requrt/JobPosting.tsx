"use client";

import MainCardLayout from "@/components/layout/MainCardLayout";
import { useState } from "react";

export default function JobPostingForm() {
  const [title, setTitle] = useState("");
  const [responsibility, setResponsibility] = useState("");
  const [requirement, setRequirement] = useState("");
  const [jobType, setJobType] = useState("full-time");

const [savedTemplate, setSavedTemplate] = useState<{
  title: string;
  responsibility: string;
  requirement: string;
  jobType: string;
} | null>({
  title: "พนักงานคีย์ข้อมูล (ทำงานที่บ้าน)",
  responsibility: "คีย์ข้อมูลลงระบบจากไฟล์ Excel / PDF",
  requirement: "ใช้คอมพิวเตอร์พื้นฐานได้ เหมาะกับผู้สูงอายุหรือผู้พิการที่นั่งทำงานได้",
  jobType: "Part-time",
});


  const submitJob = () => {
    if (!title || !responsibility || !requirement) return;
    console.log("📨 Post Job:", {
      title,
      responsibility,
      requirement,
      jobType,
    });
  };

  const saveTemplate = () => {
    if (!title || !responsibility || !requirement) return;
    const template = { title, responsibility, requirement, jobType };
    setSavedTemplate(template);
  };

  const useTemplate = () => {
    if (!savedTemplate) return;
    setTitle(savedTemplate.title);
    setResponsibility(savedTemplate.responsibility);
    setRequirement(savedTemplate.requirement);
    setJobType(savedTemplate.jobType);
  };

  const deleteTemplate = () => {
    setSavedTemplate(null);
  };

  return (
    <MainCardLayout>
      <div className="p-4 text-white">
        <h2 className="text-xl font-bold mb-2">📢 สร้างประกาศงาน</h2>
        <p className="text-sm text-gray-300 mb-4">
          กรอกรายละเอียดตำแหน่งงานที่ต้องการประกาศ
        </p>

        <div className="space-y-3 mb-6">
          <input
            className="w-full p-2 rounded-md bg-white text-black text-sm"
            placeholder="Job Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="w-full p-2 rounded-md bg-white text-black text-sm"
            placeholder="หน้าที่รับผิดชอบ"
            rows={3}
            value={responsibility}
            onChange={(e) => setResponsibility(e.target.value)}
          />
          <textarea
            className="w-full p-2 rounded-md bg-white text-black text-sm"
            placeholder="คุณสมบัติพื้นฐาน"
            rows={2}
            value={requirement}
            onChange={(e) => setRequirement(e.target.value)}
          />
          <select
            className="w-full p-2 rounded-md bg-white text-black text-sm"
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="contract">Contract</option>
            <option value="internship">Internship</option>
          </select>

          <button
            onClick={submitJob}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md w-full">
            ✅ ประกาศงาน
          </button>

          <button
            onClick={saveTemplate}
            className="border border-white text-white font-semibold px-4 py-2 rounded-md w-full">
            💾 บันทึกเป็น Template
          </button>
        </div>

        {/* ✅ Template card */}
        {savedTemplate && (
          <div className="bg-white text-black rounded-lg p-4 shadow-md space-y-3">
            <div className="text-sm font-bold flex items-center gap-2">
              📄 <span>Template ที่บันทึกไว้</span>
            </div>

            {/* Template Details */}
            <div className="text-sm">
              <p>
                <span className="font-semibold">🔹 Job Title: </span>
                {savedTemplate.title}
              </p>
              <p>
                <span className="font-semibold">🔹 หน้าที่: </span>
                {savedTemplate.responsibility}
              </p>
              <p>
                <span className="font-semibold">🔹 คุณสมบัติ: </span>
                {savedTemplate.requirement}
              </p>
              <p>
                <span className="font-semibold">🔹 ประเภทงาน: </span>
                {savedTemplate.jobType}
              </p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={useTemplate}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white rounded-md py-1 text-sm">
                ✅ Use this
              </button>
              <button
                onClick={deleteTemplate}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white rounded-md py-1 text-sm">
                🗑️ Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </MainCardLayout>
  );
}

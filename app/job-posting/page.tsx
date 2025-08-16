// app/job-posting/page.tsx
"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

type JobForm = {
  title: string;
  responsibility: string;
  requirement: string;
  jobType: string;
};

export default function JobPostingPage() {
  const { register, handleSubmit, reset } = useForm<JobForm>();
  const [savedTemplate, setSavedTemplate] = useState<JobForm | null>(null);

  const onSubmit = (data: JobForm) => {
    console.log("📨 Post Job:", data);
    // ✅ call API ที่ใช้ประกาศงานจริง ๆ
  };

  const handleSaveTemplate = (data: JobForm) => {
    setSavedTemplate(data);
    console.log("💾 Saved template:", data);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 space-y-6">
      <h1 className="text-xl font-semibold">📢 สร้างประกาศงาน</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="text-sm font-medium">Job Title</label>
          <input
            {...register("title")}
            className="w-full mt-1 rounded border py-2 px-3"
            placeholder="เช่น Frontend Developer"
          />
        </div>

        <div>
          <label className="text-sm font-medium">หน้าที่รับผิดชอบ</label>
          <textarea
            {...register("responsibility")}
            className="w-full mt-1 rounded border py-2 px-3"
            rows={3}
            placeholder="อธิบายหน้าที่ที่ต้องรับผิดชอบ"
          />
        </div>

        <div>
          <label className="text-sm font-medium">คุณสมบัติพื้นฐาน</label>
          <textarea
            {...register("requirement")}
            className="w-full mt-1 rounded border py-2 px-3"
            rows={2}
            placeholder="เช่น มีประสบการณ์ 1 ปี++"
          />
        </div>

        <div>
          <label className="text-sm font-medium">ประเภทงาน</label>
          <select
            {...register("jobType")}
            className="w-full mt-1 rounded border py-2 px-3"
          >
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="contract">Contract</option>
            <option value="internship">Internship</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white rounded py-2 font-medium"
        >
          ประกาศงาน
        </button>

        <button
          type="button"
          onClick={handleSubmit(handleSaveTemplate)}
          className="w-full mt-2 border rounded py-2 font-medium"
        >
          ✅ บันทึกเป็น Template
        </button>
      </form>

      {/* ใช้แสดงตัวอย่าง template ที่บันทึกไว้ */}
      {savedTemplate && (
        <pre className="mt-4 p-4 bg-gray-100 rounded text-sm">
{JSON.stringify(savedTemplate, null, 2)}
        </pre>
      )}
    </div>
  );
}

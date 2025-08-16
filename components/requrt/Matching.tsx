"use client";

import { useState } from "react";

interface Job {
  id: number;
  title: string;
  score: number;
}

interface Candidate {
  name: string;
  score: number;
  skills: string[];
}

export default function MatchingAiPanel() {
  // ✅ ตัวอย่างงาน + matching score
  const jobs: Job[] = [
    { id: 1, title: "พนักงานคีย์ข้อมูล", score: 92 },
    { id: 2, title: "พนักงานแพ็คสินค้า", score: 87 },
  ];

  // ✅ mock candidate ของ job id:1
  const candidates: Candidate[] = [
    { name: "คุณสุรีย์ (ผู้สูงอายุ)", score: 95, skills: ["Word", "Excel"] },
    { name: "คุณมนตรี", score: 87, skills: ["Excel", "Data Entry"] },
    { name: "คุณสาลี่", score: 81, skills: ["คีย์ข้อมูล"] },
  ];

  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  return (
    <div className="bg-[#1c0037] rounded-xl p-5 text-white space-y-4">
      <h2 className="font-semibold text-lg flex items-center gap-2">
        🧠 ระบบคัดกรองผู้สมัคร (Matching AI)
      </h2>

      {/* ===== List of Job Positions ===== */}
      {!selectedJob && (
        <div className="space-y-3">
          {jobs.map((job) => (
            <button
              key={job.id}
              onClick={() => setSelectedJob(job)}
              className="w-full flex justify-between items-center bg-white/10 px-4 py-3 rounded-md hover:bg-white/20">
              <span>{job.title}</span>

              <div className="flex items-center gap-2">
                <span className="bg-green-500 text-white text-xs rounded-full px-2 py-0.5">
                  ความเหมาะสม {job.score}%
                </span>
                <span className="text-white/70">➡️</span>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* ===== Candidates Table ===== */}
      {selectedJob && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="font-semibold">
              รายชื่อผู้สมัคร → {selectedJob.title}
            </span>
            <button
              className="text-xs underline"
              onClick={() => setSelectedJob(null)}>
              🔙 กลับไปเลือกตำแหน่ง
            </button>
          </div>

          <div className="bg-white text-black rounded-md overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 text-left">ชื่อผู้สมัคร</th>
                  <th className="p-2 text-left">ทักษะ</th>
                  <th className="p-2 text-center">Match Score</th>
                </tr>
              </thead>
              <tbody>
                {candidates
                  .sort((a, b) => b.score - a.score)
                  .map((c, i) => (
                    <tr key={i} className="border-t">
                      <td className="p-2">{c.name}</td>
                      <td className="p-2">{c.skills.join(", ")}</td>
                      <td className="p-2 text-center">{c.score}%</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <div className="bg-[#1c0037] rounded-xl p-5 text-white space-y-4">
            <h2 className="font-semibold text-lg flex items-center gap-2">
              🧠 ระบบคัดกรองผู้สมัคร (Matching AI)
            </h2>

            {/* Info Box */}
            <div className="bg-white/10 rounded-md p-3 text-xs leading-snug space-y-1">
              <div className="font-semibold">ℹ️ การคำนวณ Matching Score</div>

              <p>
                • ทักษะ (Skill) ที่ตรงกับความต้องการ <br />
                <span className="text-amber-300 font-medium">
                  ตัวอย่าง: ตำแหน่งต้องการ “Excel + พิมพ์ดีด” → ผู้สมัครมี Excel
                  = +30%, มีพิมพ์ดีด = +30%
                </span>
              </p>

              <p>
                • ประสบการณ์ตามที่กำหนด <br />
                <span className="text-amber-300 font-medium">
                  ตัวอย่าง: ตำแหน่งต้องการ “1 ปีขึ้นไป” → ถ้าผู้สมัครมี 2 ปี =
                  +20%
                </span>
              </p>

              <p>
                • รูปแบบงาน เช่น “สามารถทำที่บ้านได้” <br />
                <span className="text-amber-300 font-medium">
                  ตัวอย่าง: “ทำที่บ้านได้” → ถ้าผู้สมัครเลือก
                  “ต้องการทำงานที่บ้าน” = +20%
                </span>
              </p>

              <p>
                • เงื่อนไขเฉพาะ (เช่น ผู้สูงอายุ / ผู้พิการ) <br />
                <span className="text-amber-300 font-medium">
                  ตัวอย่าง: ถ้าตำแหน่งระบุว่า “เหมาะกับผู้พิการ” →
                  ถ้าผู้สมัครมีสถานะนั้นจริง = +20%
                </span>
              </p>

              <p className="mt-1">
                👉 คะแนนแต่ละส่วนจะรวมกันเป็น <b>เปอร์เซ็นต์ความเหมาะสม</b>
              </p>
            </div>

            {/* List of positions + badge */}
            {/* ... (list / button เดิมที่มี badge) */}
          </div>
        </div>
      )}
    </div>
  );
}

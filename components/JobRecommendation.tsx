"use client";
import { useState } from "react";
import MainCardLayout from "@/components/layout/MainCardLayout";

type Job = {
  id: number;
  title: string;
  description: string;
  location: string;
  tags: string[];
};

const mockJobs: Job[] = [
  {
    id: 1,
    title: "พนักงานแพ็คของ",
    description: "นั่งแพ็คของที่โกดังใกล้บ้าน",
    location: "เขตบางแค",
    tags: ["ใกล้บ้าน", "งานเบา", "นั่งทำได้"],
  },
  {
    id: 2,
    title: "ดูแลเด็กอนุบาล",
    description: "งานช่วยดูแลเด็กอนุบาลในโรงเรียน",
    location: "เขตบางนา",
    tags: ["งานเบา"],
  },
  {
    id: 3,
    title: "พับถุงกระดาษ (ทำที่บ้าน)",
    description: "สามารถทำที่บ้านได้ นั่งทำได้ งานเบา",
    location: "ออนไลน์",
    tags: ["งานเบา", "นั่งทำได้"],
  },
  {
    id: 4,
    title: "พนักงานร้านอาหาร",
    description: "งานบริการที่ร้านอาหารใกล้บ้าน",
    location: "เขตลาดพร้าว",
    tags: ["ใกล้บ้าน"],
  },
];

const allFilters = ["ใกล้บ้าน", "งานเบา", "นั่งทำได้"];

export default function JobRecommendation() {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleFilter = (filter: string) => {
    setActiveFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  const filteredJobs = mockJobs.filter((job) =>
    activeFilters.length === 0
      ? true
      : activeFilters.every((filter) => job.tags.includes(filter))
  );

  return (
    <MainCardLayout>
      <h2 className="text-2xl font-bold flex items-center gap-2">
        🤖 ระบบแนะนำงานอัตโนมัติ
      </h2>

      <p className="text-sm text-gray-300">
        แสดงงานที่เหมาะกับคุณ พร้อมตัวกรองสำหรับงานใกล้บ้าน งานเบา และนั่งทำได้
      </p>

      {/* Filter */}
      <div className="flex gap-3 flex-wrap mb-4 mt-4">
        {allFilters.map((filter) => (
          <button
            key={filter}
            onClick={() => toggleFilter(filter)}
            className={`px-4 py-2 rounded-full text-sm border transition ${
              activeFilters.includes(filter)
                ? "bg-pink-600 border-pink-500"
                : "border-gray-400 hover:border-pink-500"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Job Cards */}
      <div className="grid md:grid-cols-2 gap-4">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white text-black p-4 rounded-xl shadow-md space-y-2"
            >
              <h3 className="text-lg font-semibold">{job.title}</h3>
              <p className="text-sm">{job.description}</p>
              <p className="text-xs text-gray-600">📍 {job.location}</p>
              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-400">ไม่พบงานที่ตรงกับตัวกรอง</p>
        )}
      </div>
    </MainCardLayout>
  );
}

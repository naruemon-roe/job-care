"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

import RegisterFormPreview from "@/components/RegisterFormPreview";
import AccessibilityPreview from "@/components/AccessibilityPreview";
import SimpleProfilePanel from "@/components/SimpleProfilePanel";
import JobRecommendation from "@/components/JobRecommendation";
import ApplyByProxy from "@/components/ApplyByProxy";
import TargetedJobList from "@/components/TargetedJobList";
import EmployerChatSystem from "@/components/EmployerChatSystem";
import JobMap from "@/components/JobMap";
import JobAlert from "@/components/JobAlert";
import EncouragementBoard from "@/components/EncouragementBoard";

const features = [
  {
    id: 1,
    icon: "🏢",
    title: "ระบบสร้างโปรไฟล์บริษัท / ผู้ว่าจ้าง",
    description:
      "แบบฟอร์มกรอกชื่อ ความสามารถ เขตที่อยู่ พร้อมปุ่มกรอกเสียงและแนะนำงานอัตโนมัติ",
    component: () => <RegisterFormPreview />,
  },
  {
    id: 2,
    icon: "🔍",
    title: "รองรับการเข้าถึง (Accessibility)",
    description: "ปรับขนาดฟอนต์, High contrast, อ่านออกเสียงได้",
    component: () => <AccessibilityPreview />,
  },
  {
    id: 3,
    icon: "👤",
    title: "โปรไฟล์แบบเรียบง่าย",
    description: "แสดง timeline งานก่อนหน้า และอัปโหลดเสียง/คลิปแนะนำตัว",
    component: () => <SimpleProfilePanel />,
  },
  {
    id: 4,
    icon: "🔄",
    title: "ระบบแนะนำงานอัตโนมัติ",
    description: "แสดงการ์ดงานที่เหมาะกับคุณ พร้อมตัวกรองใกล้บ้าน-เบา-นั่งทำได้",
    component: () => <JobRecommendation />,
  },
  {
    id: 5,
    icon: "🧑‍🤝‍🧑",
    title: "สมัครงานโดยตัวแทน",
    description: "มอบอำนาจให้ญาติสมัครแทนได้ ยืนยันตัวตนด้วย OTP",
    component: () => <ApplyByProxy />,
  },
  {
    id: 6,
    icon: "📂",
    title: "หน้ารวมงานเฉพาะกลุ่ม",
    description: "เลือกดูงานเฉพาะสำหรับผู้สูงอายุหรือผู้พิการได้",
    component: () => <TargetedJobList />,
  },
  {
    id: 7,
    icon: "💬",
    title: "ระบบพูดคุยกับนายจ้าง",
    description: "แชทหรือวิดีโอคอลกับนายจ้างได้โดยตรงผ่านระบบ",
    component: () => <EmployerChatSystem />,
  },
  {
    id: 8,
    icon: "🗺️",
    title: "แผนที่สถานที่ทำงาน",
    description: "แสดงแผนที่ที่ตั้งงาน พร้อมไอคอนแสดงสิ่งอำนวยความสะดวก",
    component: () => <JobMap />,
  },
  {
    id: 9,
    icon: "🔔",
    title: "ระบบแจ้งเตือนงานใหม่",
    description: "ตั้งค่ารับการแจ้งเตือนผ่าน SMS, LINE หรือโทรกลับ",
    component: () => <JobAlert />,
  },
  {
    id: 10,
    icon: "❤️",
    title: "พื้นที่ให้กำลังใจ",
    description: "แชร์เรื่องราวประสบการณ์การหางานเพื่อสร้างแรงบันดาลใจ",
    component: () => <EncouragementBoard />,
  },
];

export default function Home() {
  const router = useRouter();

  return (
    <div className="font-sans min-h-screen p-6 sm:p-12 md:p-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-600 mb-6">
          🕵🏻🏢 ฟีเจอร์หลักของ เว็บสมัครงานฝั่งผู้รับสมัครงาน (นายจ้าง / บริษัท)
        </h1>
        <p className="text-center text-base sm:text-lg mb-4">
          ประกาศงาน → คัดกรอง → สัมภาษณ์ → จ้างงาน
        </p>

        <div className="text-sm sm:text-base text-center text-gray-600 mb-12">
          ระบบจัดการการรับสมัครที่ครบวงจรสำหรับองค์กร รองรับทุกขั้นตอนตั้งแต่ประกาศงานจนถึงจ้างงาน
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-600 mb-6">
          👵🏻👴🏻 ฟีเจอร์เด่นของระบบหางานเพื่อผู้สูงอายุ / ผู้พิการ
        </h1>

        <p className="text-center text-base sm:text-lg mb-4">
          สมัครโปรไฟล์ → ค้นหางาน → สมัครงาน → รอสัมภาษณ์ → ได้งาน
        </p>

        <div className="text-sm sm:text-base text-center text-gray-600 mb-8">
          ระบบถูกออกแบบให้เข้าถึงง่าย ใช้งานง่าย และครอบคลุมสำหรับผู้สูงอายุและผู้พิการ
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-8 justify-items-center">
          {features.map((f) => (
            <div
              key={f.id}
              className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 flex flex-col gap-4 min-h-[380px] w-full max-w-[520px] mx-auto transition-all hover:shadow-lg"
            >
              <div className="text-lg sm:text-xl font-semibold text-blue-700">
                {f.id}. {f.icon} {f.title}
              </div>
              <p className="text-gray-700 text-base leading-relaxed">
                {f.description}
              </p>
              <div className="rounded-md overflow-hidden border border-gray-100 bg-gray-50">
                {f.component?.()}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button
            onClick={() => router.push("/featureOverview")}
            className="rounded-full bg-black text-white dark:bg-white dark:text-black transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] px-6 py-3 text-sm sm:text-base"
          >
            🛠 ดูรายละเอียดเพิ่มเติม
          </button>
        </div>
      </div>
    </div>
  );
}
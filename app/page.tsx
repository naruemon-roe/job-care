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

import JobPosting from "@/components/requrt/JobPosting";
import Matching from "@/components/requrt/Matching";
import HiringPipelineBoard from "@/components/requrt/HiringPipelineBoard";
import OneWayVideoInterview from "@/components/requrt/OneWayVideoInterview";
import InterviewSchedule from "@/components/requrt/InterviewSchedule";
import Dashboard from "@/components/requrt/Dashboard";

const featuresJob = [
  {
    id: 1,
    icon: "🏢",
    title: "ระบบสร้างประกาศงาน (Job Posting)",
    description: "แบบฟอร์ม 3–5 ช่อง (Job Title, หน้าที่, คุณสมบัติพื้นฐาน)",
    component: () => <JobPosting />, // component mockup
  },
  {
    id: 2,
    icon: "🔍",
    title: "ระบบคัดกรองผู้สมัคร + Matching AI",
    description:
      "แสดงรายชื่อตำแหน่งงาน + Matching Score badge → เมื่อคลิกจะแสดงรายชื่อผู้สมัครเรียงตามคะแนน",
    component: () => <Matching />,
  },
  {
    id: 3,
    icon: "👤",
    title: "Kanban Hiring Pipeline",
    description:
      "การ์ดแต่ละผู้สมัคร ลากข้ามคอลัมน์ มี Icon 📌 เพื่อ Pin ผู้สมัครที่อยากติดตาม",
    component: () => <HiringPipelineBoard />,
  },
  {
    id: 4,
    icon: "🔄",
    title: "One-way Video Interview",
    description:
      "กำหนดคำถามที่ต้องการให้ผู้สมัครตอบ → Generate Link → ผู้สมัครอัดวิดีโอ → แสดง thumbnail และปุ่มดูวิดีโอ",
    component: () => <OneWayVideoInterview />,
  },

  {
    id: 5,
    icon: "🧑‍🤝‍🧑",
    title: "ระบบนัดสัมภาษณ์และแจ้งเตือน",
    description:
      "เลือกวัน-เวลา → ส่งลิงก์นัดสัมภาษณ์ให้ผู้สมัคร → ระบบแจ้งเตือนเมื่อใกล้ถึงวันสัมภาษณ์",
    component: () => <InterviewSchedule />,
  },
  {
    id: 6,
    icon: "📂",
    title: "Dashboard / รายงานการรับสมัคร",
    description:
      "Dashboard แสดงกราฟ Funnel และ Metric พร้อมเลือกตำแหน่งงานเพื่อดูรายงานแบบเจาะจง",
    component: () => <Dashboard />,
  },
];

const features = [
  {
    id: 1,
    icon: "🏢",
    title: "ระบบสร้างโปรไฟล์",
    description:
      "แบบฟอร์มกรอกชื่อ ความสามารถ เขตที่อยู่ พร้อมปุ่มกรอกเสียงและแนะนำงานอัตโนมัติ",
    component: () => <RegisterFormPreview />, // component mockup
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
    description:
      "แสดงการ์ดงานที่เหมาะกับคุณ พร้อมตัวกรองใกล้บ้าน-เบา-นั่งทำได้",
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
    <div className="font-sans min-h-screen p-8 sm:p-20 grid place-items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-300 dark:divide-white/[.1] w-full max-w-6xl gap-10">
        {/* 🔹 ซ้าย: ฝั่งนายจ้าง */}
        <main className="flex flex-col gap-8 px-4 md:px-10">
          <h2 className="text-lg sm:text-xl font-semibold">
            🕵🏻🏢 ฟีเจอร์หลักของ เว็บสมัครงานฝั่งผู้รับสมัครงาน (นายจ้าง /
            บริษัท)
          </h2>
          <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-2 py-1 rounded w-max">
            ประกาศงาน → คัดกรอง → สัมภาษณ์ → จ้างงาน
          </code>
          <ol className="font-mono list-decimal list-inside text-sm leading-relaxed">
            <li>โปรไฟล์บริษัท</li>
            <li>ระบบประกาศงาน (Job Posting)</li>
            <li>ระบบจัดการใบสมัคร</li>
            <li>ระบบทดสอบ / คำถาม / แบบฟอร์มเพิ่มเติม (Optional)</li>
            <li>ระบบนัดสัมภาษณ์</li>
            <li>Pipeline / กระบวนการรับสมัคร (Hiring Pipeline)</li>
            <li>ระบบสื่อสารกับผู้สมัคร</li>
            <li>Dashboard / รายงาน</li>
            <li>ระบบทีมงาน HR</li>
            <li>ความปลอดภัยและความเป็นส่วนตัว</li>
          </ol>
          {/* <button
            onClick={() => router.push("/featureOverview")}
            className="rounded-full border border-black/[.08] dark:border-white/[.1] transition-colors hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] px-5 py-3 text-sm sm:text-base w-max">
            🛠 ฟีเจอร์เด่นของ เว็บสมัครงานฝั่งผู้รับสมัครงาน (นายจ้าง / บริษัท)
          </button> */}

          <section className="w-full max-w6xl mx-auto pt-8">
            <h3 className="text-2xl font-bold mb-6 text-center text-blue-600">
              🛠 ฟีเจอร์เด่น (พร้อมตัวอย่าง UI)
            </h3>
            <div className="font-sans min-h-screen p-6 sm:p-2 md:p-4 bg-gray-50">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-xl sm:text-xl font-bold text-center text-blue-600 mb-6">
                  🕵🏻🏢 ฟีเจอร์เด่นของระบบหางานเพื่อผู้สูงอายุ / ผู้พิการ
                </h2>
{/* 
                <div className="text-sm sm:text-base text-center text-gray-600 mb-8">
                  ระบบถูกออกแบบให้เข้าถึงง่าย ใช้งานง่าย
                  และครอบคลุมสำหรับผู้สูงอายุและผู้พิการ
                </div> */}

                <div className="grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-1 gap-8 justify-items-center">
                  {featuresJob.map((f) => (
                    <div
                      key={f.id}
                      className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 flex flex-col gap-4 min-h-[380px] w-full max-w-[520px] mx-auto transition-all hover:shadow-lg">
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
                    className="rounded-full bg-black text-white dark:bg-white dark:text-black transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] px-6 py-3 text-sm sm:text-base">
                    🛠 ดูรายละเอียดเพิ่มเติม
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* 🔸 ขวา: ฝั่งผู้สูงอายุ / ผู้พิการ */}
        <main className="flex flex-col gap-8 px-4 md:px-10">
          {/* หัวข้อ */}
          <h2 className="text-lg sm:text-xl font-semibold">
            👵🏻👴🏻 ฟีเจอร์หลักของ เว็บหางานเพื่อผู้สูงอายุ / ผู้พิการ
          </h2>
          <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-2 py-1 rounded w-max">
            สมัครโปรไฟล์ → ค้นหางาน → สมัครงาน → รอสัมภาษณ์ → ได้งาน
          </code>

          {/* รายการฟีเจอร์แบบ bullet */}
          <ol className="font-mono list-decimal list-inside text-sm leading-relaxed">
            <li>สร้างโปรไฟล์ผู้สมัครงาน (Job Seeker Profile)</li>
            <li>ระบบแนะนำงานอัตโนมัติ (AI Job Matching)</li>
            <li>ค้นหางาน (Smart Job Search)</li>
            <li>ระบบสมัครงาน (Easy Apply)</li>
            <li>แจ้งเตือนงานใหม่ (Job Alerts)</li>
            <li>ฟีเจอร์เข้าถึงง่าย (Accessibility)</li>
            <li>Dashboard แสดงข้อมูลส่วนตัว</li>
            <li>แนะนำตัวด้วยวิดีโอ / เสียง</li>
            <li>รองรับหลายภาษา</li>
            <li>ระบบช่วยสร้างเรซูเม่</li>
          </ol>

          {/* ปุ่ม */}
          {/* <button
            onClick={() => router.push("/featureOverview")}
            className="rounded-full bg-black text-white dark:bg-white dark:text-black transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] px-5 py-3 text-sm sm:text-base w-max">
            🛠 ฟีเจอร์เด่นของระบบหางานเพื่อผู้สูงอายุ / ผู้พิการ
          </button> */}

          {/* 🔹 Preview Features */}
          <section className="w-full max-w6xl mx-auto pt-8">
            <h3 className="text-2xl font-bold mb-6 text-center text-blue-600">
              🛠 ฟีเจอร์เด่น (พร้อมตัวอย่าง UI)
            </h3>
            <div className="font-sans min-h-screen p-6 sm:p-2 md:p-4 bg-gray-50">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-xl sm:text-xl font-bold text-center text-blue-600 mb-6">
                  👵🏻👴🏻 ฟีเจอร์เด่นของระบบหางานเพื่อผู้สูงอายุ / ผู้พิการ
                </h2>

                <div className="text-sm sm:text-base text-center text-gray-600 mb-8">
                  ระบบถูกออกแบบให้เข้าถึงง่าย ใช้งานง่าย
                  และครอบคลุมสำหรับผู้สูงอายุและผู้พิการ
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-1 gap-8 justify-items-center">
                  {features.map((f) => (
                    <div
                      key={f.id}
                      className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 flex flex-col gap-4 min-h-[380px] w-full max-w-[520px] mx-auto transition-all hover:shadow-lg">
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
                    className="rounded-full bg-black text-white dark:bg-white dark:text-black transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] px-6 py-3 text-sm sm:text-base">
                    🛠 ดูรายละเอียดเพิ่มเติม
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

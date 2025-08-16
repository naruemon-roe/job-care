"use client";

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
    title: "ระบบสร้างโปรไฟล์",
    description:
      "แบบฟอร์มกรอกชื่อ ความสามารถ เขตที่อยู่ พร้อมปุ่มกรอกเสียงและแนะนำงานอัตโนมัติ",
    component: () => <RegisterFormPreview />, // component mockup
  },
  {
    id: 2,
    icon: "🔍",
    title: "รองรับการเข้าถึง (Accessibility)",
    description:
      "ปรับขนาดฟอนต์, High contrast, อ่านออกเสียงได้",
    component: () => <AccessibilityPreview />,
  },
  {
    id: 3,
    icon: "👤",
    title: "โปรไฟล์แบบเรียบง่าย",
    description:
      "แสดง timeline งานก่อนหน้า และอัปโหลดเสียง/คลิปแนะนำตัว",
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
    description:
      "มอบอำนาจให้ญาติสมัครแทนได้ ยืนยันตัวตนด้วย OTP",
    component: () => <ApplyByProxy />,
  },
  {
    id: 6,
    icon: "📂",
    title: "หน้ารวมงานเฉพาะกลุ่ม",
    description:
      "เลือกดูงานเฉพาะสำหรับผู้สูงอายุหรือผู้พิการได้",
    component: () => <TargetedJobList />,
  },
  {
    id: 7,
    icon: "💬",
    title: "ระบบพูดคุยกับนายจ้าง",
    description:
      "แชทหรือวิดีโอคอลกับนายจ้างได้โดยตรงผ่านระบบ",
    component: () => <EmployerChatSystem />,
  },
  {
    id: 8,
    icon: "🗺️",
    title: "แผนที่สถานที่ทำงาน",
    description:
      "แสดงแผนที่ที่ตั้งงาน พร้อมไอคอนแสดงสิ่งอำนวยความสะดวก",
    component: () => <JobMap />,
  },
  {
    id: 9,
    icon: "🔔",
    title: "ระบบแจ้งเตือนงานใหม่",
    description:
      "ตั้งค่ารับการแจ้งเตือนผ่าน SMS, LINE หรือโทรกลับ",
    component: () => <JobAlert />,
  },
  {
    id: 10,
    icon: "❤️",
    title: "พื้นที่ให้กำลังใจ",
    description:
      "แชร์เรื่องราวประสบการณ์การหางานเพื่อสร้างแรงบันดาลใจ",
    component: () => <EncouragementBoard />,
  },
];

export default function FeatureOverview() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-[#f9fafb]">
      <h1 className="text-3xl font-bold mb-10 text-center text-blue-600">
        🛠 ฟีเจอร์เด่นของระบบหางานเพื่อผู้สูงอายุ / ผู้พิการ
      </h1>
      <div className="grid md:grid-cols-2 gap-10">
        {features.map((f) => (
          <div
            key={f.id}
            className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all border border-gray-200 flex flex-col gap-4"
          >
            <div className="text-lg font-semibold text-blue-700">
              {f.id}. {f.icon} {f.title}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {f.description}
            </p>
            <div className="rounded-md overflow-hidden border border-gray-100">
              {f.component?.()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 

// 📦 Mock components (ให้คุณสร้างไว้ที่ components/RegisterFormPreview.tsx ฯลฯ)
// function RegisterFormPreview() {
//   return (
//     <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 text-sm text-gray-700">
//       [Mockup] ฟอร์มกรอกชื่อ + ความสามารถ + เขต + 📢 กรอกด้วยเสียง
//     </div>
//   );
// }


function ProfilePreview() {
  return (
    <div className="bg-gradient-to-r from-pink-100 to-pink-200 p-4 text-sm text-gray-700">
      [Mockup] Timeline + 🎙️ อัปโหลดเสียง/วิดีโอแนะนำตัว
    </div>
  );
}

function JobRecommendationPreview() {
  return (
    <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 p-4 text-sm text-gray-700">
      [Mockup] Job Card + ตัวกรองใกล้บ้าน เบา นั่งทำได้
    </div>
  );
}

function DelegatePreview() {
  return (
    <div className="bg-gradient-to-r from-red-100 to-red-200 p-4 text-sm text-gray-700">
      [Mockup] มอบอำนาจ + ป้อนชื่อ + OTP
    </div>
  );
}

function ChatPreview() {
  return (
    <div className="bg-gradient-to-r from-indigo-100 to-indigo-200 p-4 text-sm text-gray-700">
      [Mockup] Toggle กลุ่มเป้าหมาย + Card งานเฉพาะ
    </div>
  );
}

function MapPreview() {
  return (
    <div className="bg-gradient-to-r from-indigo-100 to-indigo-200 p-4 text-sm text-gray-700">
      [Mockup] Toggle กลุ่มเป้าหมาย + Card งานเฉพาะ
    </div>
  );
}


function NotificationPreview() {
  return (
    <div className="bg-gradient-to-r from-indigo-100 to-indigo-200 p-4 text-sm text-gray-700">
      [Mockup] Toggle กลุ่มเป้าหมาย + Card งานเฉพาะ
    </div>
  );
}


function GroupFilterPreview() {
  return (
    <div className="bg-gradient-to-r from-indigo-100 to-indigo-200 p-4 text-sm text-gray-700">
      [Mockup] Toggle กลุ่มเป้าหมาย + Card งานเฉพาะ
    </div>
  );
}

function InspirationPreview() {
  return (
    <div className="bg-gradient-to-r from-indigo-100 to-indigo-200 p-4 text-sm text-gray-700">
      [Mockup] Toggle กลุ่มเป้าหมาย + Card งานเฉพาะ
    </div>
  );
}

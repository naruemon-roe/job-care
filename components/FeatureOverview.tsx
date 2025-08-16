import Image from "next/image";

const features = [
  {
    id: 1,
    icon: "✅",
    title: "สมัครงานง่าย ไม่ซับซ้อน",
    description: "แบบฟอร์มกรอกชื่อ ความสามารถ เขตที่อยู่ พร้อมปุ่มกรอกเสียงและแนะนำงานอัตโนมัติ",
    image: "/images/mockup-register.png",
  },
  {
    id: 2,
    icon: "🔍",
    title: "รองรับการเข้าถึง (Accessibility)",
    description: "ปรับขนาดฟอนต์, High contrast, อ่านออกเสียงได้",
    image: "/images/mockup-accessibility.png",
  },
  {
    id: 3,
    icon: "👤",
    title: "โปรไฟล์แบบเรียบง่าย",
    description: "แสดง timeline งานก่อนหน้า และอัปโหลดเสียง/คลิปแนะนำตัว",
    image: "/images/mockup-profile.png",
  },
  {
    id: 4,
    icon: "🔄",
    title: "ระบบแนะนำงานอัตโนมัติ",
    description: "แสดงการ์ดงานที่เหมาะกับคุณ พร้อมตัวกรองใกล้บ้าน-เบา-นั่งทำได้",
    image: "/images/mockup-recommend.png",
  },
  {
    id: 5,
    icon: "🧑‍🤝‍🧑",
    title: "สมัครงานโดยตัวแทน",
    description: "มอบอำนาจให้ญาติสมัครแทนได้ ยืนยันตัวตนด้วย OTP",
    image: "/images/mockup-delegate.png",
  },
  {
    id: 6,
    icon: "📂",
    title: "หน้ารวมงานเฉพาะกลุ่ม",
    description: "เลือกดูงานเฉพาะสำหรับผู้สูงอายุหรือผู้พิการได้",
    image: "/images/mockup-category.png",
  },
  {
    id: 7,
    icon: "💬",
    title: "ระบบพูดคุยกับนายจ้าง",
    description: "แชทหรือวิดีโอคอลกับนายจ้างได้ในระบบ",
    image: "/images/mockup-chat.png",
  },
  {
    id: 8,
    icon: "🗺️",
    title: "แผนที่สถานที่ทำงาน",
    description: "ดูพิกัดงาน มี icon แสดงสิ่งอำนวยความสะดวก",
    image: "/images/mockup-map.png",
  },
  {
    id: 9,
    icon: "🔔",
    title: "ระบบแจ้งเตือนงานใหม่",
    description: "เลือกวิธีแจ้งเตือน: SMS, LINE, โทรกลับ",
    image: "/images/mockup-notify.png",
  },
  {
    id: 10,
    icon: "❤️",
    title: "พื้นที่ให้กำลังใจ",
    description: "แชร์เรื่องราวแรงบันดาลใจ พร้อมฟังเสียงจริงจากคนที่ได้งานแล้ว",
    image: "/images/mockup-inspire.png",
  },
];

export default function FeatureOverview() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-10 text-center text-primary">ฟีเจอร์ทั้งหมดของแพลตฟอร์มหางานเพื่อสำหรับผู้สูงอายุ / ผู้พิการ</h1>
      <div className="grid md:grid-cols-2 gap-10">
        {features.map((f) => (
          <div
            key={f.id}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row gap-4 items-start"
          >
            <div className="flex-shrink-0">
              <Image
                src={f.image}
                alt={f.title}
                width={240}
                height={160}
                className="rounded-lg border"
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-1">
                 {f.id}. {f.icon} {f.title}
              </h2>
              <p className="text-gray-600 text-sm">{f.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

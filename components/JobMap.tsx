import MainCardLayout from "@/components/layout/MainCardLayout";

export default function JobMapPage() {
  return (
    <MainCardLayout>
      <p className="text-sm text-white mb-4">
        แสดงแผนที่ที่ตั้งงาน พร้อมไอคอนแสดงสิ่งอำนวยความสะดวก
      </p>

      {/* Toggle กลุ่มเป้าหมาย */}
      <div className="flex gap-2 mb-4">
        <button className="bg-blue-500 text-white px-3 py-1 rounded-full">👴 ผู้สูงอายุ</button>
        <button className="bg-pink-500 text-white px-3 py-1 rounded-full">♿ ผู้พิการ</button>
      </div>

      {/* Card งานเฉพาะ + แผนที่ */}
      <div className="bg-white p-4 rounded-xl text-black">
        <h3 className="text-md font-bold">ผู้ช่วยร้านขายของชำ</h3>
        <p className="text-sm text-gray-600 mb-2">นายจ้าง: คุณสมหมาย</p>

        <div className="w-full h-48 mb-3">
          {/* แทนด้วยแผนที่จริง เช่น Google Maps หรือ Leaflet ในโปรเจกต์จริง */}
          <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
            (แผนที่)
          </div>
        </div>

        {/* สิ่งอำนวยความสะดวก */}
        <div className="flex gap-3">
          <span className="text-lg">♿</span>
          <span className="text-lg">🚌</span>
          <span className="text-lg">🅿️</span>
        </div>
      </div>
    </MainCardLayout>
  );
}

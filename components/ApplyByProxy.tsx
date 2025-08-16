"use client";
import { useState } from "react";
import MainCardLayout from "@/components/layout/MainCardLayout";

export default function ApplyByProxy() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const sendOtp = () => {
    if (name.trim() === "") return alert("กรุณาป้อนชื่อก่อนส่ง OTP");
    setOtpSent(true);
    alert("📩 ระบบส่ง OTP ไปยังโทรศัพท์เรียบร้อยแล้ว (mock)");
  };

  const verifyOtp = () => {
    if (otp === "123456") {
      setConfirmed(true);
    } else {
      alert("❌ รหัส OTP ไม่ถูกต้อง");
    }
  };

  return (
    <MainCardLayout>
      <h2 className="text-2xl font-bold flex items-center gap-2">
        🧑‍🤝‍🧑 สมัครงานโดยตัวแทน
      </h2>
      <p className="text-sm text-gray-300">
        มอบอำนาจให้ญาติหรือผู้ดูแลสมัครแทนได้ โดยต้องยืนยันตัวตนผ่าน OTP
      </p>

      {!confirmed ? (
        <div className="space-y-4 mt-4">
          {/* ชื่อผู้สมัครแทน */}
          <div>
            <label className="block mb-1 text-sm text-white">
              👤 ชื่อผู้สมัครแทน
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="เช่น ลูกสาว - นางสมใจ ใจดี"
              className="w-full px-4 py-2 rounded-lg bg-white text-black focus:outline-none border border-gray-300"
            />
          </div>

          {/* เบอร์โทร */}
          <div>
            <label className="block mb-1 text-sm text-white">
              📱 เบอร์โทรศัพท์
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="เช่น 089-xxx-xxxx"
              className="w-full px-4 py-2 rounded-lg bg-white text-black focus:outline-none border border-gray-300"
            />
          </div>

          {/* ปุ่มส่ง OTP */}
          {!otpSent ? (
            <button
              onClick={sendOtp}
              className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg">
              📩 ส่ง OTP เพื่อยืนยันตัวตน
            </button>
          ) : (
            <div className="space-y-3">
              <label className="block text-sm text-white">
                🔐 ป้อนรหัส OTP ที่ได้รับ
              </label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="6 หลัก"
                className="w-full px-4 py-2 rounded-lg bg-white text-black focus:outline-none border border-gray-300"
              />
              <button
                onClick={verifyOtp}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
                ✅ ยืนยัน OTP
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="mt-6 bg-green-100 text-green-800 p-4 rounded-xl text-center">
          ✅ ยืนยันตัวตนเรียบร้อยแล้ว! ระบบจะดำเนินการสมัครงานแทนคุณต่อไป
        </div>
      )}
    </MainCardLayout>
  );
}

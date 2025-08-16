"use client";

import { useEffect, useRef, useState } from "react";
import { Mic, Sparkles } from "lucide-react";
import MainCardLayout from "@/components/layout/MainCardLayout";

export default function RegisterForm() {
  const nameRef = useRef<HTMLInputElement>(null);
  const skillRef = useRef<HTMLInputElement>(null);
  const areaRef = useRef<HTMLInputElement>(null);

  const [listeningField, setListeningField] = useState<
    "name" | "skill" | "area" | null
  >(null);

  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const SpeechRecognition =
        (window as any).SpeechRecognition ||
        (window as any).webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.lang = "th-TH";
    }
  }, []);

  const startVoiceInput = (
    targetRef: React.RefObject<HTMLInputElement | null>,
    field: "name" | "skill" | "area",
  ) => {
    if (!targetRef.current) return; // <— ป้องกัน null ก่อน
    const recognition = recognitionRef.current;
    if (!recognition) return;

    setListeningField(field);

    recognition.onresult = (event: any) => {
      const text = event.results[0][0].transcript;
      if (targetRef.current) {
        targetRef.current.value = text;
      }
      setListeningField(null);
    };

    recognition.start();
  };

  return (
    <MainCardLayout>
      <h2 className="text-xl font-semibold mb-3 flex items-center gap-2 text-pink-200">
        📝 สมัครใช้งานง่าย ๆ
      </h2>
      <p className="text-sm text-white/80 mb-4">
        กรอกข้อมูลเบื้องต้น แล้วระบบจะช่วยแนะนำงานที่เหมาะกับคุณ!
      </p>
      <p className="text-xs text-white/70 mb-2">
        🎤 สามารถกดไอคอนไมค์เพื่อกรอกด้วยเสียงได้
      </p>
      {/* FIELD : NAME */}
      <div className="relative mb-2">
        <input
          ref={nameRef}
          type="text"
          placeholder="ชื่อของคุณ"
          className="w-full p-2 rounded bg-white/10 text-white placeholder-white/60"
        />
        <button
          onClick={() => startVoiceInput(nameRef!, "name")}
          className="absolute right-2 top-1/2 -translate-y-1/2">
          <span className="relative">
            {listeningField === "name" && (
              <span className="absolute inset-0 rounded-full bg-red-500 opacity-40 animate-ping"></span>
            )}
            <Mic
              size={16}
              className={
                listeningField === "name" ? "text-red-500" : "text-pink-300"
              }
            />
          </span>
        </button>
        {listeningField === "name" && (
          <p className="text-xs text-pink-300 mt-1">🎤 กำลังฟัง...</p>
        )}
      </div>

      {/* FIELD : SKILL */}
      <div className="relative mb-2">
        <input
          ref={skillRef}
          type="text"
          placeholder="ความสามารถพิเศษ"
          className="w-full p-2 rounded bg-white/10 text-white placeholder-white/60"
        />
        <button
          onClick={() => startVoiceInput(skillRef!, "skill")}
          className="absolute right-2 top-1/2 -translate-y-1/2">
          <span className="relative">
            {listeningField === "skill" && (
              <span className="absolute inset-0 rounded-full bg-red-500 opacity-40 animate-ping"></span>
            )}
            <Mic
              size={16}
              className={
                listeningField === "skill" ? "text-red-500" : "text-pink-300"
              }
            />
          </span>
        </button>
        {listeningField === "skill" && (
          <p className="text-xs text-pink-300 mt-1">🎤 กำลังฟัง...</p>
        )}
      </div>

      {/* FIELD : AREA */}
      <div className="relative mb-4">
        <input
          ref={areaRef}
          type="text"
          placeholder="เขตที่อยู่"
          className="w-full p-2 rounded bg-white/10 text-white placeholder-white/60"
        />
        <button
          onClick={() => startVoiceInput(areaRef!, "area")}
          className="absolute right-2 top-1/2 -translate-y-1/2">
          <span className="relative">
            {listeningField === "area" && (
              <span className="absolute inset-0 rounded-full bg-red-500 opacity-40 animate-ping"></span>
            )}
            <Mic
              size={16}
              className={
                listeningField === "area" ? "text-red-500" : "text-pink-300"
              }
            />
          </span>
        </button>
        {listeningField === "area" && (
          <p className="text-xs text-pink-300 mt-1">🎤 กำลังฟัง...</p>
        )}
      </div>

      <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-full flex items-center gap-1">
        <Sparkles size={16} />
        แนะนำงานอัตโนมัติ
      </button>
    </MainCardLayout>
  );
}

"use client";

import { useState, useRef } from "react";

export default function OneWayVideoInterview() {
  const [question, setQuestion] = useState("");
  const [error, setError] = useState("");

  const [generatedLink, setGeneratedLink] = useState<string | null>(null);
  const [recordedUrl, setRecordedUrl] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  const handleGenerateLink = () => {
    if (!question.trim()) {
      setError("กรุณากรอกคำถามก่อน");
      return;
    }
    setError("");
    setGeneratedLink("https://jobportal.com/interview/abc123");
  };

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    mediaRecorderRef.current = new MediaRecorder(stream);
    mediaRecorderRef.current.ondataavailable = (e) => {
      chunksRef.current.push(e.data);
    };
    mediaRecorderRef.current.onstop = () => {
      const blob = new Blob(chunksRef.current);
      const url = URL.createObjectURL(blob);
      setRecordedUrl(url);
    };
    mediaRecorderRef.current.start();
    setIsRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setIsRecording(false);
  };

  return (
    <div className="bg-[#1c0037] rounded-xl p-4 text-white space-y-4">
      <h2 className="font-semibold text-lg">📹 One-way Video Interview</h2>

      {!generatedLink && (
        <>
          <label className="text-sm flex items-center gap-1">
            📝 <span>คำถามที่อยากให้ผู้สมัครตอบ</span>
          </label>
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="เช่น กรุณาแนะนำตัวเอง และเล่าประสบการณ์ที่เกี่ยวข้องกับตำแหน่งนี้"
            className="w-full bg-white text-black rounded p-2 text-sm"
            rows={3}
          />

          {error && <p className="text-red-400 text-xs mt-1">{error}</p>}

          <button
            onClick={handleGenerateLink}
            className="bg-purple-600 hover:bg-purple-700 text-white rounded-md px-4 py-2 text-sm"
          >
            🔗 Generate Link
          </button>
        </>
      )}

      {generatedLink && !recordedUrl && (
        <>
          <p className="text-sm font-semibold">คำถาม:</p>
          <p className="text-sm italic mb-2">{question}</p>

          <p className="text-sm">ลิงก์สำหรับผู้สมัคร:</p>
          <a className="underline" href={generatedLink} target="_blank">
            {generatedLink}
          </a>

          <div className="space-x-2 mt-2">
            <button
              onClick={startRecording}
              className="bg-green-500 text-white rounded-md px-3 py-1 text-sm"
            >
              ▶️ เริ่มอัดวิดีโอ
            </button>
            <button
              onClick={stopRecording}
              className="bg-red-500 text-white rounded-md px-3 py-1 text-sm"
            >
              ⏹ หยุดอัด
            </button>
          </div>

          {isRecording && (
            <p className="text-xs mt-1 text-red-400">🎥 กำลังบันทึกวิดีโอ...</p>
          )}
        </>
      )}

      {recordedUrl && (
        <>
          <p className="text-sm font-semibold">วิดีโอที่อัดแล้ว</p>
          <video
            src={recordedUrl}
            controls
            className="w-full rounded-md bg-black"
          />
        </>
      )}
    </div>
  );
}

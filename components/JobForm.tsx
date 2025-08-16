"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

const schema = yup.object({
  name: yup.string().required("กรุณากรอกชื่อ"),
  skills: yup.string().required("กรุณากรอกความสามารถ"),
  location: yup.string().required("กรุณากรอกเขตที่อยู่"),
});

export default function JobForm() {
  const [listening, setListening] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data: any) => {
    console.log("ส่งฟอร์ม:", data);
  };

  const startVoiceInput = (field: string) => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return alert("เบราว์เซอร์ไม่รองรับ Voice Input");

    const recognition = new SpeechRecognition();
    recognition.lang = "th-TH";
    recognition.start();
    setListening(true);

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setValue(field, transcript);
      setListening(false);
    };

    recognition.onerror = () => setListening(false);
  };

  return (
    <div className="max-w-md mx-auto mt-10 card bg-base-100 shadow-xl p-8">
      <h2 className="text-2xl font-bold text-center mb-6 flex items-center gap-2">
        📄 <span className="text-primary">แบบฟอร์มสมัครงาน</span>
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Name */}
        <div>
          <label className="label font-semibold text-gray-700">ชื่อ</label>
          <div className="flex gap-2">
            <input
              {...register("name")}
              className="input input-bordered input-primary w-full bg-white"
              placeholder="กรอกชื่อของคุณ"
            />
            <button
              type="button"
              onClick={() => startVoiceInput("name")}
              className="btn btn-secondary btn-sm"
            >📢</button>
          </div>
          {errors.name && <p className="text-error text-sm mt-1">{errors.name.message}</p>}
        </div>

        {/* Skills */}
        <div>
          <label className="label font-semibold text-gray-700">ความสามารถ</label>
          <div className="flex gap-2">
            <input
              {...register("skills")}
              className="input input-bordered input-primary w-full bg-white"
              placeholder="สามารถทำอะไรได้บ้าง"
            />
            <button
              type="button"
              onClick={() => startVoiceInput("skills")}
              className="btn btn-secondary btn-sm"
            >📢</button>
          </div>
          {errors.skills && <p className="text-error text-sm mt-1">{errors.skills.message}</p>}
        </div>

        {/* Location */}
        <div>
          <label className="label font-semibold text-gray-700">เขตที่อยู่</label>
          <div className="flex gap-2">
            <input
              {...register("location")}
              className="input input-bordered input-primary w-full bg-white"
              placeholder="ระบุเขตพื้นที่อาศัย"
            />
            <button
              type="button"
              onClick={() => startVoiceInput("location")}
              className="btn btn-secondary btn-sm"
            >📢</button>
          </div>
          {errors.location && <p className="text-error text-sm mt-1">{errors.location.message}</p>}
        </div>

        {/* Submit */}
        <div>
          <button type="submit" className="btn btn-primary w-full mt-4 text-white text-lg font-bold">
            🧠 แนะนำงานอัตโนมัติ
          </button>
        </div>
      </form>
    </div>
  );
}
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function FeaturesPage() {
  return (
    <div className="p-4 space-y-4 max-w-md mx-auto bg-gray-50 min-h-screen">
      {/* Greeting */}
      <Card>
        <CardContent className="p-4">
          <p className="text-sm text-muted-foreground">👵 ระบบหางานสำหรับผู้สูงอายุ / ผู้พิการ</p>
          <p className="text-lg font-bold">รวมฟีเจอร์เด่นทั้งหมด 10 อย่าง</p>
        </CardContent>
      </Card>

      {/* Feature 1: สมัครง่าย */}
      <Card>
        <CardContent className="p-4 space-y-2">
          <p className="font-semibold text-base">✅ สมัครงานง่าย ไม่ซับซ้อน</p>
          <Input placeholder="ชื่อของคุณ" />
          <Input placeholder="ความสามารถพิเศษ" />
          <Input placeholder="เขตที่อยู่" />
          <div className="flex gap-2 pt-2">
            <Button variant="destructive">กรอกด้วยเสียง</Button>
            <Button variant="secondary">แนะนำงานอัตโนมัติ</Button>
          </div>
        </CardContent>
      </Card>

      {/* Feature 2: การเข้าถึง */}
      <Card>
        <CardContent className="p-4 space-y-2">
          <p className="font-semibold">♿ รองรับการเข้าถึง (Accessibility)</p>
          <div className="flex items-center justify-between">
            <span>ขนาดฟอนต์:</span>
            <div className="space-x-2">
              <Button size="sm">-</Button>
              <Button size="sm">+</Button>
            </div>
          </div>
          <Button variant="outline" size="sm">🔊 อ่านออกเสียง</Button>
        </CardContent>
      </Card>

      {/* Feature 3: โปรไฟล์เรียบง่าย */}
      <Card>
        <CardContent className="p-4">
          <p className="font-semibold">👤 โปรไฟล์แบบเรียบง่าย</p>
          <p className="text-sm text-muted-foreground">แสดง timeline งานถัดไป + โหลดเสียงได้</p>
        </CardContent>
      </Card>

      {/* Feature 4: ระบบแนะนำงาน */}
      <Card>
        <CardContent className="p-4 space-y-2">
          <p className="font-semibold">🤖 ระบบแนะนำงานอัตโนมัติ</p>
          <ToggleGroup type="single" className="gap-2">
            <ToggleGroupItem value="ใกล้บ้าน">ใกล้บ้าน</ToggleGroupItem>
            <ToggleGroupItem value="งานเบา">งานเบา</ToggleGroupItem>
            <ToggleGroupItem value="นั่งทำได้">นั่งทำได้</ToggleGroupItem>
          </ToggleGroup>
        </CardContent>
      </Card>

      {/* Feature 5: สมัครแทน */}
      <Card>
        <CardContent className="p-4 space-y-2">
          <p className="font-semibold">👫 สมัครงานโดยตัวแทน</p>
          <Input placeholder="ชื่อผู้สมัครแทน" />
          <Input placeholder="เบอร์โทรศัพท์" />
          <Button variant="pink">📩 ส่ง OTP</Button>
        </CardContent>
      </Card>

      {/* Feature 6: หน้ารวมงานเฉพาะกลุ่ม */}
      <Card>
        <CardContent className="p-4">
          <p className="font-semibold">📄 หน้ารวมงานเฉพาะกลุ่ม</p>
          <ToggleGroup type="single" className="gap-2">
            <ToggleGroupItem value="สูงอายุ">👵 ผู้สูงอายุ</ToggleGroupItem>
            <ToggleGroupItem value="ผู้พิการ">♿ ผู้พิการ</ToggleGroupItem>
          </ToggleGroup>
        </CardContent>
      </Card>

      {/* Feature 7: ระบบพูดคุยกับนายจ้าง */}
      <Card>
        <CardContent className="p-4 space-y-2">
          <p className="font-semibold">💬 ระบบพูดคุยกับนายจ้าง</p>
          <ToggleGroup type="single" className="gap-2">
            <ToggleGroupItem value="chat">💬 แชท</ToggleGroupItem>
            <ToggleGroupItem value="video">🎥 วิดีโอคอล</ToggleGroupItem>
          </ToggleGroup>
        </CardContent>
      </Card>

      {/* Feature 8: แผนที่ที่ตั้งงาน */}
      <Card>
        <CardContent className="p-4">
          <p className="font-semibold">🗺️ แผนที่สถานที่ทำงาน</p>
          <p className="text-sm text-muted-foreground">แสดงแผนที่ + สิ่งอำนวยความสะดวก</p>
        </CardContent>
      </Card>

      {/* Feature 9: ระบบแจ้งเตือน */}
      <Card>
        <CardContent className="p-4 space-y-2">
          <p className="font-semibold">🔔 ระบบแจ้งเตือนงานใหม่</p>
          <div className="flex gap-2">
            <Badge variant="outline">SMS</Badge>
            <Badge variant="outline">LINE</Badge>
            <Badge variant="outline">โทรกลับ</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Feature 10: พื้นที่ให้กำลังใจ */}
      <Card>
        <CardContent className="p-4">
          <p className="font-semibold">❤️ พื้นที่ให้กำลังใจ</p>
          <p className="text-sm text-muted-foreground">แชร์เรื่องราวประสบการณ์การหางานเพื่อสร้างแรงบันดาลใจ</p>
        </CardContent>
      </Card>
    </div>
  );
}

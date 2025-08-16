import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, User } from "lucide-react";
import Image from "next/image";

export default function HomeScreen() {
  return (
    <div className="max-w-sm mx-auto px-4 py-6 space-y-4">
      {/* Header Greeting */}
      <Card className="bg-white">
        <CardHeader className="flex flex-row items-center space-x-4">
          <Image
            src="/avatar.png"
            alt="User Avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <p className="text-sm text-gray-500">Good morning,</p>
            <p className="font-semibold">Maria Lee</p>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500">You've done 3 workouts this week</p>
          <p className="text-xs text-gray-400">75% of your weekly goal is completed</p>
        </CardContent>
      </Card>

      {/* Search Bar */}
      <div className="flex items-center space-x-2 bg-white p-3 rounded-xl shadow">
        <Search className="text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search"
          className="flex-1 outline-none text-sm"
        />
      </div>

      {/* Featured Section */}
      <div className="space-y-2">
        <h3 className="font-bold text-sm">Most popular workouts</h3>
        <Card className="relative overflow-hidden">
          <div className="absolute top-2 left-2 bg-gray-200 text-xs px-2 py-1 rounded">Premium</div>
          <CardContent className="pt-6">
            <p className="font-semibold text-sm">HIIT for beginners</p>
            <p className="text-xs text-gray-400">Tadeusz Izo</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Workouts */}
      <div className="space-y-2">
        <h3 className="font-bold text-sm">Quick workouts</h3>
        <div className="grid grid-cols-2 gap-2">
          <Card>
            <CardContent className="pt-4">
              <p className="font-medium text-sm">Quick Abs</p>
              <p className="text-xs text-gray-400">Leonardo da Exp</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4">
              <p className="font-medium text-sm">Upper Body</p>
              <p className="text-xs text-gray-400">Michelle Bueno</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Categories */}
      <div className="space-y-2">
        <h3 className="font-bold text-sm">Categories</h3>
        <div className="grid grid-cols-4 gap-2 text-center text-xs text-gray-700">
          <div className="bg-gray-100 p-2 rounded-xl">Weights</div>
          <div className="bg-gray-100 p-2 rounded-xl">HIIT</div>
          <div className="bg-gray-100 p-2 rounded-xl">Yoga</div>
          <div className="bg-gray-100 p-2 rounded-xl">Cycling</div>
        </div>
      </div>
    </div>
  );
}

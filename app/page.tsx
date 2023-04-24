"use client";

import CityPicker from "@/components/CityPicker";
import { Card, Divider, Subtitle, Text } from "@tremor/react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#792d81] to-[#241f62] p-10 flex flex-col justify-center items-center">
      <Card className="max-w-2xl mx-auto">
        <Text className="text-6xl font-bold text-center mb-10 text-gray-700">
          Weather AI
        </Text>
        <Subtitle className="text-xl text-center text-cyan-700">
          Powered by Open AI, StepZen, Next.js 13.3, Tailwind CSS
        </Subtitle>

        <Divider className="my-10" />

        <Card className="bg-gradient-to-br from-[#792d81] to-[#241f62]">
          <CityPicker />
        </Card>
      </Card>
    </div>
  );
}

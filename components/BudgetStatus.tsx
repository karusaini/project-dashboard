"use client";

import { useState } from "react";
import Image from "next/image"; // ✅ Import Next.js Image Component
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Calendar, FileDown, Plus } from "lucide-react";

const projects = [
  {
    name: "Insurance App",
    client: "Verti",
    budget: 70000,
    profit: -2500,
    actualHours: 1100,
    soldHours: 1000,
    statusColor: "bg-red-500",
    progressText: "100 hours over Budget!",
    image: "/images/insurance.png", // ✅ Static Image from `public` folder
  },
  {
    name: "Neo",
    client: "Bankia",
    budget: 70000,
    profit: 4000,
    actualHours: 1100,
    soldHours: 1000,
    statusColor: "bg-yellow-400",
    progressText: "1000 sold hours",
    image: "/images/neo.png",
  },
  {
    name: "VR Website",
    client: "Barça",
    budget: 70000,
    profit: 4000,
    actualHours: 1100,
    soldHours: 2000,
    statusColor: "bg-green-400",
    progressText: "2000 sold hours",
    image: "/images/vr-website.png",
  },
  {
    name: "AI Dashboard",
    client: "Tesla",
    budget: 70000,
    profit: 4000,
    actualHours: 1100,
    soldHours: 1100,
    statusColor: "bg-green-500",
    progressText: "1100 sold hours",
    image: "/images/ai-dashboard.png",
  },
];

export default function BudgetStatus() {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const [startDate, endDate] = dateRange;

  return (
    <div className="p-6 bg-white shadow-md rounded-xl">
      {/* ✅ Header Section */}
      <div className="flex flex-wrap justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Budget status</h2>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <Plus size={16} /> Add New Project
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <FileDown size={16} /> Download report
          </Button>

          {/* ✅ Date Picker */}
          <div className="relative">
            <Calendar
              className="absolute left-3 top-2 text-gray-500"
              size={16}
            />
            <DatePicker
              selected={startDate}
              onChange={(update) => setDateRange(update)}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              className="pl-8 pr-3 py-2 border rounded-md text-sm focus:ring focus:ring-blue-300"
              placeholderText="Select Date Range"
            />
          </div>

          <Button variant="default">Filter</Button>
        </div>
      </div>

      {/* ✅ Projects List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {projects.map((project, index) => (
          <Card key={index} className="p-4">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle>{project.name}</CardTitle>
                {/* ✅ Project Image */}
                <Image
                  src={project.image}
                  alt={project.name}
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full"
                />
              </div>
              <p className="text-sm text-gray-500">{project.client}</p>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm">
                <strong>Total Budget:</strong> €
                {project.budget.toLocaleString()}
              </p>
              <p
                className={`text-sm ${
                  project.profit < 0 ? "text-red-500" : "text-green-500"
                }`}
              >
                <strong>Profitability (100%):</strong> €
                {project.profit.toLocaleString()}
              </p>

              {/* ✅ Progress Bar */}
              <div className="space-y-1">
                <p className="text-sm">
                  <strong>Actual hours:</strong> {project.actualHours}
                </p>
                <Progress
                  value={(project.actualHours / project.soldHours) * 100}
                  className={`${project.statusColor} h-2`}
                />
                <p className="text-xs text-gray-500">{project.progressText}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

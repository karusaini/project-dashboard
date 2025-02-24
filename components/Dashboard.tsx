"use client";

import { Bell, AlertTriangle, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

export default function Dashboard() {
  const revenueData = [
    { name: "19 June", revenue: 500 },
    { name: "20 June", revenue: 2000 },
    { name: "21 June", revenue: 4000 },
    { name: "22 June", revenue: 4500 },
    { name: "23 June", revenue: 6000 },
    { name: "24 June", revenue: 6500 },
    { name: "25 June", revenue: 7000 },
  ];

  const budgetData = [
    { name: "Over Budget", value: 35, color: "#ff5b57" },
    { name: "On Budget", value: 50, color: "#3b82f6" },
    { name: "Under Budget", value: 15, color: "#22c55e" },
  ];

  const teamMembers = [
    {
      name: "Andrea",
      role: "UX Junior",
      mood: 30,
      emoji: "😊",
      img: "/profile1.jpg",
    },
    {
      name: "Alvaro",
      role: "Backend Developer",
      mood: 80,
      emoji: "😊",
      img: "/profile2.jpg",
    },
    {
      name: "Juan",
      role: "UX Senior",
      mood: 50,
      emoji: "😊",
      img: "/profile3.jpg",
    },
    {
      name: "Jose",
      role: "Marketing",
      mood: 20,
      emoji: "😊",
      img: "/profile4.jpg",
    },
    {
      name: "Maria",
      role: "UX Junior",
      mood: 60,
      emoji: "😊",
      img: "/profile5.jpg",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen text-gray-800 p-4 sm:p-6 space-y-6">
      {/* ✅ Stats + Team Mood (Row Format) */}
      <div className="flex flex-wrap lg:flex-nowrap gap-6">
        {/* ✅ Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 flex-1 ">
          {[
            { title: "Total Projects", value: 5, icon: <Users /> },
            { title: "Completed", value: 1, icon: <Users /> },
            { title: "Ongoing", value: 3, icon: <Users /> },
            {
              title: "Delayed",
              value: 1,
              icon: <AlertTriangle />,
              color: "bg-red-500 text-white",
            },
            { title: "Employees", value: 5, icon: <Users /> },
          ].map((stat, index) => (
            <Card
              key={index}
              className={`p-4 text-center flex-1 min-w-[140px] ${
                stat.color || ""
              }`}
            >
              <CardHeader>
                <CardTitle className="text-lg sm:text-2xl flex items-center justify-center gap-2">
                  {stat.icon} {stat.value}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm">
                {stat.title}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* ✅ Team Mood Card */}
        <Card className="w-full sm:w-[350px]">
          <CardHeader>
            <CardTitle>Team Mood</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={member.img} alt={member.name} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{member.name}</p>
                    <p className="text-sm text-gray-500">{member.role}</p>
                  </div>
                </div>
                <div className="relative w-full h-1 bg-gray-300 rounded-full mt-2">
                  <div
                    className="absolute top-[-6px] transform -translate-x-1/2 text-lg"
                    style={{ left: `${member.mood}%` }}
                  >
                    {member.emoji}
                  </div>
                  <div
                    className="h-full bg-gray-500 rounded-full"
                    style={{ width: `${member.mood}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* ✅ Revenue & Budget Charts (Row Format) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-[100px]">
        {/* ✅ Revenue Chart */}
        <Card className="h-[250px] ">
          <CardHeader>
            <CardTitle>Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={180}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#3b82f6"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* ✅ Budget Chart */}
        <Card className="h-[250px]">
          <CardHeader>
            <CardTitle>Budget</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={180}>
              <PieChart>
                <Pie
                  data={budgetData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                >
                  {budgetData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

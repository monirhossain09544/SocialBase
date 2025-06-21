"use client"
import { TrendingUp, Bell, ChevronDown, MoreHorizontal, Menu, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "./navigation"

const socialStats = [
  {
    platform: "Twitter",
    followers: "280k",
    icon: "🐦",
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    platform: "Instagram",
    followers: "680k",
    icon: "📷",
    color: "text-pink-500",
    bgColor: "bg-gradient-to-br from-yellow-400 to-pink-500",
  },
  {
    platform: "YouTube",
    followers: "2.3M",
    icon: "▶️",
    color: "text-red-500",
    bgColor: "bg-red-50",
  },
  {
    platform: "Facebook",
    followers: "50k",
    icon: "👥",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
]

const keyMetrics = [
  { label: "Clicks", current: 10, max: 12, unit: "k", color: "bg-yellow-400" },
  { label: "Likes", current: 680, max: 520, unit: "", color: "bg-green-500" },
  { label: "Followers", current: 8, max: 12.5, unit: "k", color: "bg-yellow-400" },
  { label: "Impressions", current: 369, max: 10, unit: "k", color: "bg-green-500" },
]

const chartData = [
  { day: "Feb 5", gained: 45, lost: 12 },
  { day: "Feb 7", gained: 38, lost: 15 },
  { day: "Feb 9", gained: 52, lost: 8 },
  { day: "Feb 11", gained: 48, lost: 18 },
  { day: "Feb 13", gained: 65, lost: 22 },
  { day: "Feb 15", gained: 42, lost: 14 },
  { day: "Feb 17", gained: 58, lost: 16 },
  { day: "Feb 19", gained: 51, lost: 19 },
]

const calendarDays = [
  [26, 27, 28, 29, 30, 31, 1],
  [2, 3, 4, 5, 6, 7, 8],
  [9, 10, 11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20, 21, 22],
  [23, 24, 25, 26, 27, 28, 29],
  [1, 2, 3, 4, 5, 6, 7],
]

export function SocialMediaDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased">
      <div className="flex h-screen">
        {/* Sidebar - Fixed */}
        <Navigation />

        {/* Main Content - With left margin to account for fixed sidebar */}
        <div className="flex-1 flex flex-col ml-20">
          {/* Header - Sticky */}
          <header className="sticky top-0 z-50 bg-white px-8 py-6 flex items-center justify-between border-b border-gray-100 backdrop-blur-sm bg-white/95">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <div className="grid grid-cols-3 gap-0.5">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    ))}
                  </div>
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Menu className="h-4 w-4" />
                </Button>
              </div>
              <Button variant="ghost" className="text-gray-600 font-medium text-sm tracking-wide">
                LAST 15 DAYS <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Bell className="h-5 w-5" />
              </Button>
              <Badge className="bg-pink-100 hover:bg-pink-200 text-pink-600 px-4 py-3 font-semibold text-xs tracking-wide flex items-center space-x-2 border-0 rounded-full">
                <Gift className="w-4 h-4" />
                <span>2 NEW UPDATES</span>
              </Badge>
              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder.svg?height=40&width=40" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </div>
          </header>

          <div className="flex-1 flex overflow-hidden">
            {/* Dashboard Content - Scrollable with hidden scrollbar */}
            <div className="flex-1 p-8 space-y-8 overflow-y-auto scrollbar-hide">
              {/* Social Media Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Twitter Card */}
                <Card className="bg-white border-0 shadow-sm rounded-2xl">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-8 h-8 text-blue-500">
                        <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      </div>
                    </div>
                    <div className="space-y-1 mb-6">
                      <div className="text-3xl font-bold text-gray-900 tabular-nums">280k</div>
                      <div className="text-sm text-gray-500 font-medium">Followers</div>
                    </div>
                    <div className="flex justify-end">
                      <Button variant="ghost" size="icon" className="h-6 w-6 text-gray-300 hover:text-gray-500">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Instagram Card */}
                <Card className="bg-white border-0 shadow-sm rounded-2xl">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-8 h-8">
                        <div className="w-full h-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-1 mb-6">
                      <div className="text-3xl font-bold text-gray-900 tabular-nums">680k</div>
                      <div className="text-sm text-gray-500 font-medium">Followers</div>
                    </div>
                    <div className="flex justify-end">
                      <Button variant="ghost" size="icon" className="h-6 w-6 text-gray-300 hover:text-gray-500">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* YouTube Card */}
                <Card className="bg-white border-0 shadow-sm rounded-2xl">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                          </svg>
                        </div>
                        <div className="w-4 h-4 text-gray-400">
                          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-1 mb-6">
                      <div className="text-3xl font-bold text-gray-900 tabular-nums">2.3M</div>
                      <div className="text-sm text-gray-500 font-medium">Followers</div>
                    </div>
                    <div className="flex justify-end">
                      <Button variant="ghost" size="icon" className="h-6 w-6 text-gray-300 hover:text-gray-500">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Facebook Card */}
                <Card className="bg-white border-0 shadow-sm rounded-2xl">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-8 h-8 text-blue-600">
                        <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </div>
                    </div>
                    <div className="space-y-1 mb-6">
                      <div className="text-3xl font-bold text-gray-900 tabular-nums">50k</div>
                      <div className="text-sm text-gray-500 font-medium">Followers</div>
                    </div>
                    <div className="flex justify-end">
                      <Button variant="ghost" size="icon" className="h-6 w-6 text-gray-300 hover:text-gray-500">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Instagram Subscribers Chart */}
              <div className="">
                <Card className="border-0 shadow-sm">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center justify-between text-lg font-semibold">
                      Instagram Subscribers
                      <div className="flex items-center space-x-6 text-sm font-medium">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                          Gained
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                          Lost
                        </div>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="relative h-64">
                      {/* Y-axis labels */}
                      <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 py-2 font-medium tabular-nums">
                        <span>100</span>
                        <span>50</span>
                        <span>0</span>
                        <span>-50</span>
                      </div>

                      {/* Chart area */}
                      <div className="ml-8 h-full relative">
                        {/* Horizontal grid line at zero */}
                        <div className="absolute left-0 right-0 border-t border-gray-200" style={{ top: "50%" }}></div>

                        {/* Chart bars */}
                        <div className="h-full flex items-center justify-between space-x-2 px-2">
                          {chartData.map((data, index) => (
                            <div
                              key={index}
                              className="flex flex-col items-center flex-1 max-w-[28px] h-full justify-center"
                            >
                              {/* Bars container */}
                              <div className="flex flex-col items-center w-full">
                                {/* Gained bar (yellow) - above zero line */}
                                <div
                                  className="bg-yellow-400 w-full rounded-sm mb-0.5"
                                  style={{
                                    height: `${Math.min((data.gained / 100) * 80, 80)}px`,
                                  }}
                                ></div>

                                {/* Lost bar (red) - below zero line */}
                                <div
                                  className="bg-red-400 w-full rounded-sm"
                                  style={{
                                    height: `${Math.min((data.lost / 100) * 40, 40)}px`,
                                  }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* X-axis labels */}
                        <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500 px-2 font-medium">
                          {chartData.map((data, index) => (
                            <span key={index} className="flex-1 text-center max-w-[28px]">
                              {data.day}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Key Metrics and Engagement Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Key Metrics */}
                <Card className="border-0 shadow-sm">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg font-semibold">Key Metrics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 p-6">
                    {keyMetrics.map((metric, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-900 font-medium text-base">{metric.label}</span>
                          <div className="flex items-center space-x-2 text-sm font-semibold text-gray-900">
                            <span className="tabular-nums">
                              {metric.current}
                              {metric.unit}
                            </span>
                            <div className="w-20 h-2 bg-gray-100 rounded-full relative overflow-hidden">
                              <div
                                className={`h-full rounded-full ${metric.color}`}
                                style={{ width: `${Math.min((metric.current / metric.max) * 100, 100)}%` }}
                              ></div>
                              <div className="absolute right-0 top-0 w-0.5 h-full bg-gray-800"></div>
                            </div>
                            <span className="text-gray-500 tabular-nums">
                              {metric.max}
                              {metric.unit}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Engaged Users Card */}
                <Card className="bg-gradient-to-br from-purple-600 to-purple-800 text-white border-0 shadow-lg rounded-3xl">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-sm opacity-90 mb-2 font-medium">Engaged Users</div>
                        <div className="text-4xl font-bold mb-4 tabular-nums">12.2k</div>
                      </div>

                      {/* Trend line */}
                      <div className="h-12 flex items-center justify-center">
                        <svg width="120" height="40" viewBox="0 0 120 40" className="text-green-400">
                          <path
                            d="M10,30 Q30,25 50,20 T90,10"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>

                      <div className="flex items-center justify-center text-green-300 bg-green-400/20 px-3 py-1 rounded-full w-fit mx-auto">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        <span className="font-semibold tabular-nums">19%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Page Impressions Card */}
                <Card className="bg-gradient-to-br from-purple-700 to-purple-900 text-white border-0 shadow-lg rounded-3xl">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-sm opacity-90 mb-2 font-medium">Page Impressions</div>
                        <div className="text-4xl font-bold mb-4 tabular-nums">8.6k</div>
                      </div>

                      {/* Trend line */}
                      <div className="h-12 flex items-center justify-center">
                        <svg width="120" height="40" viewBox="0 0 120 40" className="text-red-400">
                          <path
                            d="M10,15 Q30,20 50,25 T90,35"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>

                      <div className="flex items-center justify-center text-red-300 bg-red-400/20 px-3 py-1 rounded-full w-fit mx-auto">
                        <TrendingUp className="h-4 w-4 mr-1 rotate-180" />
                        <span className="font-semibold tabular-nums">9%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right Sidebar - Scrollable with hidden scrollbar */}
            <div className="w-80 bg-gray-50 p-8 space-y-8 overflow-y-auto scrollbar-hide">
              {/* Illustration */}
              <div className="rounded-2xl h-56 flex items-center justify-center overflow-hidden">
                <img
                  src="/collaboration-illustration.png"
                  alt="Team Collaboration Illustration"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              {/* Calendar */}
              <Card className="border-0 shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-semibold">February 2020</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-7 gap-2 text-center text-sm">
                    {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
                      <div key={day} className="font-semibold text-gray-500 p-2">
                        {day}
                      </div>
                    ))}
                    {calendarDays.flat().map((day, index) => (
                      <div
                        key={index}
                        className={`p-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors font-medium tabular-nums ${
                          day === 18
                            ? "bg-purple-600 text-white"
                            : day === 21
                              ? "bg-yellow-400 text-white"
                              : day === 12
                                ? "bg-gray-200"
                                : ""
                        }
                    `}
                      >
                        {day}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Say Hi Cards */}
              <div className="space-y-4">
                {/* Say Hi to Laith Hart */}
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">👋</span>
                        <div>
                          <div className="font-medium text-gray-600 text-sm">Say Hi to</div>
                          <div className="font-semibold text-gray-900">Laith Hart</div>
                        </div>
                      </div>
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/placeholder.svg?height=48&width=48" />
                        <AvatarFallback className="bg-orange-100 text-orange-600 font-semibold">LH</AvatarFallback>
                      </Avatar>
                    </div>
                  </CardContent>
                </Card>

                {/* Say Hi to Sidney Dyer */}
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">✌️</span>
                        <div>
                          <div className="font-medium text-gray-600 text-sm">Say Hi to</div>
                          <div className="font-semibold text-gray-900">Sidney Dyer</div>
                        </div>
                      </div>
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/placeholder.svg?height=48&width=48" />
                        <AvatarFallback className="bg-purple-100 text-purple-600 font-semibold">SD</AvatarFallback>
                      </Avatar>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

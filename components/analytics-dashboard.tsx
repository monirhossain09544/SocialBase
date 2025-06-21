"use client"
import {
  Bell,
  Menu,
  ChevronDown,
  TrendingUp,
  TrendingDown,
  Download,
  Calendar,
  Filter,
  MoreHorizontal,
  Users,
  Heart,
  MessageCircle,
  Share,
  Eye,
  Target,
  BarChart3,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "./navigation"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  Line,
  LineChart,
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Area,
  AreaChart,
} from "recharts"

// Sample data for charts
const engagementData = [
  { month: "Jan", instagram: 4200, twitter: 2800, youtube: 6500, facebook: 1200 },
  { month: "Feb", instagram: 4800, twitter: 3200, youtube: 7200, facebook: 1400 },
  { month: "Mar", instagram: 5200, twitter: 3600, youtube: 7800, facebook: 1600 },
  { month: "Apr", instagram: 5800, twitter: 4100, youtube: 8400, facebook: 1800 },
  { month: "May", instagram: 6400, twitter: 4500, youtube: 9100, facebook: 2000 },
  { month: "Jun", instagram: 7200, twitter: 5200, youtube: 9800, facebook: 2300 },
]

const followerGrowthData = [
  { date: "Week 1", followers: 45200, gained: 1200, lost: 180 },
  { date: "Week 2", followers: 46800, gained: 1800, lost: 200 },
  { date: "Week 3", followers: 48200, gained: 1600, lost: 220 },
  { date: "Week 4", followers: 49800, gained: 1900, lost: 300 },
  { date: "Week 5", followers: 51500, gained: 2100, lost: 400 },
  { date: "Week 6", followers: 53200, gained: 2000, lost: 300 },
]

const platformDistribution = [
  { name: "Instagram", value: 680000, color: "#E1306C" },
  { name: "YouTube", value: 2300000, color: "#FF0000" },
  { name: "Twitter", value: 280000, color: "#1DA1F2" },
  { name: "Facebook", value: 50000, color: "#4267B2" },
]

const topPostsData = [
  {
    id: 1,
    platform: "Instagram",
    content: "Behind the scenes of our latest photoshoot! ✨",
    image: "/placeholder.svg?height=60&width=60",
    engagement: 12500,
    likes: 8200,
    comments: 340,
    shares: 180,
    reach: 45000,
    date: "2 days ago",
  },
  {
    id: 2,
    platform: "YouTube",
    content: "How to Create Stunning Social Media Graphics",
    image: "/placeholder.svg?height=60&width=60",
    engagement: 18700,
    likes: 12400,
    comments: 890,
    shares: 520,
    reach: 78000,
    date: "5 days ago",
  },
  {
    id: 3,
    platform: "Twitter",
    content: "Excited to announce our new product launch! 🚀",
    engagement: 5600,
    likes: 3200,
    comments: 180,
    shares: 420,
    reach: 28000,
    date: "1 week ago",
  },
]

const audienceInsights = [
  { age: "18-24", percentage: 25, count: 12500 },
  { age: "25-34", percentage: 35, count: 17500 },
  { age: "35-44", percentage: 22, count: 11000 },
  { age: "45-54", percentage: 12, count: 6000 },
  { age: "55+", percentage: 6, count: 3000 },
]

const platformIcons = {
  Instagram: (
    <div className="w-6 h-6 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-lg flex items-center justify-center">
      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    </div>
  ),
  Twitter: (
    <div className="w-6 h-6 bg-blue-500 rounded-lg flex items-center justify-center">
      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    </div>
  ),
  YouTube: (
    <div className="w-6 h-6 bg-red-500 rounded-lg flex items-center justify-center">
      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    </div>
  ),
}

export function AnalyticsDashboard() {
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
              <div className="flex items-center space-x-4">
                <div className="text-xl font-semibold text-gray-900">Analytics</div>
                <Button variant="ghost" className="text-gray-600 font-medium text-sm tracking-wide">
                  LAST 30 DAYS <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="outline" className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>Date Range</span>
              </Button>
              <Button variant="outline" className="flex items-center space-x-2">
                <Filter className="h-4 w-4" />
                <span>Filter</span>
              </Button>
              <Button variant="outline" className="flex items-center space-x-2">
                <Download className="h-4 w-4" />
                <span>Export</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Bell className="h-5 w-5" />
              </Button>
              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder.svg?height=40&width=40" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </div>
          </header>

          <div className="flex-1 flex overflow-hidden">
            {/* Main Content - Scrollable with hidden scrollbar */}
            <div className="flex-1 p-8 space-y-8 overflow-y-auto scrollbar-hide">
              {/* Key Metrics Overview */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-gray-900 tabular-nums">3.31M</div>
                        <div className="text-sm text-gray-500 font-medium">Total Followers</div>
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <Users className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="mt-4 flex items-center">
                      <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-sm font-medium text-green-600 tabular-nums">+12.5%</span>
                      <span className="text-sm text-gray-500 ml-2">vs last month</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-gray-900 tabular-nums">847k</div>
                        <div className="text-sm text-gray-500 font-medium">Total Engagement</div>
                      </div>
                      <div className="p-3 bg-pink-50 rounded-lg">
                        <Heart className="h-6 w-6 text-pink-600" />
                      </div>
                    </div>
                    <div className="mt-4 flex items-center">
                      <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-sm font-medium text-green-600 tabular-nums">+8.2%</span>
                      <span className="text-sm text-gray-500 ml-2">vs last month</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-gray-900 tabular-nums">2.8M</div>
                        <div className="text-sm text-gray-500 font-medium">Total Reach</div>
                      </div>
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <Eye className="h-6 w-6 text-purple-600" />
                      </div>
                    </div>
                    <div className="mt-4 flex items-center">
                      <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                      <span className="text-sm font-medium text-red-600 tabular-nums">-2.1%</span>
                      <span className="text-sm text-gray-500 ml-2">vs last month</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-gray-900 tabular-nums">4.2%</div>
                        <div className="text-sm text-gray-500 font-medium">Engagement Rate</div>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <Target className="h-6 w-6 text-green-600" />
                      </div>
                    </div>
                    <div className="mt-4 flex items-center">
                      <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-sm font-medium text-green-600 tabular-nums">+0.8%</span>
                      <span className="text-sm text-gray-500 ml-2">vs last month</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Charts Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Engagement Over Time */}
                <Card className="border-0 shadow-sm">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center justify-between text-lg font-semibold">
                      Engagement Over Time
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer
                      config={{
                        instagram: {
                          label: "Instagram",
                          color: "hsl(var(--chart-1))",
                        },
                        twitter: {
                          label: "Twitter",
                          color: "hsl(var(--chart-2))",
                        },
                        youtube: {
                          label: "YouTube",
                          color: "hsl(var(--chart-3))",
                        },
                        facebook: {
                          label: "Facebook",
                          color: "hsl(var(--chart-4))",
                        },
                      }}
                      className="h-[300px]"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={engagementData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Line type="monotone" dataKey="instagram" stroke="var(--color-instagram)" strokeWidth={2} />
                          <Line type="monotone" dataKey="twitter" stroke="var(--color-twitter)" strokeWidth={2} />
                          <Line type="monotone" dataKey="youtube" stroke="var(--color-youtube)" strokeWidth={2} />
                          <Line type="monotone" dataKey="facebook" stroke="var(--color-facebook)" strokeWidth={2} />
                        </LineChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>

                {/* Follower Growth */}
                <Card className="border-0 shadow-sm">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center justify-between text-lg font-semibold">
                      Follower Growth
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer
                      config={{
                        followers: {
                          label: "Total Followers",
                          color: "hsl(var(--chart-1))",
                        },
                        gained: {
                          label: "Gained",
                          color: "hsl(var(--chart-2))",
                        },
                      }}
                      className="h-[300px]"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={followerGrowthData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="date" />
                          <YAxis />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Area
                            type="monotone"
                            dataKey="followers"
                            stroke="var(--color-followers)"
                            fill="var(--color-followers)"
                            fillOpacity={0.3}
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>
              </div>

              {/* Platform Distribution and Audience Insights */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Platform Distribution */}
                <Card className="border-0 shadow-sm">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg font-semibold">Platform Distribution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center">
                      <ChartContainer
                        config={{
                          value: {
                            label: "Followers",
                          },
                        }}
                        className="h-[250px] w-[250px]"
                      >
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={platformDistribution}
                              cx="50%"
                              cy="50%"
                              innerRadius={60}
                              outerRadius={100}
                              paddingAngle={5}
                              dataKey="value"
                            >
                              {platformDistribution.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                              ))}
                            </Pie>
                            <ChartTooltip content={<ChartTooltipContent />} />
                          </PieChart>
                        </ResponsiveContainer>
                      </ChartContainer>
                    </div>
                    <div className="mt-6 space-y-3">
                      {platformDistribution.map((platform, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: platform.color }}></div>
                            <span className="font-medium text-gray-900">{platform.name}</span>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold text-gray-900 tabular-nums">
                              {(platform.value / 1000000).toFixed(1)}M
                            </div>
                            <div className="text-xs text-gray-500">
                              {((platform.value / platformDistribution.reduce((a, b) => a + b.value, 0)) * 100).toFixed(
                                1,
                              )}
                              %
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Audience Age Distribution */}
                <Card className="border-0 shadow-sm">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg font-semibold">Audience Age Distribution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer
                      config={{
                        percentage: {
                          label: "Percentage",
                          color: "hsl(var(--chart-1))",
                        },
                      }}
                      className="h-[300px]"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={audienceInsights} layout="horizontal">
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis type="number" />
                          <YAxis dataKey="age" type="category" />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Bar dataKey="percentage" fill="var(--color-percentage)" radius={[0, 4, 4, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>
              </div>

              {/* Top Performing Posts */}
              <Card className="border-0 shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-semibold">Top Performing Posts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {topPostsData.map((post) => (
                    <div
                      key={post.id}
                      className="border border-gray-100 rounded-lg p-4 hover:shadow-sm transition-shadow"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          {platformIcons[post.platform as keyof typeof platformIcons]}
                        </div>

                        <div className="flex-1 space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <span className="font-medium text-gray-900">{post.platform}</span>
                              <Badge variant="outline" className="text-xs">
                                {post.date}
                              </Badge>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-semibold text-gray-900 tabular-nums">
                                {(post.engagement / 1000).toFixed(1)}k
                              </div>
                              <div className="text-xs text-gray-500">Total Engagement</div>
                            </div>
                          </div>

                          <p className="text-gray-700 text-sm leading-relaxed">{post.content}</p>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-6 text-sm text-gray-500">
                              <div className="flex items-center space-x-1">
                                <Heart className="h-4 w-4" />
                                <span className="tabular-nums">{(post.likes / 1000).toFixed(1)}k</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MessageCircle className="h-4 w-4" />
                                <span className="tabular-nums">{post.comments}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Share className="h-4 w-4" />
                                <span className="tabular-nums">{post.shares}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Eye className="h-4 w-4" />
                                <span className="tabular-nums">{(post.reach / 1000).toFixed(1)}k</span>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm">
                              View Details
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Right Sidebar - Quick Stats */}
            <div className="w-80 bg-gray-50 p-8 space-y-8 overflow-y-auto scrollbar-hide">
              {/* Quick Stats */}
              <Card className="border-0 shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-semibold">Quick Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Posts This Month</span>
                    <span className="font-semibold text-gray-900 tabular-nums">24</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Avg. Engagement Rate</span>
                    <span className="font-semibold text-gray-900 tabular-nums">4.2%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Best Performing Day</span>
                    <span className="font-semibold text-gray-900">Tuesday</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Peak Activity Time</span>
                    <span className="font-semibold text-gray-900">2-4 PM</span>
                  </div>
                </CardContent>
              </Card>

              {/* Platform Performance */}
              <Card className="border-0 shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-semibold">Platform Performance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-lg"></div>
                        <span className="font-medium text-gray-900">Instagram</span>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-gray-900 tabular-nums">5.2%</div>
                        <div className="text-xs text-gray-500">Engagement</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-red-500 rounded-lg"></div>
                        <span className="font-medium text-gray-900">YouTube</span>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-gray-900 tabular-nums">8.7%</div>
                        <div className="text-xs text-gray-500">Engagement</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-blue-500 rounded-lg"></div>
                        <span className="font-medium text-gray-900">Twitter</span>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-gray-900 tabular-nums">2.8%</div>
                        <div className="text-xs text-gray-500">Engagement</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-blue-600 rounded-lg"></div>
                        <span className="font-medium text-gray-900">Facebook</span>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-gray-900 tabular-nums">1.4%</div>
                        <div className="text-xs text-gray-500">Engagement</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Growth Insights */}
              <Card className="border-0 shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-semibold">Growth Insights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <TrendingUp className="h-4 w-4 text-green-600" />
                      <span className="font-medium text-green-900">Best Growth</span>
                    </div>
                    <div className="text-sm text-green-700">YouTube gained 12.4k followers this month</div>
                  </div>

                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <BarChart3 className="h-4 w-4 text-blue-600" />
                      <span className="font-medium text-blue-900">Top Content</span>
                    </div>
                    <div className="text-sm text-blue-700">Tutorial videos perform 3x better</div>
                  </div>

                  <div className="p-3 bg-purple-50 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Target className="h-4 w-4 text-purple-600" />
                      <span className="font-medium text-purple-900">Opportunity</span>
                    </div>
                    <div className="text-sm text-purple-700">Post more on Tuesday for better reach</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

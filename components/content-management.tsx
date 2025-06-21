"use client"
import {
  Bell,
  Menu,
  Plus,
  ImageIcon,
  Video,
  Clock,
  Send,
  Edit3,
  Trash2,
  Eye,
  Heart,
  MessageCircle,
  Share,
  Camera,
  Gift,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Navigation } from "./navigation"

const scheduledPosts = [
  {
    id: 1,
    platform: "Instagram",
    content:
      "Just finished an amazing photoshoot! Can't wait to share more behind-the-scenes content with you all. 📸✨",
    image: "/placeholder.svg?height=200&width=300",
    scheduledTime: "Today, 3:00 PM",
    status: "scheduled",
    engagement: { likes: 0, comments: 0, shares: 0 },
  },
  {
    id: 2,
    platform: "Twitter",
    content:
      "Excited to announce our new product launch next week! Stay tuned for more updates. 🚀 #ProductLaunch #Innovation",
    scheduledTime: "Tomorrow, 10:00 AM",
    status: "scheduled",
    engagement: { likes: 0, comments: 0, shares: 0 },
  },
  {
    id: 3,
    platform: "YouTube",
    content:
      "New tutorial video coming this Friday! Learn how to create stunning social media graphics in under 10 minutes.",
    image: "/placeholder.svg?height=200&width=300",
    scheduledTime: "Friday, 2:00 PM",
    status: "scheduled",
    engagement: { likes: 0, comments: 0, shares: 0 },
  },
]

const recentPosts = [
  {
    id: 1,
    platform: "Instagram",
    content: "Beautiful sunset from yesterday's adventure! Nature never fails to amaze me. 🌅",
    image: "/placeholder.svg?height=200&width=300",
    publishedTime: "2 hours ago",
    status: "published",
    engagement: { likes: 234, comments: 18, shares: 12 },
  },
  {
    id: 2,
    platform: "Twitter",
    content: "Just wrapped up an incredible team meeting. So grateful to work with such talented people! 💪 #TeamWork",
    publishedTime: "5 hours ago",
    status: "published",
    engagement: { likes: 89, comments: 7, shares: 23 },
  },
]

const platformIcons = {
  Instagram: (
    <div className="w-6 h-6 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-lg flex items-center justify-center">
      <Camera className="w-3 h-3 text-white" />
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

export function ContentManagement() {
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
              <div className="text-xl font-semibold text-gray-900">Content Management</div>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Bell className="h-5 w-5" />
              </Button>
              <Badge className="bg-pink-100 hover:bg-pink-200 text-pink-600 px-4 py-3 font-semibold text-xs tracking-wide flex items-center space-x-2 border-0 rounded-full">
                <Gift className="w-4 h-4" />
                <span>3 DRAFTS</span>
              </Badge>
              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder.svg?height=40&width=40" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </div>
          </header>

          <div className="flex-1 flex overflow-hidden">
            {/* Main Content - Scrollable with hidden scrollbar */}
            <div className="flex-1 p-8 space-y-8 overflow-y-auto scrollbar-hide">
              {/* Create New Post Section */}
              <Card className="border-0 shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center justify-between text-lg font-semibold">
                    Create New Post
                    <Button className="bg-pink-500 hover:bg-pink-600 text-white">
                      <Plus className="h-4 w-4 mr-2" />
                      Schedule Post
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Platform Selection */}
                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      className="flex items-center space-x-2 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 text-white border-0"
                    >
                      <Camera className="h-4 w-4" />
                      <span>Instagram</span>
                    </Button>
                    <Button variant="outline" className="flex items-center space-x-2">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                      <span>Twitter</span>
                    </Button>
                    <Button variant="outline" className="flex items-center space-x-2">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                      <span>YouTube</span>
                    </Button>
                  </div>

                  {/* Content Input */}
                  <div className="space-y-4">
                    <Textarea
                      placeholder="What's on your mind? Share your thoughts with your audience..."
                      className="min-h-[120px] resize-none border-gray-200 focus:border-pink-500 focus:ring-pink-500"
                    />

                    {/* Media Upload */}
                    <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center hover:border-pink-300 transition-colors cursor-pointer">
                      <div className="flex flex-col items-center space-y-2">
                        <div className="flex space-x-4">
                          <div className="p-3 bg-blue-50 rounded-lg">
                            <ImageIcon className="h-6 w-6 text-blue-500" />
                          </div>
                          <div className="p-3 bg-purple-50 rounded-lg">
                            <Video className="h-6 w-6 text-purple-500" />
                          </div>
                        </div>
                        <div className="text-gray-600 font-medium">Drop your media here or click to upload</div>
                        <div className="text-sm text-gray-400">Support for images, videos, and GIFs</div>
                      </div>
                    </div>

                    {/* Schedule Options */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Input
                          type="datetime-local"
                          className="w-auto border-gray-200 focus:border-pink-500 focus:ring-pink-500"
                        />
                        <Button variant="outline" className="flex items-center space-x-2">
                          <Clock className="h-4 w-4" />
                          <span>Schedule for later</span>
                        </Button>
                      </div>
                      <Button className="bg-green-500 hover:bg-green-600 text-white">
                        <Send className="h-4 w-4 mr-2" />
                        Post Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Scheduled Posts */}
              <Card className="border-0 shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-semibold">Scheduled Posts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {scheduledPosts.map((post) => (
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
                                <Clock className="h-3 w-3 mr-1" />
                                {post.scheduledTime}
                              </Badge>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Edit3 className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500 hover:text-red-600">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>

                          <p className="text-gray-700 text-sm leading-relaxed">{post.content}</p>

                          {post.image && (
                            <div className="w-32 h-20 bg-gray-100 rounded-lg overflow-hidden">
                              <img
                                src={post.image || "/placeholder.svg"}
                                alt="Post media"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Recent Posts */}
              <Card className="border-0 shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-semibold">Recent Posts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentPosts.map((post) => (
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
                              <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                                Published {post.publishedTime}
                              </Badge>
                            </div>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </div>

                          <p className="text-gray-700 text-sm leading-relaxed">{post.content}</p>

                          {post.image && (
                            <div className="w-32 h-20 bg-gray-100 rounded-lg overflow-hidden">
                              <img
                                src={post.image || "/placeholder.svg"}
                                alt="Post media"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}

                          {/* Engagement Stats */}
                          <div className="flex items-center space-x-6 text-sm text-gray-500">
                            <div className="flex items-center space-x-1">
                              <Heart className="h-4 w-4" />
                              <span className="tabular-nums">{post.engagement.likes}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MessageCircle className="h-4 w-4" />
                              <span className="tabular-nums">{post.engagement.comments}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Share className="h-4 w-4" />
                              <span className="tabular-nums">{post.engagement.shares}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Right Sidebar - Content Calendar */}
            <div className="w-80 bg-gray-50 p-8 space-y-8 overflow-y-auto scrollbar-hide">
              {/* Quick Stats */}
              <Card className="border-0 shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-semibold">This Week</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Posts Scheduled</span>
                    <span className="font-semibold text-gray-900 tabular-nums">12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Posts Published</span>
                    <span className="font-semibold text-gray-900 tabular-nums">8</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Drafts</span>
                    <span className="font-semibold text-gray-900 tabular-nums">3</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Engagement Rate</span>
                    <span className="font-semibold text-green-600 tabular-nums">+12.5%</span>
                  </div>
                </CardContent>
              </Card>

              {/* Content Calendar */}
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
                    {[
                      [26, 27, 28, 29, 30, 31, 1],
                      [2, 3, 4, 5, 6, 7, 8],
                      [9, 10, 11, 12, 13, 14, 15],
                      [16, 17, 18, 19, 20, 21, 22],
                      [23, 24, 25, 26, 27, 28, 29],
                      [1, 2, 3, 4, 5, 6, 7],
                    ]
                      .flat()
                      .map((day, index) => (
                        <div
                          key={index}
                          className={`p-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors font-medium tabular-nums relative ${
                            day === 18
                              ? "bg-purple-600 text-white"
                              : day === 21
                                ? "bg-yellow-400 text-white"
                                : day === 12
                                  ? "bg-gray-200"
                                  : day === 15
                                    ? "bg-pink-500 text-white"
                                    : day === 25
                                      ? "bg-green-500 text-white"
                                      : ""
                          }`}
                        >
                          {day}
                          {/* Scheduled post indicators */}
                          {(day === 18 || day === 21 || day === 15 || day === 25) && (
                            <div className="absolute bottom-0 right-0 w-2 h-2 bg-white rounded-full opacity-80"></div>
                          )}
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>

              {/* Content Ideas */}
              <Card className="border-0 shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-semibold">Content Ideas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors">
                    <div className="font-medium text-blue-900 text-sm">Behind the Scenes</div>
                    <div className="text-blue-700 text-xs">Show your workspace setup</div>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg cursor-pointer hover:bg-green-100 transition-colors">
                    <div className="font-medium text-green-900 text-sm">Tutorial Tuesday</div>
                    <div className="text-green-700 text-xs">Share a quick tip or trick</div>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg cursor-pointer hover:bg-purple-100 transition-colors">
                    <div className="font-medium text-purple-900 text-sm">User Spotlight</div>
                    <div className="text-purple-700 text-xs">Feature a customer story</div>
                  </div>
                  <div className="p-3 bg-orange-50 rounded-lg cursor-pointer hover:bg-orange-100 transition-colors">
                    <div className="font-medium text-orange-900 text-sm">Team Friday</div>
                    <div className="text-orange-700 text-xs">Introduce team members</div>
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

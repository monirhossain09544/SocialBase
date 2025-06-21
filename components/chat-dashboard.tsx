"use client"
import {
  Bell,
  Menu,
  Search,
  Phone,
  Video,
  MoreHorizontal,
  Send,
  Paperclip,
  Smile,
  ImageIcon,
  Mic,
  CheckCheck,
  Pin,
  Archive,
  Trash2,
  Star,
  Reply,
  Gift,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Navigation } from "./navigation"
import { useState } from "react"

const conversations = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "The Instagram campaign is performing really well! 🎉",
    time: "2m ago",
    unread: 2,
    online: true,
    type: "team",
    platform: null,
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Can you review the YouTube video script?",
    time: "15m ago",
    unread: 0,
    online: true,
    type: "team",
    platform: null,
  },
  {
    id: 3,
    name: "@fashionista_emma",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Love your latest post! Can we collaborate?",
    time: "1h ago",
    unread: 1,
    online: false,
    type: "instagram",
    platform: "Instagram",
  },
  {
    id: 4,
    name: "Design Team",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Emily: The new brand assets are ready for review",
    time: "2h ago",
    unread: 0,
    online: false,
    type: "team",
    platform: null,
  },
  {
    id: 5,
    name: "@tech_reviewer_mike",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Hey! Saw your YouTube video, great content!",
    time: "3h ago",
    unread: 0,
    online: false,
    type: "twitter",
    platform: "Twitter",
  },
  {
    id: 6,
    name: "Content Planning",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Lisa: Next week's content calendar is ready",
    time: "5h ago",
    unread: 0,
    online: false,
    type: "team",
    platform: null,
  },
]

const messages = [
  {
    id: 1,
    sender: "Sarah Johnson",
    content: "Hey team! I just checked the analytics for our latest Instagram campaign.",
    time: "10:30 AM",
    isOwn: false,
    avatar: "/placeholder.svg?height=32&width=32",
    status: "read",
  },
  {
    id: 2,
    sender: "You",
    content: "That's great! How are the numbers looking?",
    time: "10:32 AM",
    isOwn: true,
    status: "read",
  },
  {
    id: 3,
    sender: "Sarah Johnson",
    content:
      "Really impressive! We're seeing a 25% increase in engagement compared to last month. The video content is really resonating with our audience.",
    time: "10:33 AM",
    isOwn: false,
    avatar: "/placeholder.svg?height=32&width=32",
    status: "read",
  },
  {
    id: 4,
    sender: "You",
    content: "That's fantastic news! 🎉 Should we double down on video content for next week?",
    time: "10:35 AM",
    isOwn: true,
    status: "read",
  },
  {
    id: 5,
    sender: "Sarah Johnson",
    content:
      "I think we should also consider doing some behind-the-scenes content. Our audience loves that authentic feel.",
    time: "10:36 AM",
    isOwn: false,
    avatar: "/placeholder.svg?height=32&width=32",
    status: "read",
  },
  {
    id: 6,
    sender: "Sarah Johnson",
    content: "The Instagram campaign is performing really well! 🎉",
    time: "10:38 AM",
    isOwn: false,
    avatar: "/placeholder.svg?height=32&width=32",
    status: "delivered",
  },
]

const platformIcons = {
  Instagram: (
    <div className="w-4 h-4 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-sm flex items-center justify-center">
      <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    </div>
  ),
  Twitter: (
    <div className="w-4 h-4 bg-blue-500 rounded-sm flex items-center justify-center">
      <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    </div>
  ),
}

export function ChatDashboard() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0])
  const [messageText, setMessageText] = useState("")

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
              <div className="text-xl font-semibold text-gray-900">Messages</div>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Bell className="h-5 w-5" />
              </Button>
              <Badge className="bg-pink-100 hover:bg-pink-200 text-pink-600 px-4 py-3 font-semibold text-xs tracking-wide flex items-center space-x-2 border-0 rounded-full">
                <Gift className="w-4 h-4" />
                <span>3 UNREAD</span>
              </Badge>
              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder.svg?height=40&width=40" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </div>
          </header>

          <div className="flex-1 flex overflow-hidden">
            {/* Conversations List */}
            <div className="w-80 bg-white border-r border-gray-100 flex flex-col">
              {/* Search */}
              <div className="p-4 border-b border-gray-100">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search conversations..."
                    className="pl-10 border-gray-200 focus:border-pink-500 focus:ring-pink-500"
                  />
                </div>
              </div>

              {/* Conversation Filters */}
              <div className="p-4 border-b border-gray-100">
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="bg-pink-500 text-white border-pink-500">
                    All
                  </Button>
                  <Button variant="outline" size="sm">
                    Team
                  </Button>
                  <Button variant="outline" size="sm">
                    Social
                  </Button>
                  <Button variant="outline" size="sm">
                    Unread
                  </Button>
                </div>
              </div>

              {/* Conversations */}
              <div className="flex-1 overflow-y-auto scrollbar-hide">
                {conversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    className={`p-4 border-b border-gray-50 cursor-pointer hover:bg-gray-50 transition-colors ${
                      selectedConversation.id === conversation.id ? "bg-pink-50 border-pink-100" : ""
                    }`}
                    onClick={() => setSelectedConversation(conversation)}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="relative">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={conversation.avatar || "/placeholder.svg"} />
                          <AvatarFallback className="bg-gradient-to-br from-blue-400 to-purple-500 text-white font-semibold">
                            {conversation.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        {conversation.online && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center space-x-2">
                            <h3 className="font-semibold text-gray-900 truncate">{conversation.name}</h3>
                            {conversation.platform && (
                              <div className="flex-shrink-0">
                                {platformIcons[conversation.platform as keyof typeof platformIcons]}
                              </div>
                            )}
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs text-gray-500">{conversation.time}</span>
                            {conversation.unread > 0 && (
                              <Badge className="bg-pink-500 text-white text-xs px-2 py-0.5 min-w-[20px] h-5 flex items-center justify-center">
                                {conversation.unread}
                              </Badge>
                            )}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b border-gray-100 bg-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={selectedConversation.avatar || "/placeholder.svg"} />
                        <AvatarFallback className="bg-gradient-to-br from-blue-400 to-purple-500 text-white font-semibold">
                          {selectedConversation.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      {selectedConversation.online && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                      )}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold text-gray-900">{selectedConversation.name}</h3>
                        {selectedConversation.platform && (
                          <div className="flex-shrink-0">
                            {platformIcons[selectedConversation.platform as keyof typeof platformIcons]}
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-gray-500">
                        {selectedConversation.online ? "Online" : "Last seen 2h ago"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="icon" className="h-10 w-10">
                      <Phone className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-10 w-10">
                      <Video className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-10 w-10">
                      <MoreHorizontal className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.isOwn ? "justify-end" : "justify-start"} group`}>
                    <div
                      className={`flex items-end space-x-2 max-w-xs lg:max-w-md ${message.isOwn ? "flex-row-reverse space-x-reverse" : ""}`}
                    >
                      {!message.isOwn && (
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={message.avatar || "/placeholder.svg"} />
                          <AvatarFallback className="bg-gradient-to-br from-blue-400 to-purple-500 text-white text-xs font-semibold">
                            {message.sender
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                      )}

                      <div
                        className={`relative ${message.isOwn ? "bg-pink-500 text-white" : "bg-white border border-gray-200"} rounded-2xl px-4 py-2`}
                      >
                        <p className="text-sm leading-relaxed">{message.content}</p>
                        <div
                          className={`flex items-center justify-between mt-1 space-x-2 ${message.isOwn ? "text-pink-100" : "text-gray-400"}`}
                        >
                          <span className="text-xs">{message.time}</span>
                          {message.isOwn && (
                            <div className="flex items-center">
                              {message.status === "read" ? (
                                <CheckCheck className="h-3 w-3" />
                              ) : (
                                <CheckCheck className="h-3 w-3 opacity-50" />
                              )}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Message Actions */}
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center space-x-1">
                        <Button variant="ghost" size="icon" className="h-6 w-6">
                          <Reply className="h-3 w-3" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-6 w-6">
                          <Star className="h-3 w-3" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-6 w-6">
                          <MoreHorizontal className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-gray-100 bg-white">
                <div className="flex items-end space-x-3">
                  <div className="flex-1">
                    <div className="relative">
                      <Textarea
                        placeholder="Type your message..."
                        value={messageText}
                        onChange={(e) => setMessageText(e.target.value)}
                        className="min-h-[44px] max-h-32 resize-none border-gray-200 focus:border-pink-500 focus:ring-pink-500 pr-12"
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault()
                            // Handle send message
                            setMessageText("")
                          }
                        }}
                      />
                      <div className="absolute bottom-2 right-2 flex items-center space-x-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Paperclip className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <ImageIcon className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Smile className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="icon" className="h-10 w-10">
                      <Mic className="h-5 w-5" />
                    </Button>
                    <Button
                      className="bg-pink-500 hover:bg-pink-600 text-white h-10 w-10"
                      size="icon"
                      disabled={!messageText.trim()}
                    >
                      <Send className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar - Chat Info */}
            <div className="w-80 bg-gray-50 border-l border-gray-100 p-6 space-y-6 overflow-y-auto scrollbar-hide">
              {/* Contact Info */}
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 text-center">
                  <Avatar className="h-20 w-20 mx-auto mb-4">
                    <AvatarImage src={selectedConversation.avatar || "/placeholder.svg"} />
                    <AvatarFallback className="bg-gradient-to-br from-blue-400 to-purple-500 text-white text-xl font-semibold">
                      {selectedConversation.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold text-gray-900 mb-1">{selectedConversation.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">
                    {selectedConversation.platform ? `${selectedConversation.platform} Contact` : "Team Member"}
                  </p>
                  <div className="flex justify-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Phone className="h-4 w-4 mr-1" />
                      Call
                    </Button>
                    <Button variant="outline" size="sm">
                      <Video className="h-4 w-4 mr-1" />
                      Video
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="border-0 shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Pin className="h-4 w-4 mr-2" />
                    Pin Conversation
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Star className="h-4 w-4 mr-2" />
                    Add to Favorites
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Archive className="h-4 w-4 mr-2" />
                    Archive Chat
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-red-600 border-red-200 hover:bg-red-50"
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete Chat
                  </Button>
                </CardContent>
              </Card>

              {/* Shared Media */}
              <Card className="border-0 shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-semibold">Shared Media</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                        <img
                          src={`/placeholder-p4pk2.png?height=80&width=80`}
                          alt={`Shared media ${i}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <Button variant="ghost" className="w-full mt-3 text-sm">
                    View All Media
                  </Button>
                </CardContent>
              </Card>

              {/* Team Status */}
              {selectedConversation.type === "team" && (
                <Card className="border-0 shadow-sm">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg font-semibold">Team Status</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Available</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">In a meeting</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Do not disturb</span>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

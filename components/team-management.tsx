"use client"
import {
  Bell,
  Menu,
  Search,
  MoreHorizontal,
  Crown,
  Edit,
  Trash2,
  Mail,
  Shield,
  Eye,
  Users,
  UserPlus,
  Settings,
  Activity,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Gift,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Navigation } from "./navigation"

const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.johnson@company.com",
    role: "Admin",
    status: "active",
    avatar: "/placeholder.svg?height=40&width=40",
    joinedDate: "Jan 2023",
    lastActive: "2 minutes ago",
    permissions: ["All Access"],
    postsCreated: 45,
    engagement: "12.5k",
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "michael.chen@company.com",
    role: "Editor",
    status: "active",
    avatar: "/placeholder.svg?height=40&width=40",
    joinedDate: "Mar 2023",
    lastActive: "1 hour ago",
    permissions: ["Create", "Edit", "Schedule"],
    postsCreated: 32,
    engagement: "8.2k",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    email: "emily.rodriguez@company.com",
    role: "Content Creator",
    status: "active",
    avatar: "/placeholder.svg?height=40&width=40",
    joinedDate: "Apr 2023",
    lastActive: "3 hours ago",
    permissions: ["Create", "Schedule"],
    postsCreated: 28,
    engagement: "6.8k",
  },
  {
    id: 4,
    name: "David Kim",
    email: "david.kim@company.com",
    role: "Viewer",
    status: "inactive",
    avatar: "/placeholder.svg?height=40&width=40",
    joinedDate: "Feb 2023",
    lastActive: "2 days ago",
    permissions: ["View Only"],
    postsCreated: 0,
    engagement: "0",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    email: "lisa.thompson@company.com",
    role: "Editor",
    status: "pending",
    avatar: "/placeholder.svg?height=40&width=40",
    joinedDate: "Invited",
    lastActive: "Never",
    permissions: ["Create", "Edit", "Schedule"],
    postsCreated: 0,
    engagement: "0",
  },
]

const recentActivity = [
  {
    id: 1,
    user: "Sarah Johnson",
    action: "Created a new Instagram post",
    time: "2 minutes ago",
    type: "create",
  },
  {
    id: 2,
    user: "Michael Chen",
    action: "Scheduled 3 posts for tomorrow",
    time: "1 hour ago",
    type: "schedule",
  },
  {
    id: 3,
    user: "Emily Rodriguez",
    action: "Updated team permissions",
    time: "3 hours ago",
    type: "settings",
  },
  {
    id: 4,
    user: "Sarah Johnson",
    action: "Invited Lisa Thompson to the team",
    time: "1 day ago",
    type: "invite",
  },
  {
    id: 5,
    user: "Michael Chen",
    action: "Published YouTube video",
    time: "2 days ago",
    type: "publish",
  },
]

const roleColors = {
  Admin: "bg-purple-100 text-purple-800 border-purple-200",
  Editor: "bg-blue-100 text-blue-800 border-blue-200",
  "Content Creator": "bg-green-100 text-green-800 border-green-200",
  Viewer: "bg-gray-100 text-gray-800 border-gray-200",
}

const statusColors = {
  active: "bg-green-100 text-green-800",
  inactive: "bg-gray-100 text-gray-800",
  pending: "bg-yellow-100 text-yellow-800",
}

const roleIcons = {
  Admin: Crown,
  Editor: Edit,
  "Content Creator": Users,
  Viewer: Eye,
}

export function TeamManagement() {
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
              <div className="text-xl font-semibold text-gray-900">Team Management</div>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Bell className="h-5 w-5" />
              </Button>
              <Badge className="bg-pink-100 hover:bg-pink-200 text-pink-600 px-4 py-3 font-semibold text-xs tracking-wide flex items-center space-x-2 border-0 rounded-full">
                <Gift className="w-4 h-4" />
                <span>1 PENDING</span>
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
              {/* Team Overview Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <Users className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900 tabular-nums">5</div>
                        <div className="text-sm text-gray-500 font-medium">Total Members</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-green-50 rounded-lg">
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900 tabular-nums">4</div>
                        <div className="text-sm text-gray-500 font-medium">Active Members</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-yellow-50 rounded-lg">
                        <Clock className="h-6 w-6 text-yellow-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900 tabular-nums">1</div>
                        <div className="text-sm text-gray-500 font-medium">Pending Invites</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <Activity className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900 tabular-nums">105</div>
                        <div className="text-sm text-gray-500 font-medium">Posts Created</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Add New Member */}
              <Card className="border-0 shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center justify-between text-lg font-semibold">
                    Invite Team Member
                    <Button className="bg-pink-500 hover:bg-pink-600 text-white">
                      <UserPlus className="h-4 w-4 mr-2" />
                      Send Invite
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Input
                      placeholder="Email address"
                      className="border-gray-200 focus:border-pink-500 focus:ring-pink-500"
                    />
                    <select className="px-3 py-2 border border-gray-200 rounded-md focus:border-pink-500 focus:ring-pink-500 focus:outline-none">
                      <option>Select Role</option>
                      <option>Admin</option>
                      <option>Editor</option>
                      <option>Content Creator</option>
                      <option>Viewer</option>
                    </select>
                    <Input
                      placeholder="Full name (optional)"
                      className="border-gray-200 focus:border-pink-500 focus:ring-pink-500"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Team Members List */}
              <Card className="border-0 shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center justify-between text-lg font-semibold">
                    Team Members
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          placeholder="Search members..."
                          className="pl-10 w-64 border-gray-200 focus:border-pink-500 focus:ring-pink-500"
                        />
                      </div>
                      <Button variant="outline" size="icon">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {teamMembers.map((member) => {
                    const RoleIcon = roleIcons[member.role as keyof typeof roleIcons]
                    return (
                      <div
                        key={member.id}
                        className="border border-gray-100 rounded-lg p-4 hover:shadow-sm transition-shadow"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <Avatar className="h-12 w-12">
                              <AvatarImage src={member.avatar || "/placeholder.svg"} />
                              <AvatarFallback className="bg-gradient-to-br from-blue-400 to-purple-500 text-white font-semibold">
                                {member.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>

                            <div className="space-y-1">
                              <div className="flex items-center space-x-2">
                                <h3 className="font-semibold text-gray-900">{member.name}</h3>
                                <Badge
                                  variant="outline"
                                  className={`text-xs ${roleColors[member.role as keyof typeof roleColors]}`}
                                >
                                  <RoleIcon className="h-3 w-3 mr-1" />
                                  {member.role}
                                </Badge>
                                <Badge
                                  variant="outline"
                                  className={`text-xs ${statusColors[member.status as keyof typeof statusColors]}`}
                                >
                                  {member.status === "active" && <CheckCircle className="h-3 w-3 mr-1" />}
                                  {member.status === "inactive" && <XCircle className="h-3 w-3 mr-1" />}
                                  {member.status === "pending" && <AlertCircle className="h-3 w-3 mr-1" />}
                                  {member.status.charAt(0).toUpperCase() + member.status.slice(1)}
                                </Badge>
                              </div>
                              <div className="text-sm text-gray-500">{member.email}</div>
                              <div className="flex items-center space-x-4 text-xs text-gray-400">
                                <span>Joined {member.joinedDate}</span>
                                <span>•</span>
                                <span>Last active {member.lastActive}</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center space-x-6">
                            {/* Stats */}
                            <div className="text-center">
                              <div className="text-lg font-semibold text-gray-900 tabular-nums">
                                {member.postsCreated}
                              </div>
                              <div className="text-xs text-gray-500">Posts</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-semibold text-gray-900 tabular-nums">
                                {member.engagement}
                              </div>
                              <div className="text-xs text-gray-500">Engagement</div>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center space-x-2">
                              {member.status === "pending" && (
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="text-green-600 border-green-200 hover:bg-green-50"
                                >
                                  <Mail className="h-4 w-4 mr-1" />
                                  Resend
                                </Button>
                              )}
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>

                        {/* Permissions */}
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Shield className="h-4 w-4 text-gray-400" />
                              <span className="text-sm text-gray-600">Permissions:</span>
                              <div className="flex space-x-2">
                                {member.permissions.map((permission, index) => (
                                  <Badge key={index} variant="secondary" className="text-xs">
                                    {permission}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            {member.role !== "Admin" && (
                              <Button variant="ghost" size="sm" className="text-red-600 hover:bg-red-50">
                                <Trash2 className="h-4 w-4 mr-1" />
                                Remove
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </CardContent>
              </Card>
            </div>

            {/* Right Sidebar - Team Activity */}
            <div className="w-80 bg-gray-50 p-8 space-y-8 overflow-y-auto scrollbar-hide">
              {/* Team Activity */}
              <Card className="border-0 shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-semibold">
                            {activity.user
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="text-sm">
                          <span className="font-medium text-gray-900">{activity.user}</span>
                          <span className="text-gray-600 ml-1">{activity.action}</span>
                        </div>
                        <div className="text-xs text-gray-400">{activity.time}</div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Role Permissions */}
              <Card className="border-0 shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-semibold">Role Permissions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Crown className="h-4 w-4 text-purple-600" />
                        <span className="font-medium text-purple-900">Admin</span>
                      </div>
                      <span className="text-xs text-purple-700">Full Access</span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Edit className="h-4 w-4 text-blue-600" />
                        <span className="font-medium text-blue-900">Editor</span>
                      </div>
                      <span className="text-xs text-blue-700">Create, Edit, Schedule</span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-green-600" />
                        <span className="font-medium text-green-900">Content Creator</span>
                      </div>
                      <span className="text-xs text-green-700">Create, Schedule</span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Eye className="h-4 w-4 text-gray-600" />
                        <span className="font-medium text-gray-900">Viewer</span>
                      </div>
                      <span className="text-xs text-gray-700">View Only</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Team Settings */}
              <Card className="border-0 shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-semibold">Team Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    <Settings className="h-4 w-4 mr-2" />
                    Manage Permissions
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Mail className="h-4 w-4 mr-2" />
                    Bulk Invite
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Activity className="h-4 w-4 mr-2" />
                    Activity Log
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-red-600 border-red-200 hover:bg-red-50"
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Team Settings
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { BarChart3, Calendar, TrendingUp, Users, MessageCircle, LogOut } from "lucide-react"

export function Navigation() {
  const router = useRouter()
  const pathname = usePathname()

  const navItems = [
    {
      icon: TrendingUp,
      path: "/",
      label: "Dashboard",
    },
    {
      icon: Users,
      path: "/team",
      label: "Team",
    },
    {
      icon: Calendar,
      path: "/content",
      label: "Content",
    },
    {
      icon: BarChart3,
      path: "/analytics",
      label: "Analytics",
    },
    {
      icon: MessageCircle,
      path: "/chat",
      label: "Chat",
    },
  ]

  return (
    <div className="w-20 bg-white flex flex-col items-center pt-4 pb-8 space-y-8 border-r border-gray-100 fixed left-0 top-0 h-full z-40">
      {/* Logo */}
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center cursor-pointer overflow-hidden bg-white mt-0"
        onClick={() => router.push("/")}
      >
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%2021%2C%202025%2C%2003_07_45%20AM-x3cDaU17yupIuZfiXVIspZuNEI3JNy.png"
          alt="Company Logo"
          className="w-12 h-12 object-contain flex-shrink-0"
          style={{ minWidth: "48px", minHeight: "48px" }}
        />
      </div>

      <nav className="flex flex-col space-y-8">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.path

          return (
            <Button
              key={item.path}
              variant="ghost"
              size="icon"
              className={`h-12 w-12 rounded-xl transition-colors ${
                isActive ? "text-pink-500 hover:bg-pink-50 bg-pink-50" : "text-gray-400 hover:bg-gray-50"
              }`}
              onClick={() => router.push(item.path)}
              title={item.label}
            >
              {item.path === "/team" ? (
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <Icon className="h-4 w-4 text-gray-600" />
                </div>
              ) : (
                <Icon className="h-6 w-6" />
              )}
            </Button>
          )
        })}
      </nav>

      {/* Bottom Sign Out Button */}
      <div className="flex-1"></div>
      <Button
        variant="ghost"
        size="icon"
        className="text-gray-400 hover:bg-red-50 hover:text-red-500 h-12 w-12 rounded-xl transition-colors"
        onClick={() => {
          // Handle sign out logic here
          console.log("Sign out clicked")
          // You can add actual sign out logic like:
          // signOut()
          // router.push('/login')
        }}
        title="Sign Out"
      >
        <LogOut className="h-6 w-6" />
      </Button>
    </div>
  )
}

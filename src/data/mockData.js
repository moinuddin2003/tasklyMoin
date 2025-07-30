import { BarChart3, CheckCircle2, TrendingUp, FileText, Users, MessageSquare } from "lucide-react"

export const projects = [
  {
    id: 1,
    name: "Dashboard Features",
    owner: "Carter Kenter",
    health: "At Risk",
    startDate: "Sep 2 2024",
    endDate: "Aug 30 2025",
    healthColor: "bg-gradient-to-r from-yellow-400 to-orange-500",
  },
  {
    id: 2,
    name: "Sales Data Analytics",
    owner: "Carter Kenter",
    health: "Good",
    startDate: "Oct 7 2024",
    endDate: "Sep 30 2025",
    healthColor: "bg-gradient-to-r from-green-400 to-emerald-500",
  },
  {
    id: 3,
    name: "Project Name",
    owner: "Carter Kenter",
    health: "Good",
    startDate: "Dec 2 2024",
    endDate: "Nov 30 2025",
    healthColor: "bg-gradient-to-r from-green-400 to-emerald-500",
  },
]

export const features = [
  {
    id: 1,
    name: "Feature 1",
    assignee: "Assignee Name",
    avatar: "👨‍💼",
    progress: 75,
    colors: ["bg-blue-500", "bg-orange-400"],
  },
  {
    id: 2,
    name: "Feature 2",
    assignee: "Moin",
    avatar: "👩‍💻",
    progress: 90,
    colors: ["bg-blue-500", "bg-green-400"],
  },
  {
    id: 3,
    name: "Feature 3",
    assignee: "Shaheer",
    avatar: "👩‍🎨",
    progress: 85,
    colors: ["bg-blue-500", "bg-green-400"],
  },
  {
    id: 4,
    name: "Feature 4",
    assignee: "Faheem",
    avatar: "👨‍🔧",
    progress: 45,
    colors: ["bg-gray-400", "bg-gray-300"],
  },
  {
    id: 5,
    name: "Feature 5",
    assignee: "Zulfiqar",
    avatar: "👩‍💻",
    progress: 60,
    colors: ["bg-gray-400", "bg-gray-300"],
  },
  {
    id: 6,
    name: "Feature 6",
    assignee: "Hamza",
    avatar: "👩‍🎨",
    progress: 30,
    colors: ["bg-gray-400", "bg-gray-300"],
  },
  {
    id: 7,
    name: "Feature 7",
    assignee: "Shaheer",
    avatar: "👨‍🔧",
    progress: 55,
    colors: ["bg-gray-400", "bg-gray-300"],
  },
  {
    id: 8,
    name: "Zulfiqar",
    assignee: "Trisha Tran",
    avatar: "👩‍💻",
    progress: 40,
    colors: ["bg-gray-400", "bg-gray-300"],
  },
  {
    id: 9,
    name: "Moin",
    assignee: "Nancy Noo",
    avatar: "👩‍🎨",
    progress: 20,
    colors: ["bg-gray-400", "bg-gray-300"],
  },
]

// Updated navigation structure with Tasks as a subitem of Projects
export const navItems = [
  {
    name: "Projects",
    icon: BarChart3,
    view: "projects",
    subItems: [{ name: "Tasks", icon: CheckCircle2, view: "dashboard" }],
  },
  { name: "Status Updates", icon: TrendingUp, view: "status" },
  { name: "Reports", icon: FileText, view: "reports" },
  { name: "Users", icon: Users, view: "users" },
  { name: "Chat", icon: MessageSquare, view: "chat" },
]

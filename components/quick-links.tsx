"use client"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Download, Info, MessageCircle } from "lucide-react"

export default function QuickLinks() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col space-y-2 p-2 bg-white/80 backdrop-blur-sm rounded-l-lg shadow-lg">
      <Button size="icon" className="bg-wtt-orange-500 hover:bg-wtt-orange-600 text-white shadow-md">
        <MessageCircle className="h-5 w-5" />
      </Button>

      <Button size="icon" className="bg-wtt-orange-500 hover:bg-wtt-orange-600 text-white shadow-md">
        <Mail className="h-5 w-5" />
      </Button>

      <Button size="icon" className="bg-wtt-orange-500 hover:bg-wtt-orange-600 text-white shadow-md">
        <Phone className="h-5 w-5" />
      </Button>

      <Button size="icon" className="bg-wtt-orange-500 hover:bg-wtt-orange-600 text-white shadow-md">
        <Download className="h-5 w-5" />
      </Button>

      <Button size="icon" className="bg-wtt-orange-500 hover:bg-wtt-orange-600 text-white shadow-md">
        <Info className="h-5 w-5" />
      </Button>
    </div>
  )
}

// "use client"
// import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { ProgressBar } from "./progress-bar"
// import type { TicketFormData } from "../types/ticket"

// interface TicketProps {
//   data: TicketFormData
//   onReset: () => void
// }

// export function Ticket({ data, onReset }: TicketProps) {
//   return (
//     <div className="max-w-2xl mx-auto">
//       <ProgressBar currentStep={3} totalSteps={3} />
//       <div className="text-center my-8">
//         <h1 className="text-4xl font-bold mb-2">Your Ticket is Booked!</h1>
//         <p className="text-xl text-muted-foreground">Check your email for entry or you can download below</p>
//       </div>

//       <Card className="mb-8 bg-card border-border overflow-hidden">
//         <CardContent className="p-0">
//           <div className="p-6 text-center border-b border-border bg-muted">
//             <h3 className="text-xl font-bold mb-1">Techember Fest &apos;25</h3>
//             <p className="text-sm text-muted-foreground">Celebrating the future of technology</p>
//             <p className="text-sm text-muted-foreground">March 1, 2025 • 9:00 AM</p>
//           </div>

//           <div className="p-6 space-y-6">
//             <div className="w-32 h-32 mx-auto rounded-lg overflow-hidden border-2 border-primary">
//               <img
//                 src={
//                   data.avatarUrl ||
//                   "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MmgV4g6dzrkxrtUHb7UzfSdv8NxeaX.png"
//                 }
//                 alt="Attendee avatar"
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             <div className="space-y-1 text-center">
//               <p className="font-semibold text-lg">{data.fullName}</p>
//               <p className="text-sm text-muted-foreground">{data.email}</p>
//             </div>

//             <div className="pt-4 border-t border-border">
              
//               <p className="text-center text-xs text-muted-foreground mt-2">
//                 #TF25-{Math.random().toString(36).substr(2, 9)}
//               </p>
//             </div>
//           </div>
//         </CardContent>
//       </Card>

//       <div className="flex justify-center gap-4">
//         <Button variant="outline" onClick={onReset}>
//           Book Another Ticket
//         </Button>
//         <Button>Download Ticket</Button>
//       </div>
//     </div>
//   )
// }


"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Download } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import html2canvas from "html2canvas"
import type { TicketFormData } from "../types/ticket"
import { ProgressBar } from "./progress-bar"

interface TicketData {
  name: string
  email: string
  ticketType: string
  ticketCount: number
  specialRequests: string
}

interface TicketProps {
  data: TicketFormData
  onReset: () => void
}

export function Ticket({ data, onReset }: TicketProps) {
  const [ticketData, setTicketData] = useState<TicketData>({
    name: "Avi Chukwu",
    email: "User@email.com",
    ticketType: "VIP",
    ticketCount: 1,
    specialRequests: "Nil ? Or the users sad story they write in there gets this whole space, Max of three rows",
  })

  useEffect(() => {
    // Load ticket data from localStorage
    const savedTicketData = localStorage.getItem("ticketData")
    if (savedTicketData) {
      setTicketData(JSON.parse(savedTicketData))
    }
  }, [])

  const downloadTicket = async () => {
    const ticketElement = document.getElementById("ticket-card")
    if (ticketElement) {
      const canvas = await html2canvas(ticketElement, {
        backgroundColor: "#051320",
        scale: 2,
      })
      const dataUrl = canvas.toDataURL("image/png")
      const link = document.createElement("a")
      link.download = "techember-fest-ticket.png"
      link.href = dataUrl
      link.click()
    }
  }

  return (
    <div className="min-h-screen max-w-xl mx-auto relative items-center justify-center bg-[#051320] p-4">
   

      <div className=" w-full">
           <ProgressBar currentStep={3} totalSteps={3} />
      <div className="text-center my-8">
        <h1 className="text-4xl font-bold mb-2">Your Ticket is Booked!</h1>     
           <p className="text-xl text-muted-foreground">Check your email for entry or you can download below</p>
       </div>
        <Card
          id="ticket-card"
          className="relative border-[#00ffff] border-2 bg-[#051320] text-white p-6 rounded-2xl overflow-hidden"
        >
          <div className="space-y-6">
            {/* Event Title */}
            <h1 className="text-2xl font-semibold text-white">Techember Fest &apos;25</h1>

            {/* Location and Time */}
            <div className="space-y-1 text-sm text-gray-400">
              <p className="flex items-center gap-2">
                <span className="text-[#ff2d55]">📍</span> 04 Rumens road, Ikoyi, Lagos
              </p>
              <p className="flex items-center gap-2">
                <span>📅</span> March 15, 2025 | 7:00 PM
              </p>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center my-6">
              <div className="relative w-32 h-32 rounded-xl overflow-hidden border-2 border-[#00ffff] bg-[#00ffff]/10">
                <Image
                  src={data.avatarUrl}
                  alt="Profile"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Ticket Details */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-6 text-sm">
              <div className="space-y-1">
                <p className="text-gray-500">Enter your name</p>
                <p className="font-medium text-gray-300">{data.fullName}</p>
              </div>
              <div className="space-y-1">
                <p className="text-gray-500">Enter your email *</p>
                <p className="font-medium text-gray-300">{data.email}</p>
              </div>
              <div className="space-y-1">
                <p className="text-gray-500">Ticket Type:</p>
                <p className="font-medium text-gray-300">{data.ticketType}</p>
              </div>
              <div className="space-y-1">
                <p className="text-gray-500">Ticket for:</p>
                <p className="font-medium text-gray-300">{ticketData.ticketCount}</p>
              </div>
            </div>

            {/* Special Requests */}
            <div className="space-y-2">
              <p className="text-sm text-gray-500">Special requests?</p>
              <div className="bg-[#0a2540] rounded-lg p-4 min-h-[80px] text-sm text-gray-300">
                {data.specialRequest}
              </div>
            </div>
          </div>
        </Card>

        {/* Download Button */}
        <Button onClick={downloadTicket} className="w-full mt-4 bg-[#00ffff] hover:bg-[#00ffff]/90 text-black">
          <Download className="w-4 h-4 mr-2" />
          Download Ticket
        </Button>
        <Button variant="outline" onClick={onReset}>    
                 Book Another Ticket
        </Button>
      </div>
    </div>
  )
}


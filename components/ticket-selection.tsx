"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ProgressBar } from "./progress-bar"
import type { TicketFormData } from "../types/ticket"

interface TicketSelectionProps {
  onNext: (ticketType: TicketFormData["ticketType"], quantity: number) => void
}

export function TicketSelection({ onNext }: TicketSelectionProps) {
  const [quantity, setQuantity] = useState(1)
  const [ticketType, setTicketType] = useState<TicketFormData["ticketType"]>("free")

  const tickets = [
    { type: "free" as const, price: "Free", title: "REGULAR ACCESS", description: "20/52" },
    { type: "vip" as const, price: "$150", title: "VIP ACCESS", description: "20/52" },
    { type: "vip-access" as const, price: "$150", title: "VVIP ACCESS", description: "20/52" },
  ]

  return (
    <div className="max-w-2xl mx-auto p-12 border border-[#197686] rounded-2xl bg-[#041E23]">
     <div className="mb-8">
      <div className="text-centerflex flex justify-between items-center">
        <h1 className="text-4xl font-bold mb-2">Ticket Selection</h1>
        <p className="text-xl text-muted-foreground">Step 1/3</p>
      </div>
      <ProgressBar currentStep={1} totalSteps={3} />
      </div>
      <Card className="bg-[#08252B] border-[#197686] border">
        <CardContent className="p-6">
        <div className="background-image border-[#197686] text-center mb-8 p-4 rounded-2xl border">
            <h2 className="text-2xl font-bold mb-2 text-[50px] leading-none text-grey-98 font-road-rage">Techember Fest &apos;&apos;25</h2>
            <p className="text-sm text-muted-foreground">Join us for an unforgettable experience</p>
            <p className="text-sm text-muted-foreground mt-1">TekVibez! Secure your spot now.</p>
            <p className="text-sm text-muted-foreground mt-1"><span className="text-[#ff2d55]">📍</span>shomolu || March 1, 2025 | 7:00 AM</p>
        </div>
          <div className="h-[2px] bg-[#197686] w-full my-8"></div>
          <h3 className="text-xl font-bold mb-4">Select Ticket Type:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 border-[#197686] p-4 rounded-2xl border bg-[#052228]">
    
            {tickets.map((ticket) => (
              <Button
                key={ticket.type}
                variant={ticketType === ticket.type ? "default" : "outline"}
                className="h-auto p-3 flex flex-col gap-2 rounded-2xl border border-[#197686]"
                onClick={() => setTicketType(ticket.type)}
              >
                <span className="text-xl font-bold">{ticket.price}</span>
                <span className="text-sm font-medium">{ticket.title}</span>
                <span className="text-xs text-muted-foreground">{ticket.description}</span>
              </Button>
            ))}
          </div>
          <div className="space-y-4">
            <div>
              <Label htmlFor="quantity">Number of Tickets</Label>
              <Input
                id="quantity"
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number.parseInt(e.target.value))}
                className="mt-1 border-[#197686] border"
              />
            </div>
          </div>
          <div className="mt-6 flex justify-between gap-4">
          <Button className="hover:text-white w-full mt-6 bg-transparent border border-[#197686] text-[#197686]" onClick={() => setTicketType("free")}>
            cancel
          </Button>
          <Button onClick={() => onNext(ticketType, quantity)} className="w-full mt-6 text-white">
            Next
          </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


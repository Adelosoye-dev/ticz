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
    { type: "free" as const, price: "Free", title: "BASIC ACCESS", description: "Basic event access" },
    { type: "vip" as const, price: "$150", title: "VIP ACCESS", description: "VIP event access" },
    { type: "vip-access" as const, price: "$150", title: "VIP+ ACCESS", description: "VIP+ event access" },
  ]

  return (
    <div className="max-w-2xl mx-auto">
      <ProgressBar currentStep={1} totalSteps={3} />
      <div className="text-center my-8">
        <h1 className="text-4xl font-bold mb-2">Ticket Selection</h1>
        <p className="text-xl text-muted-foreground">Step 1/3</p>
      </div>
      <Card className="bg-card border-border">
        <CardContent className="p-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Techember Fest &apos;25</h2>
            <p className="text-sm text-muted-foreground">Join us for an amazing experience</p>
            <p className="text-sm text-muted-foreground mt-1">March 1, 2025 • 9:00 AM</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {tickets.map((ticket) => (
              <Button
                key={ticket.type}
                variant={ticketType === ticket.type ? "default" : "outline"}
                className="h-auto p-6 flex flex-col gap-2"
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
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="promoCode">Promo Code</Label>
              <Input id="promoCode" type="text" placeholder="Enter promo code" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="referralCode">Referral Code</Label>
              <Input id="referralCode" type="text" placeholder="Enter referral code" className="mt-1" />
            </div>
          </div>
          <Button onClick={() => onNext(ticketType, quantity)} className="w-full mt-6">
            Next
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}


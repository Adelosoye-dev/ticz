"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ProgressBar } from "./progress-bar"
import type { TicketFormData } from "../types/ticket"
import Image from "next/image"

interface TicketProps {
  data: TicketFormData
  onReset: () => void
}

export function Ticket({ data, onReset }: TicketProps) {
  return (
    <div className="max-w-2xl mx-auto">
      <ProgressBar currentStep={3} totalSteps={3} />
      <div className="text-center my-8">
        <h1 className="text-4xl font-bold mb-2">Your Ticket is Booked!</h1>
        <p className="text-xl text-muted-foreground">Check your email for entry or you can download below</p>
      </div>

      <Card className="mb-8 bg-card border-border overflow-hidden">
        <CardContent className="p-0">
          <div className="p-6 text-center border-b border-border bg-muted">
            <h3 className="text-xl font-bold mb-1">Techember Fest &apos;25</h3>
            <p className="text-sm text-muted-foreground">Celebrating the future of technology</p>
            <p className="text-sm text-muted-foreground">March 1, 2025 • 9:00 AM</p>
          </div>

          <div className="p-6 space-y-6">
            <div className="w-32 h-32 mx-auto rounded-lg overflow-hidden border-2 border-primary">
              <Image
                src={
                  data.avatarUrl ||
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MmgV4g6dzrkxrtUHb7UzfSdv8NxeaX.png"
                }
                alt="Attendee avatar"
                className="w-full h-full object-cover"
                width={128}
                height={128}
              />
            </div>

            <div className="space-y-1 text-center">
              <p className="font-semibold text-lg">{data.fullName}</p>
              <p className="text-sm text-muted-foreground">{data.email}</p>
            </div>

            <div className="pt-4 border-t border-border">
             
              
              <p className="text-center text-xs text-muted-foreground mt-2">
                #TF25-{Math.random().toString(36).substr(2, 9)}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center gap-4">
        <Button variant="outline" onClick={onReset}>
          Book Another Ticket
        </Button>
        <Button>Download Ticket</Button>
      </div>
    </div>
  )
}


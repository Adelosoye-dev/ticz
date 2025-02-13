"use client"

import { useState, useEffect } from "react"
import { Layout } from "@/components/layout"
import { TicketSelection } from "@/components/ticket-selection"
import { AttendeeForm } from "@/components/attendee-form"
import { Ticket } from "@/components/ticket"
import type { TicketFormData } from "@/types/ticket"
import { ThemeProvider } from "@/components/theme-provider"

export default function Page() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<Partial<TicketFormData>>({})

  useEffect(() => {
    const savedData = localStorage.getItem("ticketFormData")
    if (savedData) {
      setFormData(JSON.parse(savedData))
      
      const parsedData = JSON.parse(savedData)
      if (parsedData.fullName && parsedData.email && parsedData.avatarUrl && parsedData.ticketType) {
        setStep(3)
      }
    }
  }, [])

  const handleTicketSelect = (ticketType: TicketFormData["ticketType"], quantity: number) => {
    const newData = { ...formData, ticketType, quantity }
    setFormData(newData)
    localStorage.setItem("ticketFormData", JSON.stringify(newData))
    setStep(2)
  }

  const handleFormSubmit = (data: TicketFormData) => {
    
    setFormData(data)
    localStorage.setItem("ticketFormData", JSON.stringify(data))
    setStep(3)
  }

  const handleReset = () => {
    setFormData({})
    localStorage.removeItem("ticketFormData")
    setStep(1)
  }

  return (
    <ThemeProvider>
      <Layout>
        {step === 1 && <TicketSelection onNext={handleTicketSelect} />}
        {step === 2 && <AttendeeForm onSubmit={handleFormSubmit} onBack={() => setStep(1)} initialData={formData} />}
        {step === 3 && <Ticket data={formData as TicketFormData} onReset={handleReset} />}
      </Layout>
    </ThemeProvider>
  )
}


"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ImageUpload } from "./image-upload"
import { ProgressBar } from "./progress-bar"
import type { TicketFormData, FormErrors } from "../types/ticket"

interface AttendeeFormProps {
  onSubmit: (data: TicketFormData) => void
  onBack: () => void
  initialData: Partial<TicketFormData>
}

export function AttendeeForm({ onSubmit, onBack, initialData }: AttendeeFormProps) {
  const [formData, setFormData] = useState<Partial<TicketFormData>>(initialData)
  const [errors, setErrors] = useState<FormErrors>({})

  const validateForm = () => {
    const newErrors: FormErrors = {}

    if (!formData.fullName?.trim()) {
      newErrors.fullName = "Name is required"
    }

    if (!formData.email?.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format"
    }

    if (!formData.avatarUrl?.trim()) {
      newErrors.avatarUrl = "Profile photo is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm() && formData.ticketType) {
      onSubmit(formData as TicketFormData)
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-12 border border-[#197686] rounded-2xl bg-[#041E23]">
      <div className="mb-8">
      <div className="text-center flex justify-between">
        <h1 className="text-4xl font-bold mb-2">Attendee Details</h1>
        <p className="text-xl text-muted-foreground">Step 2/3</p>
      </div>
      <ProgressBar currentStep={2} totalSteps={3} />
      </div>
      <Card className="bg-[#08252B] border-[#197686] border">
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6 w-full flex-1">
            <div className=" bg-[#052228] flex flex-col w-full p-4 rounded-2xl border border-[#197686] h-full">
              <Label className="text-start w-">Upload Profile Photo</Label>
              <ImageUpload
                onImageUpload={(url) => setFormData({ ...formData, avatarUrl: url })}
                value={formData.avatarUrl}
              />
              {errors.avatarUrl && (
                <p className="text-destructive text-sm" id="avatarUrl-error">
                  {errors.avatarUrl}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="fullName">Enter your name</Label>
              <Input
                id="fullName"
                type="text"
                value={formData.fullName || ""}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                aria-describedby="fullName-error "
                className="mt-1 border-[#197686] border"
              />
              {errors.fullName && (
                <p className="text-destructive text-sm" id="fullName-error">
                  {errors.fullName}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Enter your email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email || ""}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                aria-describedby="email-error"
                className="mt-1 border-[#197686] border"
              />
              {errors.email && (
                <p className="text-destructive text-sm" id="email-error">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="specialRequest">Special request?</Label>
              <Textarea
                id="specialRequest"
                value={formData.specialRequest || ""}
                onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                placeholder="Optional"
                className="mt-1 border-[#197686] border"
              />
            </div>

            <div className="mt-6 flex justify-between gap-4">
              <Button type="button" variant="outline" className="hover:text-white w-full mt-6 bg-transparent border border-[#197686] text-[#197686]" onClick={onBack}>
                Back
              </Button>
              <Button type="submit" className="w-full mt-6 text-white">Get My Free Ticket</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}


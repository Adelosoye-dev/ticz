export interface TicketFormData {
  fullName: string
  email: string
  avatarUrl: string
  specialRequest?: string
  ticketType: "free" | "vip" | "vip-access"
}

export interface Step {
  id: number
  title: string
  description: string
}

export type FormErrors = Partial<Record<keyof TicketFormData, string>>


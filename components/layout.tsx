import type React from "react"
import { MoonIcon, SunIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "./theme-provider"

export function Layout({ children }: { children: React.ReactNode }) {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen bg-[#02191D] text-foreground transition-colors duration-300">
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <nav className="flex space-x-4">
            <a href="#" className="text-sm font-medium hover:text-primary">
              Home
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary">
              My Tickets
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary">
              About Project
            </a>
          </nav>
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
            {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">{children}</main>
    </div>
  )
}


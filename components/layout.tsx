import type React from "react"
import { MoonIcon, SunIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "./theme-provider"
import Header from "./header"

export function Layout({ children }: { children: React.ReactNode }) {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen bg-[#02191D] text-foreground transition-colors duration-300 ">
      
        <div className="fixed w-full top-0 z-50 container mx-auto px-4 py-4 flex justify-between items-center">
          <Header />
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
            {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
    
      <main className="container mx-auto px-4 py-8">{children}</main>
    </div>
  )
}


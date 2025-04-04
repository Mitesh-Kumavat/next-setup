"use client"

import * as React from "react"
import { Moon, Sun, Check } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
    const { setTheme, theme } = useTheme()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="flex flex-col">
                <DropdownMenuItem
                    onClick={() => setTheme("light")}
                    className={`flex justify-between ${theme === "light" && "font-semibold"}`}
                >
                    Light
                    {theme === "light" && <Check className="w-4 h-4" />}
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => setTheme("dark")}
                    className={`flex justify-between ${theme === "dark" && "font-semibold"}`}
                >
                    Dark
                    {theme === "dark" && <Check className="w-4 h-4" />}
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => setTheme("system")}
                    className={`flex justify-between ${theme === "system" && "font-semibold"}`}
                >
                    System
                    {theme === "system" && <Check className="w-4 h-4" />}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu >
    )
}
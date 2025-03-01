"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Shield, ArrowRight, Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"

export default function ScanPage() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call/processing time
    setTimeout(() => {
      router.push("/scan/results")
    }, 3000)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <Shield className="h-6 w-6 text-primary" />
          <span className="ml-2 text-xl font-bold">DigitalMirror</span>
        </Link>
      </header>
      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Start Your Digital Footprint Scan</CardTitle>
            <CardDescription>
              Enter your information to discover what's publicly available about you online
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="john@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location (Optional)</Label>
                <Input id="location" placeholder="City, State" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="twitter">Twitter/X Username (Optional)</Label>
                <Input id="twitter" placeholder="@username" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="linkedin">LinkedIn URL (Optional)</Label>
                <Input id="linkedin" placeholder="https://linkedin.com/in/username" />
              </div>
              <div className="text-sm text-gray-500 mt-4">
                <p>
                  By submitting this form, you confirm that you are checking information about yourself. We only collect
                  publicly available data and respect your privacy.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" type="submit" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    Start Scan
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </main>
    </div>
  )
}


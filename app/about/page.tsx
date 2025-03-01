import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about our company and mission.",
}

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-4xl text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About Us</h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          We're on a mission to transform how people interact with digital information.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="mb-4">
            Founded in 2023, our company began with a simple idea: make digital information more accessible and useful for everyone.
          </p>
          <p className="mb-4">
            What started as a small project has grown into a comprehensive platform used by thousands of people around the world.
          </p>
          <p>
            Today, we're a dedicated team of engineers, designers, and problem solvers working together to build tools that help people work smarter, not harder.
          </p>
        </div>
        <div className="relative h-[300px] rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-80"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
            Our Vision
          </div>
        </div>
      </div>

      <Separator className="my-12" />

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <Card key={value.title} className="border shadow-sm">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <value.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-12" />

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
        <div className="grid gap-6 md:grid-cols-4">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full bg-muted">
                <div className="flex h-full w-full items-center justify-center bg-muted text-4xl font-bold text-muted-foreground">
                  {member.name.charAt(0)}
                </div>
              </div>
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
        <p className="mb-6 text-muted-foreground">
          Join thousands of satisfied users who are already using our platform.
        </p>
        <Button asChild size="lg">
          <Link href="/scan">Try It Now</Link>
        </Button>
      </div>
    </div>
  )
}

const values = [
  {
    title: "Innovation",
    description: "We constantly push boundaries to create new and better solutions for our users.",
    icon: (props: any) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 2v4" />
        <path d="m4.93 10.93 2.83-2.83" />
        <path d="M2 18h4" />
        <path d="M12 22v-4" />
        <path d="m19.07 13.07-2.83-2.83" />
        <path d="M22 6h-4" />
        <path d="m6.34 17.66-2.83 2.83" />
        <path d="M12 12v.01" />
      </svg>
    ),
  },
  {
    title: "Simplicity",
    description: "We believe in making complex technology simple and accessible for everyone.",
    icon: (props: any) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    ),
  },
  {
    title: "Integrity",
    description: "We're committed to transparency, honesty, and doing what's right for our users.",
    icon: (props: any) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      </svg>
    ),
  },
]

const team = [
  {
    name: "Alex Johnson",
    role: "Founder & CEO",
  },
  {
    name: "Sarah Chen",
    role: "CTO",
  },
  {
    name: "Michael Rodriguez",
    role: "Head of Design",
  },
  {
    name: "Emma Williams",
    role: "Lead Developer",
  },
] 
import { Metadata } from "next"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Features",
  description: "Discover all the powerful features our platform offers.",
}

export default function FeaturesPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-4xl text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Our Features</h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Discover the powerful tools and capabilities that make our platform stand out.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        {features.map((feature) => (
          <Card key={feature.title} className="border shadow-sm">
            <CardHeader>
              <feature.icon className="h-6 w-6 mb-2" />
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{feature.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button asChild size="lg">
          <Link href="/scan">Try It Now</Link>
        </Button>
      </div>
    </div>
  )
}

const features = [
  {
    title: "Advanced Scanning",
    description: "Powerful scanning capabilities",
    content: "Our advanced scanning technology allows you to quickly analyze and process information with high accuracy.",
    icon: (props: any) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M3 7V5a2 2 0 0 1 2-2h2" />
        <path d="M17 3h2a2 2 0 0 1 2 2v2" />
        <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
        <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
        <rect width="10" height="8" x="7" y="8" rx="1" />
      </svg>
    ),
  },
  {
    title: "Real-time Analysis",
    description: "Instant insights and feedback",
    content: "Get immediate results and analysis as you scan, allowing you to make quick decisions based on accurate data.",
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
    title: "Secure Storage",
    description: "Your data is safe with us",
    content: "All your scanned information is securely stored and encrypted, ensuring your data remains private and protected.",
    icon: (props: any) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: "Cross-platform",
    description: "Use on any device",
    content: "Access our platform from any device - desktop, tablet, or mobile - with a seamless experience across all platforms.",
    icon: (props: any) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect width="16" height="10" x="4" y="3" rx="2" />
        <rect width="6" height="8" x="9" y="13" rx="1" />
      </svg>
    ),
  },
  {
    title: "Data Export",
    description: "Export in multiple formats",
    content: "Export your data in various formats including PDF, CSV, and more for easy integration with other tools and systems.",
    icon: (props: any) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 3v12" />
        <path d="m8 11 4 4 4-4" />
        <path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4" />
      </svg>
    ),
  },
  {
    title: "Customizable Reports",
    description: "Create reports that fit your needs",
    content: "Generate customized reports with the exact information you need, formatted exactly how you want it.",
    icon: (props: any) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M8 13h8" />
        <path d="M8 17h8" />
        <path d="M8 9h2" />
      </svg>
    ),
  },
] 
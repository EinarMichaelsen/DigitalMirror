import { Metadata } from "next"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "Pricing",
  description: "Affordable plans for every need.",
}

export default function PricingPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-4xl text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Simple, Transparent Pricing</h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Choose the plan that works best for you. All plans include a 14-day free trial.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
        {pricingPlans.map((plan) => (
          <Card key={plan.name} className={`flex flex-col border shadow-sm ${plan.featured ? 'border-primary shadow-md' : ''}`}>
            <CardHeader>
              {plan.featured && (
                <div className="mb-2 text-sm font-medium text-primary">
                  Most Popular
                </div>
              )}
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="mb-4">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full" variant={plan.featured ? "default" : "outline"}>
                <Link href="/scan">
                  {plan.buttonText}
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mx-auto max-w-3xl rounded-lg border bg-card p-8 text-center">
        <h3 className="text-xl font-semibold mb-2">Need a custom plan?</h3>
        <p className="text-muted-foreground mb-4">
          Contact us for enterprise pricing and custom solutions tailored to your specific needs.
        </p>
        <Button asChild variant="outline">
          <Link href="/contact">Contact Sales</Link>
        </Button>
      </div>
    </div>
  )
}

const pricingPlans = [
  {
    name: "Basic",
    description: "Essential features for individuals",
    price: 9,
    featured: false,
    buttonText: "Start Free Trial",
    features: [
      "Up to 50 scans per month",
      "Basic analytics",
      "Export to PDF",
      "Email support",
      "1 user"
    ],
  },
  {
    name: "Pro",
    description: "Perfect for professionals",
    price: 29,
    featured: true,
    buttonText: "Start Free Trial",
    features: [
      "Unlimited scans",
      "Advanced analytics",
      "Export to multiple formats",
      "Priority support",
      "Up to 5 users",
      "API access"
    ],
  },
  {
    name: "Enterprise",
    description: "For teams and organizations",
    price: 79,
    featured: false,
    buttonText: "Start Free Trial",
    features: [
      "Unlimited everything",
      "Custom integrations",
      "Dedicated account manager",
      "24/7 phone support",
      "Unlimited users",
      "Advanced security features"
    ],
  },
] 
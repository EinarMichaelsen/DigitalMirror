import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Shield, Eye, Bell, Lock } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center justify-center" href="#">
          <Shield className="h-6 w-6 text-primary" />
          <span className="ml-2 text-xl font-bold">DigitalMirror</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Discover Your Digital Footprint
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    See what information about you is publicly available online. Get insights into your social media
                    presence, news mentions, and potential privacy risks.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/scan">
                    <Button size="lg" className="px-8">
                      Start Your Free Scan
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/learn-more">
                    <Button size="lg" variant="outline" className="px-8">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Card className="w-full max-w-md">
                  <CardHeader>
                    <CardTitle>Your Digital Footprint Report</CardTitle>
                    <CardDescription>Example of what your report will look like</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <div className="grid gap-2">
                      <div className="font-semibold flex items-center">
                        <Eye className="mr-2 h-4 w-4 text-primary" />
                        Social Media Presence
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        4 profiles found with 1,200+ followers
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <div className="font-semibold flex items-center">
                        <Bell className="mr-2 h-4 w-4 text-primary" />
                        News & Mentions
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        3 news articles and 7 web mentions found
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <div className="font-semibold flex items-center">
                        <Lock className="mr-2 h-4 w-4 text-primary" />
                        Privacy Risk Assessment
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        2 data breaches detected with your email
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View Full Example Report
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How It Works</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our AI-powered tool scans the web to show you what others can find about you online
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white mx-auto">
                  1
                </div>
                <h3 className="text-xl font-bold">Enter Your Information</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Provide your name, email, and social media profiles to begin the scan
                </p>
              </div>
              <div className="grid gap-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white mx-auto">
                  2
                </div>
                <h3 className="text-xl font-bold">AI Analysis</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our AI scans public sources to compile information about your digital presence
                </p>
              </div>
              <div className="grid gap-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white mx-auto">
                  3
                </div>
                <h3 className="text-xl font-bold">Get Your Report</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Review your comprehensive report with insights and recommendations
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full border-t px-4 md:px-6">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2025 DigitalMirror. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}


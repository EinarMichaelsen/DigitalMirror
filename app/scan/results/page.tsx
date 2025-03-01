"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  Shield,
  User,
  Globe,
  MessageSquare,
  AlertTriangle,
  Check,
  Download,
  Share2,
  Bell,
  Lock,
  AlertCircle,
  ThumbsUp,
} from "lucide-react"

export default function ResultsPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <Shield className="h-6 w-6 text-primary" />
          <span className="ml-2 text-xl font-bold">DigitalMirror</span>
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export PDF
          </Button>
          <Button variant="outline" size="sm">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
        </div>
      </header>
      <main className="flex-1 container py-6 px-4 md:px-6 space-y-8">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold">Your Digital Footprint Report</h1>
          <p className="text-gray-500">Scan completed on March 1, 2025 at 5:24 PM</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="mr-2 h-5 w-5" />
              John Doe
            </CardTitle>
            <CardDescription>john@example.com • New York, NY</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <AlertTriangle className="mr-2 h-5 w-5 text-amber-500" />
                  <span className="font-medium">Privacy Exposure Score</span>
                </div>
                <Badge variant="outline" className="font-medium">
                  Medium Risk
                </Badge>
              </div>
              <Progress value={65} className="h-2 w-full" />
              <p className="text-sm text-gray-500">
                Your digital footprint has some exposure that could be improved. See recommendations below.
              </p>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-5 w-full">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="social">Social Media</TabsTrigger>
            <TabsTrigger value="mentions">Web Mentions</TabsTrigger>
            <TabsTrigger value="privacy">Privacy Risks</TabsTrigger>
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4 mt-6">
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Summary of Findings</AlertTitle>
              <AlertDescription>
                We found 4 social profiles, 10 web mentions, and 2 data breaches associated with your information.
              </AlertDescription>
            </Alert>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <MessageSquare className="mr-2 h-4 w-4 text-primary" />
                    Social Media
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Profiles Found</span>
                      <span className="font-medium">4</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Total Followers</span>
                      <span className="font-medium">1,245</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Content Sentiment</span>
                      <div className="flex items-center">
                        <ThumbsUp className="h-4 w-4 text-green-500 mr-1" />
                        <span className="font-medium">Mostly Positive</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <Globe className="mr-2 h-4 w-4 text-primary" />
                    Web Presence
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">News Articles</span>
                      <span className="font-medium">3</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Other Mentions</span>
                      <span className="font-medium">7</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Sentiment</span>
                      <div className="flex items-center">
                        <ThumbsUp className="h-4 w-4 text-green-500 mr-1" />
                        <span className="font-medium">Positive</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <Lock className="mr-2 h-4 w-4 text-primary" />
                    Privacy Risks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Data Breaches</span>
                      <span className="font-medium text-amber-500">2</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Personal Info Exposed</span>
                      <span className="font-medium text-amber-500">Email, Name</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Risk Level</span>
                      <Badge variant="outline" className="font-medium">
                        Medium
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="social" className="space-y-6 mt-6">
            <h3 className="text-xl font-bold">Social Media Profiles</h3>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <svg className="h-5 w-5 mr-2 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                  Twitter/X
                </CardTitle>
                <CardDescription>@johndoe • 450 followers</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="text-sm font-medium">Profile Summary</div>
                  <p className="text-sm text-gray-500">
                    Tech enthusiast, software developer, and coffee lover. Tweets about coding, tech news, and
                    occasional travel photos.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium">Recent Activity</div>
                  <p className="text-sm text-gray-500">
                    Active user with 3-5 tweets per week. Last tweet was 2 days ago about a tech conference.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium">Content Sentiment</div>
                  <div className="flex items-center">
                    <ThumbsUp className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm text-gray-500">Mostly professional and positive</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  View Profile
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <svg className="h-5 w-5 mr-2 text-blue-700" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </CardTitle>
                <CardDescription>Software Engineer at Tech Company • 520 connections</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="text-sm font-medium">Professional Summary</div>
                  <p className="text-sm text-gray-500">
                    5+ years of experience in software development. Skills include JavaScript, React, and Node.js.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium">Education</div>
                  <p className="text-sm text-gray-500">
                    Bachelor of Science in Computer Science, University of New York (2018)
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium">Recent Activity</div>
                  <p className="text-sm text-gray-500">
                    Shares articles about technology trends and occasionally posts about company events.
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  View Profile
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="mentions" className="space-y-6 mt-6">
            <h3 className="text-xl font-bold">Web Mentions & News</h3>

            <Card>
              <CardHeader>
                <CardTitle>News Articles</CardTitle>
                <CardDescription>3 articles mentioning you were found</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border rounded-lg p-4 space-y-2">
                  <div className="flex justify-between">
                    <h4 className="font-medium">Local Tech Meetup Highlights Innovation</h4>
                    <Badge>Positive</Badge>
                  </div>
                  <p className="text-sm text-gray-500">
                    "...attendees included John Doe, who demonstrated a new open-source project that received
                    significant interest from the community..."
                  </p>
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Tech Weekly</span>
                    <span>January 15, 2025</span>
                  </div>
                </div>

                <div className="border rounded-lg p-4 space-y-2">
                  <div className="flex justify-between">
                    <h4 className="font-medium">Charity Hackathon Raises Funds for Education</h4>
                    <Badge>Positive</Badge>
                  </div>
                  <p className="text-sm text-gray-500">
                    "...the winning team, led by John Doe, created an application to help connect students with
                    tutors..."
                  </p>
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>City News</span>
                    <span>November 3, 2024</span>
                  </div>
                </div>

                <div className="border rounded-lg p-4 space-y-2">
                  <div className="flex justify-between">
                    <h4 className="font-medium">Tech Company Announces New Hires</h4>
                    <Badge>Neutral</Badge>
                  </div>
                  <p className="text-sm text-gray-500">
                    "...new team members include John Doe, who joins as a Senior Software Engineer..."
                  </p>
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Business Journal</span>
                    <span>August 22, 2024</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Other Web Mentions</CardTitle>
                <CardDescription>7 additional mentions across the web</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border rounded-lg p-4 space-y-2">
                  <div className="flex justify-between">
                    <h4 className="font-medium">GitHub Repository Contributor</h4>
                    <Badge>Neutral</Badge>
                  </div>
                  <p className="text-sm text-gray-500">
                    Listed as a contributor to 3 open-source projects with 45+ commits
                  </p>
                </div>

                <div className="border rounded-lg p-4 space-y-2">
                  <div className="flex justify-between">
                    <h4 className="font-medium">Tech Conference Speaker List</h4>
                    <Badge>Positive</Badge>
                  </div>
                  <p className="text-sm text-gray-500">
                    Listed as a speaker at DevConf 2024 on "Modern Web Development"
                  </p>
                </div>

                <div className="border rounded-lg p-4 space-y-2">
                  <div className="flex justify-between">
                    <h4 className="font-medium">Professional Directory Listing</h4>
                    <Badge>Neutral</Badge>
                  </div>
                  <p className="text-sm text-gray-500">
                    Basic profile with contact information on industry directory site
                  </p>
                </div>

                <Button variant="link" className="w-full">
                  View 4 more mentions
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="privacy" className="space-y-6 mt-6">
            <h3 className="text-xl font-bold">Privacy Risks Assessment</h3>

            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Data Breach Alert</AlertTitle>
              <AlertDescription>
                Your email was found in 2 data breaches. We recommend updating your passwords.
              </AlertDescription>
            </Alert>

            <Card>
              <CardHeader>
                <CardTitle>Data Breaches</CardTitle>
                <CardDescription>Your information was found in the following breaches</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border rounded-lg p-4 space-y-2">
                  <div className="flex justify-between">
                    <h4 className="font-medium">TechForum Data Breach</h4>
                    <Badge variant="destructive">High Risk</Badge>
                  </div>
                  <p className="text-sm text-gray-500">
                    Your email and hashed password were exposed in this breach from June 2023.
                  </p>
                  <div className="text-sm">
                    <span className="font-medium">Exposed data:</span> Email, Username, Hashed Password
                  </div>
                </div>

                <div className="border rounded-lg p-4 space-y-2">
                  <div className="flex justify-between">
                    <h4 className="font-medium">OnlineShop Data Breach</h4>
                    <Badge variant="destructive">Medium Risk</Badge>
                  </div>
                  <p className="text-sm text-gray-500">Your email was exposed in this breach from October 2022.</p>
                  <div className="text-sm">
                    <span className="font-medium">Exposed data:</span> Email, Name
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Personal Information Exposure</CardTitle>
                <CardDescription>Information about you that is publicly accessible</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border rounded-lg p-4 space-y-2">
                  <div className="flex justify-between">
                    <h4 className="font-medium">Contact Information</h4>
                    <Badge variant="outline">Medium Risk</Badge>
                  </div>
                  <div className="text-sm space-y-1">
                    <div>
                      <span className="font-medium">Email:</span> Publicly visible on 3 websites
                    </div>
                    <div>
                      <span className="font-medium">Phone:</span> Not found publicly
                    </div>
                    <div>
                      <span className="font-medium">Address:</span> Partial address (city, state) found on 1 website
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4 space-y-2">
                  <div className="flex justify-between">
                    <h4 className="font-medium">Social Media Oversharing</h4>
                    <Badge variant="outline">Low Risk</Badge>
                  </div>
                  <p className="text-sm text-gray-500">
                    Your social media profiles contain minimal personal information. Good job keeping your private
                    details private.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recommendations" className="space-y-6 mt-6">
            <h3 className="text-xl font-bold">Recommendations</h3>

            <Card>
              <CardHeader>
                <CardTitle>Immediate Actions</CardTitle>
                <CardDescription>Steps you should take now to improve your privacy</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-2">
                  <AlertCircle className="h-5 w-5 text-destructive mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-medium">Update passwords for compromised accounts</p>
                    <p className="text-sm text-gray-500">
                      Change your password for TechForum and any other accounts that use the same password.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-medium">Enable two-factor authentication</p>
                    <p className="text-sm text-gray-500">
                      Add an extra layer of security to your email and social media accounts.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-medium">Remove your email from public websites</p>
                    <p className="text-sm text-gray-500">
                      Contact the websites displaying your email to request removal.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Long-term Privacy Improvements</CardTitle>
                <CardDescription>Ongoing steps to maintain your digital privacy</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-medium">Use a password manager</p>
                    <p className="text-sm text-gray-500">
                      Create unique, strong passwords for each account and store them securely.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-medium">Review privacy settings on social media</p>
                    <p className="text-sm text-gray-500">
                      Regularly check and update your privacy settings on all platforms.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-medium">Set up continuous monitoring</p>
                    <p className="text-sm text-gray-500">
                      Subscribe to our service to receive alerts about new mentions or data breaches.
                    </p>
                    <Button className="mt-2" size="sm">
                      <Bell className="mr-2 h-4 w-4" />
                      Enable Monitoring
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="flex justify-between items-center pt-6 border-t">
          <p className="text-sm text-gray-500">
            This report is based on publicly available information as of March 1, 2025.
          </p>
          <Button>
            <Bell className="mr-2 h-4 w-4" />
            Subscribe for Updates
          </Button>
        </div>
      </main>
    </div>
  )
}


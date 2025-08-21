"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Zap, Brain, Satellite, MapPin, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 relative">
                <Image
                  src="/images/kraftgene-logo.jpg"
                  alt="KraftGene AI"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold text-gray-900">Kraftgene AI</span>
            </div>

            <div className="flex items-center space-x-2">
              <Link href="https://www.linkedin.com/company/kraftgene-ai" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Linkedin className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="https://discord.gg/xcW6GUsPdH" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </Button>
              </Link>
              <Link href="#contact">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white ml-2">Get in Touch</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-0 w-full h-full object-cover"
          src="/hero-background.mp4"
          typeof="video/mp4"
        />
        <div className="absolute inset-0 bg-black/50 z-10"></div> {/* Overlay for text readability */}
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-emerald-100 text-emerald-800 hover:bg-emerald-100">Early Stage Startup</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Building the Future of <span className="text-emerald-400">Energy Infrastructure Protection</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              KraftGene AI is developing innovative artificial intelligence solutions to integrate environmental threat
              detection with energy infrastructure monitoring and robotics for Canada's sustainable energy future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#contact">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white w-full sm:w-auto">
                  Connect With Us <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
            <p className="text-xl text-gray-600 mb-12">
              We envision a future where artificial intelligence seamlessly protects Canada's energy infrastructure
              while safeguarding our environment. Our goal is to develop comprehensive AI solutions that can seamlessly
              integrate environmental intelligence, energy infrastructure monitoring and robotic real-time data collection
              with drones and ground robots to safeguard Canada's critical energy systems.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-red-600" />
                  </div>
                  <CardTitle className="text-lg">Environmental Protection</CardTitle>
                  <CardDescription>Early detection and monitoring of environmental threats</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg">Infrastructure Security</CardTitle>
                  <CardDescription>Protecting critical energy systems and assets</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">AI Innovation</CardTitle>
                  <CardDescription>Advanced machine learning, predictive analytics and agentic system for autonomous decision-making</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Satellite className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">Sustainable Future</CardTitle>
                  <CardDescription>Supporting Canada's clean energy transition</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Kraftgene AI</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Founded in Toronto, Ontario, Kraftgene AI is an early-stage startup focused on developing artificial
                  intelligence solutions for the energy sector. We are working to create innovative technologies that
                  will help protect Canada's energy infrastructure while supporting environmental sustainability.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Our team is passionate about leveraging cutting-edge AI, machine learning, and data analytics to
                  address the complex challenges facing Canada's energy industry in an era of climate change.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <span className="text-gray-700">Based in Toronto, Ontario</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <span className="text-gray-700">Focus on AI and energy infrastructure</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <span className="text-gray-700">Committed to environmental sustainability</span>
                  </div>
                </div>
              </div>
              <Link href="https://www.virtualai.live" target="_blank" rel="noopener noreferrer">
                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow cursor-pointer">
                  <div className="aspect-square bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Shield className="w-20 h-20 text-emerald-600 mx-auto mb-4" />
                      <h4 className="text-lg font-semibold text-gray-900">Innovation in Progress</h4>
                      <p className="text-gray-600">Building tomorrow's solutions today</p>
                      <div className="mt-2 text-sm text-emerald-600 font-medium">Visit our dashboard demo →</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Leadership</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the founding team driving innovation in AI-powered energy solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* CEO */}
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="/images/CEO.JPG"
                    alt="Yu Nong, Founder & CEO"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle>Yu Nong</CardTitle>
                <CardDescription className="text-emerald-600 font-semibold">Co-Founder & CEO</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Visionary entrepreneur leading KraftGene AI's mission to revolutionize energy infrastructure
                  protection and environmental threat detection through artificial intelligence and robotics.
                </p>
              </CardContent>
            </Card>

            {/* CTO 
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="/images/CTO.JPG"
                    alt="Giovane Cesar, Founder & CTO"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle>Giovane Cesar da Silva</CardTitle>
                <CardDescription className="text-emerald-600 font-semibold">
                  Co-Founder & Chief Technology Officer
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  AI and ML expert with extensive experience in machine learning and computer vision. Leads technology
                  strategy and drives innovation in environmental monitoring and energy infrastructure inspection AI
                  solutions.
                </p>
              </CardContent>
            </Card> */}
            
             
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="/images/COO.JPG"
                    alt="Daniel Vilela, Founder & CTO"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle>Daniel Lima Vilela</CardTitle>
                <CardDescription className="text-emerald-600 font-semibold">
                  Co-Founder & Chief Operating Officer
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Highly accomplished MBA/Engineer with 16 years in senior sales leadership (P&L) within Energy & Oil & Gas, 
                  recognized for driving revenue and expanding market share.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Interested in Our Vision?</h2>
              <p className="text-xl text-gray-600">
                We'd love to connect with potential partners, investors, and collaborators who share our passion for
                sustainable energy and AI innovation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6 text-emerald-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Location</div>
                      <div className="text-gray-600">Toronto, Ontario, Canada</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-6 h-6 text-emerald-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Email</div>
                      <div className="text-gray-600">info@kraftgeneai.com</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Connect With Us</h4>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href="https://www.linkedin.com/company/kraftgene-ai"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" className="w-full sm:w-auto">
                          <Linkedin className="w-4 h-4 mr-2" />
                          LinkedIn
                        </Button>
                      </Link>
                      <Link href="https://discord.gg/xcW6GUsPdH" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="w-full sm:w-auto">
                          <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                          </svg>
                          Discord
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 relative">
                <Image
                  src="/images/kraftgene-logo.jpg"
                  alt="KraftGene AI"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold">Kraftgene AI</span>
            </div>
            <div className="flex items-center space-x-2">
              <Link href="https://www.linkedin.com/company/kraftgene-ai" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Linkedin className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="https://discord.gg/xcW6GUsPdH" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </Button>
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Kraftgene AI Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

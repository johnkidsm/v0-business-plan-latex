import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Shield,
  Zap,
  Brain,
  Satellite,
  Bot,
  BarChart3,
  AlertTriangle,
  CheckCircle,
  MapPin,
  Mail,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">KraftGene AI</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#platform" className="text-gray-600 hover:text-gray-900 transition-colors">
                Platform
              </Link>
              <Link href="#solutions" className="text-gray-600 hover:text-gray-900 transition-colors">
                Solutions
              </Link>
              <Link href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
                Pricing
              </Link>
              <Link href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
                About
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </Link>
            </div>
            <Link href="#contact">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Request Demo</Button>
            </Link>
            <div className="md:hidden">
              <Button variant="ghost" size="sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-emerald-100 text-emerald-800 hover:bg-emerald-100">
              AI-Powered Energy Infrastructure Protection
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI for Sustainable Energy & <span className="text-emerald-600">Environmental Protection</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              EnergyEminence integrates environmental threat detection with energy infrastructure monitoring, creating a
              unified AI platform that safeguards critical systems while optimizing performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#contact">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white w-full sm:w-auto">
                  Schedule Demo <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-gray-900 border-gray-300 hover:bg-gray-50 w-full sm:w-auto"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Energy-Environment Intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI platform combines satellite imagery, IoT sensors, and autonomous robotics to provide real-time
              monitoring and predictive analytics for Canada's energy infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Environmental Threat Detection</CardTitle>
                <CardDescription>
                  Real-time wildfire detection, extreme weather monitoring, and climate risk assessment
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle>Infrastructure Monitoring</CardTitle>
                <CardDescription>
                  AI-driven monitoring of energy generation, transmission, and distribution systems
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Predictive Analytics</CardTitle>
                <CardDescription>
                  Advanced modeling of environmental threats and their impact on energy operations
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Sustainability Analytics</CardTitle>
                <CardDescription>
                  Emissions monitoring, environmental impact assessment, and regulatory compliance
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <Satellite className="w-6 h-6 text-cyan-600" />
                </div>
                <CardTitle>Satellite Integration</CardTitle>
                <CardDescription>
                  Real-time satellite imagery analysis combined with weather data and IoT sensors
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                  <Bot className="w-6 h-6 text-slate-600" />
                </div>
                <CardTitle>Autonomous Robotics</CardTitle>
                <CardDescription>
                  Drone fleets and ground robots for hazardous environment monitoring and data collection
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section id="platform" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">EnergyEminence Platform</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A comprehensive AI system designed specifically for Canadian energy companies and government agencies
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Integrated Intelligence for Energy Security</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Real-time Threat Detection</h4>
                      <p className="text-gray-600">
                        Advanced AI algorithms monitor environmental conditions 24/7, providing early warnings for
                        wildfires, extreme weather, and other threats.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Infrastructure Protection</h4>
                      <p className="text-gray-600">
                        Comprehensive monitoring of energy assets with predictive maintenance and automated alert
                        systems.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Regulatory Compliance</h4>
                      <p className="text-gray-600">
                        Automated environmental reporting and compliance monitoring for Canadian regulations.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Autonomous Data Collection</h4>
                      <p className="text-gray-600">
                        Drone fleets and robotic systems collect real-time field data in hazardous environments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="aspect-video bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Shield className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-gray-900">Platform Dashboard</h4>
                    <p className="text-gray-600">Real-time monitoring interface</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Markets */}
      <section id="solutions" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Serving Canada's Energy Sector</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored solutions for utilities, oil & gas companies, renewable energy operators, and government agencies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-emerald-600" />
                </div>
                <CardTitle>Electric Utilities</CardTitle>
                <CardDescription>
                  Provincial utilities, municipal companies, and independent power producers
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle>Oil & Gas</CardTitle>
                <CardDescription>Integrated companies, pipeline operators, and midstream facilities</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Satellite className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle>Renewable Energy</CardTitle>
                <CardDescription>
                  Wind and solar operators, energy storage systems, and clean tech companies
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-slate-600" />
                </div>
                <CardTitle>Government</CardTitle>
                <CardDescription>Federal and provincial agencies, emergency management organizations</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Flexible Pricing Plans</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the right plan for your organization's needs
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-gray-200 hover:border-emerald-300 transition-colors">
              <CardHeader>
                <CardTitle className="text-center">Basic</CardTitle>
                <div className="text-center">
                  <span className="text-3xl font-bold">$45,000</span>
                  <span className="text-gray-600">/year</span>
                </div>
                <CardDescription className="text-center">
                  Perfect for smaller utilities and single facilities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mr-2" />
                    Environmental monitoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mr-2" />
                    Basic alerts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mr-2" />
                    Standard reporting
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mr-2" />
                    Email notifications
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 text-white">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-emerald-300 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-emerald-600 text-white">Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-center">Professional</CardTitle>
                <div className="text-center">
                  <span className="text-3xl font-bold">$90,000</span>
                  <span className="text-gray-600">/year</span>
                </div>
                <CardDescription className="text-center">
                  Ideal for regional utilities and mid-size companies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mr-2" />
                    Advanced threat prediction
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mr-2" />
                    Infrastructure monitoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mr-2" />
                    Mobile applications
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mr-2" />
                    API access
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mr-2" />
                    Real-time alerts
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 text-white">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-emerald-300 transition-colors">
              <CardHeader>
                <CardTitle className="text-center">Enterprise</CardTitle>
                <div className="text-center">
                  <span className="text-3xl font-bold">$180,000</span>
                  <span className="text-gray-600">/year</span>
                </div>
                <CardDescription className="text-center">For major utilities and energy companies</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mr-2" />
                    Comprehensive intelligence
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mr-2" />
                    Advanced AI analytics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mr-2" />
                    Multi-site coordination
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mr-2" />
                    Custom reporting
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mr-2" />
                    Dedicated support
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 text-white">Contact Sales</Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Card className="max-w-2xl mx-auto border-2 border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="text-center text-orange-800">Robotics Add-on</CardTitle>
                <div className="text-center">
                  <span className="text-2xl font-bold text-orange-800">$75,000 - $250,000</span>
                  <span className="text-orange-600">/year</span>
                </div>
                <CardDescription className="text-center text-orange-700">
                  Autonomous drone fleets and ground robots for hazardous environment monitoring
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About KraftGene AI</h2>
            <p className="text-xl text-gray-600 mb-8">
              Founded in Calgary, Alberta, KraftGene AI is pioneering the integration of artificial intelligence with
              energy infrastructure monitoring and environmental protection. Our mission is to create a sustainable
              energy future through innovative AI solutions.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">$1.5M</div>
                <div className="text-gray-600">Initial Funding Goal</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">28</div>
                <div className="text-gray-600">Jobs Created by Year 3</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">2025</div>
                <div className="text-gray-600">Founded</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ready to Protect Your Infrastructure?
              </h2>
              <p className="text-xl text-gray-600">
                Contact us to schedule a demo and see how EnergyEminence can safeguard your operations
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6 text-emerald-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Headquarters</div>
                      <div className="text-gray-600">Calgary, Alberta, Canada</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-6 h-6 text-emerald-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Email</div>
                      <div className="text-gray-600">info@kraftgeneai.com</div>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Request a Demo</CardTitle>
                  <CardDescription>See how EnergyEminence can protect your energy infrastructure</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Company Email</label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="your.email@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                      <textarea
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Tell us about your needs..."
                      />
                    </div>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">KraftGene AI</span>
              </div>
              <p className="text-gray-400">
                Protecting Canada's energy future with AI-powered intelligence and environmental monitoring.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    EnergyEminence
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Utilities
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Oil & Gas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Renewables
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Government
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 KraftGene AI Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

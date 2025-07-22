"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Clock, Send, Mail, Building2, Users } from "lucide-react"
import GlobalSupportMap from "@/components/global-support-map"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Professional Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1920')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-2 mb-6">
              <Building2 className="h-5 w-5 text-blue-300" />
              <span className="text-blue-100 font-medium">Global Water Treatment Solutions</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Contact Our <span className="text-orange-400">Experts</span>
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed max-w-3xl mx-auto">
              Connect with WTT International's team of water treatment specialists. We provide comprehensive industrial
              solutions across multiple continents with proven expertise and cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Overview */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Get In Touch</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Multiple ways to reach our team of water treatment professionals
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {/* Primary Contact */}
              <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg mb-4 text-slate-900">Primary Contact</CardTitle>
                <div className="space-y-2">
                  <p className="text-blue-600 font-semibold">enquiry@wttint.com</p>
                  <p className="text-blue-600 font-semibold">+91 78450 09915</p>
                </div>
              </Card>

              {/* Head Office */}
              <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building2 className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-lg mb-4 text-slate-900">Head Office</CardTitle>
                <div className="space-y-1 text-slate-600">
                  <p className="font-medium">Tirupur, India</p>
                  <p className="text-sm">Manufacturing & Operations</p>
                </div>
              </Card>

              {/* Europe Office */}
              <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-lg mb-4 text-slate-900">Europe Office</CardTitle>
                <div className="space-y-1 text-slate-600">
                  <p className="font-medium">Novara Milano, Italy</p>
                  <p className="text-sm">European Operations</p>
                </div>
              </Card>

              {/* Business Hours */}
              <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-lg mb-4 text-slate-900">Business Hours</CardTitle>
                <div className="space-y-1 text-slate-600 text-sm">
                  <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
                  <p>Sat: 9:00 AM - 2:00 PM</p>
                  <p className="text-purple-600 font-medium">24/7 Emergency Support</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Form and Network */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Contact Form - 3 columns */}
              <div className="lg:col-span-3">
                <Card className="border-0 shadow-2xl overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-8">
                    <CardTitle className="text-2xl font-bold mb-2">Request a Consultation</CardTitle>
                    <p className="text-slate-300">
                      Tell us about your water treatment requirements and our experts will provide a customized
                      solution.
                    </p>
                  </CardHeader>
                  <CardContent className="p-8">
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="firstName" className="text-sm font-semibold text-slate-700">
                            First Name <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="firstName"
                            placeholder="Enter your first name"
                            required
                            className="h-12 border-slate-300 focus:border-blue-500 focus:ring-blue-500/20"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName" className="text-sm font-semibold text-slate-700">
                            Last Name <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="lastName"
                            placeholder="Enter your last name"
                            required
                            className="h-12 border-slate-300 focus:border-blue-500 focus:ring-blue-500/20"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-sm font-semibold text-slate-700">
                            Business Email <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your.email@company.com"
                            required
                            className="h-12 border-slate-300 focus:border-blue-500 focus:ring-blue-500/20"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-sm font-semibold text-slate-700">
                            Phone Number
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+91 XXXXX XXXXX"
                            className="h-12 border-slate-300 focus:border-blue-500 focus:ring-blue-500/20"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="company" className="text-sm font-semibold text-slate-700">
                            Company Name <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="company"
                            placeholder="Your Company Name"
                            required
                            className="h-12 border-slate-300 focus:border-blue-500 focus:ring-blue-500/20"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="industry" className="text-sm font-semibold text-slate-700">
                            Industry Sector
                          </Label>
                          <Select>
                            <SelectTrigger className="h-12 border-slate-300 focus:border-blue-500 focus:ring-blue-500/20">
                              <SelectValue placeholder="Select your industry" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="textile">Textile & Garments</SelectItem>
                              <SelectItem value="tannery">Tannery & Leather</SelectItem>
                              <SelectItem value="dairy">Dairy & Food Processing</SelectItem>
                              <SelectItem value="paper">Paper & Pulp</SelectItem>
                              <SelectItem value="pharma">Pharmaceutical</SelectItem>
                              <SelectItem value="automobile">Automobile</SelectItem>
                              <SelectItem value="chemical">Chemical Processing</SelectItem>
                              <SelectItem value="refinery">Oil & Gas Refinery</SelectItem>
                              <SelectItem value="plastic">Plastic & Recycling</SelectItem>
                              <SelectItem value="other">Other Industrial</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="solution" className="text-sm font-semibold text-slate-700">
                          Solution Required
                        </Label>
                        <Select>
                          <SelectTrigger className="h-12 border-slate-300 focus:border-blue-500 focus:ring-blue-500/20">
                            <SelectValue placeholder="Select solution type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="etp">Effluent Treatment Plant (ETP)</SelectItem>
                            <SelectItem value="zld">Zero Liquid Discharge (ZLD)</SelectItem>
                            <SelectItem value="stp">Sewage Treatment Plant (STP)</SelectItem>
                            <SelectItem value="ro">Reverse Osmosis Systems</SelectItem>
                            <SelectItem value="mbr">Membrane Bioreactor (MBR)</SelectItem>
                            <SelectItem value="om">Operation & Maintenance</SelectItem>
                            <SelectItem value="consultation">Technical Consultation</SelectItem>
                            <SelectItem value="upgrade">Plant Upgradation</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-sm font-semibold text-slate-700">
                          Project Details <span className="text-red-500">*</span>
                        </Label>
                        <Textarea
                          id="message"
                          placeholder="Please provide details about your water treatment requirements including flow rates, current challenges, timeline, and any specific technical specifications..."
                          rows={6}
                          required
                          className="border-slate-300 focus:border-blue-500 focus:ring-blue-500/20 resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg py-4 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        Submit Inquiry
                        <Send className="ml-2 h-5 w-5" />
                      </Button>

                      <p className="text-sm text-slate-500 text-center">
                        Our team will respond within 24 hours with a preliminary assessment
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Network Agents - 2 columns */}
              <div className="lg:col-span-2 space-y-8">
                <Card className="border-0 shadow-xl overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6">
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <Users className="h-6 w-6" />
                      Global Network Partners
                    </CardTitle>
                    <p className="text-orange-100 text-sm">Regional representatives for local support</p>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      <div className="border-l-4 border-blue-500 pl-4 py-2">
                        <h4 className="font-bold text-slate-900 text-sm mb-1">GUJARAT REGION</h4>
                        <p className="text-slate-700 font-medium text-sm">7S ENERGEC SOLUTIONS LLP</p>
                        <p className="text-blue-600 font-semibold text-sm">+91 96876 60190</p>
                      </div>

                      <div className="border-l-4 border-green-500 pl-4 py-2">
                        <h4 className="font-bold text-slate-900 text-sm mb-1">RAJASTHAN REGION</h4>
                        <p className="text-slate-700 font-medium text-sm">JD ASSOCIATES</p>
                        <p className="text-blue-600 font-semibold text-sm">+91 96366 52111</p>
                      </div>

                      <div className="border-l-4 border-purple-500 pl-4 py-2">
                        <h4 className="font-bold text-slate-900 text-sm mb-1">PUNJAB & HIMACHAL</h4>
                        <p className="text-slate-700 font-medium text-sm">GURU NANAK AUTOMATION</p>
                        <p className="text-blue-600 font-semibold text-sm">+91 99886 20100</p>
                      </div>

                      <div className="border-l-4 border-red-500 pl-4 py-2">
                        <h4 className="font-bold text-slate-900 text-sm mb-1">BANGLADESH</h4>
                        <p className="text-slate-700 font-medium text-sm">BTE ASSOCIATES</p>
                        <p className="text-blue-600 font-semibold text-sm">+880 1730-375001</p>
                      </div>

                      <div className="border-l-4 border-yellow-500 pl-4 py-2">
                        <h4 className="font-bold text-slate-900 text-sm mb-1">IRAN</h4>
                        <p className="text-slate-700 font-medium text-sm">AZARAM</p>
                        <p className="text-blue-600 font-semibold text-sm">+98 912 303 9147</p>
                      </div>

                      <div className="border-l-4 border-indigo-500 pl-4 py-2">
                        <h4 className="font-bold text-slate-900 text-sm mb-1">UZBEKISTAN</h4>
                        <p className="text-slate-700 font-medium text-sm">BERING SERVIS</p>
                        <p className="text-blue-600 font-semibold text-sm">+998 90 324-23-77</p>
                      </div>

                      <div className="border-l-4 border-pink-500 pl-4 py-2">
                        <h4 className="font-bold text-slate-900 text-sm mb-1">INDONESIA</h4>
                        <p className="text-slate-700 font-medium text-sm">DHARMATEK</p>
                        <p className="text-blue-600 font-semibold text-sm">+62 858-1190-9505</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Contact Card */}
                <Card className="border-0 shadow-xl bg-gradient-to-br from-slate-50 to-slate-100">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-4">Need Immediate Assistance?</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-blue-600" />
                        <div>
                          <p className="font-semibold text-slate-900">Emergency Hotline</p>
                          <p className="text-blue-600 font-medium">+91 78450 09915</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-orange-600" />
                        <div>
                          <p className="font-semibold text-slate-900">Direct Email</p>
                          <p className="text-orange-600 font-medium">enquiry@wttint.com</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Support Map Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Our Global <span className="text-blue-600">Support Network</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                With offices across continents and a network of trusted partners, WTT International provides
                comprehensive water treatment solutions worldwide. Hover over the regions to see our local presence.
              </p>
            </div>
            <GlobalSupportMap />
          </div>
        </div>
      </section>

      {/* Professional CTA Section */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Water Treatment?</h3>
            <p className="text-xl text-slate-200 mb-8 leading-relaxed">
              Join hundreds of satisfied clients who trust WTT International for their industrial water treatment needs.
              Let's discuss your specific requirements and create a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold shadow-lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold bg-transparent"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now: +91 78450 09915
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

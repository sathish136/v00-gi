import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Download, ArrowLeft, CheckCircle, Recycle, Zap, Shield } from "lucide-react"
import Link from "next/link"

export default function RewolutePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden bg-gradient-to-br from-green-800 via-green-700 to-green-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-4xl text-white">
            <Link href="/technologies" className="inline-flex items-center text-green-200 hover:text-white mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Technologies
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center">
                <Recycle className="h-10 w-10 text-white" />
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold">REWOLUTE™</h1>
                <Badge className="mt-2 bg-orange-500 text-white">Patented Technology</Badge>
              </div>
            </div>
            <p className="text-2xl text-green-100 leading-relaxed mb-4">Absolute Recovery</p>
            <p className="text-xl text-green-200 mb-4">97% RECOVERY WITH SINGLE SKID REVERSE OSMOSIS</p>
            <p className="text-lg text-green-200">
              Advanced Stream of Effluent treatment with Novel Membrane Technology
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Revolutionary Water Recovery</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Advanced Stream of Effluent treatment with Novel Membrane Technology to facilitate Highest possible
                recovery Using Single Skid Reverse Osmosis system.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">97% Recovery Rate</h3>
                    <p className="text-gray-600">
                      Achieve unprecedented water recovery rates with our advanced membrane technology.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Single Skid System</h3>
                    <p className="text-gray-600">
                      Compact, integrated design that reduces footprint and installation complexity.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Novel Membrane Technology</h3>
                    <p className="text-gray-600">
                      Proprietary membrane technology designed for maximum efficiency and longevity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600&text=REWOLUTE+Single+Skid+RO+System"
                alt="REWOLUTE System"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Features & Benefits</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Recycle className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg mb-3">Zero Liquid Discharge</CardTitle>
                <p className="text-gray-600 text-sm">Complete water recovery with zero liquid discharge capability.</p>
              </Card>

              <Card className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg mb-3">High Recovery</CardTitle>
                <p className="text-gray-600 text-sm">Achieve up to 97% water recovery from wastewater streams.</p>
              </Card>

              <Card className="p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg mb-3">Low Energy Consumption</CardTitle>
                <p className="text-gray-600 text-sm">
                  Energy-efficient design reduces operational costs significantly.
                </p>
              </Card>

              <Card className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg mb-3">Low Chemical Consumption</CardTitle>
                <p className="text-gray-600 text-sm">Minimal chemical usage for cleaning and maintenance.</p>
              </Card>

              <Card className="p-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-lg mb-3">Low Fouling</CardTitle>
                <p className="text-gray-600 text-sm">Advanced membrane design minimizes fouling and extends life.</p>
              </Card>

              <Card className="p-6">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle className="text-lg mb-3">Easy to Operate</CardTitle>
                <p className="text-gray-600 text-sm">User-friendly interface with automated operation capabilities.</p>
              </Card>
            </div>
          </div>

          {/* Applications */}
          <Card className="mb-16">
            <CardHeader>
              <CardTitle className="text-2xl">Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Industrial Wastewater Treatment",
                  "Municipal Wastewater Treatment",
                  "Desalination",
                  "Food and Beverage Processing",
                  "Pharmaceutical Manufacturing",
                  "Textile Industry",
                  "Power Generation",
                  "Mining",
                  "Oil and Gas",
                  "Chemical Processing",
                  "Electronics Manufacturing",
                  "Automotive Industry",
                ].map((application, index) => (
                  <div key={index} className="flex items-center gap-2 p-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">{application}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Implement REWOLUTE?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact our engineering team to discuss how REWOLUTE can transform your water treatment process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Get Technical Consultation
              </Button>
              <Button size="lg" variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Download Brochure
              </Button>
            </div>
            <div className="mt-8 text-sm text-gray-500">
              <p>Email: enquiry@wttint.com | Phone: +91 78450 09915</p>
              <p className="mt-2">Visit: www.wttint.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Download, ArrowLeft, CheckCircle, Shield, Recycle, Zap } from "lucide-react"
import Link from "next/link"

export default function CarePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden bg-gradient-to-br from-orange-800 via-orange-700 to-orange-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-4xl text-white">
            <Link href="/technologies" className="inline-flex items-center text-orange-200 hover:text-white mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Technologies
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                <Shield className="h-10 w-10 text-orange-600" />
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold">CaRe™</h1>
                <Badge className="mt-2 bg-white text-orange-600">Patented Technology</Badge>
              </div>
            </div>
            <p className="text-2xl text-orange-100 leading-relaxed mb-4">Caustic Recovery</p>
            <p className="text-xl text-orange-200 mb-4">A Novel Filtration Technology for Caustic Recovery</p>
            <p className="text-lg text-orange-200">Water Loving Technology</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why CaRe?</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                This enables the Reuse of Spent caustic from Mercerization process of Textile industries by
                incorporating specially designed membrane Technology. CaRe eliminates the suspends & colour from the
                spent caustic without any deterioration of its nature.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Pure Caustic Recovery</h3>
                    <p className="text-gray-600">
                      Complete recovery of caustic solution with maintained chemical properties for reuse.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Turbid Free Caustic</h3>
                    <p className="text-gray-600">
                      Removes macro particles, oil & grease, textile fibers, and micro suspended particles.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Payback in Less Than 1 Year</h3>
                    <p className="text-gray-600">
                      Rapid return on investment through caustic reuse and reduced chemical consumption.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600&text=CaRe+Caustic+Recovery+System"
                alt="CaRe System"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Features & Benefits</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg mb-3">Pure Caustic Recovery</CardTitle>
                <p className="text-gray-600 text-sm">
                  Complete recovery of caustic solution maintaining its chemical integrity.
                </p>
              </Card>

              <Card className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg mb-3">Highly Reliable</CardTitle>
                <p className="text-gray-600 text-sm">Proven technology with consistent performance and reliability.</p>
              </Card>

              <Card className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg mb-3">Wide pH Range</CardTitle>
                <p className="text-gray-600 text-sm">Operates effectively across pH range of 1-14.</p>
              </Card>

              <Card className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Recycle className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg mb-3">Cross-flow Technology</CardTitle>
                <p className="text-gray-600 text-sm">Advanced cross-flow membrane technology for optimal separation.</p>
              </Card>

              <Card className="p-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-lg mb-3">Lesser Acid Consumption</CardTitle>
                <p className="text-gray-600 text-sm">Reduces acid consumption in the overall treatment process.</p>
              </Card>

              <Card className="p-6">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle className="text-lg mb-3">Eco-friendly</CardTitle>
                <p className="text-gray-600 text-sm">Environmentally sustainable solution reducing chemical waste.</p>
              </Card>

              <Card className="p-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle className="text-lg mb-3">Low Fouling Tendency</CardTitle>
                <p className="text-gray-600 text-sm">Minimal membrane fouling ensures longer operational life.</p>
              </Card>

              <Card className="p-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-yellow-600" />
                </div>
                <CardTitle className="text-lg mb-3">High Temperature Resistant</CardTitle>
                <p className="text-gray-600 text-sm">Operates effectively at elevated temperatures.</p>
              </Card>

              <Card className="p-6">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <Recycle className="h-6 w-6 text-gray-600" />
                </div>
                <CardTitle className="text-lg mb-3">Fully Automated System</CardTitle>
                <p className="text-gray-600 text-sm">Complete automation for hassle-free operation.</p>
              </Card>
            </div>
          </div>

          {/* Process Description */}
          <Card className="mb-16">
            <CardHeader>
              <CardTitle className="text-2xl">How CaRe Works</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6 leading-relaxed">
                CaRe excels at providing complete recovery and Turbid free Caustic for reuse in processing Industry.
                CaRe is incorporated with systems targeting to remove:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Removes:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-gray-600">Macro Particles</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-gray-600">Oil & Grease</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-gray-600">Textile Fibers</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-gray-600">Micro Suspended Particles</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-gray-600">Colour</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Applications:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-600">Textile Mercerization Process</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-600">Chemical Processing Industries</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-600">Pharmaceutical Manufacturing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-600">Paper & Pulp Industries</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Transform Your Caustic Recovery Process</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact our specialists to learn how CaRe can help you achieve significant cost savings and environmental
              benefits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Download Brochure
              </Button>
            </div>
            <div className="mt-8 text-sm text-gray-500">
              <p>Email: enquiry@wttint.com | Phone: +91 78450 09915</p>
              <p className="mt-1">*Conditions apply for payback period</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

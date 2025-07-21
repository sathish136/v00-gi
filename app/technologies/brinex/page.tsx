import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Download, ArrowLeft, CheckCircle, Droplets, Factory, Recycle } from "lucide-react"
import Link from "next/link"

export default function BrinexPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-4xl text-white">
            <Link href="/technologies" className="inline-flex items-center text-blue-200 hover:text-white mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Technologies
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center">
                <Droplets className="h-10 w-10 text-white" />
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold">BRINEX™</h1>
                <Badge className="mt-2 bg-orange-500 text-white">Patented Technology</Badge>
              </div>
            </div>
            <p className="text-2xl text-blue-100 leading-relaxed mb-4">Advanced Technology to recover Brine Solution</p>
            <p className="text-lg text-blue-200">Water Loving Technology</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">From the Concentrate Stream</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">High Concentration Recovery</h3>
                    <p className="text-gray-600">
                      The recovered brine is up to concentration <strong>120 GPL</strong>, making it highly suitable for
                      industrial reuse.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Textile Processing Ready</h3>
                    <p className="text-gray-600">
                      Suitable to use in Textile Processing, in the place of Salt, providing significant cost savings.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Reduced Evaporator Load</h3>
                    <p className="text-gray-600">
                      This reduces the load to the Evaporator, improving overall system efficiency and reducing energy
                      consumption.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600&text=BRINEX+System"
                alt="BRINEX System"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-xl mb-3">Brine Recovery</CardTitle>
              <CardContent className="pt-0">
                <p className="text-gray-600">
                  BRINEX is used to recover the Brine Solution from concentrate streams with maximum efficiency.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Factory className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-xl mb-3">Industrial Application</CardTitle>
              <CardContent className="pt-0">
                <p className="text-gray-600">
                  Perfect for textile industries and other industrial applications requiring high-quality brine
                  solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Recycle className="h-8 w-8 text-orange-600" />
              </div>
              <CardTitle className="text-xl mb-3">Sustainable Solution</CardTitle>
              <CardContent className="pt-0">
                <p className="text-gray-600">
                  Reduces waste and promotes circular economy by recovering valuable brine for reuse in industrial
                  processes.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Technical Specifications */}
          <Card className="mb-16">
            <CardHeader>
              <CardTitle className="text-2xl">Technical Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Performance Parameters</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="font-medium">Brine Concentration</span>
                      <span className="text-orange-600 font-semibold">Up to 120 GPL</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="font-medium">Recovery Efficiency</span>
                      <span className="text-green-600 font-semibold">95-98%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="font-medium">Operating Temperature</span>
                      <span className="text-blue-600 font-semibold">5-45°C</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Applications</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-600">Textile Processing Industries</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-600">Chemical Manufacturing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-600">Pharmaceutical Industries</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-600">Food Processing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Interested in BRINEX Technology?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact our technical team to learn more about implementing BRINEX in your facility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                Contact Technical Team
              </Button>
              <Button size="lg" variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Download Brochure
              </Button>
            </div>
            <div className="mt-8 text-sm text-gray-500">
              <p>Email: enquiry@wttint.com | Phone: +91 78450 09915</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { ArrowRight, Droplets, Recycle, Filter, Zap, Settings, Beaker } from "lucide-react"

export default function SolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Comprehensive Water Treatment Solutions</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              From pre-treatment to zero liquid discharge, we offer complete water treatment ecosystems tailored to your
              industry's specific requirements.
            </p>
          </div>
        </div>
      </section>

      {/* ETP Systems */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-100 text-orange-800">ETP Solutions</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Effluent Treatment Plant Systems</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced ETP solutions designed to treat industrial wastewater efficiently and cost-effectively
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Filter className="h-6 w-6 text-orange-500" />
                </div>
                <CardTitle>Pre Treatment Systems</CardTitle>
                <CardDescription>Primary treatment for removing suspended solids and oils</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• Screening & Grit Removal</li>
                  <li>• Oil & Grease Separation</li>
                  <li>• pH Neutralization</li>
                  <li>• Equalization Tanks</li>
                </ul>
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Droplets className="h-6 w-6 text-orange-500" />
                </div>
                <CardTitle>DAF Systems</CardTitle>
                <CardDescription>Dissolved Air Flotation for efficient solid-liquid separation</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• High Efficiency Separation</li>
                  <li>• Low Sludge Production</li>
                  <li>• Compact Design</li>
                  <li>• Automated Operation</li>
                </ul>
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="h-6 w-6 text-orange-500" />
                </div>
                <CardTitle>Clarifier & Lamella Settler</CardTitle>
                <CardDescription>Advanced settling systems for superior clarification</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• High Surface Area</li>
                  <li>• Improved Settling</li>
                  <li>• Space Efficient</li>
                  <li>• Low Maintenance</li>
                </ul>
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advanced Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Advanced Technologies</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Membrane & Filtration Technologies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art membrane technologies for superior water quality and resource recovery
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Beaker className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Membrane Bio Reactor (MBR)</h3>
                    <p className="text-gray-600">
                      Advanced biological treatment combined with membrane filtration for superior effluent quality
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Filter className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Micro/Ultra Filtration</h3>
                    <p className="text-gray-600">
                      Precise filtration systems for removing suspended solids, bacteria, and viruses
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Droplets className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Reverse Osmosis Systems</h3>
                    <p className="text-gray-600">
                      High-pressure membrane systems for desalination and water purification
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Ceramic & Polymer MBR</h3>
                    <p className="text-gray-600">Durable membrane materials for harsh industrial applications</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Membrane Filtration Systems"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Systems */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800">Specialized Systems</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Zero Liquid Discharge & Treatment Plants
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete water cycle solutions for maximum resource recovery and environmental compliance
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Recycle className="h-8 w-8 text-orange-500" />
                </div>
                <CardTitle>ZLD Systems</CardTitle>
                <CardDescription>Zero Liquid Discharge for complete water recovery</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Advanced evaporation and crystallization systems for maximum water recovery
                </p>
                <Button variant="outline" size="sm">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Settings className="h-8 w-8 text-orange-500" />
                </div>
                <CardTitle>CETP Systems</CardTitle>
                <CardDescription>Common Effluent Treatment Plants</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Centralized treatment solutions for industrial clusters and estates
                </p>
                <Button variant="outline" size="sm">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Droplets className="h-8 w-8 text-orange-500" />
                </div>
                <CardTitle>STP Systems</CardTitle>
                <CardDescription>Sewage Treatment Plants</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">Municipal and residential wastewater treatment solutions</p>
                <Button variant="outline" size="sm">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Filter className="h-8 w-8 text-orange-500" />
                </div>
                <CardTitle>Domestic RO</CardTitle>
                <CardDescription>Residential Water Purification</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Home and office water purification systems for safe drinking water
                </p>
                <Button variant="outline" size="sm">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* O&M and R&D Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Settings className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-2xl">Operation & Maintenance (O&M)</CardTitle>
                <CardDescription>Comprehensive plant operation and maintenance services</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Complete O&M services to ensure optimal performance, minimize downtime, and extend equipment life. Our
                  experienced team provides 24/7 support and preventive maintenance programs.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li>• 24/7 Remote Monitoring</li>
                  <li>• Preventive Maintenance</li>
                  <li>• Emergency Response</li>
                  <li>• Performance Optimization</li>
                  <li>• Spare Parts Management</li>
                </ul>
                <Button>Get O&M Quote</Button>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Beaker className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl">Research & Development</CardTitle>
                <CardDescription>Cutting-edge R&D for next-generation solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Our dedicated R&D team continuously develops innovative technologies and improves existing solutions.
                  We collaborate with leading research institutions and universities worldwide.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li>• Advanced Material Research</li>
                  <li>• Process Optimization</li>
                  <li>• Pilot Plant Studies</li>
                  <li>• Technology Transfer</li>
                  <li>• Custom Solution Development</li>
                </ul>
                <Button>Explore R&D</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Perfect Water Treatment Solution?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Our experts will help you design a customized solution that meets your specific requirements and budget
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 text-white hover:bg-orange-600">
              Schedule Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
            >
              Download Solutions Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

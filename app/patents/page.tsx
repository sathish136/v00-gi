import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { ArrowRight, Lightbulb, Award, Zap, Shield, Recycle, Droplets } from "lucide-react"

export default function PatentTechnologiesPage() {
  const patents = [
    {
      name: "Brinex Technology",
      description: "Revolutionary brine treatment and salt recovery system",
      icon: Droplets,
      features: [
        "Advanced brine concentration",
        "High-purity salt recovery",
        "Energy-efficient operation",
        "Minimal waste generation",
      ],
      applications: ["Desalination plants", "Chemical industries", "Pharmaceutical manufacturing", "Food processing"],
      benefits: ["90% water recovery", "99% salt purity", "50% energy savings", "Zero liquid discharge"],
    },
    {
      name: "Rewolute System",
      description: "Next-generation water treatment revolution technology",
      icon: Zap,
      features: [
        "Intelligent process control",
        "Self-optimizing algorithms",
        "Real-time monitoring",
        "Predictive maintenance",
      ],
      applications: ["Industrial wastewater", "Municipal treatment", "Water recycling", "Process optimization"],
      benefits: ["40% efficiency improvement", "Reduced operational costs", "Enhanced reliability", "Smart automation"],
    },
    {
      name: "Care Technology",
      description: "Comprehensive water care and protection system",
      icon: Shield,
      features: ["Multi-barrier protection", "Continuous monitoring", "Automatic adjustment", "Quality assurance"],
      applications: ["Drinking water systems", "Process water treatment", "Equipment protection", "Quality control"],
      benefits: [
        "99.9% contaminant removal",
        "Extended equipment life",
        "Consistent water quality",
        "Regulatory compliance",
      ],
    },
    {
      name: "Containment Remove System",
      description: "Advanced containment and removal technology for hazardous substances",
      icon: Recycle,
      features: ["Selective separation", "Safe containment", "Efficient removal", "Recovery capabilities"],
      applications: [
        "Hazardous waste treatment",
        "Chemical spill cleanup",
        "Contaminated site remediation",
        "Emergency response",
      ],
      benefits: ["99% removal efficiency", "Safe operation", "Environmental protection", "Cost-effective solution"],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Patent Technologies</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Innovative, patented water treatment technologies that set new industry standards for efficiency,
              sustainability, and performance.
            </p>
          </div>
        </div>
      </section>

      {/* Patent Technologies Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Patented Innovations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Breakthrough technologies developed through years of research and development, protected by international
              patents
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {patents.map((patent, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <patent.icon className="h-6 w-6 text-orange-500" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{patent.name}</CardTitle>
                      <Badge className="mt-1 bg-blue-100 text-blue-800">Patented</Badge>
                    </div>
                  </div>
                  <CardDescription className="text-base">{patent.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {patent.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-gray-600 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Applications:</h4>
                      <ul className="space-y-2">
                        {patent.applications.map((application, appIndex) => (
                          <li key={appIndex} className="text-sm text-gray-600 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            {application}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {patent.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="text-sm text-gray-600 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <Button className="w-full mt-6">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Innovation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to patent, our systematic approach to innovation ensures breakthrough technologies
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-500">1</span>
              </div>
              <CardTitle className="text-lg mb-2">Research</CardTitle>
              <CardContent className="pt-0">
                <p className="text-sm text-gray-600">
                  Identifying industry challenges and exploring innovative solutions
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-500">2</span>
              </div>
              <CardTitle className="text-lg mb-2">Development</CardTitle>
              <CardContent className="pt-0">
                <p className="text-sm text-gray-600">Designing and prototyping breakthrough technologies</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-500">3</span>
              </div>
              <CardTitle className="text-lg mb-2">Testing</CardTitle>
              <CardContent className="pt-0">
                <p className="text-sm text-gray-600">Rigorous testing and validation in real-world conditions</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-500">4</span>
              </div>
              <CardTitle className="text-lg mb-2">Patent</CardTitle>
              <CardContent className="pt-0">
                <p className="text-sm text-gray-600">Securing intellectual property protection and commercialization</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Patent Portfolio */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Patent Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive patent portfolio spans multiple countries and technology domains
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <CardContent className="pt-0">
                <div className="text-3xl font-bold text-orange-500 mb-2">25+</div>
                <div className="text-gray-600">Patents Filed</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <CardContent className="pt-0">
                <div className="text-3xl font-bold text-orange-500 mb-2">15+</div>
                <div className="text-gray-600">Patents Granted</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <CardContent className="pt-0">
                <div className="text-3xl font-bold text-orange-500 mb-2">10+</div>
                <div className="text-gray-600">Countries</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-orange-600" />
              </div>
              <CardContent className="pt-0">
                <div className="text-3xl font-bold text-orange-500 mb-2">5+</div>
                <div className="text-gray-600">Technology Areas</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Licensing & Partnership */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Technology Licensing & Partnership</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We offer licensing opportunities for our patented technologies to qualified partners worldwide. Our
                technologies can be integrated into existing systems or used as standalone solutions.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">Exclusive and non-exclusive licensing options</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">Technical support and training included</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">Customization and adaptation services</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">Ongoing research and development support</span>
                </div>
              </div>
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                Explore Licensing
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600&text=Patent+Technology"
                alt="Patent Technology"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in Our Patent Technologies?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Contact our technology team to learn more about licensing opportunities and technical specifications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 text-white hover:bg-orange-600">
              Contact Technology Team
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
            >
              Download Patent Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

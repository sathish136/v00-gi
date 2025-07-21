import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { ArrowRight, Factory, Droplets, Recycle, Zap } from "lucide-react"

export default function IndustriesPage() {
  const industries = [
    {
      name: "Textile",
      description: "Comprehensive wastewater treatment solutions for textile manufacturing",
      challenges: ["High COD/BOD levels", "Color removal", "Chemical recovery", "Water recycling"],
      solutions: ["ETP with color removal", "ZLD systems", "Chemical recovery units", "Water recycling plants"],
      icon: Factory,
      color: "bg-blue-100 text-blue-600",
    },
    {
      name: "Tannery",
      description: "Specialized treatment for leather processing wastewater",
      challenges: ["Chrome recovery", "High TDS", "Protein removal", "Odor control"],
      solutions: ["Chrome recovery systems", "Protein coagulation", "Advanced oxidation", "Odor treatment"],
      icon: Factory,
      color: "bg-orange-100 text-orange-600",
    },
    {
      name: "Dairy",
      description: "Food-grade treatment systems for dairy industry",
      challenges: ["High organic load", "Fat & grease", "CIP chemicals", "Hygiene standards"],
      solutions: ["DAF systems", "Biological treatment", "Membrane filtration", "CIP recovery"],
      icon: Droplets,
      color: "bg-green-100 text-green-600",
    },
    {
      name: "Paper & Pulp",
      description: "Sustainable solutions for paper manufacturing",
      challenges: ["Fiber recovery", "Lignin removal", "Water recycling", "Sludge management"],
      solutions: ["Fiber recovery systems", "Biological treatment", "Clarification", "Sludge dewatering"],
      icon: Recycle,
      color: "bg-purple-100 text-purple-600",
    },
    {
      name: "Pharmaceutical",
      description: "Compliant treatment for pharmaceutical wastewater",
      challenges: ["API removal", "Solvent recovery", "Sterile conditions", "Regulatory compliance"],
      solutions: ["Advanced oxidation", "Solvent recovery", "Membrane systems", "Validation support"],
      icon: Zap,
      color: "bg-red-100 text-red-600",
    },
    {
      name: "Automobile",
      description: "Treatment solutions for automotive manufacturing",
      challenges: ["Oil & grease", "Heavy metals", "Paint booth water", "Coolant treatment"],
      solutions: ["Oil-water separation", "Metal precipitation", "Paint detackification", "Coolant recycling"],
      icon: Factory,
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      name: "Food Processing",
      description: "Hygienic treatment for food industry wastewater",
      challenges: ["High BOD/COD", "Seasonal variations", "Hygiene requirements", "Nutrient recovery"],
      solutions: ["Biological treatment", "Nutrient recovery", "Membrane systems", "Disinfection"],
      icon: Droplets,
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      name: "Refinery",
      description: "Advanced treatment for petroleum refinery wastewater",
      challenges: ["Oil separation", "Phenol removal", "Sulfide treatment", "API separator"],
      solutions: ["API separators", "Biological treatment", "Advanced oxidation", "Phenol recovery"],
      icon: Factory,
      color: "bg-gray-100 text-gray-600",
    },
    {
      name: "Plastic Recycling",
      description: "Sustainable solutions for plastic recycling industry",
      challenges: ["Polymer separation", "Additive removal", "Water recycling", "Contamination control"],
      solutions: ["Flotation systems", "Filtration", "Water recycling", "Contamination removal"],
      icon: Recycle,
      color: "bg-teal-100 text-teal-600",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Industries We Serve</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Specialized water treatment solutions tailored to meet the unique challenges of diverse industrial sectors
              worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Industry Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With decades of experience across multiple industries, we understand the unique challenges each sector
              faces
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${industry.color}`}>
                      <industry.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{industry.name}</CardTitle>
                      <Badge variant="secondary" className="mt-1">
                        Industry Focus
                      </Badge>
                    </div>
                  </div>
                  <CardDescription>{industry.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-gray-900 mb-2">Key Challenges:</h4>
                      <ul className="space-y-1">
                        {industry.challenges.map((challenge, challengeIndex) => (
                          <li key={challengeIndex} className="text-sm text-gray-600 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-900 mb-2">Our Solutions:</h4>
                      <ul className="space-y-1">
                        {industry.solutions.map((solution, solutionIndex) => (
                          <li key={solutionIndex} className="text-sm text-gray-600 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-transparent" variant="outline">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Statistics */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Industry Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven track record of successful implementations across various industries
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-orange-500 mb-2">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-orange-500 mb-2">9</div>
                <div className="text-gray-600">Industries Served</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-orange-500 mb-2">15+</div>
                <div className="text-gray-600">Countries</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-orange-500 mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world examples of our successful implementations across different industries
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-t-lg flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Textile+Plant"
                  alt="Textile Plant Case Study"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <Badge className="w-fit mb-2">Textile Industry</Badge>
                <CardTitle>Major Textile Manufacturer</CardTitle>
                <CardDescription>50 MLD ZLD system with 100% water recovery</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div>• 100% water recovery achieved</div>
                  <div>• 40% reduction in water consumption</div>
                  <div>• Zero liquid discharge compliance</div>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  Read Case Study
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 rounded-t-lg flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Pharma+Plant"
                  alt="Pharmaceutical Plant Case Study"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <Badge className="w-fit mb-2">Pharmaceutical</Badge>
                <CardTitle>Leading Pharma Company</CardTitle>
                <CardDescription>Advanced treatment with API removal</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div>• 99.9% API removal efficiency</div>
                  <div>• Regulatory compliance achieved</div>
                  <div>• Solvent recovery implemented</div>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  Read Case Study
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-100 to-orange-200 rounded-t-lg flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Food+Plant"
                  alt="Food Processing Plant Case Study"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <Badge className="w-fit mb-2">Food Processing</Badge>
                <CardTitle>Food Processing Giant</CardTitle>
                <CardDescription>Hygienic treatment with nutrient recovery</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div>• 95% BOD/COD removal</div>
                  <div>• Nutrient recovery system</div>
                  <div>• Food-grade compliance</div>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  Read Case Study
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Industry Operations?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Let our industry experts design a customized water treatment solution for your specific sector
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 text-white hover:bg-orange-600">
              Schedule Industry Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
            >
              Download Industry Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

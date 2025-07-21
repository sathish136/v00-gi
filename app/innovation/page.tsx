import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { ArrowRight, Lightbulb, Zap, Shield, Recycle, Droplets, Users, Target, Beaker, Cog } from "lucide-react"

export default function InnovationPage() {
  const innovations = [
    {
      title: "BRINEX™ Technology",
      category: "Brine Recovery",
      description: "Revolutionary brine treatment and salt recovery system achieving up to 120 GPL concentration",
      icon: Droplets,
      color: "bg-blue-500",
      status: "Patented",
      impact: "90% water recovery, 50% cost reduction",
      applications: ["Textile Processing", "Chemical Industries", "Desalination Plants"],
    },
    {
      title: "REWOLUTE™ System",
      category: "Membrane Technology",
      description: "97% recovery with single skid reverse osmosis using novel membrane technology",
      icon: Recycle,
      color: "bg-green-500",
      status: "Patented",
      impact: "97% recovery rate, 40% energy savings",
      applications: ["Industrial Wastewater", "Municipal Treatment", "Water Recycling"],
    },
    {
      title: "CaRe™ Technology",
      category: "Chemical Recovery",
      description: "Caustic recovery system with novel filtration for mercerization process",
      icon: Shield,
      color: "bg-orange-500",
      status: "Patented",
      impact: "Payback < 1 year, 80% chemical savings",
      applications: ["Textile Mercerization", "Chemical Processing", "Pharmaceutical"],
    },
    {
      title: "Smart Monitoring System",
      category: "IoT & Analytics",
      description: "AI-powered monitoring and predictive maintenance for water treatment plants",
      icon: Zap,
      color: "bg-purple-500",
      status: "In Development",
      impact: "30% maintenance cost reduction",
      applications: ["Plant Automation", "Remote Monitoring", "Predictive Analytics"],
    },
  ]

  const researchAreas = [
    {
      title: "Advanced Membrane Technology",
      description: "Developing next-generation membranes with enhanced performance and durability",
      icon: Shield,
      projects: 8,
      patents: 5,
    },
    {
      title: "Energy Recovery Systems",
      description: "Innovative energy recovery solutions to reduce operational costs",
      icon: Zap,
      projects: 6,
      patents: 3,
    },
    {
      title: "Smart Automation",
      description: "AI and IoT integration for intelligent water treatment operations",
      icon: Cog,
      projects: 12,
      patents: 2,
    },
    {
      title: "Sustainable Chemistry",
      description: "Eco-friendly chemicals and processes for water treatment",
      icon: Beaker,
      projects: 10,
      patents: 4,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-4xl text-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center">
                <Lightbulb className="h-10 w-10 text-white" />
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold">Innovation at WTT</h1>
                <p className="text-xl text-blue-100 mt-2">Pioneering the Future of Water Treatment</p>
              </div>
            </div>
            <p className="text-lg text-blue-200 leading-relaxed">
              Driving technological advancement through continuous research, development, and innovation to create
              sustainable water treatment solutions for tomorrow's challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Innovation Philosophy */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Innovation Philosophy</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At WTT International, innovation is not just about technology—it's about creating solutions that address
                real-world challenges while promoting sustainability and efficiency. Our approach combines cutting-edge
                research with practical application to deliver breakthrough technologies.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Problem-Focused Research</h3>
                    <p className="text-gray-600">Identifying industry pain points and developing targeted solutions</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Collaborative Development</h3>
                    <p className="text-gray-600">Working with industry partners and research institutions</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Recycle className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Sustainable Innovation</h3>
                    <p className="text-gray-600">Environmental responsibility at the core of every innovation</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600&text=Innovation+Lab"
                alt="Innovation Lab"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Innovations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Breakthrough Innovations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our patented technologies and cutting-edge solutions that are transforming the water treatment industry
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {innovations.map((innovation, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-16 h-16 ${innovation.color} rounded-full flex items-center justify-center`}>
                      <innovation.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <CardTitle className="text-xl">{innovation.title}</CardTitle>
                        <Badge
                          className={
                            innovation.status === "Patented"
                              ? "bg-green-100 text-green-800"
                              : "bg-blue-100 text-blue-800"
                          }
                        >
                          {innovation.status}
                        </Badge>
                      </div>
                      <Badge variant="secondary">{innovation.category}</Badge>
                    </div>
                  </div>
                  <CardDescription className="text-base">{innovation.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-1">Impact</h4>
                      <p className="text-sm text-green-700">{innovation.impact}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Applications:</h4>
                      <div className="flex flex-wrap gap-2">
                        {innovation.applications.map((app, appIndex) => (
                          <Badge key={appIndex} variant="outline" className="text-xs">
                            {app}
                          </Badge>
                        ))}
                      </div>
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

      {/* Research Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Research & Development Focus</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our dedicated R&D team works on multiple fronts to advance water treatment technology
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchAreas.map((area, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <area.icon className="h-8 w-8 text-orange-500" />
                  </div>
                  <CardTitle className="text-lg">{area.title}</CardTitle>
                  <CardDescription>{area.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">{area.projects}</div>
                      <div className="text-xs text-gray-500">Active Projects</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">{area.patents}</div>
                      <div className="text-xs text-gray-500">Patents Filed</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Process */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Innovation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to commercialization, our systematic approach ensures successful innovation
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-8">
            {[
              {
                step: "1",
                title: "Ideation",
                description: "Identifying opportunities and generating innovative concepts",
              },
              { step: "2", title: "Research", description: "In-depth research and feasibility analysis" },
              { step: "3", title: "Development", description: "Prototype development and testing" },
              { step: "4", title: "Validation", description: "Pilot testing and performance validation" },
              { step: "5", title: "Commercialization", description: "Patent filing and market introduction" },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{phase.step}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{phase.title}</h3>
                <p className="text-gray-600 text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Stats */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Innovation by Numbers</h2>
            <p className="text-lg text-orange-100 max-w-3xl mx-auto">
              Our commitment to innovation reflected in our achievements and investments
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">25+</div>
              <div className="text-orange-100">Patents Filed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">15+</div>
              <div className="text-orange-100">Patents Granted</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-orange-100">R&D Projects</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">20%</div>
              <div className="text-orange-100">Revenue in R&D</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner with Our Innovation Team</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Collaborate with us on cutting-edge research or license our patented technologies for your applications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 text-white hover:bg-orange-600">
              Explore Partnerships
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
            >
              Technology Licensing
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Download, Droplets, Recycle, Shield, Zap } from "lucide-react"

export default function TechnologiesPage() {
  const technologies = [
    {
      name: "BRINEX",
      tagline: "Advanced Technology to recover Brine Solution",
      description:
        "From the Concentrate Stream. The recovered brine is up to concentration 120 GPL. Suitable to use in Textile Processing, in the place of Salt. This reduces the load to the Evaporator.",
      icon: Droplets,
      color: "bg-blue-500",
      href: "/technologies/brinex",
      features: ["120 GPL concentration", "Textile processing ready", "Reduces evaporator load", "Salt replacement"],
    },
    {
      name: "REWOLUTE",
      tagline: "97% Recovery with Single Skid Reverse Osmosis",
      description:
        "Advanced Stream of Effluent treatment with Novel Membrane Technology to facilitate Highest possible recovery Using Single Skid Reverse Osmosis system.",
      icon: Recycle,
      color: "bg-green-500",
      href: "/technologies/rewolute",
      features: ["97% recovery rate", "Single skid system", "Novel membrane technology", "Highest recovery"],
    },
    {
      name: "CaRe",
      tagline: "Caustic Recovery - A Novel Filtration Technology",
      description:
        "Enables the Reuse of Spent caustic from Mercerization process of Textile industries by incorporating specially designed membrane Technology. Eliminates suspends & colour from spent caustic.",
      icon: Shield,
      color: "bg-orange-500",
      href: "/technologies/care",
      features: ["Caustic recovery", "Membrane technology", "Color removal", "Payback < 1 year"],
    },
    {
      name: "Containment Remove System",
      tagline: "Advanced Containment and Removal Technology",
      description:
        "Specialized system for safe containment and efficient removal of hazardous substances from industrial wastewater streams.",
      icon: Zap,
      color: "bg-purple-500",
      href: "/technologies/containment-remove",
      features: ["Safe containment", "Hazardous removal", "Environmental protection", "Automated operation"],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-4xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Patent <span className="text-orange-400">Technologies</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Innovative, patented water treatment technologies that set new industry standards for efficiency and
              sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 uppercase tracking-wide">
              Our Patented Innovations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Breakthrough technologies developed through years of research and development, protected by international
              patents.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {technologies.map((tech, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-0 shadow-md">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-16 h-16 ${tech.color} rounded-full flex items-center justify-center`}>
                      <tech.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold">{tech.name}</CardTitle>
                      <Badge className="mt-1 bg-blue-100 text-blue-800">Patented</Badge>
                    </div>
                  </div>
                  <CardDescription className="text-base font-medium text-gray-700">{tech.tagline}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed">{tech.description}</p>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {tech.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button asChild className="flex-1">
                      <Link href={tech.href}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Brochure
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Stats */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">25+</div>
              <div className="text-gray-600 uppercase tracking-wide">Patents Filed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">15+</div>
              <div className="text-gray-600 uppercase tracking-wide">Patents Granted</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">10+</div>
              <div className="text-gray-600 uppercase tracking-wide">Countries</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">5+</div>
              <div className="text-gray-600 uppercase tracking-wide">Technology Areas</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

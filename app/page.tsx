import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import HeroSlider from "@/components/hero-slider"
import {
  ArrowRight,
  Droplets,
  Factory,
  Recycle,
  Shield,
  Zap,
  CheckCircle,
  Award,
  Globe,
  Users,
  Star,
  TrendingUp,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Company Description */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 uppercase tracking-wide">
              SUSTAINABLE SOLUTIONS IN WATER & ENVIRONMENT
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              WTT International is a one-stop utility partner to both industrial and commercial segments, helping
              customers achieve better resource productivity and bottom lines while maintaining a better environment.
              Our comprehensive water treatment solutions ensure compliance, sustainability, and operational excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 uppercase tracking-wide">
              Our Core Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive water treatment solutions designed to meet diverse industrial requirements
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Service 1 */}
            <div className="text-center">
              <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-orange-600 transition-colors">
                <Droplets className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Water Treatment</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive water treatment solutions including ETP, STP, and advanced filtration systems for
                industrial applications.
              </p>
            </div>

            {/* Service 2 */}
            <div className="text-center">
              <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-orange-600 transition-colors">
                <Recycle className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Zero Liquid Discharge</h3>
              <p className="text-gray-600 leading-relaxed">
                Advanced ZLD systems for maximum water recovery and environmental compliance with zero waste discharge.
              </p>
            </div>

            {/* Service 3 */}
            <div className="text-center">
              <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-orange-600 transition-colors">
                <Factory className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Industrial Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                Customized treatment solutions for diverse industries including textile, pharmaceutical, and chemical
                sectors.
              </p>
            </div>

            {/* Service 4 */}
            <div className="text-center">
              <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-orange-600 transition-colors">
                <Shield className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Environmental Compliance</h3>
              <p className="text-gray-600 leading-relaxed">
                Ensuring regulatory compliance and environmental protection through advanced treatment technologies.
              </p>
            </div>

            {/* Service 5 */}
            <div className="text-center">
              <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-orange-600 transition-colors">
                <Zap className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Energy Efficient Systems</h3>
              <p className="text-gray-600 leading-relaxed">
                Energy-optimized treatment systems that reduce operational costs while maintaining high performance
                standards.
              </p>
            </div>

            {/* Service 6 */}
            <div className="text-center">
              <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-orange-600 transition-colors">
                <CheckCircle className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">O&M Services</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive operation and maintenance services ensuring optimal performance and extended equipment
                life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-wide">
              Our Solutions Portfolio
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              From pre-treatment to zero liquid discharge, we offer complete water treatment ecosystems
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-shadow text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-lg mb-3">ETP Systems</CardTitle>
              <CardContent className="pt-0">
                <p className="text-gray-600 text-sm mb-4">
                  Effluent Treatment Plants for industrial wastewater treatment with high efficiency.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/solutions">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Recycle className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-lg mb-3">ZLD Systems</CardTitle>
              <CardContent className="pt-0">
                <p className="text-gray-600 text-sm mb-4">
                  Zero Liquid Discharge systems for maximum water recovery and environmental compliance.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/solutions">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <CardTitle className="text-lg mb-3">MBR Technology</CardTitle>
              <CardContent className="pt-0">
                <p className="text-gray-600 text-sm mb-4">
                  Membrane Bio Reactor systems for superior effluent quality and compact design.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/solutions">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-orange-600" />
              </div>
              <CardTitle className="text-lg mb-3">RO Systems</CardTitle>
              <CardContent className="pt-0">
                <p className="text-gray-600 text-sm mb-4">
                  Reverse Osmosis systems for water purification and desalination applications.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/solutions">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Patent Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 uppercase tracking-wide">
              Patent Technologies
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Innovative, patented technologies that set new industry standards
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-t-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Droplets className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-800">BRINEX™</h3>
                </div>
              </div>
              <CardHeader>
                <Badge className="w-fit mb-2 bg-blue-100 text-blue-800">Patented</Badge>
                <CardTitle>Advanced Brine Recovery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Recover brine solution up to 120 GPL concentration for textile processing applications.
                </p>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/technologies/brinex">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 rounded-t-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Recycle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-800">REWOLUTE™</h3>
                </div>
              </div>
              <CardHeader>
                <Badge className="w-fit mb-2 bg-green-100 text-green-800">Patented</Badge>
                <CardTitle>97% Recovery RO System</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Single skid reverse osmosis system with novel membrane technology for highest recovery.
                </p>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/technologies/rewolute">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-100 to-orange-200 rounded-t-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-orange-800">CaRe™</h3>
                </div>
              </div>
              <CardHeader>
                <Badge className="w-fit mb-2 bg-orange-100 text-orange-800">Patented</Badge>
                <CardTitle>Caustic Recovery System</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Novel filtration technology for caustic recovery from mercerization process.
                </p>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/technologies/care">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 uppercase tracking-wide">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized solutions for diverse industrial sectors worldwide
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Textile", icon: Factory, color: "bg-blue-500" },
              { name: "Pharmaceutical", icon: Shield, color: "bg-green-500" },
              { name: "Food & Beverage", icon: Droplets, color: "bg-orange-500" },
              { name: "Chemical", icon: Zap, color: "bg-purple-500" },
              { name: "Automotive", icon: Factory, color: "bg-red-500" },
              { name: "Paper & Pulp", icon: Recycle, color: "bg-teal-500" },
              { name: "Tannery", icon: Shield, color: "bg-indigo-500" },
              { name: "Dairy", icon: Droplets, color: "bg-pink-500" },
            ].map((industry, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center p-4">
                <div
                  className={`w-12 h-12 ${industry.color} rounded-full flex items-center justify-center mx-auto mb-3`}
                >
                  <industry.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900">{industry.name}</h3>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/industries">
                View All Industries
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 uppercase tracking-wide">
              Why Choose WTT International?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our unique combination of expertise, technology, and commitment sets us apart
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 uppercase tracking-wide">Innovation</h3>
              <p className="text-gray-600">
                Cutting-edge R&D and patented technologies that deliver superior performance and efficiency.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 uppercase tracking-wide">Expertise</h3>
              <p className="text-gray-600">
                Highly skilled team of engineers and technicians with decades of experience in water treatment.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 uppercase tracking-wide">Global Reach</h3>
              <p className="text-gray-600">
                International presence with local support and understanding of regional regulatory requirements.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 uppercase tracking-wide">Quality</h3>
              <p className="text-gray-600">
                ISO certified processes and rigorous quality control ensuring reliable and sustainable solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-wide">Our Track Record</h2>
            <p className="text-lg text-orange-100 max-w-3xl mx-auto">
              Numbers that speak for our commitment to excellence and customer satisfaction
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-orange-100 uppercase tracking-wide">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">20+</div>
              <div className="text-orange-100 uppercase tracking-wide">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">15+</div>
              <div className="text-orange-100 uppercase tracking-wide">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">98%</div>
              <div className="text-orange-100 uppercase tracking-wide">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 uppercase tracking-wide">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trusted by leading companies across various industries
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "WTT International delivered an exceptional ZLD system that exceeded our expectations. Their technical
                expertise and support throughout the project was outstanding."
              </p>
              <div className="font-semibold text-gray-900">- Leading Textile Manufacturer</div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "The REWOLUTE system has transformed our water treatment process with 97% recovery rate. Excellent ROI
                and environmental benefits."
              </p>
              <div className="font-semibold text-gray-900">- Pharmaceutical Company</div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Professional service from design to commissioning. Their O&M support ensures our plant runs at optimal
                efficiency 24/7."
              </p>
              <div className="font-semibold text-gray-900">- Chemical Processing Plant</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest News/Updates */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 uppercase tracking-wide">
              Latest Updates
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stay updated with our latest innovations and industry insights
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-t-lg flex items-center justify-center">
                <TrendingUp className="h-16 w-16 text-blue-600" />
              </div>
              <CardHeader>
                <Badge className="w-fit mb-2">Innovation</Badge>
                <CardTitle>New Patent Filed for Advanced Membrane Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  WTT International files new patent for breakthrough membrane technology achieving 99% efficiency.
                </p>
                <Button variant="outline" size="sm">
                  Read More
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 rounded-t-lg flex items-center justify-center">
                <Award className="h-16 w-16 text-green-600" />
              </div>
              <CardHeader>
                <Badge className="w-fit mb-2">Achievement</Badge>
                <CardTitle>ISO 14001:2015 Certification Renewed</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Successfully renewed environmental management system certification demonstrating our commitment.
                </p>
                <Button variant="outline" size="sm">
                  Read More
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-100 to-orange-200 rounded-t-lg flex items-center justify-center">
                <Globe className="h-16 w-16 text-orange-600" />
              </div>
              <CardHeader>
                <Badge className="w-fit mb-2">Expansion</Badge>
                <CardTitle>New International Projects Launched</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Expanding operations with major water treatment projects in Southeast Asia and Middle East.
                </p>
                <Button variant="outline" size="sm">
                  Read More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Water Treatment Process?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Contact our experts today for a customized solution that meets your specific requirements and environmental
            goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 text-white hover:bg-orange-600 px-8 py-4 text-lg" asChild>
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg bg-transparent"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

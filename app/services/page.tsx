import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import {
  ArrowRight,
  Settings,
  Users,
  Award,
  Clock,
  Shield,
  Cog,
  Zap,
  Monitor,
  Beaker,
  HardHat,
  FileText,
} from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      title: "Operation & Maintenance (O&M)",
      description: "Comprehensive plant operation and maintenance services for optimal performance",
      icon: Settings,
      features: [
        "24/7 Remote Monitoring",
        "Preventive Maintenance Programs",
        "Emergency Response Services",
        "Performance Optimization",
        "Spare Parts Management",
        "Technical Support & Training",
      ],
      benefits: ["Reduced downtime", "Extended equipment life", "Cost optimization", "Compliance assurance"],
    },
    {
      title: "Plant Automation & SCADA",
      description: "Advanced automation solutions for intelligent water treatment operations",
      icon: Monitor,
      features: [
        "SCADA System Integration",
        "PLC Programming & Configuration",
        "HMI Development",
        "Process Control Systems",
        "Data Acquisition Systems",
        "Remote Monitoring Solutions",
      ],
      benefits: ["Improved efficiency", "Real-time monitoring", "Reduced manual intervention", "Data-driven decisions"],
    },
    {
      title: "Plant Upgradation",
      description: "Modernization and capacity enhancement of existing treatment facilities",
      icon: Zap,
      features: [
        "Capacity Enhancement",
        "Technology Upgrades",
        "Efficiency Improvements",
        "Compliance Upgrades",
        "Energy Optimization",
        "Process Modernization",
      ],
      benefits: ["Increased capacity", "Better efficiency", "Regulatory compliance", "Energy savings"],
    },
    {
      title: "CETP Services",
      description: "Common Effluent Treatment Plant design, operation, and management",
      icon: Cog,
      features: [
        "CETP Design & Engineering",
        "Multi-industry Treatment",
        "Centralized Operations",
        "Cost Sharing Models",
        "Regulatory Compliance",
        "Cluster Management",
      ],
      benefits: [
        "Cost-effective treatment",
        "Shared infrastructure",
        "Compliance assurance",
        "Environmental protection",
      ],
    },
    {
      title: "Research & Development",
      description: "Cutting-edge R&D for next-generation water treatment solutions",
      icon: Beaker,
      features: [
        "Advanced Material Research",
        "Process Optimization Studies",
        "Pilot Plant Development",
        "Technology Innovation",
        "Custom Solution Development",
        "Performance Testing",
      ],
      benefits: ["Innovation leadership", "Custom solutions", "Technology advancement", "Competitive advantage"],
    },
    {
      title: "Design & Engineering",
      description: "Complete engineering solutions from concept to detailed design",
      icon: FileText,
      features: [
        "Process Design & Engineering",
        "3D Modeling & Simulation",
        "Equipment Selection & Sizing",
        "Detailed Engineering Drawings",
        "Project Management",
        "Regulatory Approvals",
      ],
      benefits: ["Optimized design", "Cost-effective solutions", "Regulatory compliance", "Project success"],
    },
    {
      title: "Technical Consulting",
      description: "Expert consulting services for water treatment challenges and solutions",
      icon: Users,
      features: [
        "Feasibility Studies",
        "Technology Selection",
        "Process Optimization",
        "Environmental Impact Assessment",
        "Cost-Benefit Analysis",
        "Regulatory Consulting",
      ],
      benefits: ["Expert guidance", "Risk mitigation", "Informed decisions", "Compliance assurance"],
    },
    {
      title: "Installation & Commissioning",
      description: "Professional installation and commissioning services for seamless project delivery",
      icon: HardHat,
      features: [
        "Site Preparation & Planning",
        "Equipment Installation",
        "Piping & Instrumentation",
        "System Integration & Testing",
        "Performance Validation",
        "Training & Handover",
      ],
      benefits: ["Professional installation", "Quality assurance", "Timely delivery", "Smooth operations"],
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
              Our <span className="text-orange-400">Services</span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Comprehensive water treatment services from design to operation, ensuring optimal performance and
              compliance throughout the project lifecycle.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 uppercase tracking-wide">
              Complete Service Portfolio
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From initial consultation to ongoing maintenance, we provide end-to-end services for all your water
              treatment needs with expert support at every stage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-0 shadow-md">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2 p-2">
                            <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <Badge key={benefitIndex} variant="secondary" className="text-xs">
                            {benefit}
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

      {/* Service Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 uppercase tracking-wide">
              Our Service Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach ensuring successful project delivery and long-term performance optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 uppercase tracking-wide">Assessment</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive site assessment, requirement analysis, and feasibility studies to understand your specific
                needs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 uppercase tracking-wide">Design</h3>
              <p className="text-gray-600 text-sm">
                Custom engineering design, solution development, and detailed planning tailored to your requirements.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 uppercase tracking-wide">Implementation</h3>
              <p className="text-gray-600 text-sm">
                Professional installation, commissioning, system integration with thorough testing and validation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 uppercase tracking-wide">Support</h3>
              <p className="text-gray-600 text-sm">
                Ongoing maintenance, monitoring, technical support, and optimization for sustained performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
                Why Choose Our Services?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">24/7 Support</h3>
                    <p className="text-gray-600">
                      Round-the-clock technical support and emergency response for uninterrupted operations and peace of
                      mind.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Expert Team</h3>
                    <p className="text-gray-600">
                      Highly skilled engineers and technicians with decades of experience in water treatment across
                      industries.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Quality Assurance</h3>
                    <p className="text-gray-600">
                      ISO certified processes and rigorous quality control ensuring reliable service delivery and
                      compliance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Proven Track Record</h3>
                    <p className="text-gray-600">
                      500+ successful projects across diverse industries with 98% client satisfaction rate and long-term
                      partnerships.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600&text=Service+Team+at+Work"
                alt="Service Team"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Statistics */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Service Excellence by Numbers</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to service excellence reflected in our performance metrics
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-orange-500 mb-2">500+</div>
              <div className="text-gray-600">Projects Serviced</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-orange-500 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-orange-500 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-orange-500 mb-2">15+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Professional Water Treatment Services?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Contact our service team to discuss your requirements and get a customized service proposal tailored to your
            needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 text-white hover:bg-orange-600 px-8 py-4 text-lg">
              Request Service Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg bg-transparent"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

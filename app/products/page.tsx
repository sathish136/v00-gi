import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Settings, Wrench, Package, Beaker, Download, Eye } from "lucide-react"

export default function ProductsPage() {
  const featuredProducts = [
    {
      name: "Advanced MBR System",
      category: "Membrane Technology",
      description: "High-efficiency membrane bioreactor for superior treatment with compact footprint design",
      image: "/placeholder.svg?height=300&width=400&text=MBR+System",
      features: ["Compact footprint design", "99% removal efficiency", "Automated operation", "Low maintenance"],
      applications: ["Industrial wastewater", "Municipal treatment", "Water recycling"],
      capacity: "10 KLD - 50 MLD",
      efficiency: "99%",
      badge: "Best Seller",
    },
    {
      name: "ZLD Evaporation System",
      category: "Zero Liquid Discharge",
      description: "Complete zero liquid discharge system for maximum water recovery and salt crystallization",
      image: "/placeholder.svg?height=300&width=400&text=ZLD+System",
      features: [
        "100% water recovery",
        "Energy efficient design",
        "Crystalline salt recovery",
        "Environmental compliance",
      ],
      applications: ["Textile industry", "Chemical processing", "Pharmaceutical"],
      capacity: "50 KLD - 5 MLD",
      efficiency: "100%",
      badge: "Eco-Friendly",
    },
    {
      name: "Industrial RO Plant",
      category: "Reverse Osmosis",
      description: "High-capacity reverse osmosis systems with energy recovery and advanced membrane technology",
      image: "/placeholder.svg?height=300&width=400&text=RO+Plant",
      features: ["High recovery rate", "Energy recovery system", "Advanced membrane technology", "Remote monitoring"],
      applications: ["Water purification", "Desalination", "Process water"],
      capacity: "1000 LPH - 10 MLH",
      efficiency: "95-98%",
      badge: "High Performance",
    },
    {
      name: "DAF System",
      category: "Primary Treatment",
      description: "Dissolved Air Flotation system for efficient solid-liquid separation with minimal footprint",
      image: "/placeholder.svg?height=300&width=400&text=DAF+System",
      features: ["High efficiency separation", "Low sludge production", "Compact design", "Automated operation"],
      applications: ["Oil & grease removal", "Suspended solids", "Pre-treatment"],
      capacity: "5 KLD - 100 MLD",
      efficiency: "95-99%",
      badge: "Proven Technology",
    },
    {
      name: "Clarifier System",
      category: "Primary Treatment",
      description: "Advanced settling systems with lamella technology for superior clarification performance",
      image: "/placeholder.svg?height=300&width=400&text=Clarifier+System",
      features: ["High surface area", "Improved settling", "Space efficient", "Low maintenance"],
      applications: ["Primary clarification", "Secondary treatment", "Tertiary polishing"],
      capacity: "10 KLD - 200 MLD",
      efficiency: "90-95%",
      badge: "Space Efficient",
    },
    {
      name: "Filter Press System",
      category: "Sludge Treatment",
      description: "High-pressure filter press for efficient sludge dewatering and volume reduction",
      image: "/placeholder.svg?height=300&width=400&text=Filter+Press",
      features: ["High dewatering efficiency", "Automated operation", "Low operating costs", "Durable construction"],
      applications: ["Sludge dewatering", "Solid-liquid separation", "Waste minimization"],
      capacity: "1-50 m³/hr",
      efficiency: "85-95%",
      badge: "Cost Effective",
    },
  ]

  const productCategories = [
    {
      title: "Wastewater Treatment Systems",
      description: "Complete integrated systems for industrial wastewater treatment",
      icon: Settings,
      products: [
        { name: "ETP (Effluent Treatment Plant)", capacity: "10 KLD - 50 MLD", efficiency: "95-99%" },
        { name: "STP (Sewage Treatment Plant)", capacity: "5 KLD - 100 MLD", efficiency: "90-98%" },
        { name: "CETP (Common Effluent Treatment Plant)", capacity: "50 KLD - 500 MLD", efficiency: "95-99%" },
        { name: "ZLD (Zero Liquid Discharge) Systems", capacity: "50 KLD - 5 MLD", efficiency: "100%" },
        { name: "MBR (Membrane Bio Reactor) Systems", capacity: "10 KLD - 100 MLD", efficiency: "99%" },
        { name: "RO (Reverse Osmosis) Plants", capacity: "1000 LPH - 10 MLH", efficiency: "95-98%" },
      ],
    },
    {
      title: "Treatment Equipment",
      description: "High-quality equipment for water and wastewater treatment processes",
      icon: Wrench,
      products: [
        { name: "Clarifiers & Settlers", capacity: "10 KLD - 200 MLD", efficiency: "90-95%" },
        { name: "DAF (Dissolved Air Flotation) Units", capacity: "5 KLD - 100 MLD", efficiency: "95-99%" },
        { name: "Filter Press Systems", capacity: "1-50 m³/hr", efficiency: "85-95%" },
        { name: "Centrifuge Systems", capacity: "5-100 m³/hr", efficiency: "90-98%" },
        { name: "Evaporators & Crystallizers", capacity: "1-50 KLD", efficiency: "99%" },
        { name: "Membrane Modules", capacity: "Various", efficiency: "95-99%" },
      ],
    },
    {
      title: "System Accessories",
      description: "Essential accessories and components for treatment systems",
      icon: Package,
      products: [
        { name: "Pumps & Blowers", capacity: "Various", efficiency: "80-95%" },
        { name: "Control Panels & Automation", capacity: "Customized", efficiency: "99%" },
        { name: "Piping & Valves", capacity: "Various", efficiency: "100%" },
        { name: "Sensors & Monitoring Equipment", capacity: "Real-time", efficiency: "99%" },
        { name: "Spare Parts & Components", capacity: "OEM Quality", efficiency: "100%" },
        { name: "Maintenance Kits", capacity: "Complete", efficiency: "Optimized" },
      ],
    },
    {
      title: "Specialty Chemicals",
      description: "Advanced chemicals for optimal treatment performance",
      icon: Beaker,
      products: [
        { name: "Coagulants & Flocculants", capacity: "As required", efficiency: "High" },
        { name: "pH Adjustment Chemicals", capacity: "As required", efficiency: "Precise" },
        { name: "Biocides & Disinfectants", capacity: "As required", efficiency: "99.9%" },
        { name: "Scale & Corrosion Inhibitors", capacity: "As required", efficiency: "Preventive" },
        { name: "Membrane Cleaning Chemicals", capacity: "As required", efficiency: "Restorative" },
        { name: "Sludge Treatment Chemicals", capacity: "As required", efficiency: "Optimized" },
      ],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Comprehensive range of water treatment systems, equipment, accessories, and specialty chemicals for all
              your industrial needs.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most popular and innovative water treatment solutions with proven performance
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-4 left-4 bg-orange-500">{product.badge}</Badge>
                  <Badge variant="secondary" className="absolute top-4 right-4">
                    {product.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-gray-900">Capacity:</span>
                        <div className="text-orange-600">{product.capacity}</div>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">Efficiency:</span>
                        <div className="text-green-600">{product.efficiency}</div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {product.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-gray-600 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                        <Eye className="h-4 w-4 mr-2" />
                        Details
                      </Button>
                      <Button size="sm" className="flex-1 bg-orange-500 hover:bg-orange-600">
                        <Download className="h-4 w-4 mr-2" />
                        Brochure
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Product Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From complete treatment systems to specialty chemicals, we provide everything you need for effective water
              treatment
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {productCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <category.icon className="h-6 w-6 text-orange-500" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.products.map((product, productIndex) => (
                      <div
                        key={productIndex}
                        className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors"
                      >
                        <div>
                          <div className="font-medium text-gray-900 text-sm">{product.name}</div>
                          <div className="text-xs text-gray-500">Capacity: {product.capacity}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-gray-500">Efficiency</div>
                          <div className="text-sm font-medium text-green-600">{product.efficiency}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-6">
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                    <Button size="sm" className="flex-1 bg-orange-500 hover:bg-orange-600">
                      <Download className="h-4 w-4 mr-2" />
                      Catalog
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technical Specifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed specifications and performance parameters for our products
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">System Capacities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                    <span className="font-medium">ETP Systems</span>
                    <span className="text-orange-600 font-semibold">10 KLD - 50 MLD</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                    <span className="font-medium">STP Systems</span>
                    <span className="text-orange-600 font-semibold">5 KLD - 100 MLD</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                    <span className="font-medium">RO Plants</span>
                    <span className="text-orange-600 font-semibold">1000 LPH - 10 MLH</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg">
                    <span className="font-medium">ZLD Systems</span>
                    <span className="text-orange-600 font-semibold">50 KLD - 5 MLD</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-teal-50 rounded-lg">
                    <span className="font-medium">MBR Systems</span>
                    <span className="text-orange-600 font-semibold">10 KLD - 100 MLD</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Performance Standards</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                    <span className="font-medium">BOD Removal</span>
                    <span className="text-green-600 font-semibold">95-99%</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                    <span className="font-medium">COD Removal</span>
                    <span className="text-green-600 font-semibold">90-98%</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                    <span className="font-medium">TSS Removal</span>
                    <span className="text-green-600 font-semibold">98-99.5%</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                    <span className="font-medium">TDS Reduction</span>
                    <span className="text-green-600 font-semibold">95-99%</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                    <span className="font-medium">Water Recovery</span>
                    <span className="text-green-600 font-semibold">85-100%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Custom Product Solutions?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Our engineering team can design and manufacture custom products to meet your specific requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 text-white hover:bg-orange-600">
              Request Custom Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
            >
              Download Product Catalog
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

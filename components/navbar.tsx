"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  ChevronDown,
  Menu,
  ArrowRight,
  Droplets,
  Recycle,
  Shield,
  Settings,
  Wrench,
  Package,
  Beaker,
  Monitor,
  Zap,
  Cog,
  FileText,
  User,
  Globe,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="WTT International" width={160} height={80} className="h-16 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Solutions Dropdown - Now includes Services */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-gray-700 hover:text-gray-900 font-medium text-sm uppercase tracking-wide transition-colors py-2 hover:bg-gray-50"
                onMouseEnter={() => setActiveDropdown("solutions")}
              >
                SOLUTIONS
                <ChevronDown className="h-4 w-4" />
              </button>
              <div
                className={`absolute top-full left-0 w-[800px] bg-white border border-gray-100 shadow-xl rounded-lg mt-1 transition-all duration-200 ${
                  activeDropdown === "solutions" ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onMouseEnter={() => setActiveDropdown("solutions")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Water Treatment Solutions</h3>
                    <p className="text-sm text-gray-600">
                      Comprehensive treatment systems for all industrial applications
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-8">
                    {/* Primary Treatment */}
                    <div className="space-y-1">
                      <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide mb-4 text-orange-600">
                        Primary Treatment
                      </h4>
                      <Link
                        href="/solutions/etp"
                        className="block p-3 rounded-lg hover:bg-orange-50 transition-all group"
                      >
                        <div className="font-medium text-gray-900 group-hover:text-orange-600 mb-1">ETP Systems</div>
                        <div className="text-xs text-gray-500">Effluent treatment plants for industrial wastewater</div>
                      </Link>
                      <Link
                        href="/solutions/stp"
                        className="block p-3 rounded-lg hover:bg-orange-50 transition-all group"
                      >
                        <div className="font-medium text-gray-900 group-hover:text-orange-600 mb-1">STP Systems</div>
                        <div className="text-xs text-gray-500">Sewage treatment for municipal applications</div>
                      </Link>
                      <Link
                        href="/solutions/cetp"
                        className="block p-3 rounded-lg hover:bg-orange-50 transition-all group"
                      >
                        <div className="font-medium text-gray-900 group-hover:text-orange-600 mb-1">CETP Systems</div>
                        <div className="text-xs text-gray-500">Common effluent treatment for industrial clusters</div>
                      </Link>
                    </div>

                    {/* Advanced Treatment */}
                    <div className="space-y-1">
                      <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide mb-4 text-orange-600">
                        Advanced Treatment
                      </h4>
                      <Link
                        href="/solutions/zld"
                        className="block p-3 rounded-lg hover:bg-orange-50 transition-all group"
                      >
                        <div className="font-medium text-gray-900 group-hover:text-orange-600 mb-1">ZLD Systems</div>
                        <div className="text-xs text-gray-500">Zero liquid discharge for maximum recovery</div>
                      </Link>
                      <Link
                        href="/solutions/mbr"
                        className="block p-3 rounded-lg hover:bg-orange-50 transition-all group"
                      >
                        <div className="font-medium text-gray-900 group-hover:text-orange-600 mb-1">MBR Technology</div>
                        <div className="text-xs text-gray-500">Membrane bioreactor for superior quality</div>
                      </Link>
                      <Link
                        href="/solutions/ro"
                        className="block p-3 rounded-lg hover:bg-orange-50 transition-all group"
                      >
                        <div className="font-medium text-gray-900 group-hover:text-orange-600 mb-1">RO Systems</div>
                        <div className="text-xs text-gray-500">Reverse osmosis for water purification</div>
                      </Link>
                    </div>

                    {/* Services */}
                    <div className="space-y-1">
                      <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide mb-4 text-blue-600">
                        Services
                      </h4>
                      <Link href="/services/om" className="block p-2 rounded-lg hover:bg-blue-50 transition-all group">
                        <div className="flex items-center gap-2">
                          <Settings className="h-3 w-3 text-blue-500" />
                          <div className="font-medium text-gray-900 group-hover:text-blue-600 text-xs">
                            Operation & Maintenance (O&M)
                          </div>
                        </div>
                      </Link>
                      <Link
                        href="/services/automation"
                        className="block p-2 rounded-lg hover:bg-blue-50 transition-all group"
                      >
                        <div className="flex items-center gap-2">
                          <Monitor className="h-3 w-3 text-blue-500" />
                          <div className="font-medium text-gray-900 group-hover:text-blue-600 text-xs">
                            Plant Automation & SCADA
                          </div>
                        </div>
                      </Link>
                      <Link
                        href="/services/upgradation"
                        className="block p-2 rounded-lg hover:bg-blue-50 transition-all group"
                      >
                        <div className="flex items-center gap-2">
                          <Zap className="h-3 w-3 text-blue-500" />
                          <div className="font-medium text-gray-900 group-hover:text-blue-600 text-xs">
                            Plant Upgradation
                          </div>
                        </div>
                      </Link>
                      <Link
                        href="/services/cetp"
                        className="block p-2 rounded-lg hover:bg-blue-50 transition-all group"
                      >
                        <div className="flex items-center gap-2">
                          <Cog className="h-3 w-3 text-blue-500" />
                          <div className="font-medium text-gray-900 group-hover:text-blue-600 text-xs">
                            CETP Services
                          </div>
                        </div>
                      </Link>
                      <Link href="/services/rd" className="block p-2 rounded-lg hover:bg-blue-50 transition-all group">
                        <div className="flex items-center gap-2">
                          <Beaker className="h-3 w-3 text-blue-500" />
                          <div className="font-medium text-gray-900 group-hover:text-blue-600 text-xs">
                            Research & Development
                          </div>
                        </div>
                      </Link>
                      <Link
                        href="/services/design"
                        className="block p-2 rounded-lg hover:bg-blue-50 transition-all group"
                      >
                        <div className="flex items-center gap-2">
                          <FileText className="h-3 w-3 text-blue-500" />
                          <div className="font-medium text-gray-900 group-hover:text-blue-600 text-xs">
                            Design & Engineering
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-100 flex justify-between">
                    <Link
                      href="/solutions"
                      className="inline-flex items-center text-sm font-medium text-orange-600 hover:text-orange-700"
                    >
                      View All Solutions
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                    <Link
                      href="/services"
                      className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
                    >
                      View All Services
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-gray-700 hover:text-gray-900 font-medium text-sm uppercase tracking-wide transition-colors py-2 hover:bg-gray-50"
                onMouseEnter={() => setActiveDropdown("products")}
              >
                PRODUCTS
                <ChevronDown className="h-4 w-4" />
              </button>
              <div
                className={`absolute top-full left-0 w-[600px] bg-white border border-gray-100 shadow-xl rounded-lg mt-1 transition-all duration-200 ${
                  activeDropdown === "products" ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onMouseEnter={() => setActiveDropdown("products")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Our Product Range</h3>
                    <p className="text-sm text-gray-600">
                      Complete range of water treatment systems, equipment, and accessories
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide mb-4 text-orange-600">
                        Treatment Systems
                      </h4>
                      <Link
                        href="/products/treatment-systems"
                        className="block p-3 rounded-lg hover:bg-blue-50 transition-all group border border-transparent hover:border-blue-200"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                            <Settings className="h-4 w-4 text-blue-600" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 group-hover:text-blue-600 mb-1 text-sm">
                              Wastewater Treatment
                            </div>
                            <div className="text-xs text-gray-500">ETP, STP, ZLD, MBR systems</div>
                          </div>
                        </div>
                      </Link>
                      <Link
                        href="/products/equipment"
                        className="block p-3 rounded-lg hover:bg-green-50 transition-all group border border-transparent hover:border-green-200"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors">
                            <Wrench className="h-4 w-4 text-green-600" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 group-hover:text-green-600 mb-1 text-sm">
                              Treatment Equipment
                            </div>
                            <div className="text-xs text-gray-500">Clarifiers, DAF, filter press systems</div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide mb-4 text-orange-600">
                        Components & Chemicals
                      </h4>
                      <Link
                        href="/products/accessories"
                        className="block p-3 rounded-lg hover:bg-purple-50 transition-all group border border-transparent hover:border-purple-200"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-purple-200 transition-colors">
                            <Package className="h-4 w-4 text-purple-600" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 group-hover:text-purple-600 mb-1 text-sm">
                              System Accessories
                            </div>
                            <div className="text-xs text-gray-500">Pumps, valves, control panels</div>
                          </div>
                        </div>
                      </Link>
                      <Link
                        href="/products/chemicals"
                        className="block p-3 rounded-lg hover:bg-orange-50 transition-all group border border-transparent hover:border-orange-200"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-200 transition-colors">
                            <Beaker className="h-4 w-4 text-orange-600" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 group-hover:text-orange-600 mb-1 text-sm">
                              Specialty Chemicals
                            </div>
                            <div className="text-xs text-gray-500">Coagulants, flocculants, biocides</div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <Link
                      href="/products"
                      className="inline-flex items-center text-sm font-medium text-orange-600 hover:text-orange-700"
                    >
                      View All Products
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Technologies Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-gray-700 hover:text-gray-900 font-medium text-sm uppercase tracking-wide transition-colors py-2 hover:bg-gray-50"
                onMouseEnter={() => setActiveDropdown("technologies")}
              >
                TECHNOLOGIES
                <ChevronDown className="h-4 w-4" />
              </button>
              <div
                className={`absolute top-full left-0 w-[500px] bg-white border border-gray-100 shadow-xl rounded-lg mt-1 transition-all duration-200 ${
                  activeDropdown === "technologies" ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onMouseEnter={() => setActiveDropdown("technologies")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Patent Technologies</h3>
                    <p className="text-sm text-gray-600">Innovative, patented solutions for advanced water treatment</p>
                  </div>
                  <div className="space-y-2">
                    <Link
                      href="/technologies/brinex"
                      className="block p-4 rounded-lg hover:bg-blue-50 transition-all group border border-transparent hover:border-blue-200"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                          <Droplets className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 group-hover:text-blue-600 mb-1">
                            BRINEX™ Technology
                          </div>
                          <div className="text-xs text-gray-500 leading-relaxed">
                            Advanced brine recovery up to 120 GPL concentration for textile processing
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="/technologies/rewolute"
                      className="block p-4 rounded-lg hover:bg-green-50 transition-all group border border-transparent hover:border-green-200"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors">
                          <Recycle className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 group-hover:text-green-600 mb-1">
                            REWOLUTE™ System
                          </div>
                          <div className="text-xs text-gray-500 leading-relaxed">
                            97% recovery with single skid reverse osmosis using novel membrane technology
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="/technologies/care"
                      className="block p-4 rounded-lg hover:bg-orange-50 transition-all group border border-transparent hover:border-orange-200"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-200 transition-colors">
                          <Shield className="h-5 w-5 text-orange-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 group-hover:text-orange-600 mb-1">
                            CaRe™ Technology
                          </div>
                          <div className="text-xs text-gray-500 leading-relaxed">
                            Caustic recovery system with novel filtration for mercerization process
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <Link
                      href="/technologies"
                      className="inline-flex items-center text-sm font-medium text-orange-600 hover:text-orange-700"
                    >
                      View All Technologies
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Innovation Link */}
            <Link
              href="/innovation"
              className="text-gray-700 hover:text-gray-900 font-medium text-sm uppercase tracking-wide transition-colors hover:bg-gray-50 py-2 px-3 rounded-lg"
            >
              INNOVATION
            </Link>

            {/* Industries Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-gray-700 hover:text-gray-900 font-medium text-sm uppercase tracking-wide transition-colors py-2 hover:bg-gray-50"
                onMouseEnter={() => setActiveDropdown("industries")}
              >
                INDUSTRIES
                <ChevronDown className="h-4 w-4" />
              </button>
              <div
                className={`absolute top-full left-0 w-[600px] bg-white border border-gray-100 shadow-xl rounded-lg mt-1 transition-all duration-200 ${
                  activeDropdown === "industries" ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onMouseEnter={() => setActiveDropdown("industries")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Industries We Serve</h3>
                    <p className="text-sm text-gray-600">
                      Specialized water treatment solutions for diverse industrial sectors
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide mb-4 text-orange-600">
                        Manufacturing
                      </h4>
                      <Link
                        href="/industries/textile"
                        className="block p-3 rounded-lg hover:bg-blue-50 transition-all group"
                      >
                        <div className="font-medium text-gray-900 group-hover:text-blue-600 mb-1">Textile Industry</div>
                        <div className="text-xs text-gray-500">
                          Dyeing, printing, and finishing wastewater treatment
                        </div>
                      </Link>
                      <Link
                        href="/industries/pharma"
                        className="block p-3 rounded-lg hover:bg-green-50 transition-all group"
                      >
                        <div className="font-medium text-gray-900 group-hover:text-green-600 mb-1">Pharmaceutical</div>
                        <div className="text-xs text-gray-500">API removal and solvent recovery systems</div>
                      </Link>
                      <Link
                        href="/industries/chemical"
                        className="block p-3 rounded-lg hover:bg-purple-50 transition-all group"
                      >
                        <div className="font-medium text-gray-900 group-hover:text-purple-600 mb-1">
                          Chemical Processing
                        </div>
                        <div className="text-xs text-gray-500">Complex chemical wastewater treatment</div>
                      </Link>
                      <Link
                        href="/industries/automotive"
                        className="block p-3 rounded-lg hover:bg-red-50 transition-all group"
                      >
                        <div className="font-medium text-gray-900 group-hover:text-red-600 mb-1">Automotive</div>
                        <div className="text-xs text-gray-500">Paint booth and coolant treatment systems</div>
                      </Link>
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide mb-4 text-orange-600">
                        Processing
                      </h4>
                      <Link
                        href="/industries/food"
                        className="block p-3 rounded-lg hover:bg-yellow-50 transition-all group"
                      >
                        <div className="font-medium text-gray-900 group-hover:text-yellow-600 mb-1">
                          Food & Beverage
                        </div>
                        <div className="text-xs text-gray-500">Hygienic treatment with nutrient recovery</div>
                      </Link>
                      <Link
                        href="/industries/dairy"
                        className="block p-3 rounded-lg hover:bg-pink-50 transition-all group"
                      >
                        <div className="font-medium text-gray-900 group-hover:text-pink-600 mb-1">Dairy Processing</div>
                        <div className="text-xs text-gray-500">Fat separation and CIP chemical recovery</div>
                      </Link>
                      <Link
                        href="/industries/paper"
                        className="block p-3 rounded-lg hover:bg-teal-50 transition-all group"
                      >
                        <div className="font-medium text-gray-900 group-hover:text-teal-600 mb-1">Paper & Pulp</div>
                        <div className="text-xs text-gray-500">Fiber recovery and lignin removal systems</div>
                      </Link>
                      <Link
                        href="/industries/tannery"
                        className="block p-3 rounded-lg hover:bg-indigo-50 transition-all group"
                      >
                        <div className="font-medium text-gray-900 group-hover:text-indigo-600 mb-1">
                          Tannery & Leather
                        </div>
                        <div className="text-xs text-gray-500">Chrome recovery and protein removal</div>
                      </Link>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <Link
                      href="/industries"
                      className="inline-flex items-center text-sm font-medium text-orange-600 hover:text-orange-700"
                    >
                      View All Industries
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* About and Contact Links */}
            <Link
              href="/about"
              className="text-gray-700 hover:text-gray-900 font-medium text-sm uppercase tracking-wide transition-colors hover:bg-gray-50 py-2 px-3 rounded-lg"
            >
              ABOUT
            </Link>

            <Link
              href="/contact"
              className="text-gray-700 hover:text-gray-900 font-medium text-sm uppercase tracking-wide transition-colors hover:bg-gray-50 py-2 px-3 rounded-lg"
            >
              CONTACT
            </Link>
          </nav>

          {/* Right side - Language and Portal Icons */}
          <div className="flex items-center gap-3">
            {/* Language Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <Globe className="h-5 w-5 text-orange-500" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-36">
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Hindi</DropdownMenuItem>
                <DropdownMenuItem>Spanish</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Portal Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <User className="h-5 w-5 text-orange-500" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/portal/employee">Employee Portal</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/portal/customer">Customer Portal</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="lg:hidden" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  <Link href="/" className="block px-2 py-3 text-lg font-medium" onClick={() => setIsOpen(false)}>
                    Home
                  </Link>
                  <div className="space-y-2">
                    <div className="px-2 py-3 text-lg font-medium text-gray-900">Solutions</div>
                    <div className="pl-4 space-y-2">
                      <Link
                        href="/solutions/etp"
                        className="block px-2 py-2 text-gray-600"
                        onClick={() => setIsOpen(false)}
                      >
                        ETP Systems
                      </Link>
                      <Link
                        href="/solutions/stp"
                        className="block px-2 py-2 text-gray-600"
                        onClick={() => setIsOpen(false)}
                      >
                        STP Systems
                      </Link>
                      <Link
                        href="/solutions/zld"
                        className="block px-2 py-2 text-gray-600"
                        onClick={() => setIsOpen(false)}
                      >
                        ZLD Systems
                      </Link>
                    </div>
                    <div className="pl-4 space-y-2">
                      <div className="text-sm font-medium text-blue-600 px-2 py-1">Services</div>
                      <Link
                        href="/services/om"
                        className="block px-2 py-1 text-gray-600 text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        O&M Services
                      </Link>
                      <Link
                        href="/services/automation"
                        className="block px-2 py-1 text-gray-600 text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        Automation & SCADA
                      </Link>
                      <Link
                        href="/services/rd"
                        className="block px-2 py-1 text-gray-600 text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        R&D Services
                      </Link>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="px-2 py-3 text-lg font-medium text-gray-900">Products</div>
                    <div className="pl-4 space-y-2">
                      <Link href="/products" className="block px-2 py-2 text-gray-600" onClick={() => setIsOpen(false)}>
                        All Products
                      </Link>
                      <Link
                        href="/products/treatment-systems"
                        className="block px-2 py-2 text-gray-600"
                        onClick={() => setIsOpen(false)}
                      >
                        Treatment Systems
                      </Link>
                      <Link
                        href="/products/equipment"
                        className="block px-2 py-2 text-gray-600"
                        onClick={() => setIsOpen(false)}
                      >
                        Equipment
                      </Link>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="px-2 py-3 text-lg font-medium text-gray-900">Technologies</div>
                    <div className="pl-4 space-y-2">
                      <Link
                        href="/technologies/brinex"
                        className="block px-2 py-2 text-gray-600"
                        onClick={() => setIsOpen(false)}
                      >
                        Brinex
                      </Link>
                      <Link
                        href="/technologies/rewolute"
                        className="block px-2 py-2 text-gray-600"
                        onClick={() => setIsOpen(false)}
                      >
                        Rewolute
                      </Link>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="px-2 py-3 text-lg font-medium text-gray-900">Language</div>
                    <div className="pl-4 space-y-2">
                      <span className="block px-2 py-2 text-gray-600">English</span>
                      <span className="block px-2 py-2 text-gray-600">Hindi</span>
                      <span className="block px-2 py-2 text-gray-600">Spanish</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="px-2 py-3 text-lg font-medium text-gray-900">Portals</div>
                    <div className="pl-4 space-y-2">
                      <Link
                        href="/portal/employee"
                        className="block px-2 py-2 text-gray-600"
                        onClick={() => setIsOpen(false)}
                      >
                        Employee Portal
                      </Link>
                      <Link
                        href="/portal/customer"
                        className="block px-2 py-2 text-gray-600"
                        onClick={() => setIsOpen(false)}
                      >
                        Customer Portal
                      </Link>
                    </div>
                  </div>
                  <Link
                    href="/innovation"
                    className="block px-2 py-3 text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Innovation
                  </Link>
                  <Link href="/about" className="block px-2 py-3 text-lg font-medium" onClick={() => setIsOpen(false)}>
                    About
                  </Link>
                  <Link
                    href="/contact"
                    className="block px-2 py-3 text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

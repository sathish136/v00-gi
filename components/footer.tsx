import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 relative pt-12 overflow-hidden">
      {" "}
      {/* Reduced pt-16 to pt-12 for smaller footer */}
      {/* Wave SVG */}
      <div className="absolute top-0 left-0 w-full h-12 overflow-hidden" style={{ transform: "translateY(-100%)" }}>
        {" "}
        {/* Reduced h-16 to h-12, adjusted translateY */}
        <svg
          className="absolute bottom-0 left-0 w-[200%] h-full animate-wave" // w-[200%] makes the SVG twice as wide as its container
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100" // Original viewBox for path definition
          preserveAspectRatio="none"
        >
          {/* Group to contain the wave path and its duplicate for seamless animation */}
          <g>
            {/* Original path */}
            <path
              fill="#f3f4f6" // Light gray to match bg-gray-100
              fillOpacity="1"
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,64C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
            {/* Duplicated path, translated to create a seamless loop */}
            <path
              fill="#f3f4f6"
              fillOpacity="1"
              transform="translateX(1440)" // Shift the second wave by the original width
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,64C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </g>
        </svg>
      </div>
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Image src="/logo.png" alt="WTT International" width={140} height={70} className="h-14 w-auto" />
            <p className="text-gray-600 text-sm leading-relaxed">
              Leading provider of innovative water and wastewater treatment technologies, serving industries worldwide
              with sustainable solutions.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-orange-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-orange-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-orange-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-6 uppercase tracking-wide text-gray-900">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/solutions/etp" className="text-gray-600 hover:text-orange-500 transition-colors text-sm">
                  ETP Systems
                </Link>
              </li>
              <li>
                <Link href="/solutions/stp" className="text-gray-600 hover:text-orange-500 transition-colors text-sm">
                  STP Systems
                </Link>
              </li>
              <li>
                <Link href="/solutions/zld" className="text-gray-600 hover:text-orange-500 transition-colors text-sm">
                  ZLD Systems
                </Link>
              </li>
              <li>
                <Link href="/solutions/mbr" className="text-gray-600 hover:text-orange-500 transition-colors text-sm">
                  MBR Technology
                </Link>
              </li>
              <li>
                <Link href="/solutions/ro" className="text-gray-600 hover:text-orange-500 transition-colors text-sm">
                  RO Systems
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-semibold mb-6 uppercase tracking-wide text-gray-900">Industries</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/industries/textile"
                  className="text-gray-600 hover:text-orange-500 transition-colors text-sm"
                >
                  Textile
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/pharma"
                  className="text-gray-600 hover:text-orange-500 transition-colors text-sm"
                >
                  Pharmaceutical
                </Link>
              </li>
              <li>
                <Link href="/industries/food" className="text-gray-600 hover:text-orange-500 transition-colors text-sm">
                  Food & Beverage
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/chemical"
                  className="text-gray-600 hover:text-orange-500 transition-colors text-sm"
                >
                  Chemical
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/automotive"
                  className="text-gray-600 hover:text-orange-500 transition-colors text-sm"
                >
                  Automotive
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 uppercase tracking-wide text-gray-900">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600 text-sm">
                  123 Industrial Area,
                  <br />
                  Water Treatment Hub,
                  <br />
                  City, State - 123456
                  <br />
                  India
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-orange-500" />
                <p className="text-gray-600 text-sm">+91-XXX-XXX-XXXX</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-orange-500" />
                <p className="text-gray-600 text-sm">info@wttint.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© 2024 WTT International. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-500 hover:text-orange-500 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-orange-500 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

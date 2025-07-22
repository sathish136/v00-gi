"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function GlobalSupportMap() {
  const regions = [
    {
      name: "India",
      position: { top: "45%", left: "70%" },
      offices: ["Head Office - Tirupur"],
      partners: ["Gujarat", "Rajasthan", "Punjab & Himachal"],
      color: "bg-blue-600",
      textColor: "text-blue-600",
    },
    {
      name: "Europe",
      position: { top: "25%", left: "45%" },
      offices: ["Europe Office - Novara Milano, Italy"],
      partners: [],
      color: "bg-orange-500",
      textColor: "text-orange-500",
    },
    {
      name: "Middle East",
      position: { top: "35%", left: "55%" },
      offices: [],
      partners: ["Iran"],
      color: "bg-green-600",
      textColor: "text-green-600",
    },
    {
      name: "Central Asia",
      position: { top: "30%", left: "65%" },
      offices: [],
      partners: ["Uzbekistan"],
      color: "bg-purple-600",
      textColor: "text-purple-600",
    },
    {
      name: "South Asia",
      position: { top: "50%", left: "75%" },
      offices: [],
      partners: ["Bangladesh"],
      color: "bg-red-600",
      textColor: "text-red-600",
    },
    {
      name: "Southeast Asia",
      position: { top: "65%", left: "85%" },
      offices: [],
      partners: ["Indonesia"],
      color: "bg-yellow-600",
      textColor: "text-yellow-600",
    },
  ]

  return (
    <div className="w-full">
      {/* World Map Visualization */}
      <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl p-8 mb-8 overflow-hidden">
        {/* Background World Map SVG */}
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 1000 500" className="w-full h-full">
            {/* Simplified world map paths */}
            <path
              d="M150,200 L200,180 L250,190 L300,200 L350,210 L400,200 L450,190 L500,200 L550,210 L600,200 L650,190 L700,200 L750,210 L800,200 L850,190"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-slate-400"
            />
            <path
              d="M100,250 L150,240 L200,250 L250,260 L300,250 L350,240 L400,250 L450,260 L500,250 L550,240 L600,250 L650,260 L700,250 L750,240 L800,250 L850,260 L900,250"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-slate-400"
            />
            <path
              d="M120,300 L170,290 L220,300 L270,310 L320,300 L370,290 L420,300 L470,310 L520,300 L570,290 L620,300 L670,310 L720,300 L770,290 L820,300"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-slate-400"
            />
          </svg>
        </div>

        {/* Region Markers */}
        <div className="relative h-96">
          {regions.map((region, index) => (
            <div
              key={index}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
              style={region.position}
            >
              {/* Marker Dot */}
              <div className={`w-4 h-4 ${region.color} rounded-full shadow-lg animate-pulse`}></div>

              {/* Hover Card */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                <Card className="w-64 shadow-xl border-0">
                  <CardContent className="p-4">
                    <h4 className={`font-bold ${region.textColor} mb-2`}>{region.name}</h4>
                    {region.offices.length > 0 && (
                      <div className="mb-2">
                        <p className="text-xs font-semibold text-slate-600 mb-1">OFFICES:</p>
                        {region.offices.map((office, idx) => (
                          <p key={idx} className="text-xs text-slate-700">
                            {office}
                          </p>
                        ))}
                      </div>
                    )}
                    {region.partners.length > 0 && (
                      <div>
                        <p className="text-xs font-semibold text-slate-600 mb-1">PARTNERS:</p>
                        <div className="flex flex-wrap gap-1">
                          {region.partners.map((partner, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {partner}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
          <defs>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#f97316" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          {/* Connection lines from India (main hub) to other regions */}
          <line
            x1="70%"
            y1="45%"
            x2="45%"
            y2="25%"
            stroke="url(#connectionGradient)"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          <line
            x1="70%"
            y1="45%"
            x2="55%"
            y2="35%"
            stroke="url(#connectionGradient)"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          <line
            x1="70%"
            y1="45%"
            x2="65%"
            y2="30%"
            stroke="url(#connectionGradient)"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          <line
            x1="70%"
            y1="45%"
            x2="75%"
            y2="50%"
            stroke="url(#connectionGradient)"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          <line
            x1="70%"
            y1="45%"
            x2="85%"
            y2="65%"
            stroke="url(#connectionGradient)"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
        </svg>
      </div>

      {/* Regional Coverage Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="text-center p-6 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
          <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
          <p className="text-slate-700 font-semibold">Direct Offices</p>
          <p className="text-sm text-slate-600">India & Europe</p>
        </Card>

        <Card className="text-center p-6 border-0 shadow-lg bg-gradient-to-br from-orange-50 to-orange-100">
          <div className="text-3xl font-bold text-orange-600 mb-2">7</div>
          <p className="text-slate-700 font-semibold">Network Partners</p>
          <p className="text-sm text-slate-600">Across 6 Countries</p>
        </Card>

        <Card className="text-center p-6 border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100">
          <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
          <p className="text-slate-700 font-semibold">Countries Served</p>
          <p className="text-sm text-slate-600">Global Reach</p>
        </Card>
      </div>
    </div>
  )
}

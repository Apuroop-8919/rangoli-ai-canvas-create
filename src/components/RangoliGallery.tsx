
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Palette, PaletteIcon, BookOpen } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const RangoliGallery = () => {
  const [filter, setFilter] = useState("all");

  const rangoliDesigns = [
    {
      id: 1,
      title: "Lotus Mandala",
      description: "Traditional lotus-inspired circular design",
      difficulty: "Beginner",
      type: "colored",
      pattern: "floral",
      colors: ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4"],
      svg: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="80" fill="none" stroke="#FF6B6B" strokeWidth="2" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="#4ECDC4" strokeWidth="2" />
          <circle cx="100" cy="100" r="40" fill="none" stroke="#45B7D1" strokeWidth="2" />
          <circle cx="100" cy="100" r="20" fill="#96CEB4" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <g key={i} transform={`rotate(${angle} 100 100)`}>
              <ellipse cx="100" cy="60" rx="8" ry="20" fill="#FF6B6B" />
              <ellipse cx="100" cy="40" rx="6" ry="15" fill="#4ECDC4" />
            </g>
          ))}
        </svg>
      )
    },
    {
      id: 2,
      title: "Geometric Star",
      description: "Modern geometric star pattern",
      difficulty: "Intermediate",
      type: "monochrome",
      pattern: "geometric",
      colors: ["#000000"],
      svg: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <polygon points="100,20 120,60 160,60 130,90 140,130 100,110 60,130 70,90 40,60 80,60" 
                   fill="none" stroke="#000000" strokeWidth="2" />
          <polygon points="100,40 115,70 145,70 125,95 132,125 100,110 68,125 75,95 55,70 85,70" 
                   fill="none" stroke="#000000" strokeWidth="1" />
          <circle cx="100" cy="100" r="15" fill="none" stroke="#000000" strokeWidth="2" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Peacock Feather",
      description: "Elegant peacock feather design",
      difficulty: "Advanced",
      type: "colored",
      pattern: "traditional",
      colors: ["#1E3A8A", "#10B981", "#F59E0B", "#EF4444"],
      svg: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path d="M100 180 Q80 120 100 20 Q120 120 100 180" fill="#10B981" stroke="#1E3A8A" strokeWidth="2" />
          <ellipse cx="100" cy="40" rx="30" ry="20" fill="#1E3A8A" />
          <ellipse cx="100" cy="40" rx="20" ry="15" fill="#F59E0B" />
          <ellipse cx="100" cy="40" rx="10" ry="8" fill="#EF4444" />
          <circle cx="100" cy="40" r="4" fill="#FFFFFF" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Diya Chain",
      description: "Festival diya (lamp) pattern",
      difficulty: "Beginner",
      type: "colored",
      pattern: "festival",
      colors: ["#F59E0B", "#EF4444", "#FB923C"],
      svg: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {[0, 1, 2, 3].map((i) => (
            <g key={i} transform={`translate(${50 + i * 25}, ${100 + (i % 2) * 20})`}>
              <ellipse cx="0" cy="0" rx="15" ry="8" fill="#F59E0B" />
              <ellipse cx="0" cy="-2" rx="12" ry="6" fill="#FB923C" />
              <ellipse cx="0" cy="-8" rx="3" ry="6" fill="#EF4444" />
            </g>
          ))}
        </svg>
      )
    },
    {
      id: 5,
      title: "Kolam Dots",
      description: "Traditional South Indian dot pattern",
      difficulty: "Intermediate",
      type: "monochrome",
      pattern: "dots",
      colors: ["#000000"],
      svg: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {Array.from({ length: 7 }, (_, row) =>
            Array.from({ length: 7 }, (_, col) => (
              <circle
                key={`${row}-${col}`}
                cx={30 + col * 23}
                cy={30 + row * 23}
                r="3"
                fill="#000000"
              />
            ))
          )}
          <path d="M30 30 Q100 15 170 30 Q185 100 170 170 Q100 185 30 170 Q15 100 30 30" 
                fill="none" stroke="#000000" strokeWidth="2" />
        </svg>
      )
    },
    {
      id: 6,
      title: "Flower Mandala",
      description: "Intricate flower-based circular design",
      difficulty: "Advanced",
      type: "colored",
      pattern: "floral",
      colors: ["#EC4899", "#8B5CF6", "#06B6D4", "#10B981"],
      svg: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="15" fill="#EC4899" />
          {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <g key={i} transform={`rotate(${angle} 100 100)`}>
              <ellipse cx="100" cy="70" rx="12" ry="25" fill="#8B5CF6" />
              <ellipse cx="100" cy="55" rx="8" ry="15" fill="#06B6D4" />
              <ellipse cx="100" cy="45" rx="5" ry="10" fill="#10B981" />
            </g>
          ))}
        </svg>
      )
    }
  ];

  const filteredDesigns = rangoliDesigns.filter(design => 
    filter === "all" || design.type === filter || design.pattern === filter
  );

  return (
    <div className="space-y-6">
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 justify-center">
        {[
          { id: "all", label: "All Designs" },
          { id: "colored", label: "Colored" },
          { id: "monochrome", label: "Monochrome" },
          { id: "floral", label: "Floral" },
          { id: "geometric", label: "Geometric" },
          { id: "traditional", label: "Traditional" },
        ].map((filterOption) => (
          <Button
            key={filterOption.id}
            variant={filter === filterOption.id ? "default" : "outline"}
            onClick={() => setFilter(filterOption.id)}
            size="sm"
          >
            {filterOption.label}
          </Button>
        ))}
      </div>

      {/* Design Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDesigns.map((design) => (
          <Card key={design.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{design.title}</CardTitle>
                  <CardDescription>{design.description}</CardDescription>
                </div>
                <Badge variant={design.type === "colored" ? "default" : "secondary"}>
                  {design.difficulty}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <AspectRatio ratio={1} className="bg-white rounded-lg border">
                {design.svg}
              </AspectRatio>
              
              <div className="flex items-center justify-between">
                <div className="flex space-x-1">
                  {design.colors.map((color, i) => (
                    <div
                      key={i}
                      className="w-4 h-4 rounded-full border border-gray-300"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                  <Button size="sm">
                    <BookOpen className="h-4 w-4 mr-1" />
                    Tutorial
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RangoliGallery;

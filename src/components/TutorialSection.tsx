
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, ChevronLeft, Play, Pause, RotateCcw } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const TutorialSection = () => {
  const [selectedTutorial, setSelectedTutorial] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const tutorials = [
    {
      id: 1,
      title: "Simple Lotus Design",
      description: "Learn to create a beautiful lotus rangoli step by step",
      difficulty: "Beginner",
      duration: "15 min",
      materials: ["Colored powder", "White chalk", "Small bowl"],
      steps: [
        {
          title: "Draw the Center Circle",
          description: "Start by drawing a small circle in the center using white chalk",
          tip: "Keep the circle small and neat - this will be your reference point",
          svg: (
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <circle cx="100" cy="100" r="10" fill="none" stroke="#000000" strokeWidth="2" />
              <circle cx="100" cy="100" r="2" fill="#000000" />
            </svg>
          )
        },
        {
          title: "Add Petal Guidelines",
          description: "Draw 8 lines radiating from the center, equally spaced",
          tip: "Use light strokes - these are just guidelines",
          svg: (
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <circle cx="100" cy="100" r="10" fill="none" stroke="#000000" strokeWidth="2" />
              <circle cx="100" cy="100" r="2" fill="#000000" />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <line
                  key={i}
                  x1="100"
                  y1="100"
                  x2={100 + 60 * Math.cos((angle * Math.PI) / 180)}
                  y2={100 + 60 * Math.sin((angle * Math.PI) / 180)}
                  stroke="#CCCCCC"
                  strokeWidth="1"
                />
              ))}
            </svg>
          )
        },
        {
          title: "Draw the Petals",
          description: "Create oval petals along each guideline",
          tip: "Make each petal slightly different for a natural look",
          svg: (
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <circle cx="100" cy="100" r="10" fill="none" stroke="#000000" strokeWidth="2" />
              <circle cx="100" cy="100" r="2" fill="#000000" />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <ellipse
                  key={i}
                  cx={100 + 35 * Math.cos((angle * Math.PI) / 180)}
                  cy={100 + 35 * Math.sin((angle * Math.PI) / 180)}
                  rx="8"
                  ry="20"
                  transform={`rotate(${angle} ${100 + 35 * Math.cos((angle * Math.PI) / 180)} ${100 + 35 * Math.sin((angle * Math.PI) / 180)})`}
                  fill="none"
                  stroke="#000000"
                  strokeWidth="1"
                />
              ))}
            </svg>
          )
        },
        {
          title: "Add Colors",
          description: "Fill the petals with vibrant colors like pink, orange, and yellow",
          tip: "Start with lighter colors and add darker shades for depth",
          svg: (
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <circle cx="100" cy="100" r="10" fill="#F59E0B" stroke="#000000" strokeWidth="2" />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <ellipse
                  key={i}
                  cx={100 + 35 * Math.cos((angle * Math.PI) / 180)}
                  cy={100 + 35 * Math.sin((angle * Math.PI) / 180)}
                  rx="8"
                  ry="20"
                  transform={`rotate(${angle} ${100 + 35 * Math.cos((angle * Math.PI) / 180)} ${100 + 35 * Math.sin((angle * Math.PI) / 180)})`}
                  fill={i % 2 === 0 ? "#EC4899" : "#8B5CF6"}
                  stroke="#000000"
                  strokeWidth="1"
                />
              ))}
            </svg>
          )
        },
        {
          title: "Final Touches",
          description: "Add decorative dots and small details around the design",
          tip: "Small details make a big difference in the final appearance",
          svg: (
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <circle cx="100" cy="100" r="10" fill="#F59E0B" stroke="#000000" strokeWidth="2" />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <g key={i}>
                  <ellipse
                    cx={100 + 35 * Math.cos((angle * Math.PI) / 180)}
                    cy={100 + 35 * Math.sin((angle * Math.PI) / 180)}
                    rx="8"
                    ry="20"
                    transform={`rotate(${angle} ${100 + 35 * Math.cos((angle * Math.PI) / 180)} ${100 + 35 * Math.sin((angle * Math.PI) / 180)})`}
                    fill={i % 2 === 0 ? "#EC4899" : "#8B5CF6"}
                    stroke="#000000"
                    strokeWidth="1"
                  />
                  <circle
                    cx={100 + 55 * Math.cos((angle * Math.PI) / 180)}
                    cy={100 + 55 * Math.sin((angle * Math.PI) / 180)}
                    r="3"
                    fill="#10B981"
                  />
                </g>
              ))}
            </svg>
          )
        }
      ]
    }
  ];

  const currentTutorial = tutorials[selectedTutorial];
  const currentStepData = currentTutorial.steps[currentStep];

  const nextStep = () => {
    if (currentStep < currentTutorial.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetTutorial = () => {
    setCurrentStep(0);
    setIsPlaying(false);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Step-by-Step Tutorials</h2>
        <p className="text-muted-foreground">Master the art of rangoli with our detailed guides</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Tutorial Info */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              {currentTutorial.title}
              <Badge>{currentTutorial.difficulty}</Badge>
            </CardTitle>
            <CardDescription>{currentTutorial.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span>Duration: {currentTutorial.duration}</span>
              <span>Step {currentStep + 1} of {currentTutorial.steps.length}</span>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold">Materials Needed:</h4>
              <ul className="text-sm space-y-1">
                {currentTutorial.materials.map((material, i) => (
                  <li key={i} className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                    {material}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex space-x-2">
              <Button
                onClick={() => setIsPlaying(!isPlaying)}
                variant="outline"
                size="sm"
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </Button>
              <Button onClick={resetTutorial} variant="outline" size="sm">
                <RotateCcw className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Tutorial Content */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>{currentStepData.title}</CardTitle>
            <CardDescription>{currentStepData.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <AspectRatio ratio={1} className="bg-gray-50 rounded-lg border">
              {currentStepData.svg}
            </AspectRatio>
            
            <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-800">
                <strong>💡 Tip:</strong> {currentStepData.tip}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <Button
                onClick={prevStep}
                disabled={currentStep === 0}
                variant="outline"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Previous
              </Button>
              
              <div className="flex space-x-1">
                {currentTutorial.steps.map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full ${
                      i === currentStep ? "bg-primary" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <Button
                onClick={nextStep}
                disabled={currentStep === currentTutorial.steps.length - 1}
              >
                Next
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TutorialSection;

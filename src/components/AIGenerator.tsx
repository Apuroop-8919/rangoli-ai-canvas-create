
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles, Download, Shuffle, Palette, Copy } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useToast } from "@/hooks/use-toast";

const AIGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("traditional");
  const [complexity, setComplexity] = useState("medium");
  const [colorScheme, setColorScheme] = useState("vibrant");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedDesign, setGeneratedDesign] = useState(null);
  const { toast } = useToast();

  // Sample generated designs for demonstration
  const sampleDesigns = [
    {
      svg: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <radialGradient id="grad1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FF6B6B" />
              <stop offset="100%" stopColor="#4ECDC4" />
            </radialGradient>
          </defs>
          <circle cx="100" cy="100" r="80" fill="url(#grad1)" opacity="0.3" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="#FF6B6B" strokeWidth="2" />
          <circle cx="100" cy="100" r="40" fill="none" stroke="#4ECDC4" strokeWidth="2" />
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
            <g key={i} transform={`rotate(${angle} 100 100)`}>
              <ellipse cx="100" cy="50" rx="6" ry="15" fill="#45B7D1" />
              <circle cx="100" cy="40" r="4" fill="#96CEB4" />
            </g>
          ))}
        </svg>
      ),
      description: "AI-generated mandala with flowing patterns"
    },
    {
      svg: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <polygon points="100,20 130,70 180,70 140,110 160,160 100,130 40,160 60,110 20,70 70,70" 
                   fill="#8B5CF6" opacity="0.6" />
          <polygon points="100,40 120,80 160,80 130,110 140,150 100,130 60,150 70,110 40,80 80,80" 
                   fill="#EC4899" opacity="0.8" />
          <circle cx="100" cy="100" r="20" fill="#F59E0B" />
          <circle cx="100" cy="100" r="10" fill="#EF4444" />
        </svg>
      ),
      description: "Geometric star pattern with gradient colors"
    }
  ];

  const generateDesign = async () => {
    setIsGenerating(true);
    
    // Simulate AI generation process
    setTimeout(() => {
      const randomDesign = sampleDesigns[Math.floor(Math.random() * sampleDesigns.length)];
      setGeneratedDesign(randomDesign);
      setIsGenerating(false);
      
      toast({
        title: "Design Generated!",
        description: "Your AI-powered rangoli design is ready.",
      });
    }, 2000);
  };

  const randomizePrompt = () => {
    const prompts = [
      "Create a lotus-inspired rangoli with flowing petals",
      "Design a geometric mandala with intricate patterns",
      "Generate a peacock-themed rangoli with vibrant colors",
      "Make a festival diya pattern with warm colors",
      "Create a modern minimalist rangoli design",
      "Design a floral border rangoli for doorway"
    ];
    setPrompt(prompts[Math.floor(Math.random() * prompts.length)]);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(prompt);
    toast({
      title: "Copied!",
      description: "Prompt copied to clipboard.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">AI Rangoli Generator</h2>
        <p className="text-muted-foreground">Create unique rangoli designs with artificial intelligence</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Panel */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Sparkles className="h-5 w-5 mr-2" />
              Design Parameters
            </CardTitle>
            <CardDescription>
              Describe your dream rangoli and let AI bring it to life
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Describe your rangoli design</label>
              <div className="relative">
                <Textarea
                  placeholder="e.g., Create a beautiful lotus mandala with intricate petals and vibrant colors..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-[100px] pr-20"
                />
                <div className="absolute top-2 right-2 flex space-x-1">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={randomizePrompt}
                    className="h-8 w-8 p-0"
                  >
                    <Shuffle className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={copyToClipboard}
                    className="h-8 w-8 p-0"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Style</label>
                <Select value={style} onValueChange={setStyle}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="traditional">Traditional</SelectItem>
                    <SelectItem value="modern">Modern</SelectItem>
                    <SelectItem value="geometric">Geometric</SelectItem>
                    <SelectItem value="floral">Floral</SelectItem>
                    <SelectItem value="abstract">Abstract</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Complexity</label>
                <Select value={complexity} onValueChange={setComplexity}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="simple">Simple</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="complex">Complex</SelectItem>
                    <SelectItem value="intricate">Intricate</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Color Scheme</label>
              <Select value={colorScheme} onValueChange={setColorScheme}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="vibrant">Vibrant & Bold</SelectItem>
                  <SelectItem value="pastel">Soft Pastels</SelectItem>
                  <SelectItem value="monochrome">Monochrome</SelectItem>
                  <SelectItem value="warm">Warm Tones</SelectItem>
                  <SelectItem value="cool">Cool Tones</SelectItem>
                  <SelectItem value="festival">Festival Colors</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              onClick={generateDesign}
              disabled={!prompt.trim() || isGenerating}
              className="w-full"
              size="lg"
            >
              {isGenerating ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4 mr-2" />
                  Generate Design
                </>
              )}
            </Button>

            <div className="text-xs text-muted-foreground space-y-1">
              <p>💡 <strong>Tips for better results:</strong></p>
              <ul className="ml-4 space-y-1">
                <li>• Be specific about patterns and elements</li>
                <li>• Mention colors and themes you prefer</li>
                <li>• Include cultural or symbolic elements</li>
                <li>• Specify the occasion or purpose</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Result Panel */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Palette className="h-5 w-5 mr-2" />
              Generated Design
            </CardTitle>
            <CardDescription>
              Your AI-created rangoli design will appear here
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {generatedDesign ? (
              <>
                <AspectRatio ratio={1} className="bg-white rounded-lg border shadow-sm">
                  {generatedDesign.svg}
                </AspectRatio>
                
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    {generatedDesign.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">{style}</Badge>
                    <Badge variant="secondary">{complexity}</Badge>
                    <Badge variant="secondary">{colorScheme}</Badge>
                  </div>

                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-1" />
                      Download SVG
                    </Button>
                    <Button variant="outline" size="sm">
                      <Copy className="h-4 w-4 mr-1" />
                      Copy Code
                    </Button>
                    <Button size="sm">
                      View Tutorial
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-64 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-100 to-pink-100 rounded-full flex items-center justify-center mb-4">
                  <Sparkles className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="font-semibold mb-2">Ready to Create</h3>
                <p className="text-sm text-muted-foreground">
                  Enter your design description and click generate to see your AI-powered rangoli
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Recent Generations */}
      {generatedDesign && (
        <Card>
          <CardHeader>
            <CardTitle>Recent Generations</CardTitle>
            <CardDescription>Your previously generated designs</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {sampleDesigns.map((design, i) => (
                <div key={i} className="aspect-square bg-white rounded-lg border p-2 hover:shadow-md transition-shadow cursor-pointer">
                  {design.svg}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AIGenerator;

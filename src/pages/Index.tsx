
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Sparkles, BookOpen, Grid } from "lucide-react";
import RangoliGallery from "@/components/RangoliGallery";
import TutorialSection from "@/components/TutorialSection";
import AIGenerator from "@/components/AIGenerator";

const Index = () => {
  const [activeTab, setActiveTab] = useState("gallery");

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                RangoliAI
              </h1>
            </div>
            <p className="text-sm text-muted-foreground hidden md:block">
              AI-Powered Rangoli Design Studio
            </p>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white/60 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex space-x-1">
            {[
              { id: "gallery", label: "Gallery", icon: Grid },
              { id: "tutorials", label: "Tutorials", icon: BookOpen },
              { id: "generator", label: "AI Generator", icon: Sparkles },
            ].map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "ghost"}
                onClick={() => setActiveTab(tab.id)}
                className="flex items-center space-x-2"
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
            Beautiful Rangoli Designs
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover traditional and modern rangoli patterns, learn step-by-step tutorials, 
            and create stunning designs with AI assistance
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Card className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-orange-100 to-orange-200">
              <Palette className="h-8 w-8 text-orange-600" />
            </Card>
            <Card className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-pink-100 to-pink-200">
              <Sparkles className="h-8 w-8 text-pink-600" />
            </Card>
            <Card className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-purple-100 to-purple-200">
              <BookOpen className="h-8 w-8 text-purple-600" />
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-12">
        {activeTab === "gallery" && <RangoliGallery />}
        {activeTab === "tutorials" && <TutorialSection />}
        {activeTab === "generator" && <AIGenerator />}
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 RangoliAI - Celebrating the art of Rangoli with modern technology
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

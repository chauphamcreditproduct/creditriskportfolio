import { useState, useEffect } from 'react';
import { ArrowDown, Mail, Github, Linkedin, MapPin, GraduationCap, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    "Applied Business Analytics Student",
    "Data Storyteller",
    "Community Builder",
    "Recovering Chaos Gremlin"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-subtle">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-accent/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-manrope font-bold leading-tight">
              <span className="block text-foreground">Hi, I'm</span>
              <span className="block gradient-text">Shreya Mani</span>
            </h1>
            
            {/* Dynamic role */}
            <div className="h-10 sm:h-12 flex items-center justify-center px-4">
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground animate-slide-up text-center">
                {roles[currentRole]}
              </p>
            </div>
          </div>

          {/* Tagline */}
          <div className="max-w-3xl mx-auto space-y-4 px-4">
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-foreground text-center">
              Making data dance and stories shine ✨
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-center">
              MS Business Analytics student at Boston University with Instrumentation Engineering background 
              and experience at Worley & Schneider Electric. Proficient in Python, R, SQL, and Power BI, 
              transforming complex datasets into actionable business insights.
            </p>
          </div>

          {/* Quick info badges */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4">
            <Badge variant="outline" className="px-3 sm:px-4 py-2 text-xs sm:text-sm border-accent/30 text-accent">
              <GraduationCap className="w-3 sm:w-4 h-3 sm:h-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">MS Applied Business Analytics</span>
              <span className="sm:hidden">MS Analytics</span>
            </Badge>
            <Badge variant="outline" className="px-3 sm:px-4 py-2 text-xs sm:text-sm border-accent/30 text-accent">
              <MapPin className="w-3 sm:w-4 h-3 sm:h-4 mr-1 sm:mr-2" />
              Boston, MA
            </Badge>
          </div>

          {/* Social links */}
          <div className="flex justify-center space-x-3 sm:space-x-4 px-4">
            <Button
              variant="outline"
              size="icon"
              className="hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 hover-lift w-10 h-10 sm:w-12 sm:h-12"
              onClick={() => window.open('mailto:shreyamanibu@gmail.com')}
            >
              <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 hover-lift w-10 h-10 sm:w-12 sm:h-12"
              onClick={() => window.open('https://github.com/ShreyaSolves', '_blank')}
            >
              <Github className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 hover-lift w-10 h-10 sm:w-12 sm:h-12"
              onClick={() => window.open('https://linkedin.com/in/talkingshreya', '_blank')}
            >
              <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 hover-lift w-10 h-10 sm:w-12 sm:h-12"
              onClick={() => window.open('https://leetcode.com/u/Shreyasolves/', '_blank')}
            >
              <Code className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-medium hover-glow transition-all duration-300"
              onClick={() => scrollToNext()}
            >
              Let's explore my journey
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToNext}
          className="text-muted-foreground hover:text-accent"
        >
          <ArrowDown className="h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
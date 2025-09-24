import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import LeadershipSection from '@/components/LeadershipSection';
import ContactSection from '@/components/ContactSection';
import { ThemeProvider, useTheme } from '@/components/ThemeProvider';

const PortfolioContent = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation darkMode={isDark} toggleDarkMode={toggleTheme} />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <LeadershipSection />
        <ContactSection />
      </main>
    </div>
  );
};

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="chloe-portfolio-theme">
      <PortfolioContent />
    </ThemeProvider>
  );
};

export default Index;

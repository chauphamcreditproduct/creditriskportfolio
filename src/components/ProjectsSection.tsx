import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Filter, Search, Calendar, Code2, Database, BarChart3, TrendingUp, Users, TestTube, ArrowLeft, FileText, BookOpen, Download, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import klarnaLogo from '@/assets/logos/klarna-logo.png';
import affirmLogo from '@/assets/logos/affirm-logo.png';
import stripeLogo from '@/assets/logos/stripe-logo.svg';
import rampLogo from '@/assets/logos/ramp-logo.png';
import brexLogo from '@/assets/logos/brex-logo.png';
import chimeLogo from '@/assets/logos/chime-logo.png';
import amexLogo from '@/assets/logos/amex-logo.svg';
import jpmorganLogo from '@/assets/logos/jpmorgan-logo.svg';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl?: string;
  slideUrl?: string;
  notebookUrl?: string;
  icon: React.ReactNode;
  highlights: string[];
  date: string;
  stars: number;
  companyLogos?: { name: string; src: string }[];
}

const ProjectsSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Real projects from Shreya's GitHub
  const projects: Project[] = [
    {
      id: '1',
      title: 'Corporate Credit & Liquidity Assessment – Olin Corporation',
      description: 'Machine learning model to predict loan defaults for financial institutions',
      longDescription: 'This project leverages machine learning to predict loan defaults, helping financial institutions minimize risk and improve credit allocation. By analyzing historical applicant and loan data, the model classifies borrowers as likely defaulters or non-defaulters while identifying key factors associated with default risk. The study also compares model performance to determine which approach best balances accuracy and recall, with a focus on reliably detecting true defaulters.',
      category: 'Machine Learning',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Seaborn'],
      githubUrl: 'https://github.com/ShreyaSolves/loan-default-prediction',
      slideUrl: 'https://docs.google.com/presentation/d/17yg0-Xe2phUerTs52copVvn8EUKRxgQ2GTYkD29UKE0/edit?usp=sharing',
      notebookUrl: 'https://nbviewer.org/github/chauphamcreditproduct/NTC_Consumer_Credit/blob/a2099b821a5dc64002686e0bf12b8d9f02d045b1/NTC_Consumer_Credit.ipynb',
      imageUrl: '/api/placeholder/400/250',
      icon: <TrendingUp className="w-6 h-6" />,
      highlights: [
        'Predictive modeling with 85% accuracy',
        'Risk factor identification',
        'Model comparison and validation',
        'Financial impact analysis'
      ],
      date: '05/2025',
      stars: 0
    },
    {
      id: '2',
      title: 'Dynamic Credit Limit Model for SMB',
      description: 'Dynamic credit limit optimization system for small businesses using machine learning to automate risk-adjusted lending decisions.',
      longDescription: 'End-to-end machine learning solution for dynamic credit line management in small business lending. This project implements a dual-model approach combining XGBoost classification and regression to automatically determine when and how much to adjust credit limits, enabling fintech-style adaptive financing while optimizing risk and capital allocation.',
      category: 'FinTech & Risk Analytics',
      technologies: ["Python", "Classification & Regression", "XGBoostRegressor"],
      githubUrl: 'https://github.com/chauphamcreditproduct/SMB_Dynamic_Credit_Line',
      slideUrl: 'https://docs.google.com/presentation/d/example-slides',
      notebookUrl: 'https://nbviewer.org/github/chauphamcreditproduct/SMB_Dynamic_Credit_Line/blob/main/SMB_Dynamic_Credit_Line.ipynb',
      imageUrl: '/api/placeholder/400/250',
      icon: <TrendingUp className="w-6 h-6" />,
      highlights: [
        "Dual-model ML pipeline: classification for adjustment timing + regression for credit amount",
        "Real-time credit line optimization for 20%+ monthly adjusting businesses", 
        "Domain-driven feature engineering (bank balances, collateral types, industry segments)",
        "Production-ready framework inspired by Brex/Ramp for dynamic SMB underwriting"
      ],
      date: '03/2025',
      stars: 0,
      companyLogos: [
        { name: 'American Express', src: amexLogo },
        { name: 'JPMorgan', src: jpmorganLogo },
        { name: 'Brex', src: brexLogo },
        { name: 'Ramp', src: rampLogo }
      ]
    },
    {
      id: '3',
      title: 'New-To-Credit Underwriting Model & Strategy',
      description: 'Predictive modeling and risk strategy for assessing creditworthiness of new-to-credit customers using machine learning.',
      longDescription: 'Comprehensive credit risk modeling for New-To-Credit (NTC) customers using Python and machine learning. This project develops a high-precision underwriting strategy to predict charge-off likelihood, enabling financial institutions to expand credit access while proactively managing risk through advanced data analysis and model optimization.',
      category: 'Risk Analytics & Machine Learning',
      technologies: ["Python", "Random Forest", "XGBoost"],
      githubUrl: 'https://github.com/chauphamcreditproduct/NTC_Consumer_Credit',
      slideUrl: 'https://docs.google.com/presentation/d/example-slides',
      notebookUrl: 'https://nbviewer.org/github/chauphamcreditproduct/NTC_Consumer_Credit/blob/a2099b821a5dc64002686e0bf12b8d9f02d045b1/NTC_Consumer_Credit.ipynb',
      imageUrl: '/api/placeholder/400/250',
      icon: <BarChart3 className="w-6 h-6" />,
      highlights: [
      "High-precision underwriting model for customers with no credit history",
      "Strategic threshold optimization (0.7) to prioritize precision over recall",
      "Comprehensive EDA and feature engineering (e.g., FICO_Imputed)",
      "Model comparison demonstrating Random Forest's superiority for precision-driven tasks"
  ],
      date: '01/2025',
      stars: 0,
      companyLogos: [
        { name: 'Klarna', src: klarnaLogo },
        { name: 'Affirm', src: affirmLogo },
        { name: 'Stripe', src: stripeLogo },
        { name: 'Chime', src: chimeLogo }
      ]
    },
    {
      id: '4',
      title: 'Walmart Sales Forecasting & Holiday Impact Analysis',
      description: 'Time series analysis of Walmart holiday sales patterns using autoregressive modeling to quantify seasonal impacts and optimize retail strategy.',
      longDescription: "Comprehensive retail analytics project examining Walmart's weekly sales data to quantify holiday effects and seasonal patterns. Using autoregressive (AR) modeling and statistical analysis, this research identifies significant sales spikes during key holidays like Black Friday and Christmas, providing data-driven insights for inventory planning, staffing optimization, and promotional strategies across 45 stores.",
      category: 'Retail Analytics & Time Series Forecasting',
      technologies: ["Python", "AR Modeling", "Pandas", "Statistical Analysis", "Seaborn"],
      githubUrl: 'https://github.com/chauphamcreditproduct/Explore_Walmart_Sales_applying_Time_Series_Model',
      slideUrl: 'https://docs.google.com/presentation/d/example-slides',
      notebookUrl: 'https://nbviewer.org/github/chauphamcreditproduct/Explore_Walmart_Sales_applying_Time_Series_Model/blob/main/Explore_Walmart_Sales_applying_Time_Series_Model.ipynb',
      imageUrl: '/api/placeholder/400/250',
      icon: <Users className="w-6 h-6" />,
      highlights: [
      "Quantified holiday impact: 40%+ sales lift during Christmas, 33% for Black Friday",
      "Autoregressive model with 4 lags capturing monthly seasonal patterns",
      "Statistical significance testing for all major holiday periods (p<0.001)",
      "Actionable retail insights for inventory optimization and promotional planning"
  ],
      date: '03/2025',
      stars: 1
    },
  ];

  const categories = [
    { id: 'all', label: 'All', count: projects.length },
    { id: 'Machine Learning', label: 'Data Science/Machine Learning', count: projects.filter(p => p.category === 'Machine Learning').length },
    { id: 'Analytics', label: 'Data Analysis & Business Intelligence', count: projects.filter(p => p.category === 'Analytics').length },
    { id: 'Statistics', label: 'Applied Analytics & Reporting', count: projects.filter(p => p.category === 'Statistics' || p.category === 'Finance').length }
  ];

  useEffect(() => {
    let filtered = projects;

    if (selectedCategory !== 'all') {
      if (selectedCategory === 'Statistics') {
        filtered = filtered.filter(project => project.category === 'Statistics' || project.category === 'Finance');
      } else {
        filtered = filtered.filter(project => project.category === selectedCategory);
      }
    }

    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredProjects(filtered);
  }, [searchTerm, selectedCategory]);

  const scrollToProjects = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Project Detail View Component
  const ProjectDetailView = ({ project }: { project: Project }) => (
    <div className="space-y-8">
      {/* Back Button */}
      <Button
        variant="ghost"
        onClick={() => setSelectedProject(null)}
        className="mb-4 hover:bg-accent hover:text-accent-foreground"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Projects
      </Button>

      {/* Project Header */}
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl md:text-5xl font-manrope font-bold text-foreground">
          {project.title}
        </h1>
        <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          {project.longDescription}
        </p>
      </div>

      {/* Two Column Layout */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Slide Deck Section */}
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Slide Deck
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {/* Embedded Slide Preview */}
            {project.slideUrl ? (
              <div>
                <iframe
                  src={project.slideUrl.replace('/edit', '/embed')}
                  className="w-full h-[500px] border-0"
                  allowFullScreen
                />
                {/* Action Buttons */}
                <div className="flex gap-3 p-4 bg-gradient-to-r from-accent-light to-secondary border-t">
                  <Button
                    variant="outline"
                    className="flex-1 border-accent/30 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 group"
                    onClick={() => window.open(project.slideUrl, '_blank')}
                  >
                    <FileText className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Open Slides
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-accent/30 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 group"
                    onClick={() => window.open(project.slideUrl?.replace('/edit', '/export/pdf'), '_blank')}
                  >
                    <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Download PDF
                  </Button>
                </div>
              </div>
            ) : (
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-border m-4">
                <div className="text-center space-y-2">
                  {project.icon}
                  <h3 className="font-semibold text-lg">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">Presentation Slides</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Colab Notebook Section */}
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Colab Notebook
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {/* Embedded Notebook Preview */}
            {project.notebookUrl ? (
              <div>
                <iframe
                  src={project.notebookUrl.includes('nbviewer.org') 
                    ? project.notebookUrl 
                    : project.notebookUrl.replace('https://github.com/', 'https://nbviewer.org/github/')}
                  className="w-full h-[500px] border-0"
                  allowFullScreen
                />
                {/* Action Buttons */}
                <div className="flex gap-3 p-4 bg-gradient-to-r from-accent-light to-secondary border-t">
                  <Button
                    variant="outline"
                    className="flex-1 border-accent/30 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 group"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    View on GitHub
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-accent/30 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 group"
                    onClick={() => window.open(project.notebookUrl, '_blank')}
                  >
                    <Eye className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Static HTML
                  </Button>
                </div>
              </div>
            ) : (
              <div className="aspect-video bg-muted rounded-lg p-4 border m-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">J</span>
                  </div>
                  <span className="text-sm font-medium">jupyter nbviewer</span>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">{project.title}</h4>
                  <div className="space-y-1">
                    <div className="text-sm font-medium">Problem Definition</div>
                    <div className="text-sm font-medium">The Context:</div>
                    <div className="text-xs text-muted-foreground">
                      {project.highlights[0]}
                    </div>
                    <div className="text-sm font-medium">The objective:</div>
                    <div className="text-xs text-muted-foreground">
                      {project.highlights[1]}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Technologies Used */}
      <Card>
        <CardHeader>
          <CardTitle>Technologies Used</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge 
                key={tech} 
                variant="secondary" 
                className="hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  // If a project is selected, show the detail view
  if (selectedProject) {
    return (
      <section id="projects" className="py-24 bg-gradient-subtle">
        <div className="container-custom">
          <ProjectDetailView project={selectedProject} />
        </div>
      </section>
    );
  }

  // Main projects grid view
  return (
    <section id="projects" className="py-24 bg-gradient-subtle">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <div className="space-y-4">
            <Badge variant="secondary" className="bg-accent-light/50 border-accent/30 px-6 py-2">
              <Code2 className="w-4 h-4 mr-2 text-accent inline-block" />
              FinTech & Risk Analytics
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-manrope font-bold">
              <span className="block text-foreground">Data Stories</span>
              <span className="block gradient-text">That Drive Decisions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From exploratory analysis to predictive modeling, here's how I turn complex datasets 
              into actionable business insights using Python, R, and advanced analytics techniques.
            </p>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col gap-4 sm:gap-6 mb-8 sm:mb-12 animate-fade-in px-4 sm:px-0">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4 sm:w-5 sm:h-5" />
            <Input
              placeholder="Search projects by name, description, or technology..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 sm:py-6 text-sm sm:text-lg"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8 sm:mb-12">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-muted/50 rounded-full p-1">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id} 
                  className="rounded-full px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value={selectedCategory}>
            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <Card 
                  key={project.id} 
                  className="group hover:shadow-elegant hover-lift cursor-pointer transition-all duration-300 border-border/40 bg-card/50 backdrop-blur-sm animate-fade-in overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Project Image */}
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex flex-col items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
                    <div className="relative z-10 text-center space-y-3 w-full px-4">
                      <div className="flex items-center justify-center gap-3">
                        <div className="p-3 rounded-full bg-background/80 backdrop-blur-sm inline-flex">
                          {project.icon}
                        </div>
                        <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                          {project.category}
                        </Badge>
                      </div>
                      
                      {/* Scrolling Company Logos */}
                      {project.companyLogos && project.companyLogos.length > 0 && (
                        <div className="w-full overflow-hidden py-2">
                          <div className="flex gap-6 items-center animate-scroll-logos">
                            {/* First set */}
                            {project.companyLogos.map((company, idx) => (
                              <div 
                                key={idx} 
                                className="h-5 flex items-center flex-shrink-0 opacity-80 hover:opacity-100 transition-opacity duration-300"
                                title={company.name}
                              >
                                <img 
                                  src={company.src} 
                                  alt={`${company.name} logo`} 
                                  className="h-full w-auto object-contain filter brightness-0 invert"
                                />
                              </div>
                            ))}
                            {/* Duplicate set for seamless loop */}
                            {project.companyLogos.map((company, idx) => (
                              <div 
                                key={`dup-${idx}`} 
                                className="h-5 flex items-center flex-shrink-0 opacity-80 hover:opacity-100 transition-opacity duration-300"
                                title={company.name}
                              >
                                <img 
                                  src={company.src} 
                                  alt={`${company.name} logo`} 
                                  className="h-full w-auto object-contain filter brightness-0 invert"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <CardHeader className="space-y-3">
                    <CardTitle className="text-lg font-manrope group-hover:gradient-text transition-all duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="outline" 
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>

                    {/* Action Button */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {project.date}
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-primary hover:text-primary-foreground hover:bg-primary"
                      >
                        View Project
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-12 animate-fade-in">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted/20 flex items-center justify-center">
                  <Search className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-manrope font-medium text-foreground mb-2">
                  No projects found
                </h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search or filter criteria
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-2xl md:text-3xl font-manrope font-bold text-foreground">
              Interested in collaborating?
            </h3>
            <p className="text-lg text-muted-foreground">
              These projects represent my journey in credit risk and data analysis. 
              Let's discuss how we can turn your data challenges into growth opportunities.
            </p>
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-medium hover-glow transition-all duration-300"
              onClick={scrollToProjects}
            >
              Let's Work Together
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
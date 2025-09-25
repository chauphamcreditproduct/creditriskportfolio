import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Filter, Search, Calendar, Code2, Database, BarChart3, TrendingUp, Users, TestTube, ArrowLeft, FileText, BookOpen, Download, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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
      title: 'Loan Default Prediction Model',
      description: 'Machine learning model to predict loan defaults for financial institutions',
      longDescription: 'This project leverages machine learning to predict loan defaults, helping financial institutions minimize risk and improve credit allocation. By analyzing historical applicant and loan data, the model classifies borrowers as likely defaulters or non-defaulters while identifying key factors associated with default risk. The study also compares model performance to determine which approach best balances accuracy and recall, with a focus on reliably detecting true defaulters.',
      category: 'Machine Learning',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Seaborn'],
      githubUrl: 'https://github.com/ShreyaSolves/loan-default-prediction',
      slideUrl: 'https://docs.google.com/presentation/d/example-slides',
      notebookUrl: 'https://colab.research.google.com/drive/example-notebook',
      imageUrl: '/api/placeholder/400/250',
      icon: <TrendingUp className="w-6 h-6" />,
      highlights: [
        'Predictive modeling with 85% accuracy',
        'Risk factor identification',
        'Model comparison and validation',
        'Financial impact analysis'
      ],
      date: '2024',
      stars: 0
    },
    {
      id: '2',
      title: 'InvestEasy',
      description: 'House price prediction app for investors using Kaggle data',
      longDescription: 'Python application for real estate investors to predict house prices using machine learning models. Built with scikit-learn and integrated with Tableau for comprehensive market insights, inspired by Zillow and Airbnb pricing strategies.',
      category: 'Machine Learning',
      technologies: ['Python', 'Scikit-learn', 'Tableau', 'JavaScript', 'Data Analysis'],
      githubUrl: 'https://github.com/ShreyaSolves/InvestEasy',
      slideUrl: 'https://docs.google.com/presentation/d/example-slides',
      notebookUrl: 'https://colab.research.google.com/drive/example-notebook',
      imageUrl: '/api/placeholder/400/250',
      icon: <TrendingUp className="w-6 h-6" />,
      highlights: [
        'Real estate price prediction models',
        'Interactive Tableau dashboards',
        'Market trend analysis',
        'Dynamic pricing insights'
      ],
      date: '2024',
      stars: 0
    },
    {
      id: '3',
      title: 'NYC Real Estate Analytics',
      description: 'Comprehensive analysis of NYC real estate transaction data',
      longDescription: 'In-depth analysis of New York City real estate market using advanced R programming and statistical methods. This MET AD 571 project explores market trends, pricing patterns, and investment opportunities across NYC boroughs.',
      category: 'Analytics',
      technologies: ['R', 'Statistical Analysis', 'Data Visualization', 'Market Research'],
      githubUrl: 'https://github.com/ShreyaSolves/NYC-Real-Estate-Analytics-Project',
      slideUrl: 'https://docs.google.com/presentation/d/example-slides',
      notebookUrl: 'https://colab.research.google.com/drive/example-notebook',
      imageUrl: '/api/placeholder/400/250',
      icon: <BarChart3 className="w-6 h-6" />,
      highlights: [
        'Borough-wise market analysis',
        'Price trend forecasting',
        'Investment opportunity mapping',
        'Statistical modeling in R'
      ],
      date: '2024',
      stars: 0
    },
    {
      id: '4',
      title: 'Customer Segmentation & Clustering',
      description: 'Water rides segmentation using advanced clustering techniques',
      longDescription: 'Implementation of unsupervised learning algorithms to segment water rides and identify customer preferences, leading to targeted marketing strategies.',
      category: 'Machine Learning',
      technologies: ['Python', 'Scikit-learn', 'K-means', 'Hierarchical Clustering', 'PCA'],
      githubUrl: 'https://github.com/ShreyaSolves/Segmentation-and-Clustering',
      slideUrl: 'https://docs.google.com/presentation/d/example-slides',
      notebookUrl: 'https://colab.research.google.com/drive/example-notebook',
      imageUrl: '/api/placeholder/400/250',
      icon: <Users className="w-6 h-6" />,
      highlights: [
        'K-means clustering implementation',
        'Customer persona development',
        'Feature engineering',
        'Cluster validation metrics'
      ],
      date: '2024',
      stars: 1
    },
    {
      id: '5',
      title: 'Time Series Analysis',
      description: 'Ralph Lauren stock price forecasting with ARIMA models',
      longDescription: 'Comprehensive time series analysis of Ralph Lauren Corporation stock prices, implementing ARIMA models for financial forecasting and trend analysis.',
      category: 'Finance',
      technologies: ['Python', 'ARIMA', 'Statsmodels', 'Time Series', 'Financial Analysis'],
      githubUrl: 'https://github.com/ShreyaSolves/Time-Series-Analysis',
      slideUrl: 'https://docs.google.com/presentation/d/example-slides',
      notebookUrl: 'https://colab.research.google.com/drive/example-notebook',
      imageUrl: '/api/placeholder/400/250',
      icon: <TrendingUp className="w-6 h-6" />,
      highlights: [
        'ARIMA model implementation',
        'Seasonal decomposition',
        'Forecast accuracy metrics',
        'Financial trend analysis'
      ],
      date: '2024',
      stars: 1
    },
    {
      id: '6',
      title: 'Statistical Hypothesis Testing',
      description: 'Customer spending analysis by membership tier using statistical tests',
      longDescription: 'Rigorous statistical analysis exploring relationships between membership tiers, customer spending patterns, and visit frequencies using various hypothesis testing methods.',
      category: 'Statistics',
      technologies: ['Python', 'Scipy', 'Statsmodels', 'Pandas', 'Statistical Tests'],
      githubUrl: 'https://github.com/ShreyaSolves/Hypothesis-Testing',
      slideUrl: 'https://docs.google.com/presentation/d/example-slides',
      notebookUrl: 'https://colab.research.google.com/drive/example-notebook',
      imageUrl: '/api/placeholder/400/250',
      icon: <TestTube className="w-6 h-6" />,
      highlights: [
        'A/B testing framework',
        'Chi-square tests',
        'ANOVA analysis',
        'Statistical significance validation'
      ],
      date: '2024',
      stars: 1
    }
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
          <CardContent className="space-y-4">
            {/* Slide Preview */}
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-border">
              <div className="text-center space-y-2">
                {project.icon}
                <h3 className="font-semibold text-lg">{project.title}</h3>
                <p className="text-sm text-muted-foreground">Presentation Slides</p>
              </div>
            </div>
            
            {/* Slide Actions */}
            <div className="flex gap-2">
              <Button
                className="flex-1 bg-primary hover:bg-primary/90"
                onClick={() => project.slideUrl && window.open(project.slideUrl, '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Open Slides
              </Button>
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => project.slideUrl && window.open(project.slideUrl, '_blank')}
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </div>
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
          <CardContent className="space-y-4">
            {/* Notebook Preview */}
            <div className="aspect-video bg-muted rounded-lg p-4 border">
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
            
            {/* Notebook Actions */}
            <div className="flex gap-2">
              <Button
                className="flex-1 bg-primary hover:bg-primary/90"
                onClick={() => project.githubUrl && window.open(project.githubUrl, '_blank')}
              >
                <Github className="w-4 h-4 mr-2" />
                View on GitHub
              </Button>
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => project.notebookUrl && window.open(project.notebookUrl, '_blank')}
              >
                <Eye className="w-4 h-4 mr-2" />
                Static HTML Notebook
              </Button>
            </div>
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
            <Badge variant="outline" className="px-4 py-2 text-sm border-accent/30 text-accent">
              <Code2 className="w-4 h-4 mr-2" />
              Portfolio Projects
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
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
                    <div className="relative z-10 text-center space-y-2">
                      <div className="p-3 rounded-full bg-background/80 backdrop-blur-sm inline-flex">
                        {project.icon}
                      </div>
                      <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                        {project.category}
                      </Badge>
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
              These projects represent my journey in data analytics and business intelligence. 
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
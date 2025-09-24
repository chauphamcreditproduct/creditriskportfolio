import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Filter, Search, Calendar, Code2, Database, BarChart3, TrendingUp, Users, TestTube } from 'lucide-react';
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
  icon: React.ReactNode;
  highlights: string[];
  date: string;
  stars: number;
}

const ProjectsSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  // Real projects from Shreya's GitHub
  const projects: Project[] = [
    {
      id: '1',
      title: 'InvestEasy',
      description: 'House price prediction app for investors using Kaggle data',
      longDescription: 'Python application for real estate investors to predict house prices using machine learning models. Built with scikit-learn and integrated with Tableau for comprehensive market insights, inspired by Zillow and Airbnb pricing strategies.',
      category: 'Machine Learning',
      technologies: ['Python', 'Scikit-learn', 'Tableau', 'JavaScript', 'Data Analysis'],
      githubUrl: 'https://github.com/ShreyaSolves/InvestEasy',
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
      id: '2',
      title: 'NYC Real Estate Analytics',
      description: 'Comprehensive analysis of NYC real estate transaction data',
      longDescription: 'In-depth analysis of New York City real estate market using advanced R programming and statistical methods. This MET AD 571 project explores market trends, pricing patterns, and investment opportunities across NYC boroughs.',
      category: 'Analytics',
      technologies: ['R', 'Statistical Analysis', 'Data Visualization', 'Market Research'],
      githubUrl: 'https://github.com/ShreyaSolves/NYC-Real-Estate-Analytics-Project',
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
      id: '3',
      title: 'Chinook Database SQL Analysis',
      description: 'Music industry insights through comprehensive SQL analysis',
      longDescription: 'Extensive SQL querying and analysis on the Chinook sample database, exploring customer behavior, sales trends, top-performing artists, and genre preferences to derive actionable business insights.',
      category: 'Database',
      technologies: ['SQL', 'SQLite', 'Data Analysis', 'Business Intelligence'],
      githubUrl: 'https://github.com/ShreyaSolves/Chinook-Database-SQL-Analysis',
      icon: <Database className="w-6 h-6" />,
      highlights: [
        'Customer behavior analysis',
        'Sales performance metrics',
        'Artist and genre insights',
        'Revenue optimization queries'
      ],
      date: '2024',
      stars: 0
    },
    {
      id: '4',
      title: 'Lobster Land Analytics Suite',
      description: 'Comprehensive analytics project for imaginary amusement park operations',
      longDescription: 'Complete end-to-end analytics project exploring Lobster Land amusement park in Portland, Maine through five detailed assignments covering EDA, clustering, hypothesis testing, logistic regression, and time series analysis.',
      category: 'Analytics',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'Statsmodels'],
      githubUrl: 'https://github.com/ShreyaSolves/LobsterLandAnalysis-project-overview',
      icon: <BarChart3 className="w-6 h-6" />,
      highlights: [
        'Customer behavior analysis',
        'Revenue optimization insights',
        'Predictive modeling for renewals',
        'Financial performance forecasting'
      ],
      date: '2024',
      stars: 1
    },
    {
      id: '5',
      title: 'Exploratory Data Analysis',
      description: 'Holiday sales data analysis with comprehensive EDA techniques',
      longDescription: 'Deep dive into Lobster Land holiday sales data using advanced exploratory data analysis techniques to uncover customer patterns, seasonal trends, and revenue opportunities.',
      category: 'Analytics',
      technologies: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Numpy'],
      githubUrl: 'https://github.com/ShreyaSolves/Exploratory-Data-Analysis',
      icon: <Database className="w-6 h-6" />,
      highlights: [
        'Statistical summaries and distributions',
        'Correlation analysis',
        'Data visualization dashboards',
        'Outlier detection and handling'
      ],
      date: '2024',
      stars: 1
    },
    {
      id: '6',
      title: 'Customer Segmentation & Clustering',
      description: 'Water rides segmentation using advanced clustering techniques',
      longDescription: 'Implementation of unsupervised learning algorithms to segment water rides and identify customer preferences, leading to targeted marketing strategies.',
      category: 'Machine Learning',
      technologies: ['Python', 'Scikit-learn', 'K-means', 'Hierarchical Clustering', 'PCA'],
      githubUrl: 'https://github.com/ShreyaSolves/Segmentation-and-Clustering',
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
      id: '7',
      title: 'Statistical Hypothesis Testing',
      description: 'Customer spending analysis by membership tier using statistical tests',
      longDescription: 'Rigorous statistical analysis exploring relationships between membership tiers, customer spending patterns, and visit frequencies using various hypothesis testing methods.',
      category: 'Statistics',
      technologies: ['Python', 'Scipy', 'Statsmodels', 'Pandas', 'Statistical Tests'],
      githubUrl: 'https://github.com/ShreyaSolves/Hypothesis-Testing',
      icon: <TestTube className="w-6 h-6" />,
      highlights: [
        'A/B testing framework',
        'Chi-square tests',
        'ANOVA analysis',
        'Statistical significance validation'
      ],
      date: '2024',
      stars: 1
    },
    {
      id: '8',
      title: 'Logistic Regression Model',
      description: 'Predictive model for passholder renewal behavior',
      longDescription: 'Built and optimized logistic regression model to predict customer renewal likelihood, enabling proactive retention strategies and revenue forecasting.',
      category: 'Machine Learning',
      technologies: ['Python', 'Scikit-learn', 'Logistic Regression', 'Feature Selection', 'Model Validation'],
      githubUrl: 'https://github.com/ShreyaSolves/Logistic-Regression',
      icon: <TrendingUp className="w-6 h-6" />,
      highlights: [
        'Binary classification model',
        'Feature importance analysis',
        'ROC curve optimization',
        'Cross-validation implementation'
      ],
      date: '2024',
      stars: 1
    },
    {
      id: '9',
      title: 'Time Series Analysis',
      description: 'Ralph Lauren stock price forecasting with ARIMA models',
      longDescription: 'Comprehensive time series analysis of Ralph Lauren Corporation stock prices, implementing ARIMA models for financial forecasting and trend analysis.',
      category: 'Finance',
      technologies: ['Python', 'ARIMA', 'Statsmodels', 'Time Series', 'Financial Analysis'],
      githubUrl: 'https://github.com/ShreyaSolves/Time-Series-Analysis',
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
      id: '10',
      title: 'PRATYAKSH Augmented Reality',
      description: 'AR-powered furniture visualization tool for smartphones',
      longDescription: 'Innovative augmented reality application that allows users to virtually place 3D furniture models in real spaces using smartphone cameras. Built with MATLAB, Blender, and mobile technologies.',
      category: 'AR/VR',
      technologies: ['Python', 'MATLAB', 'Blender', 'AR Development', '3D Modeling'],
      githubUrl: 'https://github.com/ShreyaSolves/Pratyaksh-Augmented-Reality',
      icon: <Code2 className="w-6 h-6" />,
      highlights: [
        '3D furniture visualization',
        'Real-time AR rendering',
        'Mobile app development',
        'Computer vision integration'
      ],
      date: '2024',
      stars: 0
    },
    {
      id: '11',
      title: 'VIDYUT Power Generation',
      description: 'Sustainable electricity generation from sewage waste',
      longDescription: 'Final-year engineering project focused on generating clean electricity from sewage waste using biogas digesters and smart automation systems, addressing environmental challenges and energy sustainability.',
      category: 'Engineering',
      technologies: ['Python', 'IoT', 'Automation', 'Renewable Energy', 'Environmental Tech'],
      githubUrl: 'https://github.com/ShreyaSolves/VIDYUT-Power-Generation',
      icon: <TrendingUp className="w-6 h-6" />,
      highlights: [
        'Biogas digester design',
        'Smart automation systems',
        'Environmental impact analysis',
        'Sustainable energy solutions'
      ],
      date: '2024',
      stars: 0
    },
    {
      id: '12',
      title: 'Rubik\'s Cube Encryption',
      description: 'Creative password encryption inspired by Rubik\'s Cube mechanics',
      longDescription: 'Innovative encryption algorithm that uses the mathematical principles of a 3x3 Rubik\'s Cube to securely encode passwords, converting characters into matrix elements and applying cube rotations.',
      category: 'Cybersecurity',
      technologies: ['Python', 'Cryptography', 'Algorithm Design', 'Security', 'Mathematics'],
      githubUrl: 'https://github.com/ShreyaSolves/Rubics-Cube-Encryption-',
      icon: <Code2 className="w-6 h-6" />,
      highlights: [
        'Creative encryption algorithm',
        'Matrix-based transformations',
        'Password security enhancement',
        'Mathematical modeling'
      ],
      date: '2024',
      stars: 0
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'Analytics', label: 'Analytics', count: projects.filter(p => p.category === 'Analytics').length },
    { id: 'Machine Learning', label: 'Machine Learning', count: projects.filter(p => p.category === 'Machine Learning').length },
    { id: 'Statistics', label: 'Statistics', count: projects.filter(p => p.category === 'Statistics').length },
    { id: 'Finance', label: 'Finance', count: projects.filter(p => p.category === 'Finance').length },
    { id: 'Database', label: 'Database', count: projects.filter(p => p.category === 'Database').length },
    { id: 'AR/VR', label: 'AR/VR', count: projects.filter(p => p.category === 'AR/VR').length },
    { id: 'Engineering', label: 'Engineering', count: projects.filter(p => p.category === 'Engineering').length },
    { id: 'Cybersecurity', label: 'Cybersecurity', count: projects.filter(p => p.category === 'Cybersecurity').length }
  ];

  useEffect(() => {
    let filtered = projects;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(project => project.category === selectedCategory);
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
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <Filter className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
            <span className="text-xs sm:text-sm text-muted-foreground">Filter by category:</span>
          </div>
        </div>

        {/* Category Tabs */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8 sm:mb-12">
          <div className="overflow-x-auto pb-2">
            <TabsList className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-6 sm:mb-8 p-1 bg-muted/50 rounded-lg min-h-fit">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id} 
                  className="relative whitespace-nowrap text-xs sm:text-sm px-2 sm:px-3 py-2 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground rounded-md min-w-0 flex-shrink-0"
                >
                  <span className="hidden sm:inline">{category.label}</span>
                  <span className="sm:hidden">
                    {category.label === 'All Projects' ? 'All' : 
                     category.label === 'Machine Learning' ? 'ML' :
                     category.label === 'Marketing & Communications' ? 'Marketing' :
                     category.label}
                  </span>
                  <Badge 
                    variant="secondary" 
                    className="ml-1 sm:ml-2 text-xs bg-background/50 text-foreground data-[state=active]:bg-accent-foreground/20"
                  >
                    {category.count}
                  </Badge>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value={selectedCategory} className="space-y-6 sm:space-y-8">
            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {filteredProjects.map((project, index) => (
                <Card 
                  key={project.id} 
                  className="group hover:shadow-elegant hover-lift transition-all duration-300 border-border/40 bg-card/50 backdrop-blur-sm animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="space-y-3 sm:space-y-4 p-4 sm:p-6">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="p-2 sm:p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300 flex-shrink-0">
                        {project.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-lg sm:text-xl font-manrope group-hover:gradient-text transition-all duration-300 line-clamp-2">
                          {project.title}
                        </CardTitle>
                        <div className="flex items-center gap-2 mt-2 flex-wrap">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-muted-foreground">{project.date}</span>
                          <Badge variant="outline" className="text-xs">{project.category}</Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6 pt-0">
                    <CardDescription className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                      {project.longDescription}
                    </CardDescription>

                    {/* Key Highlights */}
                    <div className="space-y-2 sm:space-y-3">
                      <h4 className="font-medium text-foreground text-sm sm:text-base">Key Highlights:</h4>
                      <ul className="space-y-1 sm:space-y-2">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-xs sm:text-sm text-muted-foreground flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 sm:mt-2 flex-shrink-0"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-2 sm:space-y-3">
                      <h4 className="font-medium text-foreground text-sm sm:text-base">Technologies:</h4>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {project.technologies.map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="secondary" 
                            className="text-xs hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-border/40">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 text-xs sm:text-sm py-2"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        Code
                      </Button>
                      {project.liveUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 text-xs sm:text-sm py-2"
                          onClick={() => window.open(project.liveUrl, '_blank')}
                        >
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                          <span className="hidden sm:inline">Live Demo</span>
                          <span className="sm:hidden">Demo</span>
                        </Button>
                      )}
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
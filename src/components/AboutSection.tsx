import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Code2, Database, BarChart3, Brain, Lightbulb, Users, Server, Shield, TrendingUp, AlertTriangle, DollarSign, LineChart, Target, FileCheck, Scale, Building2, Calculator, ClipboardCheck, BadgeCheck } from 'lucide-react';
import storyMathematics from '@/assets/images/story-mathematics.jpg';
import storyBanking from '@/assets/images/story-banking.jpg';
import storyDataScience from '@/assets/images/story-datascience.jpg';
import storyCreditModels from '@/assets/images/story-creditmodels.jpg';
import storyBalance from '@/assets/images/story-balance.jpg';
import pythonLogo from '@/assets/logos/python-logo.svg';
import sqlLogo from '@/assets/logos/sql-logo.svg';
import tableauLogo from '@/assets/logos/tableau-logo.png';
import excelLogo from '@/assets/logos/excel-logo.svg';
import sasLogo from '@/assets/logos/sas-logo.png';
import powerbiLogo from '@/assets/logos/powerbi-logo.svg';
import sapLogo from '@/assets/logos/sap-logo.svg';
import vbaLogo from '@/assets/logos/vba-logo.png';
import rLogo from '@/assets/logos/r-logo.svg';
import javaLogo from '@/assets/logos/java-logo.svg';

const AboutSection = () => {
  const professionalSkills = [
    { name: 'Credit Risk Policy', icon: Shield },
    { name: 'Portfolio Monitoring', icon: LineChart },
    { name: 'Stress Testing', icon: AlertTriangle },
    { name: 'Dynamic Pricing', icon: DollarSign },
    { name: 'Loss Forecasting', icon: TrendingUp },
    { name: 'Risk Governance', icon: Target },
    { name: 'Credit Underwriting', icon: FileCheck },
    { name: 'Collateral Analysis', icon: Building2 },
    { name: 'Credit Modeling', icon: Calculator },
    { name: 'Regulatory Compliance', icon: Scale },
    { name: 'Risk Assessment', icon: ClipboardCheck },
    { name: 'Default Prediction', icon: BadgeCheck }
  ];

  const technicalSkills = [
    { name: 'Python', icon: null, isLogo: true, src: pythonLogo },
    { name: 'R', icon: null, isLogo: true, src: rLogo },
    { name: 'Java', icon: null, isLogo: true, src: javaLogo },
    { name: 'SAS', icon: null, isLogo: true, src: sasLogo },
    { name: 'SQL', icon: null, isLogo: true, src: sqlLogo },
    { name: 'Excel', icon: null, isLogo: true, src: excelLogo },
    { name: 'VBA', icon: null, isLogo: true, src: vbaLogo },
    { name: 'Power BI', icon: null, isLogo: true, src: powerbiLogo },
    { name: 'Tableau', icon: null, isLogo: true, src: tableauLogo },
    { name: 'Random Forest', icon: Brain, isLogo: false, src: null },
    { name: 'XGBoost', icon: BarChart3, isLogo: false, src: null },
    { name: 'Neural Network', icon: Brain, isLogo: false, src: null },
    { name: 'ERP', icon: Server, isLogo: false, src: null },
    { name: 'SAP', icon: null, isLogo: true, src: sapLogo }
  ];

  const storyMilestones = [
    {
      title: "Mathematics & Precision",
      description: "Started in Mathematics, fascinated by how formulas explain the world",
      image: storyMathematics,
      fullText: "I started out in Mathematics, geeking out over precision and figuring out how complex formulas could explain the world. At some point between solving equations and analyzing data patterns, I realized I was way more excited about the stories numbers could tell about people's financial lives than the abstract theories themselves."
    },
    {
      title: "First Banking Internship",
      description: "Discovered credit risk at a bank in Vietnam",
      image: storyBanking,
      fullText: "My passion found its purpose during my first internship at a bank in Vietnam, where I saw firsthand how lending strategies are built. I was drawn to the high-stakes puzzle of credit risk—the challenge of using data to balance opportunity for the borrower with responsibility for the lender."
    },
    {
      title: "Data Science Journey",
      description: "Dove into Python and machine learning for risk management",
      image: storyDataScience,
      fullText: "This led me to dive into risk management and data science, using tools like Python and machine learning to tackle this real-world problem. I learned to transform raw data into actionable insights that could predict financial outcomes."
    },
    {
      title: "Building Credit Models",
      description: "Creating NTC scorecards and dynamic limit systems",
      image: storyCreditModels,
      fullText: "Now, I'm building credit risk models, from New-to-Credit scorecards for non-traditional customers to dynamic limit systems for small businesses. It feels like applied mathematics with a human impact upgrade. My projects are grounded in the realities of underwriting—asking the ultimate question, 'Will this person default?' and using everything from traditional bureau data to alternative cash flow signals to find a responsible answer."
    },
    {
      title: "Life Balance",
      description: "Balancing work with baking and films",
      image: storyBalance,
      fullText: "I honestly believe curiosity makes the best insights and teamwork makes the best solutions. This mindset extends from my work into my personal passions, where I find a similar blend of precision and creativity. I apply the same focus needed to tune a machine learning model to baking—treating ingredients as my variables and the perfect cake as the optimal output. Balancing this with the mental escape of films keeps me energized and consistently brings a fresh perspective back to my analytical work."
    }
  ];

  const timeline = [
    {
      period: '2023 - 2027',
      title: 'Bachelor of Science Mathematics and Data Analytics',
      organization: 'Dickinson College',
      description: 'Specializing in financial forecasting, risk mitigation, and quantitative modeling—bridging advanced analytics with practical business applications to drive data-informed decisions.',
      type: 'education'
    },
    {
      period: '06/2024 - 08/2024',
      title: 'Credit Risk Analyst Intern',
      organization: 'Asia Commercial Joint Stock Bank (ACB)',
      description: 'Applied advanced analytical modeling to assess credit portfolio risk and inform strategic lending decisions.',
      type: 'work'
    },
    {
      period: '01/2024 - 04/2024',
      title: 'SAP Business Analyst',
      organization: 'FPT Information Systems',
      description: 'Developed integrated SAP analytics solutions that streamlined financial operations and enhanced data-driven decision-making.',
      type: 'work'
    },
    {
      period: '06/2025 - 08/2025',
      title: 'Research Collaborator',
      organization: 'Dickinson College',
      description: 'Designed and implemented custom web crawling techniques to collect and structure a dataset of ~1 million social media posts, enabling quantitative analysis of cultural discourse on Chinese astrology platforms.',
      type: 'work'
    },
    {
      period: '09/2025 - Present',
      title: 'Research Assistant',
      organization: 'Dickinson College',
      description: 'Continuing the "Mapping Contemporary Chinese Astrology" project by advancing from data collection to computational analysis. Applying NLP, sentiment analysis, and statistical modeling to a dataset of ~1 million social media posts to identify thematic patterns and cultural trends in Chinese astrology discourse.',
      type: 'work'
    },
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-manrope font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A credit risk specialist with engineering precision—making complex data accessible, interpretable, and instrumental in shaping business strategy. 
            Currently expanding expertise in machine learning applications for financial forecasting while building inclusive data communities.
          </p>
        </div>

        {/* Professional Skills */}
        <div className="text-center space-y-6 mb-12">
          <h3 className="text-3xl sm:text-4xl font-manrope font-bold">
            Professional <span className="gradient-text">Skills</span>
          </h3>
          <p className="text-lg text-muted-foreground">
            My domain expertise in financial risk management
          </p>
          
          {/* Continuous Scrolling Skills */}
          <div className="overflow-hidden relative py-4">
            <div className="flex animate-scroll-continuous whitespace-nowrap w-max">
              {/* First set */}
              {professionalSkills.map((skill, index) => (
                <div key={`prof-first-${index}`} className="flex items-center mx-3 flex-shrink-0">
                  <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-muted/50 border border-border/20 text-sm font-medium min-w-fit">
                    <skill.icon className="h-5 w-5 text-accent" />
                    <span className="text-foreground whitespace-nowrap">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
              {/* Second set for seamless loop */}
              {professionalSkills.map((skill, index) => (
                <div key={`prof-second-${index}`} className="flex items-center mx-3 flex-shrink-0">
                  <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-muted/50 border border-border/20 text-sm font-medium min-w-fit">
                    <skill.icon className="h-5 w-5 text-accent" />
                    <span className="text-foreground whitespace-nowrap">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Expertise */}
        <div className="text-center space-y-6 mb-16">
          <h3 className="text-3xl sm:text-4xl font-manrope font-bold">
            Technical <span className="gradient-text">Expertise</span>
          </h3>
          <p className="text-lg text-muted-foreground">
            My technical toolkit for data analytics and machine learning
          </p>
          
          {/* Continuous Scrolling Skills */}
          <div className="overflow-hidden relative py-4">
            <div className="flex animate-scroll-continuous whitespace-nowrap w-max">
              {/* First set */}
              {technicalSkills.map((skill, index) => (
                <div key={`first-${index}`} className="flex items-center mx-3 flex-shrink-0">
                  <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-muted/50 border border-border/20 text-sm font-medium min-w-fit">
                    {skill.isLogo && skill.src ? (
                      <img 
                        src={skill.src} 
                        alt={`${skill.name} logo`} 
                        className="h-5 w-5 object-contain" 
                        onError={(e) => {
                          console.log(`Failed to load image for ${skill.name}`);
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : skill.icon ? (
                      <skill.icon className="h-5 w-5 text-foreground" />
                    ) : null}
                    <span className="text-foreground whitespace-nowrap">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
              {/* Second set for seamless loop */}
              {technicalSkills.map((skill, index) => (
                <div key={`second-${index}`} className="flex items-center mx-3 flex-shrink-0">
                  <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-muted/50 border border-border/20 text-sm font-medium min-w-fit">
                    {skill.isLogo && skill.src ? (
                      <img 
                        src={skill.src} 
                        alt={`${skill.name} logo`} 
                        className="h-5 w-5 object-contain" 
                        onError={(e) => {
                          console.log(`Failed to load image for ${skill.name} (second set)`);
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : skill.icon ? (
                      <skill.icon className="h-5 w-5 text-foreground" />
                    ) : null}
                    <span className="text-foreground whitespace-nowrap">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Left column - Personal story timeline with images */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in">
            <div className="flex items-center mb-4 sm:mb-6">
              <Lightbulb className="h-6 w-6 sm:h-8 sm:w-8 text-accent mr-3 sm:mr-4 flex-shrink-0" />
              <h3 className="text-xl sm:text-2xl font-manrope font-semibold">My Story</h3>
            </div>
            
            <div className="space-y-4">
              {storyMilestones.map((milestone, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <Card className="overflow-hidden cursor-pointer hover-lift group">
                      <div className="relative h-32 sm:h-40">
                        <img 
                          src={milestone.image} 
                          alt={milestone.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-transparent" />
                        <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6">
                          <p className="text-sm sm:text-base font-semibold text-foreground mb-1">
                            {milestone.title}
                          </p>
                          <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </DialogTrigger>
                  
                  <DialogContent className="max-w-3xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-manrope font-bold mb-4">
                        {milestone.title}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="relative aspect-video rounded-lg overflow-hidden">
                        <img 
                          src={milestone.image} 
                          alt={milestone.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {milestone.fullText}
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>

          {/* Right column - Timeline */}
          <div className="animate-slide-up">
            <div className="flex items-center mb-6 sm:mb-8">
              <Users className="h-6 w-6 sm:h-8 sm:w-8 text-accent mr-3 sm:mr-4 flex-shrink-0" />
              <h3 className="text-xl sm:text-2xl font-manrope font-semibold">My Journey</h3>
            </div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-accent/30"></div>
              
              <div className="space-y-6 sm:space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex items-start">
                    {/* Timeline dot */}
                    <div className={`absolute left-2.5 sm:left-4 w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 sm:border-4 ${
                      item.type === 'education' 
                        ? 'bg-accent border-accent/30' 
                        : 'bg-primary border-primary/30'
                    }`}></div>
                    
                    {/* Content */}
                    <div className="ml-8 sm:ml-12 w-full">
                      <Card className="p-4 sm:p-6 hover-lift">
                        <CardContent className="p-0">
                          <div className="mb-2">
                            <Badge variant="outline" className="text-xs mb-2">
                              {item.period}
                            </Badge>
                          </div>
                          <h4 className="font-manrope font-semibold text-base sm:text-lg mb-1">
                            {item.title}
                          </h4>
                          <p className="text-accent font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                            {item.organization}
                          </p>
                          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
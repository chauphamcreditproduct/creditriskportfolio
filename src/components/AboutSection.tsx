import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Database, BarChart3, Brain, Lightbulb, Users, Server, Shield, TrendingUp, AlertTriangle, DollarSign, LineChart, Target } from 'lucide-react';
import pythonLogo from '@/assets/logos/python-logo.svg';
import sqlLogo from '@/assets/logos/sql-logo.svg';
import tableauLogo from '@/assets/logos/tableau-logo.png';
import excelLogo from '@/assets/logos/excel-logo.svg';
import sasLogo from '@/assets/logos/sas-logo.png';
import powerbiLogo from '@/assets/logos/powerbi-logo.svg';
import sapLogo from '@/assets/logos/sap-logo.svg';
import vbaLogo from '@/assets/logos/vba-logo.png';

const AboutSection = () => {
  const professionalSkills = [
    { name: 'Credit Risk Policy', icon: Shield },
    { name: 'Portfolio Monitoring', icon: LineChart },
    { name: 'Stress Testing', icon: AlertTriangle },
    { name: 'Dynamic Pricing', icon: DollarSign },
    { name: 'Loss Forecasting', icon: TrendingUp },
    { name: 'Risk Governance', icon: Target }
  ];

  const technicalSkills = [
    { name: 'Python', icon: null, isLogo: true, src: pythonLogo },
    { name: 'R', icon: Code2, isLogo: false, src: null },
    { name: 'Java', icon: Code2, isLogo: false, src: null },
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

  const timeline = [
    {
      period: '2023 - 2027',
      title: 'Bachelor of Science Mathematics and Data Analytics',
      organization: 'Dickinson College',
      description: 'Diving deep into the intersection of business strategy and data science, with a focus on deriving actionable insights from complex datasets.',
      type: 'education'
    },
    {
      period: '06/2024 - 08/2024',
      title: 'Credit Risk Analyst Intern',
      organization: 'Asia Commercial Joint Stock Bank (ACB)',
      description: 'Worked on complex engineering projects, developing my analytical thinking and problem-solving skills that now fuel my data science journey.',
      type: 'work'
    },
    {
      period: '01/2024 - 04/2024',
      title: 'SAP Business Analyst',
      organization: 'FPT Information Systems',
      description: 'Gained hands-on experience in project management and technical analysis in the energy sector.',
      type: 'work'
    },
    {
      period: '06/2025 - 08/2025',
      title: 'Research Collaborator',
      organization: 'Dickinson College',
      description: 'Built a strong foundation in engineering principles, mathematical modeling, and systems thinking.',
      type: 'work'
    },
    {
      period: '09/2025 - Present',
      title: 'Research Assistant',
      organization: 'Dickinson College',
      description: 'Built a strong foundation in engineering principles, mathematical modeling, and systems thinking.',
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
            An engineer-turned-analyst on a mission to make data accessible, actionable, and a little less intimidating. 
            Currently navigating grad school, building communities, and discovering that Python and I are actually pretty good friends.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Left column - Personal story */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in">
            <Card className="p-6 sm:p-8 hover-lift">
              <CardContent className="p-0">
                <div className="flex items-center mb-4 sm:mb-6">
                  <Lightbulb className="h-6 w-6 sm:h-8 sm:w-8 text-accent mr-3 sm:mr-4 flex-shrink-0" />
                  <h3 className="text-xl sm:text-2xl font-manrope font-semibold">My Story</h3>
                </div>
                <div className="space-y-3 sm:space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
                  <p>
                    I started out in Instrumentation Engineering, geeking out over precision and figuring out how to make complex systems run without falling apart. At some point between debugging circuits and getting lost in data patterns, I realized I was way more excited about the stories numbers could tell than the machines themselves.
                  </p>
                  <p>
                    Now I'm at Boston University diving into Business Analytics, basically taking messy data and shaping it into something that actually makes sense (and sometimes even decisions). Feels like engineering with a storytelling upgrade.
                  </p>
                  <p>
                    When I'm not buried in Python code or convincing Tableau to cooperate, I'm usually organizing events, bringing people together, or trying to keep my plants alive like they're my sidekicks.
                  </p>
                  <p>
                    I honestly believe curiosity makes the best insights, teamwork makes the best solutions, and the best projects always come with a chaotic playlist and coffee that tastes questionable but still does the job.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Professional Skills */}
            <div className="text-center space-y-6">
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
            <div className="text-center space-y-6">
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
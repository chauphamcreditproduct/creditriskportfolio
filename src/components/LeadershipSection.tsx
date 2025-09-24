import React, { useState } from 'react';
import { Users, Award, Mic, Heart, TreePine, GraduationCap, Briefcase, Trophy, Calendar, ArrowRight, Star, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface LeadershipRole {
  id: string;
  title: string;
  organization: string;
  duration: string;
  category: string;
  description: string;
  achievements: string[];
  impact: string;
  icon: React.ReactNode;
  metrics?: {
    label: string;
    value: string;
  }[];
}

const LeadershipSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const leadershipRoles: LeadershipRole[] = [
    {
      id: '1',
      title: 'GDSC Lead',
      organization: 'Google Developer Student Club - RAIT',
      duration: '2022 - 2023',
      category: 'Technical Leadership',
      description: 'Led and scaled the Google Developer Student Club at RAIT to one of the most active tech communities in the region. As GDSC Lead, I also served as a technical judge for the Hack-a-Loud hackathon, evaluating innovative solutions from 15+ participating teams.',
      achievements: [
        'Built community from 0 to 1,500+ active members',
        'Organized 15+ technical workshops and events',
        'Established partnerships with major tech companies',
        'Mentored 50+ students in technical skills development',
        'Led team of 20+ core members across different domains',
        'Served as technical judge for Hack-a-Loud hackathon evaluating 15+ teams',
        'Assessed projects on technical innovation, feasibility, and impact'
      ],
      impact: 'Created a thriving tech ecosystem that continues to empower students in emerging technologies while supporting innovation through hackathon judging',
      icon: <Users className="w-6 h-6" />,
      metrics: [
        { label: 'Community Members', value: '1,500+' },
        { label: 'Events Organized', value: '15+' },
        { label: 'Teams Judged', value: '15+' }
      ]
    },
    {
      id: '2',
      title: 'Outreach Lead',
      organization: 'Google Developer Student Club - RAIT',
      duration: '2021 - 2022',
      category: 'Community Building',
      description: 'Spearheaded community outreach initiatives, sponsorship acquisition, and external partnerships to expand GDSC\'s reach and impact.',
      achievements: [
        'Secured sponsorships worth ₹2L+ for various events',
        'Established partnerships with 10+ tech companies',
        'Developed outreach strategies that doubled community engagement',
        'Created content that reached 10K+ students across colleges',
        'Organized inter-college collaborative events'
      ],
      impact: 'Expanded GDSC\'s influence beyond campus boundaries and established sustainable funding models',
      icon: <Target className="w-6 h-6" />,
      metrics: [
        { label: 'Sponsorship Value', value: '₹2L+' },
        { label: 'Partner Companies', value: '10+' },
        { label: 'Content Reach', value: '10K+' }
      ]
    },
    {
      id: '3',
      title: 'Technical Co-Head',
      organization: 'Instrumentation Society of America (ISA)',
      duration: '2021 - 2023',
      category: 'Technical Leadership',
      description: 'Led technical initiatives and engineering projects while fostering innovation in instrumentation and automation technologies.',
      achievements: [
        'Organized technical symposiums with 500+ participants',
        'Led development of innovative instrumentation projects',
        'Mentored junior students in technical paper presentations',
        'Coordinated with industry experts for guest lectures',
        'Established lab partnerships for hands-on learning'
      ],
      impact: 'Bridged the gap between academic learning and industry applications in instrumentation engineering',
      icon: <GraduationCap className="w-6 h-6" />,
      metrics: [
        { label: 'Event Participants', value: '500+' },
        { label: 'Projects Led', value: '8+' },
        { label: 'Industry Connections', value: '15+' }
      ]
    },
    {
      id: '4',
      title: 'Marketing Lead',
      organization: 'Indian Society for Technical Education (ISTE)',
      duration: '2020 - 2022',
      category: 'Marketing & Communications',
      description: 'Developed and executed comprehensive marketing strategies to promote technical events and increase student participation.',
      achievements: [
        'Increased event participation by 200% through strategic campaigns',
        'Created engaging content across multiple social media platforms',
        'Designed marketing materials for 20+ technical events',
        'Developed brand identity and messaging for ISTE chapter',
        'Collaborated with media partners for event coverage'
      ],
      impact: 'Transformed ISTE\'s brand presence and significantly boosted community engagement',
      icon: <Briefcase className="w-6 h-6" />,
      metrics: [
        { label: 'Participation Increase', value: '200%' },
        { label: 'Events Marketed', value: '20+' },
        { label: 'Social Media Reach', value: '25K+' }
      ]
    },
    {
      id: '5',
      title: 'Content Creation',
      organization: 'Independent Media',
      duration: '2021 - Present',
      category: 'content creation',
      description: 'Hosted engaging podcast series and created educational content reaching thousands of viewers across various platforms.',
      achievements: [
        'Produced content across multiple platforms on tech and career topics',
        'Achieved 10K+ total views across all content',
        'Covered 5+ diverse topics for industry professionals and students',
        'Created educational content on data analytics and tech careers',
        'Built a loyal community of 5K+ followers'
      ],
      impact: 'Democratized access to industry insights and career guidance for aspiring professionals',
      icon: <Mic className="w-6 h-6" />,
      metrics: [
        { label: 'Total Views', value: '10K+' },
        { label: 'Platforms', value: '3' },
        { label: 'Topics Covered', value: '5+' }
      ]
    },
    {
      id: '6',
      title: 'NSS Volunteer',
      organization: 'National Service Scheme',
      duration: '2020 - 2023',
      category: 'Social Impact',
      description: 'Dedicated volunteer contributing to community service through various social initiatives and awareness programs.',
      achievements: [
        'Completed 120+ hours of community service',
        'Organized blood donation drives with 200+ donors',
        'Conducted educational sessions at local orphanages',
        'Participated in environmental awareness campaigns',
        'Led team of volunteers for disaster relief activities'
      ],
      impact: 'Made tangible difference in local communities while developing empathy and social responsibility',
      icon: <Heart className="w-6 h-6" />,
      metrics: [
        { label: 'Service Hours', value: '120+' },
        { label: 'Blood Donors', value: '200+' },
        { label: 'Lives Impacted', value: '500+' }
      ]
    },
    {
      id: '7',
      title: 'Environmental Activist',
      organization: 'Social Wing - Various Organizations',
      duration: '2019 - Present',
      category: 'Social Impact',
      description: 'Active participant in environmental conservation efforts, leading tree plantation drives and sustainability initiatives.',
      achievements: [
        'Organized 10+ tree plantation drives',
        'Planted 500+ trees in local communities',
        'Led beach and park cleanup campaigns',
        'Conducted workshops on environmental sustainability',
        'Collaborated with NGOs for conservation projects'
      ],
      impact: 'Contributed to environmental conservation while raising awareness about climate action',
      icon: <TreePine className="w-6 h-6" />,
      metrics: [
        { label: 'Trees Planted', value: '500+' },
        { label: 'Cleanup Drives', value: '10+' },
        { label: 'Volunteers Mobilized', value: '100+' }
      ]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Roles', count: leadershipRoles.length },
    { id: 'Technical Leadership', label: 'Technical', count: leadershipRoles.filter(r => r.category === 'Technical Leadership').length },
    { id: 'Community Building', label: 'Community', count: leadershipRoles.filter(r => r.category === 'Community Building').length },
    { id: 'Social Impact', label: 'Social Impact', count: leadershipRoles.filter(r => r.category === 'Social Impact').length },
    { id: 'content creation', label: 'Content', count: leadershipRoles.filter(r => r.category === 'content creation').length },
    { id: 'Marketing & Communications', label: 'Marketing', count: leadershipRoles.filter(r => r.category === 'Marketing & Communications').length }
  ];

  const filteredRoles = selectedCategory === 'all' 
    ? leadershipRoles 
    : leadershipRoles.filter(role => role.category === selectedCategory);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="leadership" className="py-24 bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <div className="space-y-4">
            <Badge variant="outline" className="px-4 py-2 text-sm border-accent/30 text-accent">
              <Award className="w-4 h-4 mr-2" />
              Leadership Journey
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-manrope font-bold">
              <span className="block text-foreground">Building Communities,</span>
              <span className="block gradient-text">Driving Impact</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From founding Google Developer Student Clubs to judging hackathons and creating educational content, 
              here's how I've channeled my passion for technology and community building into meaningful leadership roles.
            </p>
          </div>
        </div>

        {/* Category Tabs */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-12">
          <div className="overflow-x-auto pb-2">
            <TabsList className="flex flex-wrap justify-center gap-2 mb-8 p-1 bg-muted/50 rounded-lg min-h-fit">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id} 
                  className="relative whitespace-nowrap text-xs sm:text-sm px-3 sm:px-4 py-2 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground rounded-md min-w-0 flex-shrink-0"
                >
                  <span className="hidden sm:inline">{category.label}</span>
                  <span className="sm:hidden">
                    {category.label === 'All Roles' ? 'All' : 
                     category.label === 'Community Building' ? 'Community' :
                     category.label === 'Technical Leadership' ? 'Tech' :
                     category.label === 'Content Creation' ? 'Content' :
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

          <TabsContent value={selectedCategory} className="space-y-8">
            {/* Leadership Timeline */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {filteredRoles.map((role, index) => (
                <Card 
                  key={role.id} 
                  className="group hover:shadow-elegant hover-lift transition-all duration-300 border-border/40 bg-card/50 backdrop-blur-sm animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="space-y-3 sm:space-y-4 p-4 sm:p-6">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="p-2 sm:p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300 flex-shrink-0">
                        {role.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between flex-wrap gap-2">
                          <div className="flex-1 min-w-0">
                            <CardTitle className="text-lg sm:text-xl font-manrope group-hover:gradient-text transition-all duration-300 line-clamp-2">
                              {role.title}
                            </CardTitle>
                            <p className="text-accent font-medium mt-1 text-sm sm:text-base">{role.organization}</p>
                          </div>
                          <Badge variant="outline" className="text-xs flex-shrink-0">
                            {role.category}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-muted-foreground">{role.duration}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6 pt-0">
                    <CardDescription className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                      {role.description}
                    </CardDescription>

                    {/* Key Metrics */}
                    {role.metrics && (
                      <div className="grid grid-cols-3 gap-2 sm:gap-4 p-3 sm:p-4 rounded-lg bg-accent/5 border border-accent/10">
                        {role.metrics.map((metric, idx) => (
                          <div key={idx} className="text-center">
                            <div className="text-lg sm:text-2xl font-bold text-accent">{metric.value}</div>
                            <div className="text-xs text-muted-foreground leading-tight">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Key Achievements */}
                    <div className="space-y-2 sm:space-y-3">
                      <h4 className="font-medium text-foreground flex items-center gap-2 text-sm sm:text-base">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1 sm:space-y-2">
                        {role.achievements.slice(0, 3).map((achievement, idx) => (
                          <li key={idx} className="text-xs sm:text-sm text-muted-foreground flex items-start gap-2">
                            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-accent mt-0.5 flex-shrink-0" />
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Impact Statement */}
                    <div className="p-3 sm:p-4 rounded-lg bg-gradient-to-r from-accent/5 to-primary/5 border-l-4 border-accent">
                      <p className="text-xs sm:text-sm text-foreground italic leading-relaxed">
                        <strong>Impact:</strong> {role.impact}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredRoles.length === 0 && (
              <div className="text-center py-12 animate-fade-in">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted/20 flex items-center justify-center">
                  <Users className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-manrope font-medium text-foreground mb-2">
                  No roles found in this category
                </h3>
                <p className="text-muted-foreground mb-6">
                  Try selecting a different category to explore more leadership experiences
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => setSelectedCategory('all')}
                >
                  View All Roles
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-2xl md:text-3xl font-manrope font-bold text-foreground">
              Ready to lead together?
            </h3>
            <p className="text-lg text-muted-foreground">
              My leadership philosophy centers on empowering others, building inclusive communities, 
              and creating lasting impact. Let's discuss how we can collaborate to drive meaningful change.
            </p>
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-medium hover-glow transition-all duration-300"
              onClick={scrollToContact}
            >
              Let's Connect
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
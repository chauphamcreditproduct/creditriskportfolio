import { Mail, Github, Linkedin, MapPin, Phone, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ContactSection = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'chauminhphamvn@gmail.com',
      action: () => window.open('mailto:chauminhphamvn@gmail.com'),
      description: 'Best for professional inquiries'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/chau-pham-credit-product',
      action: () => window.open('https://www.linkedin.com/in/chau-pham-credit-product/', '_blank'),
      description: 'Professional networking & updates'
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: 'GitHub',
      value: 'github.com/chauphamcreditproduct',
      action: () => window.open('https://github.com/chauphamcreditproduct', '_blank'),
      description: 'Check out my code & projects'
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 bg-gradient-subtle">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16 animate-fade-in">
          <Badge variant="outline" className="px-3 sm:px-4 py-2 text-sm border-accent/30 text-accent">
            <Mail className="w-4 h-4 mr-2" />
            Let's Connect
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-manrope font-bold">
            <span className="block text-foreground">Ready to</span>
            <span className="block gradient-text">Collaborate?</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Whether you want to discuss data analytics, explore collaboration opportunities, 
            or just chat about the latest in machine learning - I'd love to hear from you!
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12 sm:mb-16 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => (
            <Card 
              key={index}
              className="group hover:shadow-elegant hover-lift transition-all duration-300 border-border/40 bg-card/50 backdrop-blur-sm cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={method.action}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 sm:p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                    {method.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-lg sm:text-xl font-manrope group-hover:gradient-text transition-all duration-300">
                      {method.title}
                    </CardTitle>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm font-medium text-foreground break-all">
                  {method.value}
                </p>
                <p className="text-xs text-muted-foreground">
                  {method.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Location & Availability */}
        <div className="text-center space-y-6 sm:space-y-8 animate-fade-in">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <MapPin className="w-5 h-5 text-accent" />
              <span className="text-sm sm:text-base">Boston, MA</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-border"></div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-sm sm:text-base">Available for opportunities</span>
            </div>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-4">
              Currently pursuing MS Applied Business Analytics at Boston University and 
              always excited to discuss new opportunities, collaborations, and innovative projects 
              in data science and analytics.
            </p>
          </div>

          {/* Primary CTA */}
          <div className="space-y-4">
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-medium hover-glow transition-all duration-300"
              onClick={() => window.open('mailto:shreyamanibu@gmail.com')}
            >
              <Mail className="w-5 h-5 mr-2" />
              Send me an email
            </Button>
            <p className="text-sm text-muted-foreground">
              I typically respond within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
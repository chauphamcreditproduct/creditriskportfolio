import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Filter, Search, Calendar, Code2, Database, BarChart3, TrendingUp, Users, TestTube, ArrowLeft, FileText, BookOpen, Download, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import klarnaLogo from '@/assets/logos/klarna-logo.png';
import affirmLogo from '@/assets/logos/affirm-logo-new.png';
import stripeLogo from '@/assets/logos/stripe-logo.svg';
import rampLogo from '@/assets/logos/ramp-logo-new.png';
import brexLogo from '@/assets/logos/brex-logo.png';
import chimeLogo from '@/assets/logos/chime-logo.png';
import amexLogo from '@/assets/logos/amex-logo.svg';
import jpmorganLogo from '@/assets/logos/jpmorgan-logo.svg';
import citiLogo from '@/assets/logos/citi-logo.svg';
import bofaLogo from '@/assets/logos/bofa-logo.svg';
import olinLogo from '@/assets/logos/olin-logo.jpg';
import oilGasImage from '@/assets/images/oil-gas-refinery.jpg';
import walmartLogo from '@/assets/logos/walmart-logo.webp';
import sofiLogo from '@/assets/logos/sofi-logo.svg';
import currentLogo from '@/assets/logos/current-logo-new.png';

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
      stars: 0,
      companyLogos: [
        { name: 'Olin Corporation', src: olinLogo },
        { name: 'Oil & Gas Industry', src: oilGasImage }
      ]
    },
    {
      id: '2',
      title: 'Dynamic Credit Limit Model for SMB',
      description: 'Dynamic credit limit optimization system for small businesses using machine learning to automate risk-adjusted lending decisions.',
      longDescription: 'End-to-end machine learning solution for dynamic credit line management in small business lending. This project implements a dual-model approach combining XGBoost classification and regression to automatically determine when and how much to adjust credit limits, enabling fintech-style adaptive financing while optimizing risk and capital allocation.',
      category: 'FinTech & Risk Analytics',
      technologies: ["Python", "Classification & Regression", "XGBoostRegressor"],
      githubUrl: 'https://github.com/chauphamcreditproduct/SMB_Dynamic_Credit_Line',
      slideUrl: 'https://docs.google.com/presentation/d/1NqYbBzCOjIrtXCI4-QS84lgmHiph2wJ1_XRvd9G4QBo/edit?usp=sharing',
      notebookUrl: 'https://nbviewer.org/urls/huggingface.co/datasets/chauminhphamvn/Dynamic_Credit_lIMIT_Model_FOR_SMB/resolve/main/SMB_Dynamic_Credit_Line.ipynb',
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
        { name: 'Citibank', src: citiLogo },
        { name: 'Ramp', src: rampLogo },
        { name: 'Brex', src: brexLogo }
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
      slideUrl: 'https://docs.google.com/presentation/d/1WP4TzNuZo9e-T7iFaD_uvheiKdRLKqkuFbag2q7w-_s/edit?slide=id.g251939f03a9_0_0#slide=id.g251939f03a9_0_0',
      notebookUrl: 'https://nbviewer.org/urls/huggingface.co/datasets/chauminhphamvn/New_To_Credit_Underwriting_Model/resolve/main/NTC_Consumer_Credit.ipynb',
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
        { name: 'SoFi', src: sofiLogo },
        { name: 'Current', src: currentLogo }
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
      slideUrl: '/Walmart_Sales_Report.pdf',
      notebookUrl: 'https://huggingface.co/datasets/chauminhphamvn/123/blob/main/Explore_Walmart_Sales_applying_Time_Series_Model.ipynb',
      imageUrl: '/api/placeholder/400/250',
      icon: <Users className="w-6 h-6" />,
      highlights: [
      "Quantified holiday impact: 40%+ sales lift during Christmas, 33% for Black Friday",
      "Autoregressive model with 4 lags capturing monthly seasonal patterns",
      "Statistical significance testing for all major holiday periods (p<0.001)",
      "Actionable retail insights for inventory optimization and promotional planning"
  ],
      date: '03/2025',
      stars: 1,
      companyLogos: [
        { name: 'Walmart', src: walmartLogo }
      ]
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
        {/* Project Report Section */}
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Project Report
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {/* Embedded Slide Preview */}
            {project.slideUrl ? (
              <div>
                {project.slideUrl?.toLowerCase().endsWith('.pdf') ? (
                  <div className="space-y-4">
                    {/* PDF Viewer using multiple fallback methods */}
                    <div className="relative">
                      <iframe
                        src={`https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(window.location.origin + project.slideUrl)}`}
                        className="w-full h-[500px] border-0 rounded"
                        allowFullScreen
                        title="PDF Viewer"
                      />
                    </div>
                  </div>
                ) : (
                  <iframe
                    src={project.slideUrl.replace('/edit', '/embed')}
                    className="w-full h-[500px] border-0"
                    allowFullScreen
                  />
                )}
                {/* Action Buttons */}
                <div className="flex gap-3 p-4 bg-gradient-to-r from-accent-light to-secondary border-t">
                  <Button
                    variant="outline"
                    className="flex-1 border-accent/30 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 group"
                    onClick={() => window.open(project.slideUrl, '_blank')}
                  >
                    <FileText className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Xem Report
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-accent/30 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 group"
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = project.slideUrl!;
                      link.download = 'Walmart_Sales_Report.pdf';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                  >
                    <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Tải PDF
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

      {/* Risk Framework Section - Only for NTC Project */}
      {project.id === '3' && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl">Risk Framework (PD & NCL Thresholds)</CardTitle>
            <CardDescription>
              Comprehensive analysis of Net Credit Loss (NCL) rates across different customer segments to identify low-risk profiles
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid lg:grid-cols-2 gap-6">
              {/* FICO x Asset Analysis */}
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">FICO × Asset Band</h3>
                <div className="overflow-x-auto rounded-lg border">
                  <table className="w-full text-sm">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="p-2 text-left font-medium">FICO Band</th>
                        <th className="p-2 text-center font-medium">&lt;500</th>
                        <th className="p-2 text-center font-medium">501-1000</th>
                        <th className="p-2 text-center font-medium">1001-1500</th>
                        <th className="p-2 text-center font-medium">1501-2000</th>
                        <th className="p-2 text-center font-medium">2001-2500</th>
                        <th className="p-2 text-center font-medium">&gt;2500</th>
                        <th className="p-2 text-center font-medium bg-accent/20">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { fico: '<520', values: ['29.41%', '22.73%', '15.79%', '18.75%', '14.29%', '15.00%', '19.44%'], colors: ['red', 'red', 'yellow', 'yellow', 'green', 'green', 'yellow'] },
                        { fico: '520-569', values: ['18.18%', '17.95%', '5.17%', '18.00%', '11.11%', '19.61%', '14.75%'], colors: ['yellow', 'yellow', 'green', 'yellow', 'green', 'yellow', 'green'] },
                        { fico: '570-599', values: ['11.76%', '15.00%', '25.00%', '22.22%', '14.81%', '18.52%', '18.37%'], colors: ['green', 'yellow', 'red', 'red', 'green', 'yellow', 'yellow'] },
                        { fico: '600-639', values: ['10.00%', '19.35%', '28.95%', '12.50%', '16.22%', '8.11%', '16.10%'], colors: ['green', 'yellow', 'red', 'green', 'yellow', 'green', 'yellow'] },
                        { fico: '640+', values: ['18.32%', '11.59%', '17.24%', '10.81%', '10.69%', '6.21%', '12.38%'], colors: ['yellow', 'green', 'yellow', 'green', 'green', 'green', 'green'] },
                      ].map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-muted/20' : ''}>
                          <td className="p-2 font-medium">{row.fico}</td>
                          {row.values.map((val, i) => (
                            <td key={i} className={`p-2 text-center ${
                              row.colors[i] === 'green' ? 'bg-green-500/20 text-green-700 dark:text-green-400 font-medium' :
                              row.colors[i] === 'red' ? 'bg-red-500/20 text-red-700 dark:text-red-400 font-medium' :
                              'text-muted-foreground'
                            }`}>
                              {val}
                            </td>
                          ))}
                        </tr>
                      ))}
                      <tr className="border-t-2 bg-accent/10 font-semibold">
                        <td className="p-2">Grand Total</td>
                        <td className="p-2 text-center">17.57%</td>
                        <td className="p-2 text-center">14.49%</td>
                        <td className="p-2 text-center">16.83%</td>
                        <td className="p-2 text-center">14.18%</td>
                        <td className="p-2 text-center">12.09%</td>
                        <td className="p-2 text-center">10.47%</td>
                        <td className="p-2 text-center bg-accent/30">14.21%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* FICO x DTI Analysis */}
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">FICO × DTI Distribution</h3>
                <div className="overflow-x-auto rounded-lg border">
                  <table className="w-full text-sm">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="p-2 text-left font-medium">FICO Band</th>
                        <th className="p-2 text-center font-medium">&lt;1%</th>
                        <th className="p-2 text-center font-medium">1-3%</th>
                        <th className="p-2 text-center font-medium">3-5%</th>
                        <th className="p-2 text-center font-medium">5-7%</th>
                        <th className="p-2 text-center font-medium">7-10%</th>
                        <th className="p-2 text-center font-medium bg-accent/20">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { fico: '<520', values: ['12.50%', '24.07%', '25.00%', '0.00%', '0.00%', '19.44%'], colors: ['green', 'red', 'red', 'green', 'green', 'yellow'] },
                        { fico: '520-569', values: ['20.21%', '8.33%', '0.00%', '33.33%', '0.00%', '14.75%'], colors: ['red', 'green', 'green', 'red', 'green', 'green'] },
                        { fico: '570-599', values: ['16.67%', '20.48%', '0.00%', '0.00%', '0.00%', '18.37%'], colors: ['yellow', 'red', 'green', 'green', 'green', 'yellow'] },
                        { fico: '600-639', values: ['18.72%', '12.87%', '0.00%', '50.00%', '28.57%', '16.10%'], colors: ['yellow', 'green', 'green', 'red', 'red', 'yellow'] },
                        { fico: '640+', values: ['13.17%', '12.87%', '29.41%', '0.00%', '0.00%', '12.38%'], colors: ['green', 'green', 'red', 'green', 'green', 'green'] },
                      ].map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-muted/20' : ''}>
                          <td className="p-2 font-medium">{row.fico}</td>
                          {row.values.map((val, i) => (
                            <td key={i} className={`p-2 text-center ${
                              row.colors[i] === 'green' ? 'bg-green-500/20 text-green-700 dark:text-green-400 font-medium' :
                              row.colors[i] === 'red' ? 'bg-red-500/20 text-red-700 dark:text-red-400 font-medium' :
                              'text-muted-foreground'
                            }`}>
                              {val}
                            </td>
                          ))}
                        </tr>
                      ))}
                      <tr className="border-t-2 bg-accent/10 font-semibold">
                        <td className="p-2">Grand Total</td>
                        <td className="p-2 text-center">9.94%</td>
                        <td className="p-2 text-center">15.63%</td>
                        <td className="p-2 text-center">14.94%</td>
                        <td className="p-2 text-center">13.04%</td>
                        <td className="p-2 text-center">0.00%</td>
                        <td className="p-2 text-center bg-accent/30">14.21%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Asset x Loan Amount Analysis */}
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Asset × Loan Amount</h3>
                <div className="overflow-x-auto rounded-lg border">
                  <table className="w-full text-sm">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="p-2 text-left font-medium">Asset Band</th>
                        <th className="p-2 text-center font-medium">No debt</th>
                        <th className="p-2 text-center font-medium">Low<br/>(1K-5K)</th>
                        <th className="p-2 text-center font-medium">Moderate<br/>(5K-10K)</th>
                        <th className="p-2 text-center font-medium">High<br/>(10K-15K)</th>
                        <th className="p-2 text-center font-medium">Very High<br/>(&gt;15K)</th>
                        <th className="p-2 text-center font-medium bg-accent/20">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { asset: '<500', values: ['18.88%', '11.11%', '19.23%', '17.86%', '12.50%', '17.57%'], colors: ['yellow', 'green', 'yellow', 'yellow', 'green', 'yellow'] },
                        { asset: '501-1000', values: ['13.55%', '20.59%', '11.11%', '10.00%', '23.81%', '14.49%'], colors: ['green', 'red', 'green', 'green', 'red', 'green'] },
                        { asset: '1001-1500', values: ['18.95%', '9.52%', '14.29%', '17.95%', '8.33%', '16.83%'], colors: ['yellow', 'green', 'green', 'yellow', 'green', 'yellow'] },
                        { asset: '1501-2000', values: ['14.38%', '16.67%', '16.00%', '9.52%', '16.13%', '14.18%'], colors: ['green', 'yellow', 'yellow', 'green', 'yellow', 'green'] },
                        { asset: '2001-2500', values: ['8.28%', '11.11%', '23.08%', '15.00%', '12.90%', '12.09%'], colors: ['green', 'green', 'red', 'green', 'green', 'green'] },
                        { asset: '>2500', values: ['10.75%', '19.05%', '13.16%', '7.41%', '0.00%', '10.47%'], colors: ['green', 'yellow', 'green', 'green', 'green', 'green'] },
                      ].map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-muted/20' : ''}>
                          <td className="p-2 font-medium">{row.asset}</td>
                          {row.values.map((val, i) => (
                            <td key={i} className={`p-2 text-center ${
                              row.colors[i] === 'green' ? 'bg-green-500/20 text-green-700 dark:text-green-400 font-medium' :
                              row.colors[i] === 'red' ? 'bg-red-500/20 text-red-700 dark:text-red-400 font-medium' :
                              'text-muted-foreground'
                            }`}>
                              {val}
                            </td>
                          ))}
                        </tr>
                      ))}
                      <tr className="border-t-2 bg-accent/10 font-semibold">
                        <td className="p-2">Grand Total</td>
                        <td className="p-2 text-center">14.20%</td>
                        <td className="p-2 text-center">15.44%</td>
                        <td className="p-2 text-center">16.08%</td>
                        <td className="p-2 text-center">13.11%</td>
                        <td className="p-2 text-center">12.26%</td>
                        <td className="p-2 text-center bg-accent/30">14.21%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* FICO x Utilization Analysis */}
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">FICO × Utilization</h3>
                <div className="overflow-x-auto rounded-lg border">
                  <table className="w-full text-sm">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="p-2 text-left font-medium">FICO Band</th>
                        <th className="p-2 text-center font-medium">Very Low<br/>(&lt;10%)</th>
                        <th className="p-2 text-center font-medium">Low<br/>(10-30%)</th>
                        <th className="p-2 text-center font-medium">Moderate<br/>(30-60%)</th>
                        <th className="p-2 text-center font-medium">High<br/>(60-100%)</th>
                        <th className="p-2 text-center font-medium bg-accent/20">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { fico: '<520', values: ['9.09%', '14.29%', '31.58%', '16.67%', '19.44%'], colors: ['green', 'green', 'red', 'yellow', 'yellow'] },
                        { fico: '520-569', values: ['8.33%', '13.93%', '20.00%', '0.00%', '14.75%'], colors: ['green', 'green', 'red', 'green', 'green'] },
                        { fico: '570-599', values: ['9.38%', '20.37%', '22.22%', '14.29%', '18.37%'], colors: ['green', 'red', 'red', 'green', 'yellow'] },
                        { fico: '600-639', values: ['11.11%', '16.30%', '15.49%', '50.00%', '16.10%'], colors: ['green', 'yellow', 'yellow', 'red', 'yellow'] },
                        { fico: '640+', values: ['10.33%', '15.49%', '10.66%', '5.26%', '12.38%'], colors: ['green', 'yellow', 'green', 'green', 'green'] },
                      ].map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-muted/20' : ''}>
                          <td className="p-2 font-medium">{row.fico}</td>
                          {row.values.map((val, i) => (
                            <td key={i} className={`p-2 text-center ${
                              row.colors[i] === 'green' ? 'bg-green-500/20 text-green-700 dark:text-green-400 font-medium' :
                              row.colors[i] === 'red' ? 'bg-red-500/20 text-red-700 dark:text-red-400 font-medium' :
                              'text-muted-foreground'
                            }`}>
                              {val}
                            </td>
                          ))}
                        </tr>
                      ))}
                      <tr className="border-t-2 bg-accent/10 font-semibold">
                        <td className="p-2">Grand Total</td>
                        <td className="p-2 text-center">9.94%</td>
                        <td className="p-2 text-center">15.63%</td>
                        <td className="p-2 text-center">14.94%</td>
                        <td className="p-2 text-center">13.04%</td>
                        <td className="p-2 text-center bg-accent/30">14.21%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="mt-6 flex items-center gap-6 justify-center text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500/20 border border-green-500/30 rounded"></div>
                <span className="text-muted-foreground">Low Risk (&lt;15% NCL)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-500/20 border border-red-500/30 rounded"></div>
                <span className="text-muted-foreground">High Risk (&gt;20% NCL)</span>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Recommendations Section - Only for NTC Project */}
      {project.id === '3' && (
        <Card className="mt-6 border-accent/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
              Underwriting Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-sm text-muted-foreground mb-4">
                  Based on the analysis and the model's precision-focused strategy (threshold 0.7), we recommend approving NTC customers with the following profiles:
                </p>
              </div>

              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                <h4 className="font-semibold text-green-700 dark:text-green-400 mb-3">✓ Recommended Approval Profiles</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 mt-0.5">•</span>
                    <span><strong>FICO Score 600+ (preferably 640+):</strong> These customers (12.38% in 640+) are lower risk, especially with assets in the $501-1500 range.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 mt-0.5">•</span>
                    <span><strong>Asset Band $501-1500:</strong> This range (14.49%-16.83%) indicates financial stability.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 mt-0.5">•</span>
                    <span><strong>DTI &lt;3%:</strong> Customers with DTI &lt;1% (15.31%) or 1-3% (14.24%) in FICO 640+ or asset band $501-1500 are low-risk.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 mt-0.5">•</span>
                    <span><strong>Loan Amount &lt;10K:</strong> Approve customers with loans &lt;10K (14.20%), especially in FICO 640+ (13.11%) or asset band $501-1500 (18.88%).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 mt-0.5">•</span>
                    <span><strong>Utilization &lt;30%:</strong> Very low (&lt;10%) or low (10-30%) utilization in FICO 640+ (15.45%) or asset band $501-1500 (16.47%) indicates responsible credit use.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                <h4 className="font-semibold text-red-700 dark:text-red-400 mb-3">✗ Profiles to Avoid</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                    <span><strong>FICO &lt;520:</strong> High risk (19.44%), especially with assets &lt;500 (29.41%) or high utilization (50.00%).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                    <span><strong>High DTI (7-10%):</strong> Particularly in FICO &lt;520 or asset band &lt;500 (22.47%).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                    <span><strong>High Loan Amounts (&gt;10K-25K):</strong> Risky in FICO &lt;520 (24.14%) or asset band &lt;500 (15.73%).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                    <span><strong>High Utilization (60-100%):</strong> Avoid in FICO &lt;520 (50.00%) or asset band &lt;500 (17.57%).</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

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
                    <div className="relative z-10 w-full h-full flex items-center justify-center px-4 py-4">
                      
                      {/* Scrolling Company Logos */}
                      {project.companyLogos && project.companyLogos.length > 0 && (
                        <div className="w-full h-full flex items-center justify-center px-8 py-8 bg-gradient-to-br from-accent-light to-secondary backdrop-blur-sm rounded-lg shadow-sm overflow-hidden">
                          <div className="flex flex-nowrap gap-16 items-center justify-start animate-scroll-logos pointer-events-none min-w-max">
                            {[...Array(2)].map((_, setIndex) => (
                              <React.Fragment key={`set-${setIndex}`}>
                                {project.companyLogos!.map((company, idx) => (
                                  <div 
                                    key={`${setIndex}-${idx}`} 
                                    className="h-28 flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:scale-110"
                                    title={company.name}
                                  >
                                    <img 
                                      src={company.src} 
                                      alt={`${company.name} logo`} 
                                      className="h-full w-auto object-contain max-w-[240px] logo-no-bg"
                                      onError={(e) => {
                                        (e.currentTarget as HTMLImageElement).src = '/placeholder.svg';
                                      }}
                                    />
                                  </div>
                                ))}
                              </React.Fragment>
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
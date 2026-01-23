import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Laptop, Layout, Code, Smartphone, Zap, Server } from "lucide-react";

export default function Services() {
  const features = [
    {
      icon: <Layout className="w-6 h-6 text-primary" />,
      title: "Responsive Design",
      description: "Pixel-perfect websites that look stunning on any device, from mobile to desktop."
    },
    {
      icon: <Code className="w-6 h-6 text-secondary" />,
      title: "Custom Development",
      description: "Tailored code solutions built with modern frameworks like React and Next.js."
    },
    {
      icon: <Zap className="w-6 h-6 text-accent" />,
      title: "Performance Optimization",
      description: "Blazing fast load times and SEO-friendly architecture for maximum visibility."
    },
    {
      icon: <Server className="w-6 h-6 text-primary" />,
      title: "Full-Stack Capabilities",
      description: "Robust backend integration and database management for complex applications."
    }
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 border-primary/20 text-primary">Our Expertise</Badge>
          <h2 className="text-4xl font-bold font-heading mb-4">Web Development Excellence</h2>
          <p className="text-muted-foreground text-lg">
            We specialize exclusively in crafting high-end web experiences. From simple landing pages to complex web applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Main Service Highlight */}
          <Card className="h-full border-primary/10 shadow-lg bg-card/50 backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Laptop className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-2xl font-heading">Complete Web Solutions</CardTitle>
              <CardDescription className="text-base">
                End-to-end development services designed to scale with your business.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span>Single Page Applications (SPA)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span>E-Commerce Platforms</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span>Corporate Websites</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span>SaaS Dashboards</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Feature Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, idx) => (
              <Card key={idx} className="border-border/50 hover:border-primary/30 transition-colors">
                <CardHeader>
                  <div className="mb-2">{feature.icon}</div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
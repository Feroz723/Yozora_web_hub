import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Laptop, Layout, Code, Zap, Server, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

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
    <section id="services" className="py-32 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <Badge variant="outline" className="mb-4 border-primary/20 text-primary py-1 px-4 text-sm uppercase tracking-wider">Our Expertise</Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 tracking-tight">Web Development Excellence</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We specialize exclusively in crafting high-end web experiences. From simple landing pages to complex web applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch mb-24">
          {/* Main Service Highlight */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full border-primary/10 shadow-2xl bg-card/50 backdrop-blur-sm relative overflow-hidden group border-2">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/service-web-dev.png" 
                  alt="Web Development" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>
              <CardHeader className="relative pt-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 shadow-inner">
                  <Laptop className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-3xl font-heading mb-4">Complete Web Solutions</CardTitle>
                <CardDescription className="text-lg text-muted-foreground">
                  End-to-end development services designed to scale with your business in the digital era.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Single Page Applications",
                    "E-Commerce Platforms",
                    "Corporate Websites",
                    "SaaS Dashboards",
                    "Custom API Integration",
                    "Cloud Infrastructure"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-medium">
                      <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Feature Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="h-full border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card/30 backdrop-blur-sm">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div id="why-choose-us" className="pt-24 border-t border-border/50">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <Badge className="bg-secondary/10 text-secondary hover:bg-secondary/20 border-secondary/20 py-1 px-4">Why Choose Yozora?</Badge>
              <h3 className="text-3xl md:text-4xl font-bold font-heading">Propelling Your Business to New Heights</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We don't just build websites; we create digital assets that drive growth. Our approach combines cosmic creativity with engineering precision.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Strategic Vision", desc: "We align every line of code with your business goals." },
                  { title: "Cutting-Edge Tech", desc: "We use the latest stack to ensure speed and security." },
                  { title: "Reliable Support", desc: "Our relationship doesn't end at launch; we grow with you." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-card">
                <img src="/about-image.png" alt="Our Team" className="w-full h-full object-cover" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
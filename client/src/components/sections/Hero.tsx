import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Code2, Rocket } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-background -z-20" />
      
      {/* Abstract Shapes/Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 opacity-50 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] -z-10 opacity-50" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Future-Ready Web Solutions
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight tracking-tight">
            Launch Your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
              Digital Vision
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
            We craft high-performance websites and digital experiences that propel your business into the future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="rounded-full px-8 text-lg h-12 bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 group">
              Get Started <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 text-lg h-12 border-2 hover:bg-muted/50">
              Our Services
            </Button>
          </div>
        </motion.div>

        {/* Visual Content - 3D Composition mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:h-[600px] flex items-center justify-center"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            {/* Central Planet/Orb */}
            <div className="absolute inset-0 m-auto w-64 h-64 rounded-full bg-gradient-to-br from-primary to-secondary opacity-20 blur-md animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-0 m-auto w-60 h-60 rounded-full bg-card border border-border/50 shadow-2xl flex items-center justify-center z-10 overflow-hidden">
               {/* Use logo as central element */}
               <img src="/logo.jpeg" alt="Yozora" className="w-full h-full object-cover opacity-90" />
            </div>

            {/* Floating Elements Orbiting */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 z-20"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 bg-card p-4 rounded-xl shadow-xl border border-border">
                <Code2 className="w-8 h-8 text-secondary" />
              </div>
            </motion.div>

             <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 z-20"
            >
              <div className="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-6 bg-card p-4 rounded-xl shadow-xl border border-border">
                <Globe className="w-8 h-8 text-accent" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
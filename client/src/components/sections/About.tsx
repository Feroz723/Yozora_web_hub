import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Rocket, Target, Users, Zap, Award, TrendingUp } from "lucide-react";

export default function About() {
    const stats = [
        { label: "Projects Delivered", value: "50+", icon: Rocket },
        { label: "Client Satisfaction", value: "98%", icon: Award },
        { label: "Years Experience", value: "5+", icon: TrendingUp },
        { label: "Team Members", value: "15+", icon: Users },
    ];

    const values = [
        {
            icon: <Target className="w-8 h-8 text-primary" />,
            title: "Mission-Driven",
            description: "We transform ideas into exceptional digital experiences that drive real business results."
        },
        {
            icon: <Zap className="w-8 h-8 text-secondary" />,
            title: "Innovation First",
            description: "Embracing cutting-edge technologies to build scalable, future-proof solutions."
        },
        {
            icon: <Users className="w-8 h-8 text-accent" />,
            title: "Client-Centric",
            description: "Your success is our success. We prioritize collaboration and transparent communication."
        },
    ];

    return (
        <section id="about" className="py-32 bg-muted/20 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <Badge variant="outline" className="mb-4 border-primary/20 text-primary py-1 px-4 text-sm uppercase tracking-wider">
                        About Yozora
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 tracking-tight">
                        Building Digital Excellence
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Yozora Technologies is a premier web development company dedicated to building the digital infrastructure of tomorrow.
                        Inspired by the limitless possibilities of the night sky ("Yozora"), we aim to reach new heights in every project we undertake.
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            <Card className="text-center border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl bg-card/50 backdrop-blur-sm">
                                <CardHeader className="pb-2">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                                        <stat.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <CardTitle className="text-3xl md:text-4xl font-bold text-primary">
                                        {stat.value}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Values Section */}
                <div className="grid md:grid-cols-3 gap-8">
                    {values.map((value, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.15 }}
                        >
                            <Card className="h-full border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl bg-card/30 backdrop-blur-sm group">
                                <CardHeader>
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        {value.icon}
                                    </div>
                                    <CardTitle className="text-2xl mb-3">{value.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

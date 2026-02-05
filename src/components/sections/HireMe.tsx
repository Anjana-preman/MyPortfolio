import { motion } from "framer-motion";
import { CheckCircle, Download, ArrowRight, Sparkles, Zap, Clock, Users } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import FloatingIcon from "@/components/ui/FloatingIcon";

const benefits = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Quick turnaround on projects without compromising quality",
  },
  {
    icon: Sparkles,
    title: "Clean Code",
    description: "Well-documented, maintainable, and scalable solutions",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Always available for urgent fixes and updates",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Seamless communication throughout the project",
  },
];

const services = [
  "Full-Stack Web Development",
  "Frontend Development (React/Vue)",
  "Backend Development (Node.js/Laravel)",
  "API Development & Integration",
  "Database Design & Optimization",
  "Performance Optimization",
  "Code Review & Refactoring",
  "Technical Consulting",
];

const HireMe = () => {
  return (
    <section id="hire" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Hire Me</span> For Your Next Project
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Looking for a dedicated developer to bring your ideas to life? Let's create something amazing together!
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="p-6 text-center h-full hover:shadow-glow-sm transition-all duration-300">
                <FloatingIcon delay={index * 0.2}>
                  <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <benefit.icon className="text-primary" size={24} />
                  </div>
                </FloatingIcon>
                <h3 className="font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Services List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="p-8">
              <h3 className="text-2xl font-bold mb-6">Services I Offer</h3>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <motion.li
                    key={service}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="text-primary flex-shrink-0" size={20} />
                    <span className="text-foreground">{service}</span>
                  </motion.li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="p-8 bg-gradient-to-br from-primary/10 via-background to-accent/10">
              <h3 className="text-2xl font-bold mb-4">Ready to Start?</h3>
              <p className="text-muted-foreground mb-6">
                Whether you need a complete web application, a quick MVP, or ongoing development support, I'm here to help turn your vision into reality.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-foreground">Currently available for new projects</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-foreground">Response within 24 hours</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="flex-1" asChild>
                  <a href="#contact">
                    Let's Talk
                    <ArrowRight size={18} />
                  </a>
                </Button>
                <Button variant="heroOutline" size="lg" className="flex-1" asChild>
                  <a href="/resume.pdf" download>
                    <Download size={18} />
                    Download CV
                  </a>
                </Button>
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <GlassCard className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "50+", label: "Projects Completed" },
                { value: "30+", label: "Happy Clients" },
                { value: "5+", label: "Years Experience" },
                { value: "99%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default HireMe;

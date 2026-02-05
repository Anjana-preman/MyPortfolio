import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import FloatingIcon from "@/components/ui/FloatingIcon";
import { Code, Layers, Zap, Globe, Terminal, Palette } from "lucide-react";

const About = () => {
  const highlights = [
    { icon: Code, label: "Clean Code" },
    { icon: Layers, label: "Full Stack" },
    { icon: Zap, label: "Performance" },
    { icon: Globe, label: "Responsive" },
    { icon: Terminal, label: "CLI Expert" },
    { icon: Palette, label: "UI/UX" },
  ];

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Passionate about <span className="gradient-text">crafting</span> digital solutions
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="relative">
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  I'm a <span className="text-foreground font-medium">25-year-old Full-Stack Developer</span> with 
                  a passion for building elegant, performant web applications that make a difference.
                </p>
                <p className="leading-relaxed">
                  My journey in web development started with curiosity and has evolved into a 
                  deep love for creating seamless user experiences. I specialize in modern 
                  JavaScript frameworks, backend development with PHP/Laravel and Node.js, 
                  and I always prioritize clean, maintainable code.
                </p>
                <p className="leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing 
                  to open-source projects, or sharing knowledge with the developer community.
                </p>
              </div>

              {/* Decorative gradient corner */}
              <div className="absolute -top-1 -right-1 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl -z-10" />
            </GlassCard>
          </motion.div>

          <div className="grid grid-cols-3 gap-4">
            {highlights.map((item, index) => (
              <FloatingIcon key={item.label} delay={index * 0.2} duration={3 + index * 0.5}>
                <GlassCard 
                  className="text-center hover:border-primary/50 transition-colors cursor-default"
                  delay={index * 0.1}
                >
                  <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </GlassCard>
              </FloatingIcon>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

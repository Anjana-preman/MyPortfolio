import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const educations = [
  {
    id: 1,
    degree: "Master of Computer Application",
    institution: "Chinmaya Institute of Technology",
    location: "Kannur",
    period: "2021 - 2023",
  },
  {
    id: 2,
    degree: "Bachelor of Computer Application",
    institution: "College of Applied Science, Nadapuram",
    location: "Kozhikode",
    period: "2016 - 2019",
  },
  {
    id: 3,
    degree: "Higher Secondary - Commerce",
    institution: "GGHSS Thiruvangad",
    location: "Thalassery",
    period: "2014 - 2016",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic journey that shaped my technical foundation
          </p>
        </motion.div>

        {/* Horizontal scrolling cards on mobile, stacked on desktop */}
        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent -translate-y-1/2 z-0" />
          
          <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-4 relative z-10">
          {educations.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2, type: "spring" }}
              className="flex-1 relative group perspective-1000"
            >
              {/* Glowing orb connector */}
              <div className="hidden md:flex absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-primary shadow-glow z-20 items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-background" />
              </div>

              {/* Card */}
              <div className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-3xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-500 group-hover:shadow-glow-lg group-hover:-translate-y-2 overflow-hidden">
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Year badge - prominent */}
                <motion.div 
                  className="relative mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/40">
                    <Calendar size={14} className="text-primary" />
                    <span className="text-sm font-bold text-primary">{edu.period}</span>
                  </div>
                </motion.div>

                {/* Degree title */}
                <h3 className="relative text-xl font-bold text-foreground mb-4 leading-tight">
                  {edu.degree}
                </h3>

                {/* Institution with icon */}
                <div className="relative flex items-start gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-accent/20 text-accent">
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground/90 text-sm">{edu.institution}</p>
                  </div>
                </div>

                {/* Location */}
                <div className="relative flex items-center gap-2 text-muted-foreground">
                  <MapPin size={14} />
                  <span className="text-sm">{edu.location}</span>
                </div>

                {/* Decorative number */}
                {/* <div className="absolute -bottom-4 -right-2 text-8xl font-black text-primary/5 pointer-events-none select-none">
                  0{index + 1}
                </div> */}
              </div>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

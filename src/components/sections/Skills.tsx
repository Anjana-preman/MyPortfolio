 import { motion } from "framer-motion";
 import { Code2, Database, BarChart3 } from "lucide-react";

const Skills = () => {
   const allSkills = [
     "HTML", "CSS", "Bootstrap", "JavaScript", "C", "C++",
     "PHP", "Laravel", "Node.js", "Express", "Python", "MySQL", "REST APIs",
     "Power BI", "Microsoft Excel", "Data Modelling", "SQL"
   ];
 
   const skillCategories = [
    {
      title: "Frontend",
      description: "Creating beautiful, responsive user interfaces",
       icon: Code2,
       skills: ["HTML", "CSS", "Bootstrap", "JavaScript", "C", "C++"],
    },
    {
      title: "Backend",
      description: "Building robust server-side applications",
       icon: Database,
       skills: ["PHP", "Laravel", "Node.js", "Express", "Python", "MySQL", "REST APIs"],
    },
    {
      title: "Data & Tools",
      description: "Analytics and data visualization",
       icon: BarChart3,
       skills: ["Power BI", "Microsoft Excel", "Data Modelling", "SQL"],
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built over years of hands-on experience,
            always evolving with the latest industry standards.
          </p>
        </motion.div>

         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="group relative"
         >
           <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
           <div className="relative glass-card p-10 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300">
             {/* Skills as animated chips in grid */}
             <div className="flex flex-wrap gap-3 justify-center">
               {allSkills.map((skill, index) => (
                 <motion.span
                   key={skill}
                   initial={{ opacity: 0, scale: 0.8 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ 
                     delay: index * 0.03,
                     type: "spring",
                     stiffness: 200
                   }}
                   whileHover={{ scale: 1.15, y: -3 }}
                   className="px-4 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-primary/20 to-accent/20 text-foreground border border-primary/30 hover:border-primary/70 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-default"
                 >
                   {skill}
                 </motion.span>
               ))}
             </div>
           </div>
         </motion.div>
      </div>
    </section>
  );
};

export default Skills;

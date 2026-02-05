import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

const experiences = [
  {
    id: 1,
    role: "Full-Stack Developer",
    company: "Tigabits",
    location: "Govt. Cyber Park Kozhikode",
    period: "July 2024 - Present",
    description: "Developed end-to-end web applications, managing front-end functionality, REST APIs, and database interactions using Laravel.",
    technologies: ["Laravel", "PHP", "REST APIs", "MySQL"],
  },
  {
    id: 2,
    role: "Data Analyst Trainee",
    company: "Decision Attic",
    location: "Bangalore",
    period: "Dec 2023 - Apr 2024",
    description: "Applied skills in Excel, Power BI, and SQL. Assisted in data cleaning, validation, and transformation tasks. Supported creation of reports and dashboards to visualize key metrics.",
    technologies: ["Power BI", "Excel", "SQL", "Data Analysis"],
  },
  {
    id: 3,
    role: "Web Developer Intern",
    company: "WelkinWits Technologies",
    location: "Govt. Cyber Park Kozhikode",
    period: "May 2023 - Aug 2023",
    description: "Collaborated with the development team to design and implement user-friendly web applications. Contributed to creating visually appealing and responsive user interfaces.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
  },
  {
    id: 4,
    role: "Full Stack Developer Intern",
    company: "Maxlore Innovation LLP",
    location: "UL Cyber Park Kozhikode",
    period: "July 2019 - Nov 2019",
    description: "Utilized HTML, JS and CSS to create visually appealing and responsive user interfaces. Implemented dynamic functionality using PHP and Laravel framework.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "Laravel"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey in building amazing digital products
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20 transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 shadow-glow z-10" />

              {/* Content */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12 pl-8 md:pl-0" : "md:pl-12 pl-8"}`}>
                <GlassCard className="p-6 hover:shadow-glow-sm transition-shadow duration-300">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Briefcase size={18} />
                    <span className="font-semibold">{exp.company}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

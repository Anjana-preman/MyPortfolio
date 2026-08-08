import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";

const projects = [
{
  id: 1,
  title: "GamerZone",
  description: "E-commerce platform for a gaming hardware retailer in Qatar, featuring product catalog browsing by category and brand, a custom PC builder tool, cart, wishlist, and order tracking.",
  image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop",
  technologies: ["Laravel","Php","html","Css","Js","Mysql"],
  liveUrl: "https://gamerzoneme.com/en",
  githubUrl: null,
  featured: true,
},
{
  id: 2,
  title: "Malbelle",
  description: "E-commerce store for a fashion and jewellery brand in the UAE, featuring product catalog, wishlist, cart, and checkout functionality.",
  image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop",
  technologies: ["Laravel","Php","html","Css","Js","Mysql"],
  liveUrl: "https://malbelle.com/",
  githubUrl: null,
  featured: true,
},
{
  id: 3,
  title: "Neo Dynamite Events",
  description: "Business website for a Dubai-based event management company, showcasing services, an event gallery, client testimonials, and a contact/registration system.",
  image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop",
  technologies: ["html","Css","Js"],
  liveUrl: "https://neodynamite.ae/",
  githubUrl: null,
  featured: true,
},
{
  id: 4,
  title: "Arabian Hearts",
  description: "Website for a Dubai-based volunteer organization, including an about section, event gallery, contact form, and volunteer registration system.",
  image: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?w=600&h=400&fit=crop",
  technologies: ["html","Css","Js"],
  liveUrl: "https://arabianhearts.ae/",
  githubUrl: null,
  featured: true,
},
{
  id: 5,
  title: "NSS Management System",
  description: "A web-based system to automate National Service Scheme (NSS) activities for colleges, replacing manual record-keeping. Supports four user roles (Volunteer, Program Officer, Principal, Section Officer) for managing camp participation, approvals, and report generation.",
  image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",
  technologies:["PHP", "MySQL", "HTML", "XAMPP"],
  liveUrl:null,
  githubUrl: null,
  featured: true,
},

];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for development
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="overflow-hidden group h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                    <Button variant="hero" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                        Live
                      </a>
                    </Button>
                    {/* <Button variant="heroOutline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                        Code
                      </a>
                    </Button> */}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-center mb-8"
        >
          {/* Other Noteworthy Projects */}
        </motion.h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="p-6 h-full flex flex-col hover:shadow-glow-sm transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center justify-between mb-4">
                  <Folder className="text-primary" size={40} />
                  <div className="flex gap-3">
                    <a href={project.liveUrl} className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink size={20} />
                    </a>
                    <a href={project.githubUrl} className="text-muted-foreground hover:text-primary transition-colors">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

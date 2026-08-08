 import { motion } from "framer-motion";
 import { Award, ExternalLink } from "lucide-react";
 
 const Certificates = () => {
  const linkedInUrl ="https://www.linkedin.com/in/anjana-kp-464aa1249/details/certifications/"
   const certificates = [
     {
       id: 1,
       title: "Full Stack Developer",
       issuer: "Maxlore Innovation LLP",
       date: "2019",
       description: "Comprehensive certification in full-stack web development",
     },
     {
       id: 2,
       title: "Web Development Excellence",
       issuer: "WelkinWits Technologies",
       date: "2023",
       description: "Advanced web development and UI/UX design practices",
     },
     {
       id: 3,
       title: "Data Analytics Professional",
       issuer: "Great Learning",
       date: "2024",
       description: "Professional certification in data analytics and visualization",
     },
     {
       id: 4,
       title: "Full Stack Developer Bootcamp",
       issuer: "Infosys Springboard",
       date: "2024",
       description: "Industry-focused full stack development training program",
     },
   ];
 
   return (
     <section id="certificates" className="py-24 px-4 relative">
       {/* Background decoration */}
       <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <motion.div
           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px]"
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
             Recognition
           </span>
           <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
             Certificates & <span className="gradient-text">Achievements</span>
           </h2>
           <p className="text-muted-foreground max-w-2xl mx-auto">
             Professional certifications and recognitions from industry-leading organizations
           </p>
         </motion.div>
 
         <div className="grid md:grid-cols-2 gap-6">
           {certificates.map((cert, index) => (
             <motion.div
               key={cert.id}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               className="group"
             >
               <div className="relative h-full glass-card p-6 rounded-2xl border border-white/5 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 overflow-hidden">
                 {/* Gradient background on hover */}
                 <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                 
                 <div className="relative z-10">
                   {/* Icon & Date */}
                   <div className="flex items-start justify-between mb-4">
                     <motion.div
                       whileHover={{ rotate: 12, scale: 1.1 }}
                       className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center"
                     >
                       <Award className="w-6 h-6 text-accent" />
                     </motion.div>
                     <span className="text-xs font-bold text-accent bg-accent/10 px-3 py-1 rounded-full">
                       {cert.date}
                     </span>
                   </div>
 
                   {/* Title */}
                   <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                     {cert.title}
                   </h3>
 
                   {/* Issuer */}
                   <p className="text-sm font-semibold text-primary mb-3">
                     {cert.issuer}
                   </p>
 
                   {/* Description */}
                   <p className="text-sm text-muted-foreground mb-4">
                     {cert.description}
                   </p>
 
                   {/* View button */}
                   {/* <motion.button
                     whileHover={{ x: 4 }}
                     className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                   >
                     View Certificate
                     <ExternalLink className="w-4 h-4" />
                   </motion.button> */}
                   <motion.a 
                      href={linkedInUrl}
                      targrt="_blank"
                      rel="noopener noreferrer"
                      whileHover={{x:4}}
                      className="inline-flex item-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                    >
                      View Certificate
                      <ExternalLink className="w-4 h-4"/>
                    </motion.a>
                 </div>
               </div>
             </motion.div>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default Certificates;
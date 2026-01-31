import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  { name: "Red Hat System Administration I", issuer: "MaharaTech - ITIMooca" },
  { name: "Summer Internship Cyber Security", issuer: "ITI" },
  { name: "CIB Summer Bootcamp", issuer: "CIB" },
  { name: "DFIR Bootcamp For Egyptian Undergraduates", issuer: "ITI & CyberTalents" },
  { name: "Introduction to Cybersecurity", issuer: "Cisco" },
  { name: "Ethical Hacking", issuer: "MaharaTech - ITIMooca" },
  { name: "Introduction to Network Security", issuer: "MaharaTech - ITIMooca" },
  { name: "Ubuntu Linux Essentials", issuer: "MaharaTech - ITIMooca" },
  { name: "Python Programming Basics", issuer: "MaharaTech - ITIMooca" },
  { name: "Cloud and Virtualization Concepts", issuer: "MaharaTech - ITIMooca" },
  { name: "Cyber Security Workshop", issuer: "GDSC" },
  { name: "Computer Network Fundamentals", issuer: "MaharaTech - ITIMooca" }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
            <span className="text-primary">&gt;</span> Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-start gap-3 p-4 rounded-lg border border-border bg-card hover:border-primary/50 hover:bg-card/80 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-mono text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;

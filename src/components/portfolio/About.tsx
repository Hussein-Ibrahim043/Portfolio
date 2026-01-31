import { motion } from "framer-motion";
import { Shield, Target, Users, BookOpen } from "lucide-react";

const highlights = [
  {
    icon: Shield,
    title: "Security Focus",
    description: "Specialized in web and network penetration testing with CTF experience"
  },
  {
    icon: Target,
    title: "Red Team Enthusiast",
    description: "Passionate about offensive security and vulnerability assessment"
  },
  {
    icon: Users,
    title: "Instructor & Mentor",
    description: "Cyber Security Instructor delivering hands-on labs and CTF-style exercises"
  },
  {
    icon: BookOpen,
    title: "Continuous Learner",
    description: "Multiple certifications in cybersecurity, Linux, and networking"
  }
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
            <span className="text-primary">&gt;</span> About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="terminal-border rounded-xl p-6 md:p-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-accent" />
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="ml-4 text-sm font-mono text-muted-foreground">about.sh</span>
              </div>
              <div className="font-mono text-sm md:text-base space-y-4">
                <p className="text-muted-foreground">
                  <span className="text-primary">$</span> cat summary.txt
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  Cybersecurity Instructor and CS graduate specializing in offensive security. 
                  Adept at translating complex cyber security concepts into clear, actionable lessons. 
                  Committed to empowering students through hands-on lab instruction and practical 
                  vulnerability assessment training.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  Passionate about building hands-on skills and eager to apply them in real-world 
                  environments as part of a collaborative security team.
                </p>
                <p className="text-muted-foreground">
                  <span className="text-accent">→</span> Bachelor of Computer Science – El Shorouk Academy (2025)
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all group"
              >
                <item.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-mono font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

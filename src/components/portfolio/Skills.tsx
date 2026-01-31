import { motion } from "framer-motion";
import { 
  Shield, Server, Code, Network, Lock, Terminal,
  Database, Wrench, Monitor, Cpu
} from "lucide-react";

const skillCategories = [
  {
    icon: Shield,
    title: "Penetration Testing",
    skills: ["Web Penetration Testing", "Network Penetration Testing", "Vulnerability Scanning", "CTF Challenges", "Reconnaissance", "Exploitation"]
  },
  {
    icon: Wrench,
    title: "Security Tools",
    skills: ["Burp Suite", "Nmap", "Wireshark", "John The Ripper", "Hydra", "Metasploit", "Aircrack-ng"]
  },
  {
    icon: Code,
    title: "Programming",
    skills: ["Python", "Bash", "JavaScript", "C++", "C#", "Flutter"]
  },
  {
    icon: Network,
    title: "Networking",
    skills: ["TCP/IP", "OSI Model", "VLANs", "OSPF", "DHCP", "NAT", "SSH", "ACLs"]
  },
  {
    icon: Lock,
    title: "Security Concepts",
    skills: ["Encryption", "Hashing", "XSS", "SQL Injection", "Password Cracking", "WiFi Security"]
  },
  {
    icon: Terminal,
    title: "Operating Systems",
    skills: ["Kali Linux", "Ubuntu", "Red Hat", "Windows"]
  }
];

const technicalBars = [
  { name: "Python", level: 80, color: "primary" },
  { name: "C#", level: 75, color: "accent" },
  { name: "Linux", level: 85, color: "primary" },
  { name: "Burp Suite", level: 70, color: "accent" },
  { name: "Networking", level: 75, color: "primary" },
  { name: "Pen Testing", level: 65, color: "accent" }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
            <span className="text-primary">&gt;</span> Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Skill Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="terminal-border rounded-xl p-6 hover:border-primary/50 transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-mono font-semibold text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-mono rounded-full bg-secondary text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill Bars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-mono font-semibold text-center mb-8">
            <span className="text-primary">//</span> Proficiency Levels
          </h3>
          <div className="space-y-6">
            {technicalBars.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-mono text-sm text-foreground">{skill.name}</span>
                  <span className="font-mono text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`h-full rounded-full ${
                      skill.color === 'primary' 
                        ? 'bg-gradient-to-r from-primary to-primary/70' 
                        : 'bg-gradient-to-r from-accent to-accent/70'
                    }`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

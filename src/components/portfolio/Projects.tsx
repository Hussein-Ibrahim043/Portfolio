import { motion } from "framer-motion";
import { Folder, ExternalLink, Github, Shield, Terminal, Network, Key, Radio, FileText, Wifi } from "lucide-react";

const projects = [
  {
    icon: Shield,
    title: "NFC-Enabled Smart Medical Records",
    description: "Secure healthcare solution leveraging NFC technology to manage patient medical records via mobile and desktop applications. Led UI/UX design and cybersecurity implementation.",
    tags: ["Flutter", "C#", "NFC", "Security", "UI/UX"],
    featured: true
  },
  {
    icon: FileText,
    title: "CTF Write-Ups & Security Labs",
    description: "Documented end-to-end exploitation of vulnerable machines and web applications on TryHackMe, Hack The Box, and PortSwigger. Applied ethical hacking methodologies and best practices.",
    tags: ["TryHackMe", "HackTheBox", "PortSwigger", "CTF"]
  },
  {
    icon: Key,
    title: "Hash Cracker",
    description: "Python-based command-line tool for ethical hash cracking. Supports MD5, SHA1, SHA224, SHA384, and SHA512 with wordlist-based attacks and user-friendly CLI.",
    tags: ["Python", "CLI", "Cryptography", "Security"]
  },
  {
    icon: Network,
    title: "Network Packet Sniffer & Analyzer",
    description: "Python-based packet sniffing tool using Scapy. Captures and logs TCP, UDP, and HTTP traffic with custom BPF filters and real-time statistics.",
    tags: ["Python", "Scapy", "Networking", "Analysis"]
  },
  {
    icon: Radio,
    title: "ICMP Packet Sender",
    description: "Network diagnostic tool using Scapy to send and receive ICMP packets. Features dynamic IP input, detailed packet logging, and real-time response capture.",
    tags: ["Python", "Scapy", "ICMP", "Diagnostics"]
  },
  {
    icon: Terminal,
    title: "Port Scanner",
    description: "Python tool that scans IP addresses or ranges to detect open TCP ports. Supports customizable scanning options for network security assessments.",
    tags: ["Python", "Networking", "Security", "TCP"]
  },
  {
    icon: Wifi,
    title: "Password Cracking & WiFi Security Labs",
    description: "Practiced password cracking techniques using John The Ripper and Hydra. Explored Wi-Fi concepts using aircrack-ng suite (monitoring, capture, replay, and cracking).",
    tags: ["John The Ripper", "Hydra", "Aircrack-ng", "WiFi"]
  },
  {
    icon: Network,
    title: "Networking Practice & Simulations",
    description: "Comprehensive practice with VLANs, Trunking, VTP, routing protocols (RIPv2, OSPF), DHCP, NAT, SSH, and ACLs in simulated environments.",
    tags: ["Cisco", "Routing", "Switching", "Security"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
            <span className="text-primary">&gt;</span> Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-all hover:-translate-y-1 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 px-2 py-1 rounded text-xs font-mono bg-primary/20 text-primary">
                  Featured
                </div>
              )}
              
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <project.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-mono font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs font-mono rounded bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="https://github.com/Hussein-Ibrahim043"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-mono text-muted-foreground hover:border-primary/50 hover:text-primary transition-all"
              >
                <Github className="w-4 h-4" />
                View on GitHub
              </a>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import { motion } from "framer-motion";
import { Shield, Terminal, ChevronDown, Download } from "lucide-react";
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/5 blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-mono text-primary">Cybersecurity Professional</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-mono mb-6"
        >
          <span className="text-foreground">Hussein</span>
          <br />
          <span className="text-gradient-cyber">Ibrahim</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <Terminal className="w-5 h-5 text-primary" />
          <p className="text-xl md:text-2xl font-mono text-muted-foreground">
            Entry-Level Penetration Tester
            <span className="text-primary animate-terminal-blink">_</span>
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-2xl mx-auto text-lg text-muted-foreground mb-12"
        >
          Computer Science graduate specializing in offensive security, ethical hacking, 
          and vulnerability assessment. Building secure digital environments through 
          hands-on penetration testing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] glow-sm"
          >
            <Shield className="w-5 h-5" />
            Get In Touch
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-primary/30 text-foreground font-semibold hover:bg-primary/10 hover:border-primary/50 transition-all"
          >
            View Projects
          </a>
          <a
            href="/Hussein_Ibrahim_CV.pdf"
            download
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-accent/30 text-foreground font-semibold hover:bg-accent/10 hover:border-accent/50 transition-all"
          >
            <Download className="w-5 h-5" />
            Download CV
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

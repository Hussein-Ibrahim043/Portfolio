import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Terminal } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+20 100 941 1590",
    href: "tel:+201009411590"
  },
  {
    icon: Mail,
    label: "Email",
    value: "hussein.ibraheem@outlook.com",
    href: "mailto:hussein.ibraheem@outlook.com"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Cairo, Egypt",
    href: null
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
            <span className="text-primary">&gt;</span> Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about cybersecurity.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary/50 hover:bg-card/80 transition-all group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-mono">{item.label}</p>
                        <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-mono">{item.label}</p>
                        <p className="text-foreground font-medium">{item.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Terminal Message */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="terminal-border rounded-xl p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-accent" />
                <div className="w-3 h-3 rounded-full bg-primary" />
                <div className="w-3 h-3 rounded-full bg-accent" />
                <span className="ml-4 text-sm font-mono text-muted-foreground">contact.sh</span>
              </div>
              
              <div className="font-mono text-sm space-y-3">
                <p className="text-muted-foreground">
                  <span className="text-primary">$</span> ./send_message.sh
                </p>
                <p className="text-foreground">
                  <span className="text-accent">→</span> Initializing secure connection...
                </p>
                <p className="text-foreground">
                  <span className="text-accent">→</span> Ready to receive your message
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="text-muted-foreground mb-4">
                    Looking for a dedicated security professional?<br/>
                    Looking for Cyber Security Instructor?<br/>
                    Let's connect and discuss how I can contribute to your team.
                  </p>
                  <a
                    href="mailto:hussein.ibraheem@outlook.com"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all glow-sm"
                  >
                    <Send className="w-4 h-4" />
                    Send Email
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

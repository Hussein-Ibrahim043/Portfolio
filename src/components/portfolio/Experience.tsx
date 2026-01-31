import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

const experiences = [
  {
    title: "Cyber Security Instructor",
    company: "Freelance / Private",
    period: "Aug 2025 – Present",
    type: "Teaching",
    description: [
      "Delivered interactive cyber security sessions focused on Security fundamentals, Linux, and Networking",
      "Delivered hands-on ethical hacking labs and CTF-style exercises using Kali Linux and TryHackMe",
      "Trained students on basic penetration testing methodology and security best practices",
      "Guided students through hands-on projects using Python"
    ]
  },
  {
    title: "Head of Cyber Security Team",
    company: "DevHub",
    period: "Mar 2025 – Jul 2025",
    type: "Volunteering",
    description: [
      "Lead a team of 20+ members, delivering training sessions and practical labs on cybersecurity topics",
      "Mentor members to build hands-on skills and coordinate workshops and challenges"
    ]
  },
  {
    title: "Cyber Security Member",
    company: "GDSC El Shorouk Academy",
    period: "Oct 2023 – Aug 2024",
    type: "Volunteering",
    description: [
      "Contributed to cybersecurity projects and activities, supported team efforts",
      "Assisted in technical tasks and workshops"
    ]
  },
  {
    title: "DFIR Bootcamp",
    company: "ITI & CyberTalents",
    period: "Oct – Nov 2024",
    type: "Bootcamp",
    description: [
      "Built strong foundational knowledge in digital forensics, incident response, and malware analysis",
      "Explored real-world cyber threat scenarios and forensic investigation techniques"
    ]
  },
  {
    title: "Cybersecurity Summer Internship",
    company: "ITI",
    period: "Aug – Sep 2024",
    type: "Internship",
    description: [
      "Gained practical experience in network fundamentals, routing & switching, and cybersecurity essentials",
      "Practiced with tools like Burp Suite and explored ethical hacking concepts in simulated labs"
    ]
  },
  {
    title: "CyberTalents Bootcamp Cohort 5",
    company: "CyberTalents",
    period: "Dec 2023",
    type: "Bootcamp",
    description: [
      "Completed hands-on labs in ethical hacking, Burp Suite, encryption, and hash cracking",
      "Strengthened penetration testing skills by solving real CTF challenges",
      "Explored core web technologies such as HTML5 and basic JavaScript"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
            <span className="text-primary">&gt;</span> Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative grid md:grid-cols-2 gap-4 mb-12 ${
                  index % 2 === 0 ? '' : 'md:direction-rtl'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10 glow-sm" />

                {/* Content */}
                <div className={`pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:col-start-2 md:pl-12'}`}>
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-primary/10 text-primary mb-3 ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                    <Calendar className="w-3 h-3" />
                    {exp.period}
                  </div>
                  
                  <div className={`terminal-border rounded-xl p-6 text-left ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                    <div className="flex items-start gap-3 mb-3">
                      <Briefcase className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-mono font-semibold text-foreground">{exp.title}</h3>
                        <p className="text-sm text-primary">{exp.company}</p>
                        <span className="inline-block mt-1 px-2 py-0.5 rounded text-xs bg-accent/20 text-accent">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

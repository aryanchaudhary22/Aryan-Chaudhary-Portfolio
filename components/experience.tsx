'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const experiences = [
  {
    id: 1,
    role: 'Technical Community Lead',
    company: 'Community Organization',
    period: '2024 - Present',
    description: 'Leading technical initiatives, organizing workshops, and mentoring junior developers.',
    achievements: [
      'Organized 10+ technical workshops',
      'Mentored 20+ developers',
      'Built community engagement platform',
    ],
  },
  {
    id: 2,
    role: 'Operations & Sponsorship Coordinator',
    company: 'Tech Event Organizer',
    period: '2023 - 2024',
    description: 'Managed event operations and coordinated with tech companies for sponsorships.',
    achievements: [
      'Coordinated 5 major events',
      'Secured 15+ sponsors',
      'Managed $50K+ budget',
    ],
  },
  {
    id: 3,
    role: 'Full Stack Developer (Self-Employed)',
    company: 'Independent Projects',
    period: '2022 - Present',
    description: 'Building and deploying modern web applications using latest technologies.',
    achievements: [
      'Developed 5+ full-stack applications',
      'Deployed on Vercel and traditional servers',
      'Maintained 99%+ uptime',
    ],
  },
]

export function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className="relative w-full bg-slate-950 py-24 overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 -right-40 w-80 h-80 bg-accent-500 rounded-full blur-3xl opacity-5" />
      </div>

      <div className="relative z-10 container-smooth max-w-3xl">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-accent-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Career
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-100 mb-4">
            Experience
          </h2>
          <div className="w-12 h-1 bg-accent-500 rounded-full" />
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -100px 0px' }}
        >
          {/* Timeline Line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-500 to-transparent opacity-20" />

          {experiences.map((exp, idx) => (
            <motion.div key={exp.id} className="relative pl-8" variants={itemVariants}>
              {/* Timeline Dot */}
              <motion.div
                className="absolute left-[-17px] top-2 w-7 h-7 rounded-full bg-accent-500 border-4 border-slate-950 shadow-lg shadow-accent-500/20"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
              />

              {/* Content Card */}
              <motion.div
                className="float-card group hover:border-accent-500 hover:border-opacity-50"
                whileHover={{ x: 4 }}
              >
                <div className="space-y-4">
                  {/* Header */}
                  <div>
                    <h3 className="text-xl font-semibold text-slate-100 group-hover:text-accent-300 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-accent-400 font-medium">{exp.company}</p>
                    <p className="text-slate-500 text-sm mt-1">{exp.period}</p>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 leading-relaxed">{exp.description}</p>

                  {/* Achievements */}
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex items-start gap-3 text-slate-400 text-sm"
                      >
                        <span className="text-accent-500 mt-1">
                          <ArrowRight size={14} />
                        </span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

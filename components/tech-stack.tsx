'use client'

import { motion } from 'framer-motion'
import {
  Code,
  Database,
  Server,
  GitBranch,
  Zap,
  Settings,
} from 'lucide-react'

const techCategories = [
  {
    category: 'Frontend',
    icon: Code,
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'HTML & CSS',
      'JavaScript',
    ],
  },
  {
    category: 'Backend',
    icon: Server,
    technologies: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'Authentication',
    ],
  },
  {
    category: 'Database',
    icon: Database,
    technologies: [
      'MongoDB',
      'MySQL',
      'Database Design',
      'Query Optimization',
    ],
  },
  {
    category: 'Tools & DevOps',
    icon: GitBranch,
    technologies: [
      'Git & GitHub',
      'Vercel',
      'Postman',
      'VS Code',
    ],
  },
  {
    category: 'Core Concepts',
    icon: Settings,
    technologies: [
      'Data Structures',
      'Algorithms',
      'OOP',
      'System Design',
    ],
  },
  {
    category: 'Additional',
    icon: Zap,
    technologies: [
      'Socket.io',
      'RESTful Architecture',
      'Web Performance',
      'Security',
    ],
  },
]

export function TechStack() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
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
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-500 rounded-full blur-3xl opacity-5" />
      </div>

      <div className="relative z-10 container-smooth max-w-6xl">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-accent-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-100 mb-4">
            Tech I Build With
          </h2>
          <div className="w-12 h-1 bg-accent-500 rounded-full" />
        </motion.div>

        {/* Tech Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -100px 0px' }}
        >
          {techCategories.map((item) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.category}
                className="group float-card hover:border-accent-500 hover:border-opacity-50 cursor-pointer"
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent-500 bg-opacity-10 flex items-center justify-center group-hover:bg-opacity-20 transition-all duration-200">
                      <Icon className="w-5 h-5 text-accent-400" />
                    </div>
                    <h3 className="font-semibold text-slate-100 text-lg">{item.category}</h3>
                  </div>

                  {/* Tech List */}
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-slate-800 border border-slate-700 text-slate-300 text-sm rounded-md hover:border-accent-400 hover:text-accent-300 transition-all duration-200 group-hover:bg-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom tagline */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-400 text-lg">
            Always learning. Always shipping.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

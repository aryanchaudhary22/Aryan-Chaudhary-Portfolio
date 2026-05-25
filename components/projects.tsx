'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    id: 1,
    name: 'Modern E-Commerce Platform',
    role: 'Full Stack Developer',
    description: 'Premium responsive e-commerce website with modern design, real-time inventory, and checkout flow.',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    desktopImage: '/projects/ecommerce-desktop.png',
    mobileImage: '/projects/ecommerce-mobile.png',
    links: [
      { label: 'Live Demo', href: 'https://modern-e-commerce-website-nu.vercel.app', icon: ExternalLink },
      { label: 'GitHub', href: 'https://github.com/aryanchaudhary22/Modern-E-Commerce-Website', icon: Github },
    ],
  },
  {
    id: 2,
    name: 'Online Polling System',
    role: 'Backend Developer',
    description: 'Real-time polling application with live synchronization across clients using WebSockets.',
    tech: ['React', 'Express', 'Socket.io', 'MongoDB'],
    desktopImage: '/projects/poll-desktop.png',
    mobileImage: '/projects/poll-mobile.png',
    links: [
      { label: 'Live Demo', href: 'https://online-polling-system-i9if.onrender.com', icon: ExternalLink },
      { label: 'GitHub', href: 'https://github.com/aryanchaudhary22/Online-Polling-System', icon: Github },
    ],
  },
]

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  }

  return (
    <section id="projects" className="relative w-full bg-slate-950 py-24 overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -right-40 w-80 h-80 bg-accent-500 rounded-full blur-3xl opacity-5" />
      </div>

      <div className="relative z-10 container-smooth max-w-6xl">
        {/* Section Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-accent-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Selected Work
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-100 mb-4">
            Projects I&apos;ve Built
          </h2>
          <div className="w-12 h-1 bg-accent-500 rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="space-y-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -100px 0px' }}
        >
          {projects.map((project, idx) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard project={project} isReversed={idx % 2 === 1} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

interface ProjectCardProps {
  project: typeof projects[0]
  isReversed?: boolean
}

function ProjectCard({ project, isReversed = false }: ProjectCardProps) {
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <motion.div
      className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${
        isReversed ? 'md:flex-row-reverse' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Screenshots Container */}
      <motion.div
        className={`relative order-2 ${isReversed ? 'md:order-1' : 'md:order-2'}`}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="relative bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-slate-800">
          {/* Browser Window Frame */}
          <div className="bg-slate-900 border-b border-slate-800 px-4 py-3 flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500 opacity-70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-70" />
              <div className="w-3 h-3 rounded-full bg-green-500 opacity-70" />
            </div>
            <p className="text-xs text-slate-500 ml-3">example.com</p>
          </div>

          {/* Content Grid - Desktop and Mobile */}
          <div className="flex items-center justify-center p-4 md:p-6 bg-linear-to-b from-slate-800 to-slate-900">
            <motion.div
              className="grid grid-cols-5 gap-4 w-full items-center"
              animate={{ scale: isHovered ? 1.02 : 1 }}
              transition={{ duration: 0.3 }}
            >
              {/* Desktop Screenshot */}
              <div className="col-span-3 relative rounded-lg overflow-hidden bg-slate-800 shadow-lg">
                <Image
                  src={project.desktopImage}
                  alt={`${project.name} desktop`}
                  width={400}
                  height={280}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Mobile Screenshot */}
              <div className="col-span-2 relative rounded-lg overflow-hidden bg-slate-800 shadow-lg border-8 border-slate-900 aspect-3/5">
                <Image
                  src={project.mobileImage}
                  alt={`${project.name} mobile`}
                  width={200}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Project Details */}
      <motion.div
        className={`order-1 ${isReversed ? 'md:order-2' : 'md:order-1'}`}
        initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="space-y-6">
          {/* Project Header */}
          <div>
            <h3 className="text-3xl font-semibold text-slate-100 mb-2">{project.name}</h3>
            <p className="text-accent-400 text-sm font-semibold">{project.role}</p>
          </div>

          {/* Description */}
          <p className="text-slate-300 leading-relaxed text-lg">{project.description}</p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-slate-900 border border-slate-700 text-slate-300 text-sm rounded-full hover:border-accent-500 hover:text-accent-400 transition-all duration-200"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <motion.div className="flex gap-4 pt-4">
            {project.links.map((link) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-accent-400 transition-colors duration-200 group"
                  whileHover={{ x: 4 }}
                >
                  <span className="text-sm font-semibold">{link.label}</span>
                  <Icon size={16} className="group-hover:text-accent-400 transition-colors" />
                </motion.a>
              )
            })}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

import React from 'react'

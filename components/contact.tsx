'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Download, ArrowUpRight } from 'lucide-react'

export function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const socialLinks = [
    {
      name: 'Email',
      href: 'mailto:aryanch680@gmail.com',
      icon: Mail,
      label: 'aryanch680@gmail.com',
    },
    {
      name: 'GitHub',
      href: 'https://github.com/aryanchaudhary22',
      icon: Github,
      label: '@aryan',
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/aryanchaudhary22005',
      icon: Linkedin,
      label: 'Aryan Chaudhary',
    },
  ]

  return (
    <section id="contact" className="relative w-full bg-slate-950 py-24 overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-b from-accent-500/5 to-transparent" />
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-accent-500 rounded-full blur-3xl opacity-5" />
      </div>

      <div className="relative z-10 container-smooth max-w-2xl">
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -100px 0px' }}
        >
          {/* Heading */}
          <motion.div className="text-center space-y-6" variants={itemVariants}>
            <p className="text-accent-400 text-sm font-semibold tracking-widest uppercase">
              Get In Touch
            </p>
            <h2 className="text-5xl md:text-6xl font-semibold text-slate-100">
              Let&apos;s Build Something
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-accent-400 to-accent-300">
                Amazing Together
              </span>
            </h2>
            <p className="text-lg text-slate-400 max-w-lg mx-auto">
              I&apos;m always interested in hearing about new projects and opportunities.
            </p>
          </motion.div>

          {/* Email Link - Strong CTA */}
          <motion.div className="text-center" variants={itemVariants}>
            <motion.a
              href="mailto:aryanch680@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-4xl md:text-5xl font-semibold text-slate-100 hover:text-accent-300 transition-colors duration-300 group"
              whileHover={{ scale: 1.02 }}
            >
              aryanch680@gmail.com
              <motion.span
                className="ml-2 text-accent-500 group-hover:text-accent-300"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowUpRight size={36} />
              </motion.span>
            </motion.a>
          </motion.div>

          {/* Resume Button - Stand Out */}
          <motion.div className="flex justify-center" variants={itemVariants}>
            <motion.a
              href="/resume.pdf"
              download
              className="group relative inline-flex items-center gap-3 px-8 py-5 bg-accent-500 text-slate-950 font-bold rounded-lg shadow-lg shadow-accent-500/30 hover:shadow-xl hover:shadow-accent-500/40 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} className="group-hover:scale-110 transition-transform" />
              <span>Download My Resume</span>
              <motion.span
                className="absolute inset-0 rounded-lg bg-white opacity-0 group-hover:opacity-10 transition-opacity"
                aria-hidden
              />
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div className="flex justify-center gap-6" variants={itemVariants}>
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="group flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-slate-900 transition-all duration-200"
                  whileHover={{ y: -4 }}
                  title={social.label}
                >
                  <div className="w-10 h-10 rounded-full bg-slate-900 group-hover:bg-accent-500 group-hover:bg-opacity-20 flex items-center justify-center transition-all duration-200">
                    <Icon className="w-5 h-5 text-slate-400 group-hover:text-accent-400 transition-colors" />
                  </div>
                  <span className="text-xs text-slate-500 group-hover:text-slate-300 text-center max-w-16">
                    {social.name}
                  </span>
                </motion.a>
              )
            })}
          </motion.div>

          {/* Divider */}
          <motion.div
            className="h-px bg-linear-to-r from-transparent via-slate-700 to-transparent"
            variants={itemVariants}
          />

          {/* Footer Text */}
          <motion.div className="text-center" variants={itemVariants}>
            <p className="text-slate-500 text-sm">
              Looking forward to connecting. Let&apos;s create something great!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Download } from 'lucide-react'

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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

  const floatVariants = {
    initial: { y: 0 },
    animate: {
      y: [-8, 8, -8],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950 pt-24 pb-20">
      {/* Background gradient accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent-500 rounded-full blur-3xl opacity-5" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-500 rounded-full blur-3xl opacity-5" />
      </div>

      <div className="relative z-10 container-smooth max-w-7xl">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Image - Left Side */}
          <motion.div
            className="md:col-span-5 flex justify-center md:justify-end"
            variants={itemVariants}
          >
            <motion.div
              className="relative w-64 h-64 md:w-72 md:h-72 rounded-lg overflow-hidden shadow-2xl"
              variants={floatVariants}
              initial="initial"
              animate="animate"
            >
              <Image
                src="/profile.jpg"
                alt="Aryan Chaudhary"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 256px, 288px"
              />
              {/* Subtle border accent */}
              <div className="absolute inset-0 rounded-lg border border-accent-500 border-opacity-20" />
            </motion.div>
          </motion.div>

          {/* Content - Right Side */}
          <motion.div className="md:col-span-7 space-y-6 md:space-y-8" variants={itemVariants}>
            {/* Tagline */}
            <div>
              <motion.p
                className="text-accent-400 text-sm font-semibold tracking-widest uppercase mb-3"
                variants={itemVariants}
              >
                Full Stack Developer
              </motion.p>

              {/* Main Heading */}
              <motion.h1
                className="text-5xl md:text-6xl font-semibold text-slate-100 leading-tight"
                variants={itemVariants}
              >
                Aryan Chaudhary
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              className="text-lg text-slate-300 max-w-md leading-relaxed"
              variants={itemVariants}
            >
              Building modern web experiences with React, Node.js, and clean code. CS student passionate about creating interfaces that users love.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-4 pt-4" variants={itemVariants}>
              <a
                href="#projects"
                className="btn-premium inline-flex items-center justify-center text-center"
              >
                View My Work
              </a>

              <a
                href="/resume.pdf"
                download
                className="px-6 py-3 border-2 border-slate-300 text-slate-100 font-semibold rounded-lg transition-all duration-200 hover:bg-slate-900 hover:border-accent-500 inline-flex items-center justify-center gap-2 group"
              >
                <Download size={18} className="group-hover:text-accent-400 transition-colors" />
                Resume
              </a>
            </motion.div>

            {/* Floating Stats */}
            <motion.div className="pt-8 flex gap-8 md:gap-12" variants={itemVariants}>
              <div>
                <p className="text-accent-400 font-semibold text-lg">5+</p>
                <p className="text-slate-400 text-sm">Projects Built</p>
              </div>
              <div>
                <p className="text-accent-400 font-semibold text-lg">2+</p>
                <p className="text-slate-400 text-sm">Years Experience</p>
              </div>
              <div>
                <p className="text-accent-400 font-semibold text-lg">10+</p>
                <p className="text-slate-400 text-sm">Tech Stack</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-slate-500 text-xs uppercase tracking-widest">Scroll</p>
          <svg
            className="w-4 h-4 text-slate-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}

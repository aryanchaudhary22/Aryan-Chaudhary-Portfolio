'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Download, Menu, X } from 'lucide-react'
import Image from 'next/image'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Work', href: '#projects' },
    { name: 'Stack', href: '#stack' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-900/50'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container-smooth max-w-7xl">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          {/* Logo */}
    <motion.div
      className="shrink-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
    <a href="#" className="flex items-center">
      <Image
        src="/logo.png"
        alt="Aryan Chaudhary"
        width={260}
        height={70}
        priority
        className="h-12 md:h-16 w-auto object-contain hover:opacity-90 transition-opacity"
      />
      </a>
    </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-slate-400 hover:text-slate-100 transition-colors relative group text-sm font-medium"
                whileHover={{ color: '#f1f5f9' }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          {/* Resume Button */}
          <div className="hidden md:flex">
            <motion.a
              href="/resume.pdf"
              download
              className="btn-premium inline-flex items-center gap-2 text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={16} />
              Resume
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-slate-100" />
            ) : (
              <Menu className="w-6 h-6 text-slate-100" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className="md:hidden border-t border-slate-900/50 bg-slate-950/80 backdrop-blur-md"
          initial={{ opacity: 0, height: 0 }}
          animate={isMobileMenuOpen ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-2 text-slate-300 hover:text-slate-100 hover:bg-slate-900 rounded transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              className="btn-premium inline-flex items-center gap-2 w-full justify-center text-sm mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Download size={16} />
              Resume
            </a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

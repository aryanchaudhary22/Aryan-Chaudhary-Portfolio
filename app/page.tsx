import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { TechStack } from '@/components/tech-stack'
import { Experience } from '@/components/experience'
import { Contact } from '@/components/contact'

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Projects />
      <section id="stack">
        <TechStack />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <Contact />
      
      {/* Footer */}
      <footer className="relative w-full bg-slate-950 border-t border-slate-900 py-8">
        <div className="container-smooth max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              © 2024 Aryan Chaudhary. All rights reserved.
            </p>
            <p className="text-slate-500 text-sm">
              Built with Next.js, React, and Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}

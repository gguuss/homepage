import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Speaking } from './components/Speaking';
import { Blog } from './components/Blog';
import { Portfolio } from './components/Portfolio';
import { Projects } from './components/Projects';
import { Resume } from './components/Resume';
import { Footer } from './components/Footer';
export function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-blue-100 selection:text-blue-900">
      <Navigation />

      <main>
        <Hero />
        <About />
        <Speaking />
        <Blog />
        <Portfolio />
        <Projects />
        <Resume />
      </main>

      <Footer />
    </div>);

}
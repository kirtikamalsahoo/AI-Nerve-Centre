// app/page.js
'use client';

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import OpportunitySection from '../components/OpportunitySection';
import ArenaSection from '../components/ArenaSection';
import BlueprintSection from '../components/BlueprintSection';
import SolutionsSection from '../components/SolutionsSection';
import GoToMarketSection from '../components/GoToMarketSection';
import Footer from '../components/Footer';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const header = document.getElementById('header');
    const navHeight = header ? header.offsetHeight : 0;
    const sections = document.querySelectorAll('section');
    const observerOptions = {
      root: null,
      rootMargin: `-${navHeight}px 0px 0px 0px`,
      threshold: 0.4,
    };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen text-white relative">
      {/* Background with animated elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute top-60 right-20 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl floating-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-1/3 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl floating-animation" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* <Navbar activeSection={activeSection} /> */}
      <main className="relative z-10">
        <Hero />
        <OpportunitySection />
        <ArenaSection />
        <BlueprintSection />
        <GoToMarketSection />
      </main>
      <Footer />
    </div>
  );
}

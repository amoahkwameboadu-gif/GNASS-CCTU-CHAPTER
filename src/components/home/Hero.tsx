import { motion } from 'framer-motion';
import { PlayCircle, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="/videos/hero-worship.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[var(--color-bg-light)] dark:to-[var(--color-bg-dark)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-[var(--color-golden-yellow)]/20 text-[var(--color-golden-yellow)] font-semibold tracking-wider text-sm mb-6 border border-[var(--color-golden-yellow)]/30 backdrop-blur-sm">
            WELCOME TO GNASS CCTU
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Nurturing Faith, <br className="hidden md:block" />
            <span className="text-[var(--color-golden-yellow)]">Inspiring Excellence.</span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10 font-light">
            A digital front door for the Adventist student community at Cape Coast Technical University. Join us in worship, service, and fellowship.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link
              to="/about"
              className="group flex items-center gap-2 bg-[var(--color-golden-yellow)] text-[var(--color-royal-blue-dark)] px-8 py-4 rounded-full font-bold text-lg hover:bg-[var(--color-golden-yellow-light)] transition-all transform hover:scale-105 shadow-lg shadow-[var(--color-golden-yellow)]/20"
            >
              <Calendar size={22} className="group-hover:animate-bounce" />
              Plan a Visit
            </Link>
            <Link
              to="/media"
              className="group flex items-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
            >
              <PlayCircle size={22} className="text-[var(--color-golden-yellow)] group-hover:scale-110 transition-transform" />
              Watch Latest Message
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

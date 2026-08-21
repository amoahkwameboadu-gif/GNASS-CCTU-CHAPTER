import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LatestSermon() {
  return (
    <section className="py-20 bg-[var(--bg-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <div className="w-full md:w-1/2 relative group rounded-2xl overflow-hidden shadow-2xl cursor-pointer">
            <img 
              src="/images/sermon-1.jpg" 
              alt="Latest Sermon" 
              className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <div className="bg-[var(--color-golden-yellow)] text-[var(--color-royal-blue-dark)] w-20 h-20 rounded-full flex items-center justify-center pl-1 shadow-lg transform group-hover:scale-110 transition-all">
                <Play size={36} fill="currentColor" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-md text-sm font-medium">
              45:20
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="inline-block py-1 px-3 rounded-full bg-[var(--color-royal-blue)]/10 text-[var(--color-royal-blue)] dark:bg-[var(--color-golden-yellow)]/10 dark:text-[var(--color-golden-yellow)] font-bold text-sm mb-4">
              LATEST MESSAGE
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--text-color)]">
              Walking in the Spirit on Campus
            </h2>
            <div className="flex items-center gap-4 text-[var(--text-muted)] mb-6 text-sm font-medium">
              <span>Pastor John Doe</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
              <span>Last Sabbath</span>
            </div>
            <p className="text-[var(--text-muted)] mb-8 leading-relaxed text-lg">
              Discover how to maintain your faith and walk closely with God amidst the pressures of academic life and campus distractions. A powerful message for every student.
            </p>
            <div className="flex gap-4">
              <Link to="/media" className="bg-[var(--color-royal-blue)] text-white px-6 py-3 rounded-full font-bold hover:bg-[var(--color-royal-blue-light)] transition-colors shadow-md">
                Watch Full Sermon
              </Link>
              <Link to="/media" className="px-6 py-3 rounded-full font-bold text-[var(--color-royal-blue)] dark:text-[var(--color-golden-yellow)] hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                Browse Archive
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

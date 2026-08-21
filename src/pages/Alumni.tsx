import { Users, GraduationCap, Calendar, ArrowRight } from 'lucide-react';

export default function Alumni() {
  return (
    <div className="pt-24 pb-20 bg-[var(--bg-color)] min-h-screen">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-gradient-to-r from-[var(--color-royal-blue)] to-[var(--color-royal-blue-dark)] rounded-3xl p-8 md:p-16 text-white text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
            <GraduationCap size={300} />
          </div>
          <div className="relative z-10">
            <span className="inline-block py-1 px-3 rounded-full bg-[var(--color-golden-yellow)]/20 text-[var(--color-golden-yellow)] font-semibold tracking-wider text-sm mb-6 border border-[var(--color-golden-yellow)]/30 backdrop-blur-sm">
              GNASS CCTU ALUMNI
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Stay Connected. <br/> Leave a Legacy.</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
              Your journey with GNASS doesn't end at graduation. Join the alumni network to mentor current students, reconnect with old friends, and support the chapter's growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[var(--color-golden-yellow)] text-[var(--color-royal-blue-dark)] px-8 py-4 rounded-full font-bold text-lg hover:bg-[var(--color-golden-yellow-light)] transition-colors shadow-lg">
                Join Alumni Network
              </button>
              <button className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
                Update Your Details
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[var(--surface-color)] p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-800 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 text-[var(--color-royal-blue)] dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6">
              <Users size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[var(--text-color)]">Mentorship Program</h3>
            <p className="text-[var(--text-muted)] mb-4">
              Guide current students through their academic and spiritual journey. Share your industry experience and help shape the next generation of Adventist professionals.
            </p>
            <button className="text-[var(--color-royal-blue)] dark:text-[var(--color-golden-yellow)] font-bold flex items-center gap-2 hover:gap-3 transition-all">
              Become a Mentor <ArrowRight size={18} />
            </button>
          </div>

          <div className="bg-[var(--surface-color)] p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-800 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 bg-yellow-100 dark:bg-yellow-900/30 text-[var(--color-golden-yellow-dark)] dark:text-yellow-400 rounded-2xl flex items-center justify-center mb-6">
              <Calendar size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[var(--text-color)]">Homecoming Events</h3>
            <p className="text-[var(--text-muted)] mb-4">
              Relive the memories! Join us for our annual alumni homecoming sabbath, special networking dinners, and campus revival meetings.
            </p>
            <button className="text-[var(--color-royal-blue)] dark:text-[var(--color-golden-yellow)] font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View Event Calendar <ArrowRight size={18} />
            </button>
          </div>

          <div className="bg-[var(--surface-color)] p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-800 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-2xl flex items-center justify-center mb-6">
              <GraduationCap size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[var(--text-color)]">Support the Chapter</h3>
            <p className="text-[var(--text-muted)] mb-4">
              Give back to the chapter that nurtured you. Your financial support helps fund evangelism, welfare, and chapter projects.
            </p>
            <button className="text-[var(--color-royal-blue)] dark:text-[var(--color-golden-yellow)] font-bold flex items-center gap-2 hover:gap-3 transition-all">
              Donate to Alumni Fund <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Featured Alumni (Optional section) */}
      <div className="bg-[var(--surface-color)] py-20 border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-[var(--text-color)]">Alumni Spotlight</h2>
          <p className="text-[var(--text-muted)] max-w-2xl mx-auto mb-12">
            Celebrating the achievements of our past members who are making an impact in their respective fields.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-6 items-center text-left bg-[var(--bg-color)] p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
              <img src="/images/exec-1.jpg" alt="Alumni" className="w-24 h-24 rounded-full object-cover shadow-md" />
              <div>
                <h4 className="font-bold text-lg text-[var(--text-color)]">Dr. Kwame Osei</h4>
                <p className="text-sm text-[var(--color-royal-blue)] dark:text-[var(--color-golden-yellow)] font-medium mb-2">Class of 2018 • Medical Officer</p>
                <p className="text-[var(--text-muted)] text-sm">"GNASS gave me the spiritual foundation I needed to navigate the challenges of medical school and my career."</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 items-center text-left bg-[var(--bg-color)] p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
              <img src="/images/exec-2.jpg" alt="Alumni" className="w-24 h-24 rounded-full object-cover shadow-md" />
              <div>
                <h4 className="font-bold text-lg text-[var(--text-color)]">Ing. Abena Mensah</h4>
                <p className="text-sm text-[var(--color-royal-blue)] dark:text-[var(--color-golden-yellow)] font-medium mb-2">Class of 2015 • Civil Engineer</p>
                <p className="text-[var(--text-muted)] text-sm">"The leadership skills I gained as a chapter executive have been invaluable in my professional journey."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

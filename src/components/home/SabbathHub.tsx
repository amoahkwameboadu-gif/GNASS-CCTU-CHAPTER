import { useState, useEffect } from 'react';
import { Clock, Sun, Moon, CalendarDays } from 'lucide-react';

export default function SabbathHub() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      // Find next Friday sunset (approximate 6:00 PM for simplicity, or Saturday if it's currently Sabbath)
      const dayOfWeek = now.getDay();
      let daysUntilFriday = (5 - dayOfWeek + 7) % 7;
      
      // If it's Friday after 6pm or Saturday, we might want different logic, but let's keep it simple: next Friday 6pm
      if (dayOfWeek === 5 && now.getHours() >= 18) {
        daysUntilFriday = 7;
      }

      const nextSabbath = new Date(now);
      nextSabbath.setDate(now.getDate() + daysUntilFriday);
      nextSabbath.setHours(18, 0, 0, 0);

      const difference = nextSabbath.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();
    return () => clearInterval(timer);
  }, []);

  const schedule = [
    { day: 'Wednesday', event: 'Mid-Week Vesper', time: '6:30 PM', location: 'Main Hall' },
    { day: 'Friday', event: 'Sabbath Welcome', time: '6:30 PM', location: 'Main Hall' },
    { day: 'Saturday', event: 'Sabbath School', time: '9:00 AM', location: 'Main Hall' },
    { day: 'Saturday', event: 'Divine Service', time: '11:00 AM', location: 'Main Hall' },
    { day: 'Saturday', event: 'Adventist Youth (AY)', time: '4:00 PM', location: 'Main Hall' },
  ];

  return (
    <section className="py-20 bg-[var(--color-surface-color)] border-y border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--text-color)]">Sabbath & Service Hub</h2>
          <p className="text-[var(--text-muted)] max-w-2xl mx-auto">Stay connected with our weekly spiritual gatherings and prepare for the Sabbath.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Countdown Card */}
          <div className="bg-gradient-to-br from-[var(--color-royal-blue)] to-[var(--color-royal-blue-dark)] rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-8 -mt-8 text-white/10">
              <Sun size={150} />
            </div>
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
              <Clock className="text-[var(--color-golden-yellow)]" />
              Sabbath Countdown
            </h3>
            <p className="text-blue-200 mb-8 text-sm">Time remaining until Sabbath begins</p>
            
            <div className="grid grid-cols-4 gap-4 text-center">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-3">
                <div className="text-3xl font-bold text-[var(--color-golden-yellow)]">{timeLeft.days}</div>
                <div className="text-xs uppercase tracking-wider mt-1 text-blue-100">Days</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-3">
                <div className="text-3xl font-bold text-[var(--color-golden-yellow)]">{timeLeft.hours}</div>
                <div className="text-xs uppercase tracking-wider mt-1 text-blue-100">Hrs</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-3">
                <div className="text-3xl font-bold text-[var(--color-golden-yellow)]">{timeLeft.minutes}</div>
                <div className="text-xs uppercase tracking-wider mt-1 text-blue-100">Min</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-3">
                <div className="text-3xl font-bold text-[var(--color-golden-yellow)]">{timeLeft.seconds}</div>
                <div className="text-xs uppercase tracking-wider mt-1 text-blue-100">Sec</div>
              </div>
            </div>

            <div className="mt-8 flex justify-between items-center border-t border-white/20 pt-4 text-sm">
              <div className="flex items-center gap-2">
                <Sun size={16} className="text-[var(--color-golden-yellow)]" />
                <span>Sunset Fri: ~6:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <Moon size={16} className="text-gray-300" />
                <span>Sunset Sat: ~6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Schedule Card */}
          <div className="lg:col-span-2 bg-[var(--color-bg-color)] rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-800">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-[var(--text-color)]">
              <CalendarDays className="text-[var(--color-royal-blue)] dark:text-[var(--color-golden-yellow)]" />
              Weekly Schedule
            </h3>
            
            <div className="space-y-4">
              {schedule.map((item, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-[var(--color-surface-color)] shadow-sm hover:shadow-md transition-shadow border border-gray-50 dark:border-gray-800/50">
                  <div className="flex items-center gap-4 mb-2 sm:mb-0">
                    <div className="bg-[var(--color-royal-blue)]/10 dark:bg-gray-800 text-[var(--color-royal-blue)] dark:text-[var(--color-golden-yellow)] px-3 py-1.5 rounded-lg font-bold text-sm min-w-[100px] text-center">
                      {item.day}
                    </div>
                    <div className="font-semibold text-[var(--text-color)]">{item.event}</div>
                  </div>
                  <div className="flex items-center gap-6 text-sm text-[var(--text-muted)] ml-[116px] sm:ml-0">
                    <span className="flex items-center gap-1.5"><Clock size={16} /> {item.time}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{item.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

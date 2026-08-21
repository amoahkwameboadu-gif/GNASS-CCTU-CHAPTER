import { useState } from 'react';
import { Play, Search, BookOpen, Heart, Send } from 'lucide-react';

const sermons = [
  { id: 1, title: 'Walking in the Spirit', speaker: 'Pastor John Doe', date: 'Oct 12, 2023', duration: '45:20', image: '/images/sermon-1.jpg', category: 'Sabbath Divine' },
  { id: 2, title: 'The Power of Prayer', speaker: 'Elder Smith', date: 'Oct 5, 2023', duration: '38:15', image: '/images/sermon-2.jpg', category: 'Vesper' },
  { id: 3, title: 'Navigating Campus Life', speaker: 'Dr. Mensah', date: 'Sep 28, 2023', duration: '52:10', image: '/images/sermon-3.jpg', category: 'Youth Ministry' },
  { id: 4, title: 'Faith Over Fear', speaker: 'Pastor John Doe', date: 'Sep 21, 2023', duration: '41:05', image: '/images/sermon-1.jpg', category: 'Sabbath Divine' },
  { id: 5, title: 'Purpose Driven Youth', speaker: 'Elder Smith', date: 'Sep 14, 2023', duration: '49:30', image: '/images/sermon-2.jpg', category: 'Youth Ministry' },
];

export default function Media() {
  const [activeTab, setActiveTab] = useState('sermons');
  const [prayerName, setPrayerName] = useState('');
  const [prayerRequest, setPrayerRequest] = useState('');
  const [prayers, setPrayers] = useState([
    { id: 1, name: 'Anonymous', text: 'Please pray for my upcoming mid-semester exams.', likes: 12 },
    { id: 2, name: 'Sarah M.', text: 'Praying for my family back home for health and provision.', likes: 8 },
  ]);

  const handlePrayerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prayerRequest.trim()) return;
    setPrayers([{ id: Date.now(), name: prayerName || 'Anonymous', text: prayerRequest, likes: 0 }, ...prayers]);
    setPrayerRequest('');
    setPrayerName('');
  };

  const handleLike = (id: number) => {
    setPrayers(prayers.map(p => p.id === id ? { ...p, likes: p.likes + 1 } : p));
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[var(--bg-color)]">
      
      {/* Header & Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[var(--text-color)]">Media & Resources</h1>
        
        <div className="flex overflow-x-auto hide-scrollbar gap-4 border-b border-gray-200 dark:border-gray-800 pb-4">
          <button 
            onClick={() => setActiveTab('sermons')}
            className={`whitespace-nowrap px-6 py-2 rounded-full font-bold transition-colors ${activeTab === 'sermons' ? 'bg-[var(--color-royal-blue)] text-white' : 'bg-gray-100 dark:bg-gray-800 text-[var(--text-muted)] hover:text-[var(--text-color)]'}`}
          >
            Sermons & Messages
          </button>
          <button 
            onClick={() => setActiveTab('resources')}
            className={`whitespace-nowrap px-6 py-2 rounded-full font-bold transition-colors ${activeTab === 'resources' ? 'bg-[var(--color-royal-blue)] text-white' : 'bg-gray-100 dark:bg-gray-800 text-[var(--text-muted)] hover:text-[var(--text-color)]'}`}
          >
            Sabbath School & Devotionals
          </button>
          <button 
            onClick={() => setActiveTab('prayer')}
            className={`whitespace-nowrap px-6 py-2 rounded-full font-bold transition-colors ${activeTab === 'prayer' ? 'bg-[var(--color-royal-blue)] text-white' : 'bg-gray-100 dark:bg-gray-800 text-[var(--text-muted)] hover:text-[var(--text-color)]'}`}
          >
            Prayer Wall
          </button>
        </div>
      </div>

      {/* Sermons Tab (Netflix Style) */}
      {activeTab === 'sermons' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-[var(--text-color)]">Recent Messages</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search sermons..." 
                className="pl-10 pr-4 py-2 rounded-full bg-[var(--surface-color)] border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--color-royal-blue)] text-sm"
              />
            </div>
          </div>

          <div className="flex overflow-x-auto hide-scrollbar gap-6 pb-8 snap-x">
            {sermons.map((sermon) => (
              <div key={sermon.id} className="min-w-[300px] md:min-w-[400px] snap-start group cursor-pointer">
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4 shadow-md">
                  <img src={sermon.image} alt={sermon.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-[var(--color-golden-yellow)] text-[var(--color-royal-blue-dark)] w-16 h-16 rounded-full flex items-center justify-center pl-1 transform scale-75 group-hover:scale-100 transition-transform">
                      <Play size={28} fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded font-medium">
                    {sermon.duration}
                  </div>
                  <div className="absolute top-2 left-2 bg-[var(--color-royal-blue)] text-white text-xs px-2 py-1 rounded font-bold uppercase tracking-wider">
                    {sermon.category}
                  </div>
                </div>
                <h3 className="font-bold text-lg text-[var(--text-color)] group-hover:text-[var(--color-royal-blue)] transition-colors line-clamp-1">{sermon.title}</h3>
                <div className="flex items-center gap-2 text-sm text-[var(--text-muted)] mt-1">
                  <span>{sermon.speaker}</span>
                  <span>•</span>
                  <span>{sermon.date}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Categories Grid */}
          <h2 className="text-2xl font-bold text-[var(--text-color)] mb-6 mt-8">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Sabbath Divine', 'Vesper Services', 'Youth Ministry', 'Camp Meeting', 'Bible Study', 'Choir Ministration'].map((cat, i) => (
              <div key={i} className="bg-[var(--surface-color)] p-4 rounded-xl border border-gray-100 dark:border-gray-800 text-center font-bold text-[var(--text-color)] hover:bg-[var(--color-royal-blue)] hover:text-white transition-colors cursor-pointer shadow-sm">
                {cat}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Resources Tab */}
      {activeTab === 'resources' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Sabbath School */}
            <div className="bg-[var(--surface-color)] rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white">
                <BookOpen size={40} className="mb-4 text-blue-200" />
                <h2 className="text-3xl font-bold mb-2">Adult Sabbath School</h2>
                <p className="text-blue-100">Quarter 4: God's Mission, My Mission</p>
              </div>
              <div className="p-8">
                <h3 className="font-bold text-xl mb-4 text-[var(--text-color)]">This Week's Lesson</h3>
                <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl mb-6">
                  <p className="font-semibold text-lg text-[var(--text-color)]">Lesson 8: Mission to the Needy</p>
                  <p className="text-sm text-[var(--text-muted)] mt-1">November 18 - November 24</p>
                </div>
                <div className="flex gap-4">
                  <button className="flex-1 bg-[var(--color-royal-blue)] text-white py-3 rounded-xl font-bold hover:bg-[var(--color-royal-blue-light)] transition-colors">Read Lesson</button>
                  <button className="flex-1 bg-gray-100 dark:bg-gray-800 text-[var(--text-color)] py-3 rounded-xl font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">Download PDF</button>
                </div>
              </div>
            </div>

            {/* Daily Devotional */}
            <div className="bg-[var(--surface-color)] rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden">
              <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-8 text-white">
                <Heart size={40} className="mb-4 text-amber-200" />
                <h2 className="text-3xl font-bold mb-2">Daily Devotional</h2>
                <p className="text-amber-100">Start your day with the Word</p>
              </div>
              <div className="p-8">
                <h3 className="font-bold text-xl mb-4 text-[var(--text-color)]">Today's Reading</h3>
                <div className="mb-6">
                  <h4 className="font-bold text-lg text-[var(--color-royal-blue)] dark:text-[var(--color-golden-yellow)]">Walking in the Light</h4>
                  <p className="text-sm text-[var(--text-muted)] mb-3">1 John 1:7</p>
                  <p className="text-[var(--text-color)] italic border-l-4 border-[var(--color-golden-yellow)] pl-4 py-1">
                    "But if we walk in the light, as he is in the light, we have fellowship with one another, and the blood of Jesus, his Son, purifies us from all sin."
                  </p>
                </div>
                <button className="w-full bg-[var(--color-golden-yellow)] text-[var(--color-royal-blue-dark)] py-3 rounded-xl font-bold hover:bg-[var(--color-golden-yellow-light)] transition-colors">
                  Read Full Devotional
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Prayer Wall Tab */}
      {activeTab === 'prayer' && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[var(--surface-color)] rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 p-6 md:p-8 mb-12">
            <h2 className="text-2xl font-bold mb-2 text-[var(--text-color)]">Share a Prayer Request</h2>
            <p className="text-[var(--text-muted)] mb-6">Let the GNASS community intercede for you. "For where two or three gather in my name, there am I with them."</p>
            
            <form onSubmit={handlePrayerSubmit} className="space-y-4">
              <div>
                <input 
                  type="text" 
                  value={prayerName}
                  onChange={(e) => setPrayerName(e.target.value)}
                  placeholder="Your Name (Leave blank to remain anonymous)" 
                  className="w-full p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--color-royal-blue)] text-[var(--text-color)]"
                />
              </div>
              <div>
                <textarea 
                  value={prayerRequest}
                  onChange={(e) => setPrayerRequest(e.target.value)}
                  placeholder="What can we pray for?" 
                  rows={4}
                  className="w-full p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--color-royal-blue)] text-[var(--text-color)] resize-none"
                  required
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button 
                  type="submit" 
                  className="flex items-center gap-2 bg-[var(--color-royal-blue)] text-white px-8 py-3 rounded-xl font-bold hover:bg-[var(--color-royal-blue-light)] transition-colors"
                >
                  <Send size={18} />
                  Post Request
                </button>
              </div>
            </form>
          </div>

          <h3 className="text-xl font-bold mb-6 text-[var(--text-color)] border-b border-gray-200 dark:border-gray-800 pb-2">Recent Requests</h3>
          <div className="space-y-4">
            {prayers.map((prayer) => (
              <div key={prayer.id} className="bg-[var(--surface-color)] p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <span className="font-bold text-[var(--color-royal-blue)] dark:text-[var(--color-golden-yellow)]">{prayer.name}</span>
                  <span className="text-xs text-[var(--text-muted)]">Recently</span>
                </div>
                <p className="text-[var(--text-color)] mb-4">{prayer.text}</p>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => handleLike(prayer.id)}
                    className="flex items-center gap-1.5 text-sm font-medium text-[var(--text-muted)] hover:text-rose-500 transition-colors bg-gray-50 dark:bg-gray-800/50 px-3 py-1.5 rounded-full"
                  >
                    <Heart size={16} className={prayer.likes > 0 ? "fill-rose-500 text-rose-500" : ""} />
                    Praying ({prayer.likes})
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}

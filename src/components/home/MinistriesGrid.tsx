import { Link } from 'react-router-dom';
import { ArrowRight, Music, HeartHandshake, BookOpen, Trophy } from 'lucide-react';

const ministries = [
  {
    id: 'music',
    name: 'Music Ministry',
    desc: 'Uplifting souls through harmonious praise and worship.',
    icon: Music,
    image: '/images/ministry-music.jpg',
    color: 'bg-blue-500'
  },
  {
    id: 'welfare',
    name: 'Welfare & Welfare',
    desc: 'Extending Christ\'s love through practical care and support.',
    icon: HeartHandshake,
    image: '/images/ministry-welfare.jpg',
    color: 'bg-rose-500'
  },
  {
    id: 'evangelism',
    name: 'Evangelism',
    desc: 'Spreading the advent message across the campus.',
    icon: BookOpen,
    image: '/images/ministry-evangelism.jpg',
    color: 'bg-amber-500'
  },
  {
    id: 'sports',
    name: 'Sports & Health',
    desc: 'Promoting physical well-being and team spirit.',
    icon: Trophy,
    image: '/images/ministry-sports.jpg',
    color: 'bg-emerald-500'
  }
];

export default function MinistriesGrid() {
  return (
    <section className="py-24 bg-[var(--bg-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--text-color)]">Get Involved in Ministry</h2>
            <p className="text-[var(--text-muted)] text-lg">
              Discover your purpose and use your talents to serve God and the campus community. There is a place for everyone here.
            </p>
          </div>
          <Link to="/ministries" className="flex items-center gap-2 text-[var(--color-royal-blue)] dark:text-[var(--color-golden-yellow)] font-bold hover:gap-3 transition-all">
            View All Ministries <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ministries.map((ministry) => (
            <Link 
              key={ministry.id} 
              to={`/ministries#${ministry.id}`}
              className="group relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5]"
            >
              <img 
                src={ministry.image} 
                alt={ministry.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className={`w-12 h-12 rounded-full ${ministry.color} text-white flex items-center justify-center mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300`}>
                  <ministry.icon size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{ministry.name}</h3>
                <p className="text-gray-300 text-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                  {ministry.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

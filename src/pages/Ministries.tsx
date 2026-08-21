import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Music, HeartHandshake, BookOpen, Trophy } from 'lucide-react';

const ministriesData = [
  {
    id: 'music',
    name: 'Music Ministry (Choir)',
    icon: Music,
    image: '/images/ministry-music.jpg',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500',
    description: 'The Music Ministry is dedicated to leading the congregation in spirit-filled worship. Whether you sing, play an instrument, or have a passion for sound engineering, there is a place for you. We believe that music is a powerful tool for evangelism and spiritual upliftment.',
    activities: ['Weekly Choir Rehearsals', 'Sabbath Worship Leading', 'Campus Praise Concerts', 'Voice Training Sessions']
  },
  {
    id: 'welfare',
    name: 'Welfare Ministry',
    icon: HeartHandshake,
    image: '/images/ministry-welfare.jpg',
    color: 'text-rose-500',
    bgColor: 'bg-rose-500',
    description: 'The Welfare Ministry embodies the hands and feet of Jesus on campus. We look out for the physical, emotional, and material needs of our members and the wider student body. From visiting the sick to organizing food drives, we demonstrate faith through action.',
    activities: ['Hospital & Hostel Visitations', 'Welfare Fund Management', 'Counseling Support', 'Community Charity Drives']
  },
  {
    id: 'evangelism',
    name: 'Evangelism Ministry',
    icon: BookOpen,
    image: '/images/ministry-evangelism.jpg',
    color: 'text-amber-500',
    bgColor: 'bg-amber-500',
    description: 'Tasked with the Great Commission, the Evangelism Ministry coordinates our outreach efforts. We train members in personal evangelism, organize Bible studies, and lead public campaigns to share the Advent message with our campus community.',
    activities: ['Campus Literature Distribution', 'Small Group Bible Studies', 'Weeks of Spiritual Emphasis', 'Morning Devotion Coordinators']
  },
  {
    id: 'sports',
    name: 'Sports & Health Ministry',
    icon: Trophy,
    image: '/images/ministry-sports.jpg',
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500',
    description: 'We believe that our bodies are temples of the Holy Spirit. The Sports & Health Ministry promotes physical fitness, mental well-being, and social bonding through organized sports, health talks, and recreational activities.',
    activities: ['Sunday Morning Jogging', 'Inter-departmental Football Matches', 'Health & Lifestyle Seminars', 'Campus Clean-up Campaigns']
  }
];

export default function Ministries() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-color)]">Our Ministries</h1>
        <p className="text-xl text-[var(--text-muted)] max-w-3xl mx-auto">
          Discover where you belong. Join a ministry to serve, grow, and make a lasting impact on campus.
        </p>
      </div>

      <div className="space-y-24">
        {ministriesData.map((ministry, index) => {
          const isEven = index % 2 === 0;
          return (
            <div 
              key={ministry.id} 
              id={ministry.id}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28"
            >
              <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                
                {/* Image Side */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
                    <img 
                      src={ministry.image} 
                      alt={ministry.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                    <div className={`absolute top-6 ${isEven ? 'left-6' : 'right-6'} w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg`}>
                      <ministry.icon className={ministry.color} size={28} />
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--text-color)] flex items-center gap-3">
                    {ministry.name}
                  </h2>
                  <p className="text-lg text-[var(--text-muted)] mb-8 leading-relaxed">
                    {ministry.description}
                  </p>
                  
                  <div className="bg-[var(--surface-color)] p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                    <h3 className="font-bold text-lg mb-4 text-[var(--text-color)]">Key Activities:</h3>
                    <ul className="space-y-3">
                      {ministry.activities.map((activity, i) => (
                        <li key={i} className="flex items-center gap-3 text-[var(--text-muted)]">
                          <div className={`w-2 h-2 rounded-full ${ministry.bgColor}`}></div>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="mt-8 bg-[var(--color-royal-blue)] text-white px-8 py-3 rounded-full font-bold hover:bg-[var(--color-royal-blue-light)] transition-colors shadow-md">
                    Join this Ministry
                  </button>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

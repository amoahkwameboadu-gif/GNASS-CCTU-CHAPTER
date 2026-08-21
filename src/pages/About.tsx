import { motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';

const executives = [
  {
    name: 'Emmanuel Osei',
    role: 'Chapter President',
    image: '/images/exec-1.jpg',
    bio: 'Leading with vision and dedication to foster a spiritually vibrant campus.'
  },
  {
    name: 'Sarah Mensah',
    role: 'Vice President',
    image: '/images/exec-2.jpg',
    bio: 'Passionate about student welfare and organizing impactful campus events.'
  },
  {
    name: 'David Appiah',
    role: 'General Secretary',
    image: '/images/exec-1.jpg', // Reusing for demo
    bio: 'Ensuring smooth administrative operations and clear communication.'
  },
  {
    name: 'Grace Ofori',
    role: 'Financial Secretary',
    image: '/images/exec-2.jpg', // Reusing for demo
    bio: 'Managing chapter resources with transparency and integrity.'
  }
];

export default function About() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <div className="bg-[var(--color-royal-blue)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            About GNASS CCTU
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            We are the Ghana National Association of Adventist Students, Cape Coast Technical University Chapter. A family of believers dedicated to faith, academic excellence, and community service.
          </motion.p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[var(--surface-color)] p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-[var(--color-royal-blue)] dark:text-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[var(--text-color)]">Our Mission</h3>
            <p className="text-[var(--text-muted)]">
              To proclaim the everlasting gospel of Jesus Christ to students on campus, nurturing them into faithful disciples prepared for His soon return.
            </p>
          </div>
          <div className="bg-[var(--surface-color)] p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 text-[var(--color-golden-yellow-dark)] dark:text-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[var(--text-color)]">Our Vision</h3>
            <p className="text-[var(--text-muted)]">
              To be a vibrant, spirit-filled student community that excels academically while reflecting the character of Christ in all spheres of campus life.
            </p>
          </div>
          <div className="bg-[var(--surface-color)] p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[var(--text-color)]">Core Values</h3>
            <p className="text-[var(--text-muted)]">
              Faithfulness, Excellence, Integrity, Compassion, and Unity. We believe in holistic education that balances the spiritual, mental, and physical.
            </p>
          </div>
        </div>
      </div>

      {/* Executive Team */}
      <div className="bg-[var(--color-surface-color)] py-20 border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--text-color)]">Meet Our Executive Team</h2>
            <p className="text-[var(--text-muted)] max-w-2xl mx-auto">
              Dedicated student leaders committed to serving the chapter and guiding our spiritual journey on campus.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {executives.map((exec, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-800"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={exec.image} 
                    alt={exec.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                {/* Hover overlay with bio */}
                <div className="absolute inset-0 bg-[var(--color-royal-blue)]/90 text-white p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-bold mb-1">{exec.name}</h3>
                  <p className="text-[var(--color-golden-yellow)] font-medium text-sm mb-4">{exec.role}</p>
                  <p className="text-sm text-blue-100 leading-relaxed">{exec.bio}</p>
                </div>
                {/* Default info bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-gray-900 p-4 transform group-hover:translate-y-full transition-transform duration-300">
                  <h3 className="text-lg font-bold text-[var(--text-color)]">{exec.name}</h3>
                  <p className="text-[var(--color-royal-blue)] dark:text-[var(--color-golden-yellow)] text-sm font-medium">{exec.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-royal-blue)] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src="/images/gnasscctulogo.png" alt="GNASS CCTU Logo" className="h-12 w-12 rounded-full object-cover bg-white p-1" />
              <span className="font-bold text-2xl tracking-tight text-[var(--color-golden-yellow)]">
                GNASS CCTU
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Ghana National Association of Adventist Students, Cape Coast Technical University Chapter. 
              Nurturing faith, inspiring excellence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-[var(--color-golden-yellow)] hover:text-[var(--color-royal-blue)] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-[var(--color-golden-yellow)] hover:text-[var(--color-royal-blue)] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-[var(--color-golden-yellow)] hover:text-[var(--color-royal-blue)] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-[var(--color-golden-yellow)] hover:text-[var(--color-royal-blue)] transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-[var(--color-golden-yellow)]">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/ministries" className="text-gray-300 hover:text-white transition-colors">Our Ministries</Link></li>
              <li><Link to="/media" className="text-gray-300 hover:text-white transition-colors">Sermons & Media</Link></li>
              <li><Link to="/give" className="text-gray-300 hover:text-white transition-colors">Give & Dues</Link></li>
              <li><Link to="/alumni" className="text-gray-300 hover:text-white transition-colors">Alumni Portal</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-[var(--color-golden-yellow)]">Meeting Times</h3>
            <ul className="space-y-4 text-gray-300">
              <li>
                <strong className="block text-white">Wednesday Vesper</strong>
                6:30 PM - 8:00 PM
              </li>
              <li>
                <strong className="block text-white">Friday Vesper</strong>
                6:30 PM - 8:00 PM
              </li>
              <li>
                <strong className="block text-white">Sabbath School</strong>
                Saturday, 9:00 AM
              </li>
              <li>
                <strong className="block text-white">Divine Service</strong>
                Saturday, 11:00 AM
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-[var(--color-golden-yellow)]">Contact Us</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="text-[var(--color-golden-yellow)] shrink-0 mt-1" size={20} />
                <span>Cape Coast Technical University Campus, Cape Coast, Ghana</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[var(--color-golden-yellow)] shrink-0" size={20} />
                <span>+233 24 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[var(--color-golden-yellow)] shrink-0" size={20} />
                <span>info@gnasscctu.org</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} GNASS CCTU Chapter. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

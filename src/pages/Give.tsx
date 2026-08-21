import { useState } from 'react';
import { CreditCard, Wallet, HeartHandshake, ShieldCheck } from 'lucide-react';

export default function Give() {
  const [amount, setAmount] = useState('50');
  const [customAmount, setCustomAmount] = useState('');
  const [givingType, setGivingType] = useState('tithe');

  const handleAmountClick = (val: string) => {
    setAmount(val);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setAmount('');
  };

  return (
    <div className="pt-24 pb-20 bg-[var(--bg-color)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--text-color)]">Give & Dues</h1>
          <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto">
            "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." - 2 Cor 9:7
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
          
          {/* Form Side */}
          <div className="w-full lg:w-3/5 bg-[var(--surface-color)] p-6 md:p-10 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800">
            <h2 className="text-2xl font-bold mb-6 text-[var(--text-color)]">Secure Online Giving</h2>
            
            {/* Giving Type */}
            <div className="mb-8">
              <label className="block text-sm font-bold text-[var(--text-muted)] mb-3 uppercase tracking-wider">Fund Designation</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { id: 'tithe', label: 'Tithe' },
                  { id: 'offering', label: 'Offering' },
                  { id: 'dues', label: 'Chapter Dues' },
                  { id: 'welfare', label: 'Welfare' }
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setGivingType(type.id)}
                    className={`py-3 rounded-xl font-bold text-sm transition-all ${
                      givingType === type.id 
                        ? 'bg-[var(--color-royal-blue)] text-white shadow-md' 
                        : 'bg-gray-50 dark:bg-gray-800 text-[var(--text-muted)] hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Amount */}
            <div className="mb-8">
              <label className="block text-sm font-bold text-[var(--text-muted)] mb-3 uppercase tracking-wider">Amount (GHS)</label>
              <div className="grid grid-cols-3 gap-3 mb-3">
                {['20', '50', '100', '200', '500'].map((val) => (
                  <button
                    key={val}
                    onClick={() => handleAmountClick(val)}
                    className={`py-3 rounded-xl font-bold text-lg transition-all ${
                      amount === val 
                        ? 'bg-[var(--color-golden-yellow)] text-[var(--color-royal-blue-dark)] shadow-md' 
                        : 'bg-gray-50 dark:bg-gray-800 text-[var(--text-color)] hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    ₵{val}
                  </button>
                ))}
                <div className="relative col-span-3 md:col-span-1">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-bold">₵</span>
                  <input
                    type="number"
                    placeholder="Other"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    className={`w-full pl-8 pr-4 py-3 rounded-xl font-bold text-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-golden-yellow)] transition-all ${
                      customAmount ? 'bg-[var(--color-golden-yellow)] text-[var(--color-royal-blue-dark)] shadow-md' : 'bg-gray-50 dark:bg-gray-800 text-[var(--text-color)]'
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-4 mb-8">
              <div>
                <label className="block text-sm font-bold text-[var(--text-muted)] mb-2">Full Name</label>
                <input type="text" className="w-full p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--color-royal-blue)] text-[var(--text-color)]" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-bold text-[var(--text-muted)] mb-2">Email Address</label>
                <input type="email" className="w-full p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--color-royal-blue)] text-[var(--text-color)]" placeholder="john@example.com" />
              </div>
            </div>

            <button className="w-full flex items-center justify-center gap-2 bg-[var(--color-royal-blue)] text-white py-4 rounded-xl font-bold text-lg hover:bg-[var(--color-royal-blue-light)] transition-colors shadow-lg">
              <ShieldCheck size={24} />
              Give ₵{amount || customAmount || '0'} Securely
            </button>
            <p className="text-center text-xs text-[var(--text-muted)] mt-4 flex items-center justify-center gap-1">
              <ShieldCheck size={14} /> Encrypted & Secure Processing
            </p>
          </div>

          {/* Info Side */}
          <div className="w-full lg:w-2/5 space-y-6">
            <div className="bg-gradient-to-br from-[var(--color-royal-blue)] to-[var(--color-royal-blue-dark)] text-white p-8 rounded-3xl shadow-lg">
              <Wallet size={40} className="text-[var(--color-golden-yellow)] mb-4" />
              <h3 className="text-xl font-bold mb-2">Bank Transfer / Momo</h3>
              <p className="text-blue-200 mb-6 text-sm">You can also send your tithes and offerings directly to our official accounts.</p>
              
              <div className="space-y-4">
                <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20">
                  <p className="text-xs text-blue-200 uppercase tracking-wider mb-1">MTN Mobile Money</p>
                  <p className="font-bold text-lg">024 123 4567</p>
                  <p className="text-sm">Name: GNASS CCTU</p>
                </div>
                <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20">
                  <p className="text-xs text-blue-200 uppercase tracking-wider mb-1">Bank Account</p>
                  <p className="font-bold text-lg">1234567890123</p>
                  <p className="text-sm">Bank: GCB Bank</p>
                  <p className="text-sm">Branch: Cape Coast Main</p>
                </div>
              </div>
            </div>

            <div className="bg-[var(--surface-color)] p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-800 flex items-start gap-4">
              <div className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 p-3 rounded-full shrink-0">
                <HeartHandshake size={24} />
              </div>
              <div>
                <h3 className="font-bold text-[var(--text-color)] mb-1">Why Pay Dues?</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  Chapter dues (₵20/semester) help us organize events, support welfare needs, and maintain chapter operations. Your contribution makes our collective ministry possible.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

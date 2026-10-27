import React, { useState } from 'react';
import { 
  Scissors, Sparkles, PhoneCall, MapPin, Calendar, Menu, X, 
  MessageCircle, Star, Crown, Shirt, UserCheck, Ruler, UploadCloud, 
  Image as ImageIcon, Heart, Clock, Mail, Phone 
} from 'lucide-react';
import { PRODUCTS } from './data/products.js';

const STUDIO_WHATSAPP = "919333004877";
const SECONDARY_PHONE = "+91 70032 80774";

export default function App() {
  const [lang, setLang] = useState('bn');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Modals
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isAppointModalOpen, setIsAppointModalOpen] = useState(false);
  const [selectedProductForCustom, setSelectedProductForCustom] = useState('');

  // Custom Order Form State
  const [dressType, setDressType] = useState('Blouse (ব্লাউজ)');
  const [fabric, setFabric] = useState('Studio Provides Fabric');
  const [measureMode, setMeasureMode] = useState('standard');
  const [stdSize, setStdSize] = useState('M (38-40)');
  const [customMeasures, setCustomMeasures] = useState({
    bust: '', waist: '', hips: '', shoulder: '', sleeve: '', length: ''
  });
  const [notes, setNotes] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [previewImageName, setPreviewImageName] = useState('');

  // Appointment Form State
  const [appName, setAppName] = useState('');
  const [appPhone, setAppPhone] = useState('');
  const [appDate, setAppDate] = useState('');
  const [appTime, setAppTime] = useState('11:00 AM');
  const [appPurpose, setAppPurpose] = useState('Bridal Lehenga & Gown Consultation');

  const filteredProducts = PRODUCTS.filter(p => {
    if (selectedCategory === 'all') return true;
    return p.category === selectedCategory;
  });

  const handleOpenOrder = (prodTitle = '') => {
    if (prodTitle) {
      setSelectedProductForCustom(prodTitle);
      setDressType(prodTitle);
    }
    setIsOrderModalOpen(true);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewImageName(file.name);
    }
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    let measureSummary = "";
    if (measureMode === 'standard') {
      measureSummary = `Standard Size: ${stdSize}`;
    } else {
      measureSummary = `Custom Exact (Inches):
- Bust/Chest: ${customMeasures.bust || 'N/A'}"
- Waist: ${customMeasures.waist || 'N/A'}"
- Hips: ${customMeasures.hips || 'N/A'}"
- Shoulder: ${customMeasures.shoulder || 'N/A'}"
- Sleeve: ${customMeasures.sleeve || 'N/A'}"
- Total Length: ${customMeasures.length || 'N/A'}"`;
    }

    const photoText = previewImageName ? `[Reference Image: ${previewImageName}] (will send in chat)` : `No photo attached`;

    const message = `✨ *NEW CUSTOM ORDER - ALIVE FASHION STUDIO* ✨
-----------------------------------------
👤 *Client Name:* ${clientName}
📞 *Phone:* ${clientPhone}

👗 *Garment Type:* ${dressType}
🧵 *Fabric Preference:* ${fabric}
📸 *Design Reference:* ${photoText}

📏 *Measurements:*
${measureSummary}

📝 *Special Instructions:*
${notes || 'None'}
-----------------------------------------
_Sent from Alive Fashion Studio Website_`;

    window.open(`https://wa.me/${STUDIO_WHATSAPP}?text=${encodeURIComponent(message)}`, '_blank');
    setIsOrderModalOpen(false);
  };

  const handleAppointmentSubmit = (e) => {
    e.preventDefault();
    const msg = `📅 *VIP CONSULTATION & TRIAL BOOKING*
-----------------------------------------
👤 *Client Name:* ${appName}
📞 *Phone:* ${appPhone}
🗓 *Date:* ${appDate}
⏰ *Time:* ${appTime}
🎯 *Purpose:* ${appPurpose}
-----------------------------------------
Please confirm my appointment slot at Alive Fashion Studio.`;

    window.open(`https://wa.me/${STUDIO_WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank');
    setIsAppointModalOpen(false);
  };

  return (
    <div className="bg-[#0B0D11] text-stone-200 min-h-screen selection:bg-amber-500 selection:text-black">
      
      {/* Top Announcement Bar */}
      <div className="bg-[#0F1115] border-b border-white/5 py-2 px-4 text-xs tracking-wider">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-stone-400">
            <span className="flex items-center gap-1.5 text-amber-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'bn' ? 'কাস্টম মেড পোশাক ও ১০০% পারফেক্ট ফিটিং গ্যারান্টি' : 'Custom Made to Order & Perfect Fitting Guaranteed'}</span>
            </span>
            <span className="hidden md:inline-block text-stone-600">|</span>
            <span className="hidden md:flex items-center gap-1">
              <MapPin className="w-3 h-3 text-amber-400" />
              <span>{lang === 'bn' ? 'টালিগঞ্জ, কলকাতা | স্টুডিও ভিজিট ও হোম ডেলিভারি' : 'Tollygunge, Kolkata | Studio Visit & Home Delivery'}</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a href="tel:+919333004877" className="flex items-center gap-1.5 text-stone-300 hover:text-amber-400 transition">
              <PhoneCall className="w-3 h-3 text-amber-400" />
              <span>+91 93330 04877</span>
            </a>
            <span className="text-stone-600">/</span>
            <a href="tel:+917003280774" className="text-stone-300 hover:text-amber-400 transition hidden sm:inline">
              <span>+91 70032 80774</span>
            </a>
            <div className="h-3 w-px bg-white/10" />
            <div className="flex items-center bg-white/5 rounded-full p-0.5 border border-white/10 text-[11px]">
              <button 
                onClick={() => setLang('bn')} 
                className={`px-2.5 py-0.5 rounded-full font-semibold transition ${lang === 'bn' ? 'bg-[#C5A059] text-black' : 'text-stone-400 hover:text-white'}`}>
                বাংলা
              </button>
              <button 
                onClick={() => setLang('en')} 
                className={`px-2.5 py-0.5 rounded-full font-semibold transition ${lang === 'en' ? 'bg-[#C5A059] text-black' : 'text-stone-400 hover:text-white'}`}>
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-40 bg-[#0B0D11]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Brand Logo */}
            <a href="#" className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full border border-amber-400/50 flex items-center justify-center text-amber-400">
                  <Scissors className="w-4 h-4" />
                </span>
                <span className="brand-title text-xl sm:text-2xl font-bold tracking-widest text-white">
                  ALIVE <span className="gold-text-gradient">FASHION</span>
                </span>
              </div>
              <span className="text-[10px] tracking-[0.3em] uppercase text-amber-400/80 pl-10 font-medium">Studio & Boutique</span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide">
              <a href="#collections" className="hover:text-amber-400 transition">{lang === 'bn' ? 'কালেকশন' : 'Collections'}</a>
              <a href="#categories" className="hover:text-amber-400 transition">{lang === 'bn' ? 'ক্যাটাগরি' : 'Categories'}</a>
              <a href="#measurement-guide" className="hover:text-amber-400 transition">{lang === 'bn' ? 'মাপের নিয়ম' : 'Measurement'}</a>
              <a href="#reviews" className="hover:text-amber-400 transition">{lang === 'bn' ? 'রিভিউ' : 'Reviews'}</a>
              <a href="#contact" className="hover:text-amber-400 transition">{lang === 'bn' ? 'যোগাযোগ' : 'Contact'}</a>
            </nav>

            {/* Header Actions */}
            <div className="hidden sm:flex items-center gap-3">
              <button 
                onClick={() => handleOpenOrder()} 
                className="px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-black shadow-lg shadow-amber-500/20 transition transform active:scale-95 flex items-center gap-2">
                <Scissors className="w-4 h-4" />
                <span>{lang === 'bn' ? 'কাস্টম অর্ডার' : 'Custom Order'}</span>
              </button>
              
              <button 
                onClick={() => setIsAppointModalOpen(true)}
                className="px-4 py-2.5 rounded-full text-xs uppercase tracking-wider font-medium border border-white/20 hover:border-amber-400/60 text-stone-200 hover:text-amber-400 transition flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>{lang === 'bn' ? 'ট্রায়াল বুকিং' : 'Book Trial'}</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center gap-2">
              <button onClick={() => handleOpenOrder()} className="px-3 py-1.5 rounded-full text-[11px] font-semibold bg-amber-500 text-black sm:hidden">
                {lang === 'bn' ? 'অর্ডার' : 'Order'}
              </button>
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-stone-300 hover:text-white">
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 bg-[#171A21]/95 px-4 py-6 space-y-4">
            <a href="#collections" onClick={() => setIsMobileMenuOpen(false)} className="block text-stone-200 hover:text-amber-400 py-1">
              {lang === 'bn' ? 'কালেকশন' : 'Collections'}
            </a>
            <a href="#categories" onClick={() => setIsMobileMenuOpen(false)} className="block text-stone-200 hover:text-amber-400 py-1">
              {lang === 'bn' ? 'ক্যাটাগরি' : 'Categories'}
            </a>
            <a href="#measurement-guide" onClick={() => setIsMobileMenuOpen(false)} className="block text-stone-200 hover:text-amber-400 py-1">
              {lang === 'bn' ? 'মাপের নিয়ম' : 'Measurement Guide'}
            </a>
            <a href="#reviews" onClick={() => setIsMobileMenuOpen(false)} className="block text-stone-200 hover:text-amber-400 py-1">
              {lang === 'bn' ? 'রিভিউ' : 'Reviews'}
            </a>
            <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
              <button onClick={() => { setIsMobileMenuOpen(false); handleOpenOrder(); }} className="w-full py-3 rounded-xl bg-amber-500 text-black font-semibold text-center">
                {lang === 'bn' ? 'কাস্টম অর্ডার করুন' : 'Custom Order'}
              </button>
              <button onClick={() => { setIsMobileMenuOpen(false); setIsAppointModalOpen(true); }} className="w-full py-3 rounded-xl border border-white/20 text-stone-200 font-medium text-center">
                {lang === 'bn' ? 'ট্রায়াল বুকিং' : 'Book Trial'}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-400/30 bg-amber-500/10 text-amber-300 text-xs tracking-wider uppercase font-medium">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Bespoke Tailoring & Designer Studio</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
                {lang === 'bn' ? 'আপনার নিজস্ব স্টাইলে,' : 'Crafting Elegance,'}<br />
                <span className="gold-text-gradient">{lang === 'bn' ? 'তৈরি সেরা এক্সক্লুসিভ পোশাক।' : 'Tailored Just For You.'}</span>
              </h1>

              <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                {lang === 'bn' 
                  ? 'যেকোনো ডিজাইনের ছবি দেখিয়ে আপনার মনমতো ড্রেস তৈরি করুন। Women & Men — Indian Ethnic, Western, Bridal Lehenga, Designer Blouse, Skirts, Party Wear, Shirts, Suits এবং Pants পারফেক্ট ফিটিংয়ে তৈরি করা হয়।'
                  : 'Order any dress design simply by showing a picture. Men & Women — Indian Ethnic, Western, Bridal Lehenga, Designer Blouse, Skirts, Party Wear, Shirts, Suits & Pants made to exact perfection.'}
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <button 
                  onClick={() => handleOpenOrder()} 
                  className="px-7 py-3.5 rounded-full font-semibold bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:brightness-110 text-black shadow-xl shadow-amber-500/25 transition transform active:scale-95 flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4" />
                  <span>{lang === 'bn' ? 'কাস্টম ডিজাইন অর্ডার করুন' : 'Order Custom Design'}</span>
                </button>

                <a 
                  href={`https://wa.me/${STUDIO_WHATSAPP}?text=Hello%20Alive%20Fashion%20Studio,%20I%20want%20to%20discuss%20a%20dress%20design!`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-6 py-3.5 rounded-full font-semibold border border-green-500/40 bg-green-500/10 text-green-400 hover:bg-green-500/20 transition flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>{lang === 'bn' ? 'WhatsApp-এ কথা বলুন' : 'Chat on WhatsApp'}</span>
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/10 text-left">
                <div>
                  <div className="text-amber-400 font-bold text-lg">100%</div>
                  <div className="text-xs text-stone-400">{lang === 'bn' ? 'ফিটিং গ্যারান্টি' : 'Fit Guarantee'}</div>
                </div>
                <div>
                  <div className="text-amber-400 font-bold text-lg">Photo To Dress</div>
                  <div className="text-xs text-stone-400">{lang === 'bn' ? 'ছবির মতো ড্রেস' : 'Any Design Copy'}</div>
                </div>
                <div>
                  <div className="text-amber-400 font-bold text-lg">Men & Women</div>
                  <div className="text-xs text-stone-400">{lang === 'bn' ? 'ছেলে ও মেয়েদের পোশাক' : 'All Categories'}</div>
                </div>
                <div>
                  <div className="text-amber-400 font-bold text-lg">Home Delivery</div>
                  <div className="text-xs text-stone-400">{lang === 'bn' ? 'হোম ডেলিভারি' : 'Doorstep Fitting'}</div>
                </div>
              </div>
            </div>

            {/* Right Image Display */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#171A21] shadow-2xl">
                <img 
                  src="./images/hero-dress.jpg" 
                  alt="Alive Fashion Studio - Custom Handcrafted Designer Wear" 
                  className="w-full h-[480px] object-cover object-top" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D11] via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-[#0B0D11]/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-amber-400 font-semibold uppercase">Exclusive Collection</span>
                    <h4 className="text-sm font-bold text-white">Handcrafted Zardozi Designer Wear</h4>
                    <p className="text-[11px] text-stone-400">Custom cut, pure fabric & royal antique embroidery</p>
                  </div>
                  <button onClick={() => handleOpenOrder('Handcrafted Zardozi Designer Wear')} className="px-3 py-1.5 rounded-lg bg-amber-500 text-black text-xs font-bold hover:bg-amber-400 transition">
                    Order
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Categories Showcase */}
      <section id="categories" className="py-16 bg-[#171A21]/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-xs uppercase tracking-[0.25em] text-amber-400 font-semibold mb-2">Our Expertise</h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif">{lang === 'bn' ? 'আমরা যা যা তৈরি করি' : 'What We Create For You'}</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div onClick={() => setSelectedCategory('women-ethnic')} className="luxury-card cursor-pointer group p-5 rounded-2xl bg-[#171A21]/70 border border-white/5 hover:border-amber-500/40 text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-white group-hover:text-amber-300 transition">Designer Blouse</h4>
              <p className="text-xs text-stone-400 mt-1">Aari, Zardozi, Princess Cut & Deep Neck</p>
            </div>

            <div onClick={() => setSelectedCategory('women-ethnic')} className="luxury-card cursor-pointer group p-5 rounded-2xl bg-[#171A21]/70 border border-white/5 hover:border-amber-500/40 text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
                <Crown className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-white group-hover:text-amber-300 transition">Lehengas & Gowns</h4>
              <p className="text-xs text-stone-400 mt-1">Bridal, Flair Lehengas & Ball Gowns</p>
            </div>

            <div onClick={() => setSelectedCategory('women-western')} className="luxury-card cursor-pointer group p-5 rounded-2xl bg-[#171A21]/70 border border-white/5 hover:border-amber-500/40 text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
                <Shirt className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-white group-hover:text-amber-300 transition">Western Dresses</h4>
              <p className="text-xs text-stone-400 mt-1">Party Dresses, Pleated Skirts, Corsets</p>
            </div>

            <div onClick={() => setSelectedCategory('men')} className="luxury-card cursor-pointer group p-5 rounded-2xl bg-[#171A21]/70 border border-white/5 hover:border-amber-500/40 text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
                <UserCheck className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-white group-hover:text-amber-300 transition">Suits & Sherwani</h4>
              <p className="text-xs text-stone-400 mt-1">Tailored Suits, Shirts, Pants & Kurta</p>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section id="collections" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <h2 className="text-xs uppercase tracking-[0.25em] text-amber-400 font-semibold mb-2">Signature Portfolio</h2>
              <h3 className="text-3xl font-bold text-white font-serif">{lang === 'bn' ? 'জনপ্রিয় কালেকশন ও ডিজাইন' : 'Featured Collections'}</h3>
            </div>

            <div className="flex flex-wrap gap-2 text-xs">
              <button 
                onClick={() => setSelectedCategory('all')} 
                className={`px-4 py-2 rounded-full font-medium transition ${selectedCategory === 'all' ? 'bg-[#C5A059] text-black' : 'bg-[#171A21] text-stone-300 hover:text-white'}`}>
                {lang === 'bn' ? 'সবগুলো' : 'All'}
              </button>
              <button 
                onClick={() => setSelectedCategory('women-ethnic')} 
                className={`px-4 py-2 rounded-full font-medium transition ${selectedCategory === 'women-ethnic' ? 'bg-[#C5A059] text-black' : 'bg-[#171A21] text-stone-300 hover:text-white'}`}>
                {lang === 'bn' ? 'লেহেঙ্গা ও ব্লাউজ' : "Women's Ethnic"}
              </button>
              <button 
                onClick={() => setSelectedCategory('women-western')} 
                className={`px-4 py-2 rounded-full font-medium transition ${selectedCategory === 'women-western' ? 'bg-[#C5A059] text-black' : 'bg-[#171A21] text-stone-300 hover:text-white'}`}>
                {lang === 'bn' ? 'ওয়েস্টার্ন ও পার্টি ড্রেস' : "Western & Party"}
              </button>
              <button 
                onClick={() => setSelectedCategory('men')} 
                className={`px-4 py-2 rounded-full font-medium transition ${selectedCategory === 'men' ? 'bg-[#C5A059] text-black' : 'bg-[#171A21] text-stone-300 hover:text-white'}`}>
                {lang === 'bn' ? 'ছেলেদের কালেকশন' : "Men's Collection"}
              </button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map(prod => (
              <div key={prod.id} className="luxury-card rounded-2xl overflow-hidden bg-[#171A21]/80 border border-white/5 flex flex-col">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img src={prod.image} alt={prod.title} className="w-full h-full object-cover transition duration-500 hover:scale-105" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-black/70 text-amber-400 backdrop-blur-sm border border-amber-400/30">
                    {prod.badge}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-white text-base">{prod.title}</h4>
                    <p className="text-xs text-stone-400 mt-1 line-clamp-2">{prod.description}</p>
                    <div className="mt-2.5 flex items-baseline gap-2">
                      <span className="text-amber-400 font-bold text-sm">Custom Tailored</span>
                      <span className="text-[11px] text-stone-500">{prod.price}</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/5 flex gap-2">
                    <button 
                      onClick={() => handleOpenOrder(prod.title)}
                      className="flex-1 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-semibold transition flex items-center justify-center gap-1">
                      <Scissors className="w-3.5 h-3.5" />
                      <span>{lang === 'bn' ? 'কাস্টমাইজ করুন' : 'Customize'}</span>
                    </button>
                    <a 
                      href={`https://wa.me/${STUDIO_WHATSAPP}?text=I%20am%20interested%20in%20${encodeURIComponent(prod.title)}`} 
                      target="_blank" 
                      rel="noreferrer"
                      className="p-2 rounded-xl border border-green-500/30 text-green-400 hover:bg-green-500/10 transition">
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Inspiration banner */}
          <div className="mt-16 rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#171A21] via-[#0F1115] to-[#171A21] border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center md:text-left">
              <span className="text-xs text-amber-400 uppercase tracking-widest font-semibold">Got your own dream design?</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif">
                {lang === 'bn' ? 'ইন্টারনেট বা Pinterest থেকে ছবি দিন, হুবহু বানিয়ে দেব!' : 'Show any photo from Pinterest or Instagram, we will craft it!'}
              </h3>
              <p className="text-sm text-stone-400 max-w-xl">
                {lang === 'bn' ? 'যেকোনো ছবি বা স্কেচ আপলোড করে সরাসরি আমাদের মাস্টারের সাথে যোগাযোগ করুন।' : 'Upload any reference image or sketch with your exact measurements and get in touch with our master designer.'}
              </p>
            </div>
            <button 
              onClick={() => handleOpenOrder()} 
              className="px-8 py-4 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm tracking-wide shadow-xl shadow-amber-500/20 transition flex items-center gap-2 shrink-0">
              <UploadCloud className="w-4 h-4" />
              <span>{lang === 'bn' ? 'ডিজাইন আপলোড ও অর্ডার' : 'Upload Design & Order'}</span>
            </button>
          </div>

        </div>
      </section>

      {/* Measurement Guide */}
      <section id="measurement-guide" className="py-20 bg-[#171A21]/50 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs uppercase tracking-[0.25em] text-amber-400 font-semibold mb-2">Easy 4-Step Process</h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif">{lang === 'bn' ? 'কীভাবে কাস্টম টেইলারিং কাজ করে' : 'How Custom Tailoring Works'}</h3>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl bg-[#171A21]/40 border border-white/5 text-center">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center mx-auto mb-4 text-lg">1</div>
              <h4 className="font-bold text-white mb-2">{lang === 'bn' ? 'ডিজাইন পছন্দ করুন' : 'Choose or Upload Design'}</h4>
              <p className="text-xs text-stone-400">{lang === 'bn' ? 'আমাদের ক্যাটালগ থেকে বাছাই করুন অথবা যেকোনো ছবি আপলোড করুন।' : 'Pick from our showcase or upload any reference photo or sketch.'}</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#171A21]/40 border border-white/5 text-center">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center mx-auto mb-4 text-lg">2</div>
              <h4 className="font-bold text-white mb-2">{lang === 'bn' ? 'কাপড় ও স্টাইল নির্বাচন' : 'Fabric & Styling'}</h4>
              <p className="text-xs text-stone-400">{lang === 'bn' ? 'পছন্দের ফ্যাব্রিক বা নিজস্ব কাপড় আমাদের স্টুডিওতে দিতে পারেন।' : 'Select pure silk, georgette, velvet, linen or provide your own fabric.'}</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#171A21]/40 border border-white/5 text-center">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center mx-auto mb-4 text-lg">3</div>
              <h4 className="font-bold text-white mb-2">{lang === 'bn' ? 'অনলাইনে মাপ প্রদান' : 'Give Measurements'}</h4>
              <p className="text-xs text-stone-400">{lang === 'bn' ? 'অনলাইন মেজারমেন্ট ফর্ম পূরণ করুন বা স্টুডিওতে এসে ট্রায়াল দিন।' : 'Fill in our intuitive measurement form or schedule an in-studio fitting.'}</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#171A21]/40 border border-white/5 text-center">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center mx-auto mb-4 text-lg">4</div>
              <h4 className="font-bold text-white mb-2">{lang === 'bn' ? 'ডেলিভারি ও ট্রায়াল' : 'Delivery & Trial Fitting'}</h4>
              <p className="text-xs text-stone-400">{lang === 'bn' ? 'পোশাক তৈরি হলে সরাসরি পৌঁছে দেওয়া হবে এবং ১০০% ফিটিং নিশ্চিত করা হবে।' : 'Get your customized garment delivered with our 100% fit assurance.'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-xs uppercase tracking-[0.25em] text-amber-400 font-semibold mb-2">Testimonials</h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif">{lang === 'bn' ? 'গ্রাহকদের সন্তুষ্টির গল্প' : 'What Our Clients Say'}</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#171A21]/50 border border-white/5 space-y-4">
              <div className="flex text-amber-400 gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-xs text-stone-300 italic leading-relaxed">
                "আমার ব্রাইডাল লেহেঙ্গা এবং ৩টি সিল্ক ব্লাউজের কাজ করিয়েছিলাম ALIVE FASHION STUDIO থেকে। ফিনিশিং ও কাজের সূক্ষ্মতা অসাধারণ ছিল! পারফেক্ট ফিটিং হয়েছে প্রথম ট্রায়ালেই।"
              </p>
              <div className="flex items-center gap-3 pt-2">
                <div className="w-9 h-9 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center text-xs">TS</div>
                <div>
                  <h5 className="text-xs font-bold text-white">Tanjila Sultana</h5>
                  <p className="text-[10px] text-stone-400">Bridal Lehenga & Blouse</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#171A21]/50 border border-white/5 space-y-4">
              <div className="flex text-amber-400 gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-xs text-stone-300 italic leading-relaxed">
                "Got a custom Italian slim-fit blazer and two trousers made. The cut, fabric lining, and shoulder shape are top notch. Beats ready-made suits hands down!"
              </p>
              <div className="flex items-center gap-3 pt-2">
                <div className="w-9 h-9 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center text-xs">RK</div>
                <div>
                  <h5 className="text-xs font-bold text-white">Rafiqul Karim</h5>
                  <p className="text-[10px] text-stone-400">Men's Bespoke Suit</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#171A21]/50 border border-white/5 space-y-4">
              <div className="flex text-amber-400 gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-xs text-stone-300 italic leading-relaxed">
                "Pinterest থেকে একটা ওয়েস্টার্ন পার্টি গাউনের ছবি পাঠিয়েছিলাম। ঠিক যেমন চেয়েছিলাম, ঠিক তেমনই বানিয়ে দিয়েছেন। সময়মতো ডেলিভারি পেয়েছি!"
              </p>
              <div className="flex items-center gap-3 pt-2">
                <div className="w-9 h-9 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center text-xs">NA</div>
                <div>
                  <h5 className="text-xs font-bold text-white">Nusrat Amin</h5>
                  <p className="text-[10px] text-stone-400">Western Party Gown</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#0F1115] border-t border-white/10 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full border border-amber-400/50 flex items-center justify-center text-amber-400">
                  <Scissors className="w-3.5 h-3.5" />
                </span>
                <span className="brand-title text-lg font-bold text-white tracking-widest">
                  ALIVE <span className="gold-text-gradient">FASHION</span>
                </span>
              </div>
              <p className="text-xs text-stone-400 leading-relaxed">
                Prestige bespoke tailoring & couture boutique. We craft dresses for men and women across Indian ethnic, Western, party and bridal collections.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold tracking-widest uppercase text-white">Categories</h4>
              <ul className="text-xs space-y-2 text-stone-400">
                <li>Bridal Lehengas & Saree Blouses</li>
                <li>Western Gowns & Pleated Skirts</li>
                <li>Men's Tailored Suits & Blazers</li>
                <li>Sherwani, Kurta & Casual Shirts</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold tracking-widest uppercase text-white">Studio Hours</h4>
              <ul className="text-xs space-y-2 text-stone-400">
                <li className="flex justify-between"><span>Sat - Thu:</span> <span className="text-white">10 AM - 9 PM</span></li>
                <li className="flex justify-between"><span>Friday:</span> <span className="text-white">3 PM - 9 PM</span></li>
                <li className="pt-2 text-amber-400/90 flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /><span>By Appointment</span></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold tracking-widest uppercase text-white">Studio Location</h4>
              <ul className="text-xs space-y-2 text-stone-400">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">85/7, Chanditala Ln, Ashok Nagar, Tollygunge, Kolkata, West Bengal 700040</p>
                    <a 
                      href="https://maps.google.com/?q=85/7,+Chanditala+Ln,+Ashok+Nagar,+Tollygunge,+Kolkata,+West+Bengal+700040" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-[11px] text-amber-400 hover:underline inline-block mt-0.5">
                      Get Directions on Google Maps ↗
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <div className="flex flex-wrap gap-x-2">
                    <a href="tel:+919333004877" className="hover:text-amber-400 transition font-medium text-stone-200">+91 93330 04877</a>
                    <span className="text-stone-600">/</span>
                    <a href="tel:+917003280774" className="hover:text-amber-400 transition font-medium text-stone-200">+91 70032 80774</a>
                  </div>
                </li>
                <li className="flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Designer & Founder: <strong className="text-white">Alamgir Seikh</strong></span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>info@alivefashionstudio.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
            <p>© 2026 ALIVE FASHION STUDIO BOUTIQUE. All rights reserved.</p>
            <p className="flex items-center gap-1">Designed with <Heart className="w-3 h-3 text-red-500 fill-current" /> for high fashion.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Action */}
      <a 
        href={`https://wa.me/${STUDIO_WHATSAPP}?text=Hello!%20I%20want%20to%20know%20more%20about%20custom%20dress%20design%20at%20Alive%20Fashion%20Studio.`} 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 p-3.5 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110">
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* ================= ORDER MODAL ================= */}
      {isOrderModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm overflow-y-auto flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl bg-[#171A21] rounded-3xl border border-amber-500/30 p-6 sm:p-8 shadow-2xl my-8">
            <button onClick={() => setIsOrderModalOpen(false)} className="absolute top-5 right-5 p-2 text-stone-400 hover:text-white rounded-full bg-white/5">
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="text-xs text-amber-400 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Custom Made-to-Order</span>
              </span>
              <h3 className="text-2xl font-bold text-white font-serif mt-1">
                {lang === 'bn' ? 'আপনার পছন্দের পোশাকের অর্ডার দিন' : 'Order Your Custom Design'}
              </h3>
              <p className="text-xs text-stone-400 mt-1">
                {lang === 'bn' ? 'ফর্মটি পূরণ করুন এবং সরাসরি হোয়াটসঅ্যাপে পুরো বিবরণ ও মাপসহ পাঠিয়ে দিন।' : 'Fill in the details to generate an instant WhatsApp order to our studio.'}
              </p>
            </div>

            <form onSubmit={handleOrderSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1">Dress Type*</label>
                  <select 
                    value={dressType} 
                    onChange={(e) => setDressType(e.target.value)} 
                    className="w-full bg-[#0F1115] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white">
                    <option value="Blouse (ব্লাউজ)">Blouse (ব্লাউজ - Aari / Designer)</option>
                    <option value="Lehenga (লেহেঙ্গা)">Lehenga (লেহেঙ্গা - Bridal / Party)</option>
                    <option value="Party Dress / Gown (গাউন)">Party Dress / Gown (গাউন)</option>
                    <option value="Skirt & Top (স্কার্ট ও টপ)">Skirt & Top (স্কার্ট ও টপ)</option>
                    <option value="Men's Suit / Blazer (স্যুট)">Men's Suit / Blazer (স্যুট / ব্লেজার)</option>
                    <option value="Men's Sherwani (শেরওয়ানি)">Men's Sherwani / Kurta (শেরওয়ানি / কুর্তা)</option>
                    <option value="Shirt & Pants (শার্ট ও প্যান্ট)">Shirt & Pants (শার্ট ও প্যান্ট)</option>
                    <option value="Other Custom Design (অন্যান্য)">Other Custom Design (অন্যান্য)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1">Fabric Preference</label>
                  <select 
                    value={fabric} 
                    onChange={(e) => setFabric(e.target.value)} 
                    className="w-full bg-[#0F1115] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white">
                    <option value="Studio Provides Fabric">Studio Provides Fabric</option>
                    <option value="Customer's Own Fabric">I will provide my own fabric</option>
                    <option value="Pure Silk / Katan">Pure Silk / Katan</option>
                    <option value="Georgette / Chiffon">Georgette / Chiffon</option>
                    <option value="Velvet / Satin">Velvet / Satin</option>
                    <option value="Cotton / Linen">Cotton / Linen</option>
                  </select>
                </div>
              </div>

              {/* Upload reference photo */}
              <div>
                <label className="block text-xs font-medium text-stone-300 mb-1">Inspiration / Photo Upload</label>
                <div className="border-2 border-dashed border-white/10 hover:border-amber-500/50 rounded-2xl p-4 text-center cursor-pointer transition relative bg-[#0F1115]/50">
                  <input type="file" accept="image/*" onChange={handleImageUpload} className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" />
                  {!previewImageName ? (
                    <div className="flex flex-col items-center justify-center gap-1.5">
                      <ImageIcon className="w-6 h-6 text-amber-400" />
                      <span className="text-xs text-stone-300 font-medium">Click to upload photo (Pinterest/Instagram screenshot)</span>
                    </div>
                  ) : (
                    <div className="text-xs text-green-400 font-semibold">✓ Image selected: {previewImageName}</div>
                  )}
                </div>
              </div>

              {/* Measurement selection */}
              <div className="bg-[#0F1115]/60 p-4 rounded-2xl border border-white/5 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-white flex items-center gap-1.5">
                    <Ruler className="w-4 h-4 text-amber-400" />
                    <span>Measurements</span>
                  </label>
                  <div className="flex gap-2 text-[11px]">
                    <button 
                      type="button" 
                      onClick={() => setMeasureMode('standard')} 
                      className={`px-2.5 py-1 rounded-lg ${measureMode === 'standard' ? 'bg-[#C5A059] text-black font-semibold' : 'bg-white/5 text-stone-300'}`}>
                      Standard Size
                    </button>
                    <button 
                      type="button" 
                      onClick={() => setMeasureMode('custom')} 
                      className={`px-2.5 py-1 rounded-lg ${measureMode === 'custom' ? 'bg-[#C5A059] text-black font-semibold' : 'bg-white/5 text-stone-300'}`}>
                      Custom (Inches)
                    </button>
                  </div>
                </div>

                {measureMode === 'standard' ? (
                  <div className="grid grid-cols-5 gap-2">
                    {['S (34-36)', 'M (38-40)', 'L (42)', 'XL (44)', 'XXL (46+)'].map(sz => (
                      <button 
                        key={sz} 
                        type="button" 
                        onClick={() => setStdSize(sz)} 
                        className={`p-2 rounded-xl text-xs font-bold transition ${stdSize === sz ? 'bg-amber-500 text-black' : 'bg-[#171A21] text-stone-300'}`}>
                        {sz.split(' ')[0]}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-3 gap-3">
                    <input 
                      placeholder="Chest/Bust" 
                      value={customMeasures.bust} 
                      onChange={e => setCustomMeasures({...customMeasures, bust: e.target.value})} 
                      className="bg-[#0F1115] border border-white/10 rounded-lg p-2 text-xs text-white" 
                    />
                    <input 
                      placeholder="Waist" 
                      value={customMeasures.waist} 
                      onChange={e => setCustomMeasures({...customMeasures, waist: e.target.value})} 
                      className="bg-[#0F1115] border border-white/10 rounded-lg p-2 text-xs text-white" 
                    />
                    <input 
                      placeholder="Hips" 
                      value={customMeasures.hips} 
                      onChange={e => setCustomMeasures({...customMeasures, hips: e.target.value})} 
                      className="bg-[#0F1115] border border-white/10 rounded-lg p-2 text-xs text-white" 
                    />
                    <input 
                      placeholder="Shoulder" 
                      value={customMeasures.shoulder} 
                      onChange={e => setCustomMeasures({...customMeasures, shoulder: e.target.value})} 
                      className="bg-[#0F1115] border border-white/10 rounded-lg p-2 text-xs text-white" 
                    />
                    <input 
                      placeholder="Sleeve" 
                      value={customMeasures.sleeve} 
                      onChange={e => setCustomMeasures({...customMeasures, sleeve: e.target.value})} 
                      className="bg-[#0F1115] border border-white/10 rounded-lg p-2 text-xs text-white" 
                    />
                    <input 
                      placeholder="Total Length" 
                      value={customMeasures.length} 
                      onChange={e => setCustomMeasures({...customMeasures, length: e.target.value})} 
                      className="bg-[#0F1115] border border-white/10 rounded-lg p-2 text-xs text-white" 
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-300 mb-1">Notes / Instructions</label>
                <textarea 
                  rows={2} 
                  value={notes} 
                  onChange={e => setNotes(e.target.value)} 
                  placeholder="Special neckline, embroidery, fabric requests..." 
                  className="w-full bg-[#0F1115] border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white" 
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1">Your Name*</label>
                  <input 
                    required 
                    value={clientName} 
                    onChange={e => setClientName(e.target.value)} 
                    placeholder="Full Name" 
                    className="w-full bg-[#0F1115] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1">Phone / WhatsApp*</label>
                  <input 
                    required 
                    value={clientPhone} 
                    onChange={e => setClientPhone(e.target.value)} 
                    placeholder="+91 9XXXXXXXXX" 
                    className="w-full bg-[#0F1115] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white" 
                  />
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold text-sm tracking-wide shadow-xl shadow-green-500/25 transition flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                <span>Send Order via WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ================= APPOINTMENT MODAL ================= */}
      {isAppointModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm overflow-y-auto flex items-center justify-center p-4">
          <div className="relative w-full max-w-lg bg-[#171A21] rounded-3xl border border-amber-500/30 p-6 sm:p-8 shadow-2xl my-8">
            <button onClick={() => setIsAppointModalOpen(false)} className="absolute top-5 right-5 p-2 text-stone-400 hover:text-white rounded-full bg-white/5">
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="text-xs text-amber-400 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>VIP Studio Consultation</span>
              </span>
              <h3 className="text-2xl font-bold text-white font-serif mt-1">Book In-Studio Trial</h3>
            </div>

            <form onSubmit={handleAppointmentSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-stone-300 mb-1">Name*</label>
                <input required value={appName} onChange={e => setAppName(e.target.value)} placeholder="Full Name" className="w-full bg-[#0F1115] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white" />
              </div>
              <div>
                <label className="block text-xs font-medium text-stone-300 mb-1">WhatsApp Phone*</label>
                <input required value={appPhone} onChange={e => setAppPhone(e.target.value)} placeholder="+91 9XXXXXXXXX" className="w-full bg-[#0F1115] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1">Date*</label>
                  <input type="date" required value={appDate} onChange={e => setAppDate(e.target.value)} className="w-full bg-[#0F1115] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1">Time*</label>
                  <select value={appTime} onChange={e => setAppTime(e.target.value)} className="w-full bg-[#0F1115] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white">
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="02:00 PM">02:00 PM</option>
                    <option value="04:30 PM">04:30 PM</option>
                    <option value="07:00 PM">07:00 PM</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-stone-300 mb-1">Purpose</label>
                <select value={appPurpose} onChange={e => setAppPurpose(e.target.value)} className="w-full bg-[#0F1115] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white">
                  <option value="Bridal Lehenga & Gown Consultation">Bridal Lehenga & Gown Consultation</option>
                  <option value="Men's Bespoke Suit / Sherwani Fitting">Men's Bespoke Suit / Sherwani Fitting</option>
                  <option value="Designer Blouse & Party Wear">Designer Blouse & Party Wear</option>
                  <option value="Trial & Measurement Session">Trial & Measurement Session</option>
                </select>
              </div>

              <button type="submit" className="w-full mt-4 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider transition">
                Confirm Appointment via WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

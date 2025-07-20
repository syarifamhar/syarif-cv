import React, { useEffect, useState } from 'react';
import { supabase } from '../services/supabaseClient';
import { motion } from 'framer-motion';

export default function Clients() {
  const [clients, setClients] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  // Client logos from assets folder
  const clientLogos = [
    { name: "Marvell Kid's", logo: "/assets/marvelkids-logo.png" },
    { name: "QuickSchools.com", logo: "/assets/qs-logo.png" },
    { name: "Zahir", logo: "/assets/ZahirLogo.png" },
    { name: "Delyva", logo: "/assets/delyva-logo.png" },
  ];

  // Sample testimonials (you can replace with data from Supabase)
  const sampleTestimonials = [
    {
      id: 1,
      text: "Syarif delivered exceptional results for our kids' platform. His attention to detail and creative solutions exceeded our expectations.",
      client_name: "Sarah Johnson",
      client_company: "Marvell Kid's"
    },
    {
      id: 2,
      text: "Working with Syarif was a game-changer for our school management system. He transformed our vision into a beautiful, functional product.",
      client_name: "Michael Chen",
      client_company: "QuickSchools.com"
    },
    {
      id: 3,
      text: "Syarif's expertise in frontend development and UI/UX design helped us create an outstanding user experience for our platform.",
      client_name: "Emily Rodriguez",
      client_company: "Zahir"
    },
    {
      id: 4,
      text: "Professional, reliable, and incredibly talented. Syarif consistently delivers high-quality work on time.",
      client_name: "David Kim",
      client_company: "Delyva"
    }
  ];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: clientsData } = await supabase.from('clients').select('*').order('id', { ascending: false });
        const { data: testimonialsData } = await supabase.from('testimonials').select('*').order('id', { ascending: false });
        
        setClients(clientsData || []);
        setTestimonials(testimonialsData && testimonialsData.length > 0 ? testimonialsData : sampleTestimonials);
      } catch (error) {
        console.log('Using sample data:', error);
        setClients([]);
        setTestimonials(sampleTestimonials);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="relative w-full flex justify-center items-center min-h-screen overflow-hidden portfolio-bg">
      {/* Animated SVG Blobs Background (same as Portfolio section) */}
      <svg className="absolute top-[-20%] left-1/2 -translate-x-1/2 z-0 animate-blob1" width="700" height="700" viewBox="0 0 700 700" fill="none" xmlns="http://www.w3.org/2000/svg" style={{opacity:0.7, filter:'blur(0px)'}}>
        <defs>
          <linearGradient id="blob1Gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f8f6f3" />
            <stop offset="100%" stopColor="#e7d7c1" />
          </linearGradient>
        </defs>
        <path fill="url(#blob1Gradient)" d="M 350 100 Q 500 120 550 250 Q 650 350 500 500 Q 350 650 200 500 Q 50 350 200 200 Q 250 120 350 100 Z"/>
      </svg>
      <svg className="absolute top-[10%] left-[30%] z-0 animate-blob2" width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" style={{opacity:0.5, filter:'blur(2px)'}}>
        <defs>
          <linearGradient id="blob2Gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#e7d7c1" />
            <stop offset="100%" stopColor="#bfa074" />
          </linearGradient>
        </defs>
        <path fill="url(#blob2Gradient)" d="M 250 80 Q 400 100 420 250 Q 480 350 350 420 Q 250 480 120 400 Q 20 300 120 180 Q 150 100 250 80 Z"/>
      </svg>
      <svg className="absolute top-[40%] left-[60%] z-0 animate-blob3" width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{opacity:0.4, filter:'blur(4px)'}}>
        <defs>
          <linearGradient id="blob3Gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fff9f3" />
            <stop offset="100%" stopColor="#e7d7c1" />
          </linearGradient>
        </defs>
        <path fill="url(#blob3Gradient)" d="M 200 60 Q 320 80 340 200 Q 380 300 250 340 Q 120 380 60 250 Q 20 120 120 100 Q 150 60 200 60 Z"/>
      </svg>
      <svg className="absolute top-[60%] left-[10%] z-0 animate-blob4" width="350" height="350" viewBox="0 0 350 350" fill="none" xmlns="http://www.w3.org/2000/svg" style={{opacity:0.32, filter:'blur(2px)'}}>
        <defs>
          <linearGradient id="blob4Gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#e7d7c1" />
            <stop offset="100%" stopColor="#a68a64" />
          </linearGradient>
        </defs>
        <path fill="url(#blob4Gradient)" d="M 175 50 Q 250 70 270 175 Q 320 250 175 320 Q 50 300 30 175 Q 0 100 100 70 Q 150 50 175 50 Z"/>
      </svg>
      <svg className="absolute top-[70%] left-[70%] z-0 animate-blob5" width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{opacity:0.25, filter:'blur(6px)'}}>
        <defs>
          <linearGradient id="blob5Gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f8f6f3" />
            <stop offset="100%" stopColor="#bfa074" />
          </linearGradient>
        </defs>
        <path fill="url(#blob5Gradient)" d="M 150 40 Q 220 60 240 150 Q 280 220 150 260 Q 40 240 20 150 Q 0 80 80 60 Q 120 40 150 40 Z"/>
      </svg>
      <svg className="absolute top-[20%] left-[80%] z-0 animate-blob6" width="250" height="250" viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg" style={{opacity:0.22, filter:'blur(3px)'}}>
        <defs>
          <linearGradient id="blob6Gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#e7d7c1" />
            <stop offset="100%" stopColor="#fff9f3" />
          </linearGradient>
        </defs>
        <path fill="url(#blob6Gradient)" d="M 125 30 Q 200 50 210 125 Q 240 180 125 220 Q 50 200 30 125 Q 0 70 70 50 Q 100 30 125 30 Z"/>
      </svg>
      <svg className="absolute top-[80%] left-[40%] z-0 animate-blob7" width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{opacity:0.18, filter:'blur(1.5px)'}}>
        <defs>
          <linearGradient id="blob7Gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#bfa074" />
            <stop offset="100%" stopColor="#e7d7c1" />
          </linearGradient>
        </defs>
        <path fill="url(#blob7Gradient)" d="M 100 20 Q 160 30 170 100 Q 190 150 100 180 Q 30 160 20 100 Q 0 60 60 30 Q 80 20 100 20 Z"/>
      </svg>
      <svg className="absolute top-[50%] left-[85%] z-0 animate-blob8" width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" style={{opacity:0.16, filter:'blur(2.5px)'}}>
        <defs>
          <linearGradient id="blob8Gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fff9f3" />
            <stop offset="100%" stopColor="#a68a64" />
          </linearGradient>
        </defs>
        <path fill="url(#blob8Gradient)" d="M 90 15 Q 140 25 150 90 Q 170 130 90 165 Q 25 140 15 90 Q 0 50 50 25 Q 70 15 90 15 Z"/>
      </svg>
      <svg className="absolute top-[10%] left-[60%] z-0 animate-blob9" width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{opacity:0.22, filter:'blur(7px)'}}>
        <defs>
          <linearGradient id="blob9Gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#e7d7c1" />
            <stop offset="100%" stopColor="#bfa074" />
          </linearGradient>
        </defs>
        <path fill="url(#blob9Gradient)" d="M 110 30 Q 180 50 190 110 Q 210 170 110 200 Q 40 180 30 110 Q 0 60 60 40 Q 90 30 110 30 Z"/>
      </svg>
      <svg className="absolute top-[70%] left-[20%] z-0 animate-blob10" width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" style={{opacity:0.19, filter:'blur(5px)'}}>
        <defs>
          <linearGradient id="blob10Gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fff9f3" />
            <stop offset="100%" stopColor="#a68a64" />
          </linearGradient>
        </defs>
        <path fill="url(#blob10Gradient)" d="M 90 20 Q 140 30 150 90 Q 170 130 90 165 Q 25 140 15 90 Q 0 50 50 30 Q 70 20 90 20 Z"/>
      </svg>

      <div className="relative z-10 w-full flex flex-col items-center justify-center py-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[6rem] text-[#b19f7f] text-center mb-8 font-mono font-bold tracking-wide"
        >
          Clients
        </motion.h2>

        {/* Animated Logo Carousel */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 overflow-hidden w-full"
        >
          <motion.div 
            className="flex space-x-20 items-center"
            animate={{ x: [0, -800] }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {/* Duplicate logos for seamless loop */}
            {[...clientLogos, ...clientLogos].map((client, index) => (
              <motion.div
                key={`${client.name}-${index}`}
                whileHover={{ scale: 1.15 }}
                className="flex-shrink-0 w-48 h-32 bg-white/70 backdrop-blur-lg rounded-xl shadow-2xl flex items-center justify-center p-6 border border-white/30"
              >
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12 w-full max-w-6xl"
        >
          <h3 className="text-4xl font-bold text-center mb-12 text-black font-mono">
            What Clients Say
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white/70 backdrop-blur-lg rounded-xl p-8 shadow-2xl border border-white/30"
              >
                <div className="flex items-start mb-6">
                  <div className="text-3xl text-yellow-500 mr-4">"</div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {testimonial.text}
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-brown-500 to-brown-700 rounded-full flex items-center justify-center text-white font-bold text-xl mr-5">
                    {testimonial.client_name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-black text-lg">
                      {testimonial.client_name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.client_company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <a 
            href="#contact" 
            className="inline-block px-10 py-5 bg-gradient-to-r from-brown-600 to-brown-700 text-white rounded-full font-semibold shadow-xl hover:from-brown-700 hover:to-brown-800 transition-all duration-300 transform hover:scale-105 text-lg"
          >
            Work with me
          </a>
        </motion.div>
      </div>

      {/* Animation CSS (same as Portfolio section) */}
      <style>{`
        @keyframes blob1 {
          0%,100% { transform: translate(-50%, 0) scale(1) rotate(0deg); }
          33% { transform: translate(-50%, 20px) scale(1.04, 0.98) rotate(8deg); }
          66% { transform: translate(-50%, -20px) scale(0.98, 1.04) rotate(-8deg); }
        }
        @keyframes blob2 {
          0%,100% { transform: scale(1) rotate(0deg); }
          25% { transform: scale(1.08, 0.96) rotate(6deg); }
          50% { transform: scale(0.96, 1.08) rotate(-6deg); }
          75% { transform: scale(1.04, 1.02) rotate(3deg); }
        }
        @keyframes blob3 {
          0%,100% { transform: scale(1) rotate(0deg); }
          20% { transform: scale(1.06, 0.94) rotate(-5deg); }
          60% { transform: scale(0.94, 1.06) rotate(5deg); }
          80% { transform: scale(1.02, 1.04) rotate(-3deg); }
        }
        @keyframes blob4 {
          0%,100% { transform: scale(1) rotate(0deg); }
          30% { transform: scale(1.07, 0.93) rotate(7deg); }
          60% { transform: scale(0.93, 1.07) rotate(-7deg); }
        }
        @keyframes blob5 {
          0%,100% { transform: scale(1) rotate(0deg); }
          40% { transform: scale(1.09, 0.91) rotate(-9deg); }
          80% { transform: scale(0.91, 1.09) rotate(9deg); }
        }
        @keyframes blob6 {
          0%,100% { transform: scale(1) rotate(0deg); }
          35% { transform: scale(1.05, 0.95) rotate(5deg); }
          70% { transform: scale(0.95, 1.05) rotate(-5deg); }
        }
        @keyframes blob7 {
          0%,100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.12, 0.88) rotate(12deg); }
        }
        @keyframes blob8 {
          0%,100% { transform: scale(1) rotate(0deg); }
          60% { transform: scale(0.92, 1.08) rotate(-8deg); }
        }
        @keyframes blob9 {
          0%,100% { transform: scale(1) rotate(0deg); }
          45% { transform: scale(1.08, 0.92) rotate(8deg); }
        }
        @keyframes blob10 {
          0%,100% { transform: scale(1) rotate(0deg); }
          70% { transform: scale(0.95, 1.05) rotate(-10deg); }
        }
        .animate-blob1 { animation: blob1 18s ease-in-out infinite; }
        .animate-blob2 { animation: blob2 22s ease-in-out infinite; }
        .animate-blob3 { animation: blob3 26s ease-in-out infinite; }
        .animate-blob4 { animation: blob4 32s ease-in-out infinite; }
        .animate-blob5 { animation: blob5 38s ease-in-out infinite; }
        .animate-blob6 { animation: blob6 28s ease-in-out infinite; }
        .animate-blob7 { animation: blob7 34s ease-in-out infinite; }
        .animate-blob8 { animation: blob8 30s ease-in-out infinite; }
        .animate-blob9 { animation: blob9 36s ease-in-out infinite; }
        .animate-blob10 { animation: blob10 40s ease-in-out infinite; }
      `}</style>
    </div>
  );
} 
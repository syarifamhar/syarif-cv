import React, { useEffect, useState } from 'react';
import { supabase } from '../services/supabaseClient';
import { motion } from 'framer-motion';

export default function Consulting() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      setLoading(true);
      const { data } = await supabase.from('consulting').select('*').order('id', { ascending: false });
      setServices(data || []);
      setLoading(false);
    };
    fetchServices();
  }, []);

  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold mb-6">Consulting & Mentorship</h2>
      {loading ? (
        <div className="text-center py-10">Loading services...</div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(service => (
            <motion.div
              key={service.id}
              whileHover={{ scale: 1.03 }}
              className="bg-white dark:bg-brown-800 rounded-xl shadow-md hover:shadow-xl transition p-6 h-full flex flex-col"
            >
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-brown-700 dark:text-brown-200 text-sm mb-4">{service.description}</p>
              <a href="#contact" className="mt-auto inline-block px-4 py-2 bg-brown-700 text-white rounded-full font-semibold shadow hover:bg-brown-800 transition">Book Now</a>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
} 
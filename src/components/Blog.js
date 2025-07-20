import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Try different RSS feed URLs for Medium
const MEDIUM_RSS_URLS = [
  'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@syarifamhar1994',
  'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/@syarifamhar1994/feed',
  'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@syarifamhar1994?format=rss'
];

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to extract cover image from Medium post content
  const extractCoverImage = (post) => {
    // Try multiple methods to get the cover image
    if (post.thumbnail) {
      return post.thumbnail;
    }
    
    // Try to extract from content if thumbnail is not available
    if (post.content) {
      const imgMatch = post.content.match(/<img[^>]+src="([^"]+)"/);
      if (imgMatch) {
        return imgMatch[1];
      }
    }
    
    // Try to extract from description
    if (post.description) {
      const imgMatch = post.description.match(/<img[^>]+src="([^"]+)"/);
      if (imgMatch) {
        return imgMatch[1];
      }
    }
    
    return null;
  };

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      
      // Try each RSS URL until one works
      for (const url of MEDIUM_RSS_URLS) {
        try {
          console.log('Trying RSS URL:', url);
          const response = await fetch(url);
          const data = await response.json();
          
          console.log('RSS Response:', data);
          
          if (data.status === 'ok' && data.items && data.items.length > 0) {
            console.log('Successfully fetched posts:', data.items.length);
            
            // Process posts to extract cover images
            const processedPosts = data.items.map(post => {
              const coverImage = extractCoverImage(post);
              console.log('Post:', post.title, 'Cover Image:', coverImage);
              
              return {
                ...post,
                coverImage: coverImage,
                // Use coverImage as thumbnail if available
                thumbnail: coverImage || post.thumbnail
              };
            });
            
            setPosts(processedPosts);
            setLoading(false);
            return;
          } else {
            console.log('RSS feed returned no items or error status:', data);
          }
        } catch (err) {
          console.error('Error fetching from URL:', url, err);
        }
      }
      
      // If all URLs fail, show error
      setError('Unable to fetch blog posts from Medium');
      setPosts([]);
      setLoading(false);
    };

    fetchPosts();
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
          Blog
        </motion.h2>

        {loading ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-10"
          >
            <div className="bg-white/70 backdrop-blur-lg rounded-xl p-8 shadow-2xl border border-white/30">
              <div className="text-black text-lg">Loading blog posts...</div>
            </div>
          </motion.div>
        ) : error ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-2xl"
          >
            <div className="bg-white/70 backdrop-blur-lg rounded-xl p-8 shadow-2xl border border-white/30 text-center">
              <h3 className="text-2xl font-bold text-black mb-4">Unable to Load Blog Posts</h3>
              <p className="text-gray-700 mb-6">
                {error}. This might be due to CORS restrictions or the RSS feed not being available.
              </p>
              <a
                href="https://medium.com/@syarifamhar1994"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-gradient-to-r from-brown-600 to-brown-700 text-white rounded-full font-semibold shadow-lg hover:from-brown-700 hover:to-brown-800 transition-all duration-300 transform hover:scale-105"
              >
                Visit My Medium Profile
              </a>
            </div>
          </motion.div>
        ) : posts.length > 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-6xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <motion.a
                  key={post.guid}
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="block bg-white/70 backdrop-blur-lg rounded-xl shadow-2xl border border-white/30 overflow-hidden transition-all duration-300 group"
                >
                  {/* Cover Image Section */}
                  <div className="relative h-48 w-full overflow-hidden">
                    {post.thumbnail || post.coverImage ? (
                      <img 
                        src={post.thumbnail || post.coverImage} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                        onError={(e) => {
                          console.log('Image failed to load:', e.target.src);
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                        onLoad={() => {
                          console.log('Image loaded successfully:', post.title);
                        }}
                      />
                    ) : null}
                    {/* Fallback Cover Image */}
                    <div 
                      className={`w-full h-full bg-gradient-to-br from-brown-400 to-brown-600 flex items-center justify-center ${(post.thumbnail || post.coverImage) ? 'hidden' : 'flex'}`}
                      style={{ display: (post.thumbnail || post.coverImage) ? 'none' : 'flex' }}
                    >
                      <div className="text-white text-center">
                        <div className="text-4xl mb-2">📝</div>
                        <div className="text-sm font-medium">Blog Post</div>
                      </div>
                    </div>
                    {/* Overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-3 text-black line-clamp-2 group-hover:text-brown-700 transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-gray-700 text-sm mb-4 line-clamp-3 leading-relaxed">
                      {post.description.replace(/<[^>]+>/g, '').slice(0, 150)}...
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        {new Date(post.pubDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                      <span className="text-xs text-brown-600 font-medium group-hover:text-brown-700 transition-colors duration-300">
                        Read on Medium →
                      </span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-2xl"
          >
            <div className="bg-white/70 backdrop-blur-lg rounded-xl p-8 shadow-2xl border border-white/30 text-center">
              <h3 className="text-2xl font-bold text-black mb-4">No Blog Posts Found</h3>
              <p className="text-gray-700 mb-6">
                It looks like there are no blog posts available from your Medium profile yet.
              </p>
              <a
                href="https://medium.com/@syarifamhar1994"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-gradient-to-r from-brown-600 to-brown-700 text-white rounded-full font-semibold shadow-lg hover:from-brown-700 hover:to-brown-800 transition-all duration-300 transform hover:scale-105"
              >
                Visit My Medium Profile
              </a>
            </div>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a 
            href="https://medium.com/@syarifamhar1994"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-brown-600 to-brown-700 text-white rounded-full font-semibold shadow-xl hover:from-brown-700 hover:to-brown-800 transition-all duration-300 transform hover:scale-105 text-lg"
          >
            Read More on Medium
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
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
} 
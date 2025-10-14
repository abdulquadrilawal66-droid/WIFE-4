import { useState, useEffect, useRef } from "react";

export default function HomePage() {
  const [bnbRaised, setBnbRaised] = useState(13);
  const [bondingProgress, setBondingProgress] = useState(72);
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef([]);

  // Animated counter effect
  useEffect(() => {
    const interval = setInterval(() => {
      setBnbRaised((prev) => {
        const newValue = prev + Math.random() * 0.1;
        return newValue > 18 ? 13 : newValue;
      });
      setBondingProgress((prev) => {
        const newValue = prev + Math.random() * 2;
        return newValue > 100 ? 72 : newValue;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.dataset.section]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 },
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const tweets = [
    { text: "WIFE4 IS ON FIRE 🔥🔥🔥", author: "@CryptoDegenX", time: "2m" },
    {
      text: "Only real 4s survive 💪 #BNBChain #FourMeme",
      author: "@DiamondHandsApe",
      time: "5m",
    },
    {
      text: "CZ's legacy lives on through WIFE4 🚀",
      author: "@BinanceMaxi",
      time: "8m",
    },
    {
      text: "This is the next 1000x gem 💎",
      author: "@MemeKingBSC",
      time: "12m",
    },
  ];

  return (
    <div
      className="min-h-screen bg-black text-white overflow-x-hidden"
      style={{
        backgroundImage: `url('https://ucarecdn.com/15e15a04-c752-40a0-a695-7fd0d1b11d75/-/format/auto/')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Global dark overlay for text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* HERO SECTION */}
      <section
        ref={(el) => (sectionRefs.current[0] = el)}
        data-section="hero"
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        {/* Floating animations background - reduced on mobile */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating coins - fewer on mobile */}
          {[...Array(window.innerWidth < 768 ? 6 : 12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-6 h-6 sm:w-8 sm:h-8 bg-[#F3BA2F] rounded-full opacity-80 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            >
              <span className="text-black text-xs font-bold flex items-center justify-center h-full">
                4
              </span>
            </div>
          ))}

          {/* Sparkle effects - fewer on mobile */}
          {[...Array(window.innerWidth < 768 ? 10 : 20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-[#00FF88] rounded-full opacity-60 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>

        {/* Main hero content */}
        <div className="relative z-10 text-center w-full max-w-4xl mx-auto">
          {/* Animated logo */}
          <div className="mb-6 sm:mb-8 animate-bounce">
            <img
              src="https://ucarecdn.com/0208f815-77eb-4b37-b0c7-238007954ed9/-/format/auto/"
              alt="WIFE4 Logo"
              className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto object-contain glow-text"
            />
          </div>

          {/* Main headline */}
          <h1 className="font-orbitron font-black text-2xl sm:text-4xl md:text-6xl lg:text-7xl mb-4 sm:mb-6 leading-tight px-2">
            <span className="text-[#F3BA2F] glow-text">WIFE4</span>
            <br />
            <span className="text-white text-xl sm:text-3xl md:text-5xl lg:text-6xl">
              The Four-Finger Revolution
            </span>
            <br />
            <span className="text-[#F3BA2F] text-lg sm:text-2xl md:text-4xl lg:text-5xl">
              of Binance Chain 🚀
            </span>
          </h1>

          {/* Subtitle */}
          <p className="font-poppins text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-300 max-w-2xl mx-auto px-4 leading-relaxed">
            Born from CZ's legendary gesture. Forged by the community. Fueled by
            meme power.
          </p>

          {/* Stats ticker */}
          <div className="bg-black bg-opacity-50 border-2 border-[#F3BA2F] rounded-lg p-3 sm:p-4 mb-6 sm:mb-8 max-w-sm sm:max-w-md mx-auto">
            <div className="grid grid-cols-2 gap-2 sm:gap-4 text-center">
              <div>
                <div className="text-[#00FF88] font-bold text-lg sm:text-xl md:text-2xl font-orbitron">
                  🔥 {bnbRaised.toFixed(1)}/18
                </div>
                <div className="text-xs sm:text-sm text-gray-400">
                  BNB Raised
                </div>
              </div>
              <div>
                <div className="text-[#F3BA2F] font-bold text-lg sm:text-xl md:text-2xl font-orbitron">
                  {bondingProgress.toFixed(0)}%
                </div>
                <div className="text-xs sm:text-sm text-gray-400">
                  Bonding Progress
                </div>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <button className="group relative overflow-hidden bg-[#F3BA2F] hover:bg-[#FFE066] text-black font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl glow-button w-full sm:w-auto min-h-[48px] touch-manipulation">
              <span className="relative z-10">Join the Community 💬</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#00FF88] to-[#F3BA2F] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button className="group relative overflow-hidden bg-[#00FF88] hover:bg-[#33FF99] text-black font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl glow-button w-full sm:w-auto min-h-[48px] touch-manipulation">
              <span className="relative z-10">Buy on Four.meme 💸</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#F3BA2F] to-[#00FF88] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Scrolling text animation */}
          <div className="mt-8 sm:mt-12 overflow-hidden">
            <div className="animate-scroll-right text-[#F3BA2F] font-orbitron font-bold text-sm sm:text-lg md:text-xl whitespace-nowrap">
              🚀 TO THE MOON 🚀 WIFE4 IS ON FIRE 🔥 STRONG 4s ONLY 💪 DIAMOND
              HANDS 💎 🚀 TO THE MOON 🚀
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-[#F3BA2F] rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-[#F3BA2F] rounded-full mt-1 sm:mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* COMMUNITY SECTION */}
      <section
        ref={(el) => (sectionRefs.current[1] = el)}
        data-section="community"
        className="relative min-h-screen py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      >
        {/* Background animations - reduced on mobile */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Flying emojis - fewer on mobile */}
          {["💎", "🚀", "🔥", "💪", "4️⃣", "⚡"]
            .slice(0, window.innerWidth < 768 ? 3 : 6)
            .map((emoji, i) => (
              <div
                key={i}
                className="absolute text-2xl sm:text-4xl animate-float opacity-30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 1}s`,
                  animationDuration: `${4 + Math.random() * 2}s`,
                }}
              >
                {emoji}
              </div>
            ))}

          {/* Glowing 4 symbols - fewer on mobile */}
          {[...Array(window.innerWidth < 768 ? 4 : 8)].map((_, i) => (
            <div
              key={i}
              className="absolute text-3xl sm:text-5xl lg:text-6xl font-orbitron font-black text-[#F3BA2F] opacity-20 animate-pulse glow-text"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.8}s`,
              }}
            >
              4
            </div>
          ))}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-orbitron font-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 px-2">
              <span className="text-[#F3BA2F]">Stronger Together</span> —
              <br className="sm:hidden" />
              <span className="text-[#00FF88]">The WIFE4 Army</span> 🤝
            </h2>
            <p className="font-poppins text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              WIFE4 is more than a meme — it's a movement.
              <br />
              Built by the community, powered by{" "}
              <span className="text-[#F3BA2F] font-bold">Four.meme</span>, and
              inspired by CZ's four-finger legacy.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            {/* Social Feed */}
            <div className="bg-black bg-opacity-60 border-2 border-[#F3BA2F] rounded-lg p-4 sm:p-6 order-2 lg:order-1">
              <h3 className="font-orbitron font-bold text-lg sm:text-xl md:text-2xl text-[#F3BA2F] mb-4 sm:mb-6 flex items-center">
                🐦 Live Community Buzz
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {tweets.map((tweet, index) => (
                  <div
                    key={index}
                    className="bg-gray-900 bg-opacity-80 rounded-lg p-3 sm:p-4 border-l-4 border-[#00FF88] animate-fade-in"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <p className="font-poppins text-white mb-2 text-sm sm:text-base">
                      {tweet.text}
                    </p>
                    <div className="flex justify-between text-xs sm:text-sm text-gray-400">
                      <span className="text-[#F3BA2F]">{tweet.author}</span>
                      <span>{tweet.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Links and Info */}
            <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
              {/* Social Links */}
              <div className="bg-black bg-opacity-60 border-2 border-[#00FF88] rounded-lg p-4 sm:p-6">
                <h3 className="font-orbitron font-bold text-lg sm:text-xl md:text-2xl text-[#00FF88] mb-4 sm:mb-6">
                  Join the Revolution 🚀
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <a
                    href="https://twitter.com/Wife4New"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-gray-900 hover:bg-gray-800 p-3 sm:p-4 rounded-lg transition-all duration-300 transform hover:scale-105 group touch-manipulation"
                  >
                    <span className="text-xl sm:text-2xl">🐦</span>
                    <div>
                      <div className="font-bold text-[#F3BA2F] group-hover:text-[#FFE066] text-sm sm:text-base">
                        Twitter (X)
                      </div>
                      <div className="text-xs sm:text-sm text-gray-400">
                        @Wife4New
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://t.me/WIFE4Community"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-gray-900 hover:bg-gray-800 p-3 sm:p-4 rounded-lg transition-all duration-300 transform hover:scale-105 group touch-manipulation"
                  >
                    <span className="text-xl sm:text-2xl">💬</span>
                    <div>
                      <div className="font-bold text-[#00FF88] group-hover:text-[#33FF99] text-sm sm:text-base">
                        Telegram
                      </div>
                      <div className="text-xs sm:text-sm text-gray-400">
                        WIFE4Community
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://four.meme/token/0xc827453bdaae9947af60ad61d28ad42e67734444"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-gray-900 hover:bg-gray-800 p-3 sm:p-4 rounded-lg transition-all duration-300 transform hover:scale-105 group touch-manipulation"
                  >
                    <span className="text-xl sm:text-2xl">💎</span>
                    <div>
                      <div className="font-bold text-[#F3BA2F] group-hover:text-[#FFE066] text-sm sm:text-base">
                        Four.meme Launch
                      </div>
                      <div className="text-xs sm:text-sm text-gray-400">
                        Trade WIFE4
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Token Info */}
              <div className="bg-black bg-opacity-60 border-2 border-[#F3BA2F] rounded-lg p-4 sm:p-6">
                <h3 className="font-orbitron font-bold text-lg sm:text-xl md:text-2xl text-[#F3BA2F] mb-3 sm:mb-4">
                  Token Info 📊
                </h3>
                <div className="space-y-2 sm:space-y-3 font-poppins text-sm sm:text-base">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Network:</span>
                    <span className="text-[#F3BA2F] font-bold">
                      BNB Smart Chain
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Symbol:</span>
                    <span className="text-[#00FF88] font-bold">$WIFE4</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Type:</span>
                    <span className="text-white">Meme Coin</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Launch:</span>
                    <span className="text-[#F3BA2F] font-bold">Four.meme</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-12 sm:mt-16 bg-red-900 bg-opacity-30 border-2 border-red-500 rounded-lg p-4 sm:p-6 animate-fade-in">
            <div className="text-center">
              <div className="text-xl sm:text-2xl mb-2">⚠️</div>
              <p className="font-poppins text-red-200 text-sm sm:text-base leading-relaxed">
                <strong>
                  $WIFE4 is a community-driven meme coin with no intrinsic
                  utility.
                </strong>
                <br />
                Not financial advice. Always DYOR (Do Your Own Research).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Poppins:wght@300;400;600;700&display=swap');
        
        .font-orbitron { font-family: 'Orbitron', monospace; }
        .font-poppins { font-family: 'Poppins', sans-serif; }
        
        .glow-text {
          text-shadow: 0 0 10px currentColor, 0 0 20px currentColor, 0 0 40px currentColor;
        }
        
        .glow-button {
          box-shadow: 0 0 20px rgba(243, 186, 47, 0.5);
        }
        
        .glow-button:hover {
          box-shadow: 0 0 30px rgba(243, 186, 47, 0.8), 0 0 40px rgba(0, 255, 136, 0.3);
        }
        
        /* Touch-friendly interactions */
        .touch-manipulation {
          touch-action: manipulation;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-20px) rotate(5deg); }
          50% { transform: translateY(-10px) rotate(-5deg); }
          75% { transform: translateY(-15px) rotate(3deg); }
        }
        
        @keyframes scroll-right {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-scroll-right {
          animation: scroll-right 15s linear infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #000;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #F3BA2F;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #FFE066;
        }
        
        /* Mobile responsiveness improvements */
        @media (max-width: 768px) {
          .glow-text {
            text-shadow: 0 0 5px currentColor, 0 0 10px currentColor;
          }
          
          /* Reduce animation intensity on mobile for better performance */
          .animate-float {
            animation-duration: 4s;
          }
          
          /* Ensure text doesn't get too small */
          html {
            font-size: 16px;
          }
          
          /* Better touch targets */
          button, a {
            min-height: 44px;
            min-width: 44px;
          }
        }
        
        /* Extra small mobile devices */
        @media (max-width: 320px) {
          .glow-text {
            text-shadow: 0 0 3px currentColor, 0 0 6px currentColor;
          }
        }
        
        /* Landscape mobile orientation */
        @media (max-width: 768px) and (orientation: landscape) {
          .min-h-screen {
            min-height: 100vh;
          }
        }
      `}</style>
    </div>
  );
}

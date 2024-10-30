'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import { Flame, Sun, Moon, Heart } from 'lucide-react'

export function DiwaliRomance() {
  const [lampLit, setLampLit] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [showLoveMessage, setShowLoveMessage] = useState(false)

  const lightLamp = () => {
    setLampLit(true)
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FFA500', '#FFD700', '#FF6347']
    })
    setTimeout(() => setShowLoveMessage(true), 1000)
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const slides = [
    "Your love shines brighter than a thousand diyas",
    "With you, every day is as joyous as Diwali",
    "Our love is like the eternal flame of devotion",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-purple-900 text-yellow-100' : 'bg-orange-100 text-purple-900'} transition-colors duration-500`}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-yellow-300 opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 50 + 10}px`,
              height: `${Math.random() * 50 + 10}px`,
              animation: `float ${Math.random() * 10 + 5}s infinite ease-in-out`
            }}
          />
        ))}
      </div>
      <div className="container mx-auto px-4 py-8 relative z-10">
        <header className="text-center mb-12">
          <motion.h1 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold text-red-600"
          >
            Happy Diwali, My Love
          </motion.h1>
        </header>

        <main>
          <section className="mb-12 text-center h-24">
            <AnimatePresence mode="wait">
              <motion.p 
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl italic"
              >
                {slides[currentSlide]}
              </motion.p>
            </AnimatePresence>
          </section>

          <section className="mb-12 flex justify-center">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5, type: 'spring' }}
              className="relative cursor-pointer"
              onClick={lightLamp}
            >
              <div className={`w-40 h-40 rounded-full ${isDarkMode ? 'bg-yellow-600' : 'bg-yellow-500'} flex items-center justify-center shadow-lg`}>
                <AnimatePresence>
                  {lampLit ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                    >
                      <Flame size={80} className="text-red-500 animate-flicker" />
                    </motion.div>
                  ) : (
                    <motion.p className="text-lg font-semibold text-purple-900">Light Our Diya</motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </section>

          <AnimatePresence>
            {showLoveMessage && (
              <motion.section 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="mb-12 text-center"
              >
                <h2 className="text-2xl font-bold mb-4 text-red-600">Our Diwali of Love</h2>
                <p className="text-lg">
                  As the diyas light up the night, my heart glows with love for you. 
                  You&apos;re the Lakshmi of my life, bringing prosperity to my soul. 
                  May our love burn as bright as these festive lights, dispelling any darkness that comes our way. 
                  This Diwali, I promise to cherish and adore you, not just today, but every day of our lives.
                </p>
              </motion.section>
            )}
          </AnimatePresence>

          <section className="mb-12 text-center">
            <h2 className="text-2xl font-bold mb-4 text-red-600">Our Diwali Promises</h2>
            <ul className="space-y-2">
              <li>To be the Ram to your Sita, ever devoted and true</li>
              <li>To fill our home with the warmth of love, like diyas fill it with light</li>
              <li>To celebrate the victory of our love over all obstacles, like Diwali celebrates good over evil</li>
            </ul>
          </section>

          <section className="text-center">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="inline-flex items-center space-x-2 text-2xl font-bold"
            >
              <Heart className="text-red-500 animate-pulse" />
              <span className="text-red-600">Forever Yours, This Diwali and Always</span>
              <Heart className="text-red-500 animate-pulse" />
            </motion.div>
          </section>
        </main>

        <footer className="mt-12 py-6 text-center">
          <p className="text-sm">May the divine light of Diwali spread into your life peace, prosperity, happiness, and good health</p>
          <button 
            onClick={toggleDarkMode} 
            className="mt-4 bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-colors duration-300"
          >
            {isDarkMode ? <Sun size={24} className="text-yellow-300" /> : <Moon size={24} className="text-purple-600" />}
          </button>
        </footer>
      </div>

      <style jsx global>{`
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        .animate-flicker {
          animation: flicker 1s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  )
}

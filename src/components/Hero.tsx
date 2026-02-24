"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';

const slides = [
    {
        title: "Luxury Gifting Elevated",
        subtitle: "Est. 2024 • Bespoke Selection",
        desc: "Exquisite gift boxes wrapped in handcrafted organic paper and rich linens. Each curation is a masterpiece of tactile satisfaction and artisanal precision.",
        img: "/assets/images/hero/luxury.jpg",
        accent: "text-brand-maroon"
    },
    {
        title: "Eternal Wedding Tokens",
        subtitle: "Heritage Collection • Royal Series",
        desc: "Magnificent brass-inlaid chests designed for the most cherished celebrations. Engineered with structural reinforcement to safeguard your most precious memories.",
        img: "/assets/images/hero/wedding.jpg",
        accent: "text-brand-brown"
    },
    {
        title: "Modern Corporate Studio",
        subtitle: "Institutional Excellence • Volume Tier",
        desc: "Precision-branded executive suites that integrate your identity through premium etching and color-matched silk linings. High-volume execution with boutique consistency.",
        img: "/assets/images/corporate/combo4.jpeg",
        accent: "text-brand-espresso"
    }
];

const Hero = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    useEffect(() => {
        const timer = setInterval(nextSlide, 8000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-[90vh] bg-brand-ivory overflow-hidden">
            {/* Background Image Layer */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src={slides[current].img}
                        alt={slides[current].title}
                        fill
                        className="object-cover"
                        priority
                        unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-ivory/80 via-brand-ivory/20 to-transparent" />
                </motion.div>
            </AnimatePresence>

            {/* Content Layer */}
            <div className="container mx-auto px-6 h-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 h-full items-center gap-12">
                    <div className="lg:col-span-7 pt-20">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-gold/10 text-brand-gold text-[9px] font-bold tracking-[0.2em] uppercase border border-brand-gold/20 mb-8"
                                >
                                    <Star size={12} fill="currentColor" />
                                    <span>{slides[current].subtitle}</span>
                                </motion.div>

                                <h1 className={`text-6xl md:text-[110px] font-serif leading-[0.85] mb-10 tracking-tighter ${slides[current].accent}`}>
                                    {slides[current].title.split(' ').slice(0, 2).join(' ')} <br />
                                    <span className="italic font-light opacity-60 text-stroke">
                                        {slides[current].title.split(' ').slice(2).join(' ')}
                                    </span>
                                </h1>

                                <p className="text-lg md:text-xl text-brand-espresso/70 mb-14 font-light leading-relaxed max-w-lg border-l-2 border-brand-gold/20 pl-8">
                                    {slides[current].desc}
                                </p>

                                <div className="flex flex-wrap gap-8 items-center">
                                    <button className="px-12 py-5 bg-brand-maroon text-white text-[10px] tracking-[0.4em] uppercase font-bold rounded-full shadow-2xl shadow-brand-maroon/20 hover:scale-105 transition-all duration-500 flex items-center gap-4 group">
                                        Explorate Selection
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
                                    </button>

                                    <div className="flex gap-4 items-center">
                                        <button onClick={prevSlide} className="w-12 h-12 rounded-full border border-brand-maroon/10 flex items-center justify-center text-brand-maroon hover:bg-brand-maroon hover:text-white transition-all">
                                            <ChevronLeft size={20} />
                                        </button>
                                        <span className="text-[10px] font-bold text-brand-gold tracking-widest">0{current + 1}</span>
                                        <button onClick={nextSlide} className="w-12 h-12 rounded-full border border-brand-maroon/10 flex items-center justify-center text-brand-maroon hover:bg-brand-maroon hover:text-white transition-all">
                                            <ChevronRight size={20} />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right Side: Showcase Image with Badge */}
                    <div className="hidden lg:flex lg:col-span-5 relative justify-center items-center h-full">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                exit={{ opacity: 0, scale: 1.1, rotate: -5 }}
                                transition={{ duration: 1.2, ease: "circOut" }}
                                className="relative w-full aspect-[4/5] max-w-sm rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white transform hover:rotate-2 transition-transform duration-1000 group"
                            >
                                <Image
                                    src={slides[current].img}
                                    alt="Featured Selection"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon/40 to-transparent" />

                                {/* Floating Badge */}
                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -top-6 -right-6 p-6 bg-white/95 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-brand-gold/10 z-20"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-white shadow-lg">
                                            <Star size={24} fill="white" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-bold text-brand-espresso uppercase tracking-wider">Elite Gifting</span>
                                            <span className="text-[8px] text-brand-maroon font-bold uppercase tracking-[0.2em]">Verified Luxury</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Bottom Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-gold/10 z-20">
                <motion.div
                    key={current}
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 8, ease: "linear" }}
                    className="h-full bg-brand-gold"
                />
            </div>
        </section>
    );
};

export default Hero;


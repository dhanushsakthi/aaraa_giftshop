"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Heart, User, ShoppingBag, Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [logoError, setLogoError] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        {
            name: "WOMEN'S DAY GIFTS",
            href: "/collections/womens-day",
            sublinks: ["Signature Boxes", "Floral Hampers", "Wellness Kits", "Natural Soy Candles"]
        },
        {
            name: "WEDDING RETURN GIFTS",
            href: "/collections/wedding",
            sublinks: ["Brass Artifacts", "Silver Platters", "Ethnic Hamper Sets", "Luxury Wedding Sweets"]
        },
        {
            name: "MAKE YOUR OWN HAMPER",
            href: "/collections/custom",
            sublinks: ["Select Box Size", "Choose Lining", "Curate Items", "Personalized Note"]
        },
        {
            name: "CORPORATE STUDIO",
            href: "/corporate",
            sublinks: ["Executive Desktop", "Eco-Friendly Kits", "Premium Tech Gifts", "Branding Options"]
        },
        { name: "OUR STORY", href: "/about" },
        { name: "CONTACT", href: "/contact" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-300">
            {/* Top Bar - Reference Inspired Contact Info */}
            <div className={`bg-brand-maroon text-white py-1.5 px-6 text-[9px] uppercase tracking-[0.2em] font-bold transition-all duration-300 ${isScrolled ? 'h-0 py-0 overflow-hidden opacity-0' : 'h-auto opacity-100'}`}>
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-2">
                            <span className="text-brand-gold">TEL:</span> +91 9443232172
                        </span>
                        <span className="hidden sm:flex items-center gap-2">
                            <span className="text-brand-gold">EMAIL:</span> aaraagiftshop@gmail.com
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="italic font-light text-white/80">Premium Indian Artisanry</span>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <div className={`w-full transition-all duration-300 ${isScrolled ? 'bg-brand-maroon/95 backdrop-blur-md py-1 shadow-2xl' : 'bg-brand-maroon py-3 border-b border-white/10'}`}>
                <div className="container mx-auto px-6 flex items-center justify-between gap-8 h-12">

                    {/* Left: Mobile Menu Toggle & Search (Icon on mobile) */}
                    <div className="flex lg:hidden items-center gap-4 text-white">
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            <Menu size={20} />
                        </button>
                        <Search size={18} />
                    </div>

                    {/* Left/Center: Search Bar (Desktop) - Enhanced Search UI */}
                    <div className="hidden lg:flex flex-1 max-w-xs relative group/search">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Explore collections..."
                            className="bg-white/5 border border-white/10 rounded-full py-1.5 pl-10 pr-4 text-[10px] w-full focus:outline-none focus:bg-white/10 focus:border-brand-gold transition-all duration-300 text-white placeholder:text-white/30"
                        />
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/50" size={14} />

                        {/* Search Suggestions */}
                        <AnimatePresence>
                            {searchQuery.length >= 2 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-brand-gold/10 overflow-hidden z-[110]"
                                >
                                    <div className="p-2">
                                        {["Wedding Gifts", "Personalized Hampers", "Corporate Sets", "Women's Day Special"]
                                            .filter(item => item.toLowerCase().includes(searchQuery.toLowerCase()))
                                            .map((item, i) => (
                                                <div
                                                    key={i}
                                                    className="px-4 py-2 text-[9px] uppercase tracking-widest text-brand-espresso/60 hover:bg-brand-rosegold/30 hover:text-brand-maroon cursor-pointer transition-colors font-bold flex items-center gap-3"
                                                >
                                                    <div className="w-1 h-1 rounded-full bg-brand-gold" />
                                                    {item}
                                                </div>
                                            ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Center: Logo - Adjusted for Fixed Header */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="relative group/logo block">
                            <div className={`relative transition-all duration-500 ${isScrolled ? 'h-10 w-28 lg:h-12 lg:w-32' : 'h-16 w-36 lg:h-20 lg:w-48'}`}>
                                <Image
                                    src="/aaraa-logo-transparent.png"
                                    alt="Aara Gifting"
                                    fill
                                    className="object-contain"
                                    priority
                                    unoptimized
                                    onError={() => setLogoError(true)}
                                />
                                {logoError && (
                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                        <span className="text-lg lg:text-xl font-serif font-bold tracking-widest leading-none text-white">AARA</span>
                                        <span className="text-[6px] uppercase tracking-[0.4em] font-bold text-brand-gold">Luxury Studio</span>
                                    </div>
                                )}
                            </div>
                        </Link>
                    </div>

                    {/* Right: Actions */}
                    <div className="flex items-center justify-end space-x-5 text-white">
                        <div className="hidden lg:flex items-center space-x-6">
                            <Link href="/wishlist" className="hover:text-brand-gold transition-colors relative">
                                <Heart size={18} strokeWidth={1.5} />
                            </Link>
                            <Link href="/account" className="hover:text-brand-gold transition-colors">
                                <User size={18} strokeWidth={1.5} />
                            </Link>
                            <div className="relative cursor-pointer group/bag">
                                <ShoppingBag className="group-hover/bag:text-brand-gold transition-colors" size={18} strokeWidth={1.5} />
                                <span className="absolute -top-1.5 -right-1.5 bg-brand-gold text-brand-maroon text-[7px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center border border-brand-maroon">0</span>
                            </div>
                        </div>
                        {/* Tablet Search/Bag for mobile/tablet */}
                        <div className="lg:hidden flex items-center gap-4">
                            <ShoppingBag size={20} />
                        </div>
                    </div>
                </div>

                {/* Desktop Navigation Links - Tighter Spacing - Now inside the wrapper */}
                <nav className={`hidden lg:flex justify-center space-x-6 mt-1 relative z-50 transition-all duration-500 ${isScrolled ? 'mt-0 pb-1' : 'mt-0 pb-2'}`}>
                    {navLinks.map((link, i) => (
                        <div
                            key={i}
                            className="relative"
                            onMouseEnter={() => setActiveSubmenu(i)}
                            onMouseLeave={() => setActiveSubmenu(null)}
                        >
                            <Link
                                href={link.href}
                                className="text-[8.5px] font-bold text-white/80 hover:text-brand-gold tracking-[0.15em] transition-colors relative block py-1"
                            >
                                {link.name}
                                <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-300 group-hover:w-full" />
                            </Link>

                            {/* Dropdown Menu - Rosegold accented */}
                            <AnimatePresence>
                                {activeSubmenu === i && link.sublinks && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 5 }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 w-56 pt-3 z-50"
                                    >
                                        <div className="bg-white border border-brand-gold rounded-sm py-3 overflow-hidden">
                                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand-rosegold via-brand-brown to-brand-rosegold" />
                                            {link.sublinks.map((sub, j) => (
                                                <Link
                                                    key={j}
                                                    href={link.href}
                                                    className="block px-6 py-2.5 text-[8.5px] text-brand-espresso/60 hover:text-brand-brown hover:bg-brand-rosegold/20 tracking-[0.15em] transition-all uppercase font-bold"
                                                >
                                                    {sub}
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </nav>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        className="fixed inset-0 bg-brand-ivory z-[150] p-10 flex flex-col"
                    >
                        <div className="flex justify-between items-center mb-16">
                            <span className="text-xl font-serif text-brand-brown tracking-widest">AARA</span>
                            <button onClick={() => setIsMobileMenuOpen(false)} className="text-brand-brown">
                                <X size={28} />
                            </button>
                        </div>
                        <div className="space-y-8">
                            {navLinks.map((link, i) => (
                                <div key={i} className="flex flex-col space-y-4">
                                    <Link
                                        key={i}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-2xl font-serif text-brand-brown uppercase tracking-wider"
                                    >
                                        {link.name}
                                    </Link>
                                    {link.sublinks && (
                                        <div className="grid grid-cols-1 gap-4 pl-4 border-l border-brand-brown/10">
                                            {link.sublinks.map((sub, j) => (
                                                <Link
                                                    key={j}
                                                    href={link.href}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                    className="text-brand-brown/40 text-xs uppercase tracking-widest"
                                                >
                                                    {sub}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header >
    );
};

export default Navbar;

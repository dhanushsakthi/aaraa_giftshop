"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, ArrowRight } from 'lucide-react';

const collections = [
    {
        title: "Executive Laptop Bag",
        price: "Premium Quality",
        img: "/assets/images/corporate/bag1.jpeg",
        tag: "Bestseller"
    },
    {
        title: "LED Temperature Flask",
        price: "Smart Gifting",
        img: "/assets/images/corporate/flask1.jpeg",
        tag: "Corporate"
    },
    {
        title: "Signature Pen Set",
        price: "Elegant Set",
        img: "/assets/images/corporate/pen2.jpeg",
        tag: "Personalized"
    },
    {
        title: "Deluxe Notebook Set",
        price: "Premium Combo",
        img: "/assets/images/corporate/handbook&pen1.jpeg",
        tag: "New Arrival"
    },
];

const CollectionShowcase = () => {
    return (
        <section className="py-40 bg-brand-ivory relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center mb-24 text-center md:text-left">
                    <div className="max-w-2xl mb-12 md:mb-0">
                        <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                            <Sparkles className="text-brand-gold w-4 h-4" />
                            <span className="text-[10px] uppercase tracking-[0.5em] text-brand-gold font-bold">Featured Selections</span>
                        </div>
                        <h2 className="text-5xl md:text-8xl font-serif text-brand-maroon leading-none tracking-tighter">
                            Signature <br />
                            <span className="italic font-light text-stroke opacity-60">Hampers</span>
                        </h2>
                    </div>

                    <a
                        href="/aaraa-catalogue.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-6 px-12 py-6 border border-brand-maroon/10 text-[10px] tracking-[0.4em] uppercase font-bold text-brand-maroon hover:bg-brand-maroon hover:text-white transition-all duration-700"
                    >
                        View Catalogue
                        <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-500" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {collections.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true }}
                            className="group flex flex-col h-full"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden mb-10 bg-white rounded-[2.5rem] shadow-premium group-hover:shadow-2xl transition-all duration-700 transform-gpu">
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                                    unoptimized
                                />

                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-maroon/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                <div className="absolute top-8 left-8">
                                    <span className="px-5 py-2 bg-white/95 backdrop-blur-md text-[9px] uppercase tracking-[0.3em] font-bold text-brand-maroon border border-brand-gold/20 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                                        {item.tag}
                                    </span>
                                </div>
                            </div>

                            <div className="text-center px-4 flex-grow">
                                <div className="h-[1px] w-12 bg-brand-gold/20 mx-auto mb-8 group-hover:w-24 transition-all duration-1000" />
                                <h3 className="text-2xl font-serif text-brand-maroon mb-4 tracking-tight group-hover:text-brand-gold transition-colors duration-500 leading-tight">{item.title}</h3>
                                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-espresso/40 mb-2">{item.price}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CollectionShowcase;


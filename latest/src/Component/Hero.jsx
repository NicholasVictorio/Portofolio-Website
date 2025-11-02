"use client";
import Section from "./Section";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <Section>
      <div className="relative flex flex-col items-center justify-center text-center py-24 md:py-32 lg:py-40 overflow-hidden">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10"
        >
          <h1 className="mt-8 text-5xl font-extrabold text-white">
            Hi, I’m <span className="text-fun-pink">Nicholas Victorio</span>
          </h1>
          <p className="mt-4 text-gray-400 text-lg max-w-xl mx-auto">
            A passionate web developer focused on creating clean, user-friendly digital experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col items-center justify-center mt-10 relative z-10"
        >
          <button className="inline-flex items-center gap-2 border border-white px-6 h-12 rounded-xl hover:bg-white hover:text-black transition">
            <span className="font-semibold">Explore More</span>
          </button>
        </motion.div>
      </div>
    </Section>
  );
};

export default Hero;

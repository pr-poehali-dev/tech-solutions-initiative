import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/be24d59c-5261-4a2c-a788-06b807ade0a2/files/e6c08988-020e-4498-9bc7-e34204bb906b.jpg"
          alt="Nail art manicure"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}>
        <p className="text-sm md:text-base uppercase tracking-[0.3em] mb-4 opacity-80 font-light">Мастер маникюра</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-none">
          КРАСОТА<br />В ДЕТАЛЯХ
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto px-6 opacity-90 font-light leading-relaxed">
          Профессиональный маникюр, который подчёркивает вашу индивидуальность
        </p>
        <a
          href="#contact"
          className="inline-block mt-8 px-8 py-3 border border-white text-white uppercase text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-300"
        >
          Записаться
        </a>
      </div>
    </div>
  );
}
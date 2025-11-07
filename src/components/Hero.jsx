import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative h-[92vh] md:h-[95vh] w-full overflow-hidden bg-[#202020]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#202020] via-[#202020]/50 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto h-full px-4 md:px-6 flex flex-col items-center justify-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow"
        >
          A Journey of Purpose, Passion & Progress.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
          className="mt-4 text-white/85 text-base md:text-lg"
        >
          Project Manager • Model • Creator • Activist • Traveller
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="mt-8 flex flex-col sm:flex-row gap-3"
        >
          <a
            href="#journey"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-[#202020] bg-gradient-to-r from-[#F4CE14] to-[#ffd84a] font-semibold shadow-[0_0_22px_rgba(244,206,20,0.35)] hover:shadow-[0_0_30px_rgba(244,206,20,0.55)]"
          >
            Explore My Journey
          </a>
          <a
            href="#connect"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-white border border-white/30 hover:border-white/60 transition-colors"
          >
            Let’s Connect
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <div className="h-11 w-6 rounded-full border-2 border-white/60 flex items-start justify-center p-1">
            <div className="h-2 w-1 rounded-full bg-white/80 animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

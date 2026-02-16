import { motion } from "framer-motion";
import phoneMockup from "@/assets/phone-mockup.png";
import { Link } from "react-router-dom";
import { Zap, Users, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-dark-section" />

      {/* Animated background elements */}
      <div className="absolute top-10 -left-10 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-fire/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-10 -right-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/4 sm:left-1/3 w-48 sm:w-96 h-48 sm:h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-block mb-6 px-4 py-2 bg-card border border-border rounded-full"
              whileHover={{ scale: 1.05, borderColor: "hsl(16, 100%, 55%)" }}
            >
              <span className="text-sm font-semibold text-gradient-fire flex items-center gap-2">
                <Zap size={16} /> #1 Transformation App
              </span>
            </motion.div>

            {/* Main heading */}
            <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight mb-6">
              <motion.span
                className="text-gradient-fire block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                MadMuscles
              </motion.span>
              <motion.span
                className="text-foreground block text-4xl md:text-5xl mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Your Personal Fitness Companion
              </motion.span>
            </h1>

            {/* Subheading */}
            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              is an app that makes regular workouts accessible, effective and
              joyful. Transform your body in 8 weeks with AI-personalized plans.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                to="/funnel/step-one"
                className="inline-flex items-center gap-3 bg-gradient-fire text-primary-foreground px-8 py-4 rounded-xl font-heading text-lg font-semibold tracking-wide glow-fire hover:opacity-90 transition-all shadow-lg hover:shadow-2xl transform hover:scale-105"
              >
                Choose a program
                <motion.svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </motion.svg>
              </Link>
            </motion.div>

            {/* App store buttons */}
            <motion.div
              className="flex flex-wrap items-center gap-4 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.a
                href="#"
                className="bg-foreground/10 border border-border rounded-lg px-4 py-3 flex items-center gap-2 hover:bg-foreground/20 hover:border-primary transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <span className="text-[10px] text-muted-foreground block leading-tight">
                    Download on the
                  </span>
                  <span className="text-sm font-semibold text-foreground leading-tight">
                    App Store
                  </span>
                </div>
              </motion.a>
              <motion.a
                href="#"
                className="bg-foreground/10 border border-border rounded-lg px-4 py-3 flex items-center gap-2 hover:bg-foreground/20 hover:border-primary transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.3 2.3-8.636-8.632z" />
                </svg>
                <div className="text-left">
                  <span className="text-[10px] text-muted-foreground block leading-tight">
                    GET IT ON
                  </span>
                  <span className="text-sm font-semibold text-foreground leading-tight">
                    Google Play
                  </span>
                </div>
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex gap-8 pt-6 border-t border-border/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <Users className="text-gradient-fire" size={20} />
                <div>
                  <p className="font-bold text-foreground">100K+</p>
                  <p className="text-xs text-muted-foreground">Active Users</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="text-gradient-fire" size={20} />
                <div>
                  <p className="font-bold text-foreground">115K+</p>
                  <p className="text-xs text-muted-foreground">Workouts Done</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Phone mockup */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Multiple glow layers for depth */}
              <div className="absolute -inset-4 bg-gradient-fire opacity-20 blur-3xl rounded-3xl" />
              <div className="absolute -inset-2 bg-primary opacity-10 blur-2xl rounded-3xl" />

              {/* Phone image */}
              <motion.img
                src={phoneMockup}
                alt="MadMuscles app on phone"
                className="relative z-10 w-full max-w-sm rounded-3xl object-cover shadow-2xl border-4 border-card"
                whileHover={{ scale: 1.02, rotateZ: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              />

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-6 left-8 bg-card border border-border rounded-2xl p-4 shadow-xl backdrop-blur-sm"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <p className="text-sm font-bold text-gradient-fire">
                  ⭐ 4.9 Rating
                </p>
                <p className="text-xs text-muted-foreground">62K Reviews</p>
              </motion.div>

              {/* Another floating badge */}
              <motion.div
                className="absolute -top-6 -right-6 bg-card border border-border rounded-2xl p-3 shadow-xl backdrop-blur-sm"
                animate={{ x: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              >
                <p className="text-xs font-bold text-gradient-fire">
                  ✨ AI Powered
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

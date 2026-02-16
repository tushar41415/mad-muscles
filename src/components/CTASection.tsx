import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import outdoorPose from "@/assets/outdoor-pose.jpg";
import bodyTypes from "@/assets/body-types.png";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-dark-section relative overflow-hidden">
      {/* Background images with overlay */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 w-1/3 h-full opacity-5 overflow-hidden">
          <img src={bodyTypes} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute right-0 bottom-0 w-1/3 h-full opacity-5 overflow-hidden">
          <img
            src={outdoorPose}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-fire opacity-3" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gradient-dark-section/80" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              Ready to <span className="text-gradient-fire">transform</span>?
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed">
              Join 100,000+ people who have already achieved their fitness
              goals. Your transformation starts today with personalized
              workouts, meal plans, and expert guidance.
            </p>
          </motion.div>

          {/* Feature cards before CTA */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-card/40 border border-border/50 rounded-xl p-4 sm:p-6 text-center backdrop-blur-sm hover:border-primary/50 transition-all">
              <span className="text-3xl sm:text-4xl mb-3 block">⚡</span>
              <p className="font-semibold text-foreground mb-2 text-sm sm:text-base">
                Personalized
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                AI-custom plans for your goals
              </p>
            </div>
            <div className="bg-card/40 border border-border/50 rounded-xl p-4 sm:p-6 text-center backdrop-blur-sm hover:border-primary/50 transition-all">
              <span className="text-3xl sm:text-4xl mb-3 block">📱</span>
              <p className="font-semibold text-foreground mb-2 text-sm sm:text-base">
                Easy to Use
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Simple app, powerful results
              </p>
            </div>
            <div className="bg-card/40 border border-border/50 rounded-xl p-4 sm:p-6 text-center backdrop-blur-sm hover:border-primary/50 transition-all">
              <span className="text-3xl sm:text-4xl mb-3 block">🎯</span>
              <p className="font-semibold text-foreground mb-2 text-sm sm:text-base">
                Proven Results
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                See changes in 8 workouts
              </p>
            </div>
          </motion.div>

          {/* Main CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link
              to="/funnel/step-one"
              className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-fire text-primary-foreground px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 rounded-xl font-heading text-base sm:text-lg md:text-xl font-semibold tracking-wide glow-fire hover:opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <span>Start Your Transformation</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
            <p className="text-sm text-muted-foreground mt-4">
              No credit card required • Instant access • Free trial available
            </p>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mt-16 pt-12 border-t border-border"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <div className="text-center">
              <p className="text-2xl font-bold text-gradient-fire">100K+</p>
              <p className="text-xs text-muted-foreground">Active Users</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gradient-fire">6 🌍</p>
              <p className="text-xs text-muted-foreground">Languages</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gradient-fire">115K+</p>
              <p className="text-xs text-muted-foreground">Workouts Done</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gradient-fire">⭐ 4.9</p>
              <p className="text-xs text-muted-foreground">App Rating</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

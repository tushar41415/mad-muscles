import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import competitionSide from "@/assets/competition-side.jpg";
import heropose from "@/assets/hero-pose.png";

const stats = [
  {
    emoji: "😎",
    value: "100 000+",
    label: "users worldwide",
    sublabel: "available in 6 languages",
  },
  {
    emoji: "🎯️",
    value: "115 000",
    label: "workouts completed",
    sublabel: "which equals over 7 years of training",
  },
  { emoji: "💪", value: "60 000", label: "pumped bicepses", sublabel: "" },
];

const StatsSection = () => {
  return (
    <section className="py-20 sm:py-24 bg-secondary relative overflow-hidden">
      {/* Background images */}
      <div className="absolute right-0 top-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 opacity-10">
        <img
          src={competitionSide}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="font-heading text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          We deliver <span className="text-gradient-fire">results</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="text-center p-8 bg-gradient-to-br from-card/50 to-card/20 rounded-2xl border border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ translateY: -5 }}
            >
              <span className="text-4xl sm:text-5xl md:text-6xl mb-4 block">
                {s.emoji}
              </span>
              <span className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-gradient-fire block mb-2">
                {s.value}
              </span>
              <span className="text-foreground text-xs sm:text-sm font-medium block">
                {s.label}
              </span>
              {s.sublabel && (
                <span className="text-muted-foreground text-xs block mt-2">
                  {s.sublabel}
                </span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Two column layout with image and support */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center mt-12 md:mt-20">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute -inset-4 bg-gradient-fire opacity-15 blur-2xl rounded-2xl" />
            <img
              src={heropose}
              alt="Fitness champion"
              className="relative rounded-2xl shadow-2xl w-full object-cover"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                Why our users love us?
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our personalized approach combined with easy-to-follow plans and
                proven results has transformed over 100,000 lives
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-gradient-fire rounded-full" />
                  <span className="text-foreground">
                    AI-powered personalized workouts
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-gradient-fire rounded-full" />
                  <span className="text-foreground">
                    Customized meal plans with recipes
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-gradient-fire rounded-full" />
                  <span className="text-foreground">
                    Build healthy habits that last
                  </span>
                </li>
              </ul>
            </div>

            {/* Support CTA */}
            <motion.div
              className="bg-gradient-to-br from-card to-card/50 border border-border rounded-2xl p-6 text-center"
              whileHover={{ borderColor: "hsl(16, 100%, 55%)" }}
            >
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                Any questions?
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Our support agents will help you quickly!
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-gradient-fire text-primary-foreground px-6 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                <MessageCircle size={16} />
                Support
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

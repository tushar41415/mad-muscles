import { motion } from "framer-motion";
import mealPlanImg from "@/assets/meal-plan.png";

const MealPlanSection = () => {
  const features = [
    {
      icon: "🥗",
      title: "Personalized Recipes",
      desc: "Tailored to your taste & dietary preferences",
    },
    {
      icon: "📱",
      title: "Easy Follow",
      desc: "Step-by-step instructions & shopping lists",
    },
    {
      icon: "⚖️",
      title: "Balanced Nutrition",
      desc: "Perfect macros for your fitness goals",
    },
    {
      icon: "🛒",
      title: "Smart Shopping",
      desc: "Auto-generated grocery lists",
    },
  ];

  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-fire/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="inline-block text-sm font-semibold text-gradient-fire tracking-wider uppercase mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              🍽️ Nutrition
            </motion.span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Meal plan based on{" "}
              <span className="text-gradient-fire">your goal</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Mealplan is adjusted by your preferences and restrictions. Recipes
              are easy-to-follow, you can eat whatever you want and get better
              shape without sacrificing taste.
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8">
              {features.map((feature, idx) => (
                <motion.div
                  key={feature.title}
                  className="p-4 bg-card/40 border border-border/50 rounded-xl hover:border-border transition-all hover:bg-card/60"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <span className="text-2xl sm:text-3xl mb-2 block">
                    {feature.icon}
                  </span>
                  <p className="font-semibold text-foreground text-xs sm:text-sm mb-1">
                    {feature.title}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex gap-8">
              <div>
                <p className="font-heading text-3xl font-bold text-gradient-fire">
                  500+
                </p>
                <p className="text-sm text-muted-foreground">
                  Verified Recipes
                </p>
              </div>
              <div>
                <p className="font-heading text-3xl font-bold text-gradient-fire">
                  10k+
                </p>
                <p className="text-sm text-muted-foreground">
                  Meal Combinations
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image with enhancements */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Glow effect */}
            <div className="absolute -inset-8 bg-gradient-fire opacity-10 blur-3xl rounded-3xl" />

            {/* Main image */}
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={mealPlanImg}
                alt="Meal plan with healthy food"
                className="w-full rounded-3xl shadow-2xl border border-border/30"
                loading="lazy"
              />

              {/* Overlay badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 bg-card border border-border rounded-2xl p-4 shadow-xl backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="font-heading font-bold text-gradient-fire text-lg">
                  AI Powered
                </p>
                <p className="text-xs text-muted-foreground">
                  Smart Recommendations
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MealPlanSection;

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import mealPlanImg from "@/assets/meal-plan.png";

const features = [
  {
    icon: "🥗",
    title: "Tailored recipes",
    desc: "Meals aligned with your dietary needs and preferences.",
  },
  {
    icon: "📱",
    title: "Simple flow",
    desc: "Step-by-step guidance and shopping lists in one tap.",
  },
  {
    icon: "⚖️",
    title: "Macro precision",
    desc: "Balanced nutrition tuned to performance and recovery.",
  },
  {
    icon: "🛒",
    title: "Smart groceries",
    desc: "Auto-generated lists that reduce decision fatigue.",
  },
];

const MealPlanSection = () => {
  return (
    <section id="nutrition" className="section-pad relative overflow-hidden">
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="badge-pill mb-4">Nutrition Intelligence</span>
            <h2 className="text-4xl leading-[0.92] text-foreground sm:text-5xl lg:text-6xl">
              Meal plans that actually fit your routine
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Build better eating habits without rigid diets. MadMuscles
              personalizes menus, portions, and prep so healthy food becomes
              the easy option.
            </p>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <Tilt
                  key={feature.title}
                  tiltMaxAngleX={7}
                  tiltMaxAngleY={7}
                  glareEnable
                  glareMaxOpacity={0.1}
                  className="surface-card surface-card-hover glow-panel p-4 sm:p-5"
                >
                  <span className="mb-2 block text-2xl">{feature.icon}</span>
                  <p className="text-base font-semibold text-foreground">
                    {feature.title}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {feature.desc}
                  </p>
                </Tilt>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-6">
              <div>
                <p className="text-3xl font-bold text-gradient-fire">500+</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  Verified recipes
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gradient-fire">10K+</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  Meal combinations
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-fire opacity-15 blur-3xl" />
            <div className="surface-card relative overflow-hidden rounded-[2rem] p-3">
              <img
                src={mealPlanImg}
                alt="Personalized meal planning interface"
                className="w-full rounded-[1.4rem] object-cover"
                loading="lazy"
              />
            </div>
            <motion.div
              className="surface-card glow-panel absolute -bottom-4 right-3 px-4 py-3 sm:-bottom-5 sm:right-6 animate-float-soft"
              whileHover={{ scale: 1.03 }}
            >
              <p className="text-sm font-bold text-gradient-fire">
                Smart grocery mode
              </p>
              <p className="text-xs text-muted-foreground">Auto-updated list</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MealPlanSection;

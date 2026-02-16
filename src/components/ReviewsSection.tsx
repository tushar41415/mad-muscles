import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Chee-T'ah-Ah",
    text: "This is a really wonderful program that has helped me lose 5 pounds in a week",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Robert Matthews",
    text: "It's a great way to get into shape. Should have done it a long time ago 😃",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Hyrum Keddington",
    text: "The first program to get me in the groove cos it gave me everything I needed to get started, including a menu and a grocery list.",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Ahmad Adyarso",
    text: "I tried the program for a week; it has decent features, a good workout plan, and a diet. The diet plan also has a grocery list and step-by-step preparation.",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Robin Mersh",
    text: "Nice program, works well, and contains a good, well thought out set of exercises",
    color: "from-indigo-500 to-purple-500",
  },
  {
    name: "Chan Makuach",
    text: "The plan is good, I like how it evaluates a proper workout according to fitness but it would be great if there's an offline mode",
    color: "from-rose-500 to-pink-500",
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-24 bg-gradient-dark-section overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-fire/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Loved by <span className="text-gradient-fire">62,000+</span> happy
            users
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-4">
            Join thousands of people who have transformed their fitness journey
            with MadMuscles
          </p>
          <div className="flex justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Star size={24} className="fill-primary text-primary" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scrolling reviews */}
      <div className="relative mt-12">
        <div className="flex animate-scroll-left gap-4 sm:gap-6 w-max px-4">
          {[...reviews, ...reviews].map((r, i) => (
            <motion.div
              key={i}
              className="bg-card border border-border rounded-2xl p-4 sm:p-6 w-72 sm:w-80 md:w-96 shrink-0 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:translate-y-[-4px]"
              whileHover={{ shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)" }}
            >
              {/* Header with rating and gradient avatar */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${r.color} flex items-center justify-center text-white font-bold text-lg shadow-md`}
                  >
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {r.name}
                    </p>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          size={12}
                          className="fill-primary text-primary"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Review text */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {r.text}
              </p>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-4" />

              {/* Footer badge */}
              <div className="flex gap-2">
                <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold">
                  Verified User
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gradient-dark-section to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gradient-dark-section to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default ReviewsSection;

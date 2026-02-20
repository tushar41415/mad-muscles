import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Chee-T'ah-Ah",
    text: "This is a really wonderful program that has helped me lose 5 pounds in a week.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "Robert Matthews",
    text: "It's a great way to get into shape. Should have done it a long time ago.",
    color: "from-cyan-500 to-blue-400",
  },
  {
    name: "Hyrum Keddington",
    text: "The first program that gave me everything to start, including a menu and grocery list.",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    name: "Ahmad Adyarso",
    text: "Good workout plan and diet setup. The grocery list and prep instructions are practical.",
    color: "from-emerald-500 to-teal-400",
  },
  {
    name: "Robin Mersh",
    text: "Works well and includes a thoughtful set of exercises.",
    color: "from-indigo-500 to-cyan-400",
  },
  {
    name: "Chan Makuach",
    text: "I like how it evaluates workouts by fitness level and keeps routines structured.",
    color: "from-purple-500 to-cyan-500",
  },
];

const ReviewsSection = () => {
  return (
    <section
      id="reviews"
      className="section-pad relative overflow-hidden bg-gradient-dark-section"
    >
      <div className="absolute -left-16 top-14 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <motion.div
          className="mx-auto mb-10 max-w-3xl text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="badge-pill mb-4">Social Proof</span>
          <h2 className="text-4xl leading-[0.92] text-foreground sm:text-5xl lg:text-6xl">
            Loved by 62,000+ users
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Real people, real consistency, real body transformations.
          </p>
          <div className="mt-4 flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="fill-primary text-primary" />
            ))}
          </div>
        </motion.div>
      </div>

      <div className="relative">
        <div className="flex w-max animate-scroll-left gap-4 px-4 sm:gap-6">
          {[...reviews, ...reviews].map((review, i) => (
            <motion.article
              key={`${review.name}-${i}`}
              className="surface-card surface-card-hover glow-panel w-72 shrink-0 p-5 sm:w-80"
              whileHover={{ y: -4 }}
            >
              <div className="mb-4 flex items-center gap-3">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${review.color} text-sm font-bold text-white`}
                >
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {review.name}
                  </p>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={`${review.name}-star-${j}`}
                        size={12}
                        className="fill-primary text-primary"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {review.text}
              </p>
              <div className="mt-4 border-t border-border/60 pt-3">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary">
                  Verified user
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
};

export default ReviewsSection;

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import outdoorPose from "@/assets/outdoor-pose.jpg";
import bodyTypes from "@/assets/body-types.png";

const CTASection = () => {
  return (
    <section className="section-pad relative overflow-hidden bg-gradient-dark-section">
      <div className="absolute inset-0 opacity-10">
        <img src={bodyTypes} alt="" className="absolute left-0 top-0 h-full w-1/3 object-cover" />
        <img
          src={outdoorPose}
          alt=""
          className="absolute bottom-0 right-0 h-full w-1/3 object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(188_100%_60%_/_0.12),transparent_55%)]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <motion.div
          className="surface-card glow-panel mx-auto max-w-4xl p-8 text-center sm:p-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="badge-pill mb-4">Final Step</span>
          <h2 className="text-4xl leading-[0.92] text-foreground sm:text-6xl">
            Ready to transform?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Join over 100,000 people using personalized workouts, guided
            nutrition, and habit coaching to create real and lasting results.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <Tilt
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              glareEnable
              glareMaxOpacity={0.12}
              className="rounded-xl border border-border/60 bg-background/30 p-4"
            >
              <p className="text-2xl font-bold text-gradient-fire">100K+</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Active users
              </p>
            </Tilt>
            <Tilt
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              glareEnable
              glareMaxOpacity={0.12}
              className="rounded-xl border border-border/60 bg-background/30 p-4"
            >
              <p className="text-2xl font-bold text-gradient-fire">8 Weeks</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Typical visible progress
              </p>
            </Tilt>
            <Tilt
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              glareEnable
              glareMaxOpacity={0.12}
              className="rounded-xl border border-border/60 bg-background/30 p-4"
            >
              <p className="text-2xl font-bold text-gradient-fire">4.9★</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                App rating
              </p>
            </Tilt>
          </div>

          <Link
            to="/funnel/step-one"
            className="shine-sweep mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-fire px-8 py-4 text-base font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-[1.02] sm:text-lg"
          >
            Build my program
            <svg
              width="20"
              height="20"
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
          <p className="mt-4 text-xs text-muted-foreground sm:text-sm">
            Instant access. Cancel anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

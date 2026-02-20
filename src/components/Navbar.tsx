import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { label: "Programs", href: "#plans" },
    { label: "Nutrition", href: "#nutrition" },
    { label: "Reviews", href: "#reviews" },
    { label: "Results", href: "#results" },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-2xl">
      <div className="container mx-auto flex h-[4.5rem] items-center justify-between px-4 sm:px-6">
        <Link to="/" className="group flex items-center gap-2">
          <motion.span
            className="font-heading text-3xl leading-none"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 360 }}
          >
            <span className="text-gradient-fire">MAD</span>
            <span className="ml-1 rounded-md border border-primary/60 bg-primary/10 px-2 py-0.5 text-sm text-foreground transition-colors group-hover:border-primary">
              MUSCLES
            </span>
          </motion.span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold tracking-wide text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/funnel/step-one"
            className="shine-sweep inline-flex items-center gap-2 rounded-xl bg-gradient-fire px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-[1.02]"
          >
            Start now
            <ArrowRight size={16} />
          </Link>
        </div>

        <button
          className="rounded-xl border border-border/70 bg-card/50 p-2.5 text-foreground transition-colors hover:border-primary/50 lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="border-t border-border/50 bg-background/95 px-4 pb-6 pt-4 shadow-2xl lg:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <div className="container mx-auto space-y-2">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-muted-foreground transition-colors hover:bg-card hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <Link
                to="/funnel/step-one"
                onClick={() => setIsOpen(false)}
                className="shine-sweep mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-fire px-5 py-3 text-sm font-semibold text-primary-foreground"
              >
                Build my plan
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

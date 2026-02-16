import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo with animation */}
        <Link to="/" className="flex items-center gap-1 group">
          <motion.span
            className="font-heading text-2xl font-bold tracking-wider"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <span className="text-gradient-fire">MAD</span>
            <span className="text-foreground border border-primary px-1.5 py-0.5 text-sm ml-1 group-hover:border-primary/60 group-hover:bg-primary/5 transition-all">
              MUSCLES
            </span>
          </motion.span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <motion.a
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            whileHover={{ color: "hsl(16, 100%, 55%)" }}
          >
            Help
          </motion.a>
          <motion.span
            className="text-muted-foreground text-sm font-medium cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            English 🌐
          </motion.span>
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground p-2 rounded-lg hover:bg-foreground/10 transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            <Menu size={22} />
          </motion.button>
        </div>

        {/* Mobile menu button */}
        <motion.button
          className="md:hidden text-foreground p-2 rounded-lg hover:bg-foreground/10"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="bg-background border-b border-border/50 px-4 pb-6 pt-2 overflow-hidden"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="container mx-auto space-y-2">
          <motion.div
            whileHover={{ x: 8 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Link
              to="/"
              className="block text-foreground hover:text-primary py-3 font-semibold px-3 rounded-lg hover:bg-primary/5 transition-all"
              onClick={() => setIsOpen(false)}
            >
              🏠 Home
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ x: 8 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Link
              to="/funnel/step-one"
              className="block text-foreground hover:text-primary py-3 font-semibold px-3 rounded-lg hover:bg-primary/5 transition-all"
              onClick={() => setIsOpen(false)}
            >
              💪 Choose a program
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ x: 8 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <a
              href="#"
              className="block text-muted-foreground hover:text-foreground py-3 px-3 rounded-lg hover:bg-foreground/5 transition-all"
            >
              ✋ Help
            </a>
          </motion.div>
          <motion.div
            whileHover={{ x: 8 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <a
              href="#"
              className="block text-muted-foreground hover:text-foreground py-3 px-3 rounded-lg hover:bg-foreground/5 transition-all text-sm"
            >
              📋 Privacy Policy
            </a>
          </motion.div>
          <motion.div
            whileHover={{ x: 8 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <a
              href="#"
              className="block text-muted-foreground hover:text-foreground py-3 px-3 rounded-lg hover:bg-foreground/5 transition-all text-sm"
            >
              ⚖️ Terms of Service
            </a>
          </motion.div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;

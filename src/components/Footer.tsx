import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  const footerLinks = [
    { title: "Product", links: ["Features", "Pricing", "Security", "Team"] },
    { title: "Company", links: ["About", "Blog", "Careers", "Press"] },
    {
      title: "Resources",
      links: ["Help Center", "Community", "Contact", "FAQ"],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Use", "Cookie Policy", "Support"],
    },
  ];

  return (
    <footer className="py-16 bg-gradient-dark-section relative overflow-hidden border-t border-border">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-20 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-20 w-64 h-64 bg-gradient-fire rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 mb-12">
          {/* Brand section */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-heading text-2xl font-bold tracking-wider block mb-4">
              <span className="text-gradient-fire">MAD</span>
              <span className="text-foreground border border-primary px-1.5 py-0.5 text-xs ml-1">
                MUSCLES
              </span>
            </span>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Transform your body, transform your life. Join 100,000+ users
              achieving their fitness goals.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              <motion.a
                href="#"
                className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
                whileHover={{ scale: 1.1 }}
              >
                <Facebook size={18} />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
                whileHover={{ scale: 1.1 }}
              >
                <Twitter size={18} />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
                whileHover={{ scale: 1.1 }}
              >
                <Instagram size={18} />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
                whileHover={{ scale: 1.1 }}
              >
                <Linkedin size={18} />
              </motion.a>
            </div>
          </motion.div>

          {/* Footer links */}
          {footerLinks.map((column, idx) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="font-semibold text-foreground mb-4 text-sm tracking-wide">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                      whileHover={{ x: 4, color: "hsl(16, 100%, 55%)" }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact section */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-12 p-8 bg-card/40 border border-border/50 rounded-2xl backdrop-blur-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-fire/20 flex items-center justify-center flex-shrink-0">
              <Mail size={24} className="text-gradient-fire" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Email</p>
              <a
                href="mailto:support@madmuscles.com"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                support@madmuscles.com
              </a>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-fire/20 flex items-center justify-center flex-shrink-0">
              <Phone size={24} className="text-gradient-fire" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Phone</p>
              <a
                href="tel:+1234567890"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                +1 (234) 567-890
              </a>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-fire/20 flex items-center justify-center flex-shrink-0">
              <MapPin size={24} className="text-gradient-fire" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Location</p>
              <p className="text-sm text-muted-foreground">
                San Francisco, USA
              </p>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom footer */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-xs text-center md:text-left">
            © 2025 MadMuscles. All rights reserved. Made with 💪 for fitness
            enthusiasts.
          </p>

          <div className="flex gap-6 text-xs text-muted-foreground">
            <motion.a
              href="#"
              className="hover:text-foreground transition-colors"
              whileHover={{ x: -2 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              className="hover:text-foreground transition-colors"
              whileHover={{ x: -2 }}
            >
              Terms of Use
            </motion.a>
            <motion.a
              href="#"
              className="hover:text-foreground transition-colors"
              whileHover={{ x: -2 }}
            >
              Cookie Policy
            </motion.a>
          </div>

          <motion.div
            className="flex gap-2 text-xs"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-muted-foreground">Available on</span>
            <div className="flex gap-2">
              <span>🍎 iOS</span>
              <span>🤖 Android</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

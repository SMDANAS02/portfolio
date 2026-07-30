import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-beige dark:bg-darkbg border-t-2 border-gray-200 dark:border-gray-800 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10 flex-wrap gap-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 dark:text-gray-400 font-mono text-sm">
              © 2026 Mohamed Anas S — built with React, Framer Motion & Tailwind.
            </p>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.08 }}
            onClick={scrollToTop}
            className="text-black dark:text-white hover:text-accent transition font-mono text-sm font-bold"
            aria-label="Scroll to top of page"
          >
            Back to Top ↑
          </motion.button>
        </div>

        {/* Social Links */}
        <motion.div
          className="flex gap-8 flex-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          role="list"
        >
          <a
            href="https://github.com/SMDANAS02"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-accent transition font-mono text-sm font-medium"
            aria-label="GitHub profile"
            role="listitem"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/mohamed-anas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-accent transition font-mono text-sm font-medium"
            aria-label="LinkedIn profile"
            role="listitem"
          >
            LinkedIn
          </a>
          <a
            href="https://leetcode.com/mdanas02"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-accent transition font-mono text-sm font-medium"
            aria-label="LeetCode profile"
            role="listitem"
          >
            LeetCode
          </a>
          <a
            href="mailto:smohamedanas02@gmail.com"
            className="text-gray-600 dark:text-gray-400 hover:text-accent transition font-mono text-sm font-medium"
            aria-label="Email: smohamedanas02@gmail.com"
            role="listitem"
          >
            Email
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

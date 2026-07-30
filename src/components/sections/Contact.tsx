import { motion } from 'framer-motion';
import { useState } from 'react';
import Button from '../shared/Button';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('smohamedanas02@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.name && formState.email && formState.message) {
      setSubmitted(true);
      setTimeout(() => {
        setFormState({ name: '', email: '', message: '' });
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section id="contact" className="py-section-mobile md:py-section px-6 md:px-12 bg-beige dark:bg-darkbg">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-mono text-sm tracking-wider mb-3">05 / contact</p>
          <h2 className="text-h1-mobile md:text-h2 font-bold text-black dark:text-beige mb-4">
            Building something?<br />Let's talk.
          </h2>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-10 md:p-16 shadow-premium"
        >
          <div className="space-y-10">
            {/* Email Copy */}
            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.03 }}
                onClick={handleCopyEmail}
                className="inline-block text-2xl md:text-4xl font-mono font-bold text-black dark:text-white hover:text-accent transition"
              >
                smohamedanas02@gmail.com
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: copied ? 1 : 0 }}
                  className="ml-3 text-sm text-accent"
                >
                  {copied ? '✓ Copied!' : ''}
                </motion.span>
              </motion.button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="tel:+916380870269"
                className="font-mono text-sm px-5 py-2.5 rounded-full border-2 border-gray-300 dark:border-gray-600 hover:border-accent hover:bg-accent/5 text-black dark:text-white hover:text-accent transition duration-300"
              >
                +91 6380 870 269
              </a>
              <a
                href="https://github.com/SMDANAS02"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm px-5 py-2.5 rounded-full border-2 border-gray-300 dark:border-gray-600 hover:border-accent hover:bg-accent/5 text-black dark:text-white hover:text-accent transition duration-300"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/mohamed-anas"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm px-5 py-2.5 rounded-full border-2 border-gray-300 dark:border-gray-600 hover:border-accent hover:bg-accent/5 text-black dark:text-white hover:text-accent transition duration-300"
              >
                LinkedIn
              </a>
              <a
                href="https://leetcode.com/mdanas02"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm px-5 py-2.5 rounded-full border-2 border-gray-300 dark:border-gray-600 hover:border-accent hover:bg-accent/5 text-black dark:text-white hover:text-accent transition duration-300"
              >
                LeetCode
              </a>
            </div>

            {/* Quick Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-5 pt-8 border-t-2 border-gray-300 dark:border-gray-700">
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Your name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="px-5 py-3 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-black dark:text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition"
                  required
                />
                <input
                  type="email"
                  placeholder="Your email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="px-5 py-3 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-black dark:text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition"
                  required
                />
              </div>
              <textarea
                placeholder="Your message"
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                rows={4}
                className="w-full px-5 py-3 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-black dark:text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition"
                required
              />
              <div className="flex gap-4">
                <Button variant="primary" size="lg" type="submit">
                  Send Message
                </Button>
                {submitted && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-accent font-semibold self-center"
                  >
                    ✓ Message sent!
                  </motion.span>
                )}
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

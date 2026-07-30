import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="about" className="py-section-mobile md:py-section px-6 md:px-12 bg-beige dark:bg-darkbg">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="mb-16"
        >
          <p className="text-accent font-mono text-sm tracking-wider mb-3">01 / about</p>
          <h2 className="text-h1-mobile md:text-h2 font-bold text-black dark:text-beige">
            Backend-minded, full-stack capable.
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden shadow-premium-lg"
          >
            <img
              src="assets/about_photo.jpg"
              alt="Mohamed Anas S"
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm an Information Technology student at VSB Engineering College (Anna University), currently in my
              third year with an 8.02 GPA. My focus sits on the backend — APIs, databases, and the logic that holds
              an app together — but I'm comfortable owning a feature end to end, from schema to screen.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I like systems that stay predictable under pressure: clean auth flows, sane migrations, queries that
              don't fall over at scale. Outside of coursework, I spend time on LeetCode sharpening data structures &
              algorithms, and I help run technical workshops and hackathons for 100+ students at college.
            </p>

            {/* Meta Information */}
            <div className="pt-8 border-t-2 border-gray-200 dark:border-gray-700 space-y-4">
              <div className="flex gap-8">
                <span className="font-mono text-sm text-accent font-bold">based in</span>
                <span className="text-gray-700 dark:text-gray-300 font-medium">Tiruppur, Tamil Nadu</span>
              </div>
              <div className="flex gap-8">
                <span className="font-mono text-sm text-accent font-bold">graduating</span>
                <span className="text-gray-700 dark:text-gray-300 font-medium">2027</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

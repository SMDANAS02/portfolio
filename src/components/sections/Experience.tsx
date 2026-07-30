import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { experience } from '../../data/experience';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="experience" className="py-section-mobile md:py-section px-6 md:px-12 bg-beige dark:bg-darkbg">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="mb-16"
        >
          <p className="text-accent font-mono text-sm tracking-wider mb-3">02 / journey</p>
          <h2 className="text-h1-mobile md:text-h2 font-bold text-black dark:text-beige">
            How I got here.
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-10">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-l-4 border-accent pl-10 pb-8 last:pb-0"
            >
              <motion.div
                whileHover={{ x: 8 }}
                className="cursor-default group"
              >
                <span className="inline-block font-mono text-sm text-accent font-bold mb-3">
                  {exp.year}
                </span>
                <h3 className="text-2xl font-bold text-black dark:text-beige mb-3 group-hover:text-accent transition duration-300">
                  {exp.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  {exp.description}
                </p>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-3">
                      <span className="text-accent font-bold mt-0.5">→</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

import { motion } from 'framer-motion';
import { skillsByCategory } from '../../data/skills';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section id="skills" className="py-section-mobile md:py-section px-6 md:px-12 bg-beige dark:bg-darkbg">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-accent font-mono text-sm tracking-wider mb-3">04 / stack</p>
          <h2 className="text-h1-mobile md:text-h2 font-bold text-black dark:text-beige">
            What I build with.
          </h2>
        </motion.div>

        {/* Skills by Category */}
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {Object.entries(skillsByCategory).map(([category, skills]) => (
            <motion.div
              key={category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <h3 className="text-accent font-mono text-sm font-bold mb-6 tracking-widest uppercase">
                {category}
              </h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <motion.div key={skill.name} variants={itemVariants}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-black dark:text-white">
                        {skill.name}
                      </span>
                      <span className="text-xs font-mono text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: 'easeOut' }}
                      className="h-2.5 bg-gradient-to-r from-accent to-yellow-400 rounded-full"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee */}
        <div className="overflow-hidden border-t-2 border-b-2 border-gray-300 dark:border-gray-700 py-8">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="flex gap-12 text-2xl font-bold text-gray-400 dark:text-gray-600 whitespace-nowrap"
          >
            <span>JAVA</span>
            <span>NODE.JS</span>
            <span>MYSQL</span>
            <span>REACT</span>
            <span>FASTAPI</span>
            <span>POSTGRESQL</span>
            <span>REST API</span>
            <span>GIT</span>
            <span>JAVA</span>
            <span>NODE.JS</span>
            <span>MYSQL</span>
            <span>REACT</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

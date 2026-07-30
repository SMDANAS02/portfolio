import { motion } from 'framer-motion';
import { achievements } from '../../data/achievements';
import { useEffect, useRef, useState } from 'react';

const AchievementCard = ({ achievement }: { achievement: typeof achievements[0] }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const target = achievement.value;
          const isDecimal = target % 1 !== 0;
          const duration = 1500;
          const start = Date.now();

          const animate = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const value = target * progress;
            setDisplayValue(isDecimal ? Math.round(value * 100) / 100 : Math.round(value));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [achievement.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm hover:shadow-premium transition-all duration-300 text-center"
    >
      <div className="text-6xl mb-4">{achievement.icon}</div>
      <div className="text-5xl font-bold text-accent mb-2">
        {displayValue}
        <span className="text-2xl text-gray-600 dark:text-gray-400">{achievement.label}</span>
      </div>
      <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
        {achievement.title}
      </h3>
      {achievement.description && (
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {achievement.description}
        </p>
      )}
    </motion.div>
  );
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-section-mobile md:py-section px-6 md:px-12 bg-beige dark:bg-darkbg">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-accent font-mono text-sm tracking-wider mb-3">achievements</p>
          <h2 className="text-h1-mobile md:text-h2 font-bold text-black dark:text-beige">
            By the numbers.
          </h2>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-16">
          {achievements.map((achievement) => (
            <AchievementCard key={achievement.id} achievement={achievement} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

import { motion } from 'framer-motion';
import { useState } from 'react';
import Button from '../shared/Button';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Task 12.6: Parallax effect based on mouse movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    const x = (clientX - innerWidth / 2) * 0.02;
    const y = (clientY - innerHeight / 2) * 0.02;
    
    setMousePosition({ x, y });
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen bg-beige dark:bg-darkbg pt-32 pb-16 px-6 md:px-12 flex items-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Parallax background text */}
      <motion.div
        className="absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none"
        animate={{ x: mousePosition.x * 20, y: mousePosition.y * 20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-9xl md:text-[200px] font-bold text-black/5 dark:text-white/5 whitespace-nowrap">
          CREATE
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10"
      >
        {/* Left Content */}
        <motion.div variants={itemVariants} className="space-y-6">
          <div>
            <motion.p
              variants={itemVariants}
              className="text-accent font-mono text-sm tracking-wider mb-2"
            >
              The Backend Guy. That's Anas.
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold leading-tight text-black dark:text-beige"
            >
              Code,<br />
              Written to<br />
              <span className="text-accent">Actually Hold.</span>
            </motion.h1>
          </div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-md"
          >
            IT undergrad building REST APIs and full-stack systems — currently deep in data structures & algorithms,
            shipping real backends that don't fall over under load.
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-4 pt-6">
            <Button
              variant="primary"
              size="lg"
              href="assets/Mohamed_Anas_Resume.pdf"
              download
            >
              Get Resume
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href="#about"
            >
              About Me
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          variants={itemVariants}
          className="relative h-96 md:h-full min-h-96"
        >
          {/* Task 12.7: Floating animation for profile image */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="rounded-3xl overflow-hidden shadow-premium-lg bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 h-96"
          >
            <img
              src="assets/anas_casual_v3.png"
              alt="Mohamed Anas S"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

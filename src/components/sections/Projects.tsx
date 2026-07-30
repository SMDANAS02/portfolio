import { motion } from 'framer-motion';
import { projects } from '../../data/projects';
import Button from '../shared/Button';

const Projects = () => {
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

  return (
    <section id="projects" className="py-section-mobile md:py-section px-6 md:px-12 bg-beige dark:bg-darkbg">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-accent font-mono text-sm tracking-wider mb-3">03 / projects</p>
          <h2 className="text-h1-mobile md:text-h2 font-bold text-black dark:text-beige">
            Things I've shipped.
          </h2>
        </motion.div>

        {/* Projects Grid - 2 columns that wraps to show all 4 cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.a
              key={project.id}
              href={project.caseStudyUrl}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-premium-lg transition-all duration-300 border border-gray-100 dark:border-gray-800"
            >
              {/* Project Image */}
              <div className="relative w-full h-48 overflow-hidden bg-gray-200 dark:bg-gray-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-3 py-1 bg-accent/15 text-accent rounded-full font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-bold text-black dark:text-white group-hover:text-accent transition">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {project.description}
                </p>

                <div className="flex gap-3 pt-2">
                  <Button
                    variant="primary"
                    size="sm"
                    href={project.caseStudyUrl}
                  >
                    Case Study
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    href={project.githubUrl}
                    target="_blank"
                  >
                    GitHub
                  </Button>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

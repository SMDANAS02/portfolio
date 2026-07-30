import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  // Task 15.5: Skip navigation link for keyboard users
  const skipToMain = () => {
    const mainElement = document.querySelector('main');
    mainElement?.focus();
    mainElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-beige dark:bg-darkbg text-black dark:text-beige transition-colors duration-300">
      {/* Task 15.5: Skip to main content link */}
      <a
        href="#main-content"
        onClick={skipToMain}
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-[9999] focus:bg-accent focus:text-black focus:px-4 focus:py-2 focus:font-bold"
      >
        Skip to main content
      </a>

      <Navbar />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

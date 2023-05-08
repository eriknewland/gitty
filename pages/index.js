import { motion } from 'framer-motion';
import Head from 'next/head';
import AnimatedSection from './components/AnimatedSection';
import HeroLogo from './components/HeroLogo';
import CountUpCard from './components/CountUpCard';

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function HomePage() {
  return (
    <div
      className="flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 transition-colors duration-500"
      style={{ minWidth: '100vw' }}
    >
      <Head>
        <title>Gitty: Learn Git Workflow</title>
        <meta
          name="description"
          content="Learn and practice Git workflows with interactive lessons and exercises."
        />
        <meta
          name="keywords"
          content="git, github, git workflow, education, tutorial, learn git"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <motion.div
        className="w-full"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        {/* <AnimatedSection>
          <motion.section
            className="bg-cover bg-center h-screen"
            style={{
              backgroundImage:
                "url('https://source.unsplash.com/random?h=1600?w=900')",
            }}
            variants={fadeIn}
          >
            <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
              <div className="text-center text-white">
                <motion.h1
                  className="text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100 transition-colors duration-500"
                  variants={fadeIn}
                >
                  Welcome to Gitty!
                </motion.h1>
                <motion.p
                  className="text-2xl mb-8 text-gray-800 dark:text-gray-200 transition-colors duration-500"
                  variants={fadeIn}
                >
                  Learn and practice Git workflows with interactive lessons and
                  exercises.
                </motion.p>
                <Link href="/lesson1">
                  <p className="bg-blue-500 text-gray-900 dark:text-gray-100 px-6 py-2 rounded hover:bg-blue-600 dark:hover:bg-gray-700 transition-colors duration-500">
                    Start Lesson 1: Introduction to Git
                  </p>
                </Link>
              </div>
            </div>
          </motion.section>
        </AnimatedSection> */}
        <HeroLogo />
        <AnimatedSection>
          <motion.section
            className="dark:bg-gray-800 py-16 transition-colors duration-500"
            variants={fadeIn}
          >
            <h2 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100 transition-colors duration-500">
              Why Learn Git Workflow?
            </h2>
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              style={{ marginLeft: '1rem' }}
            >
              <CountUpCard
                title="Companies Using Git"
                end={130000}
                duration={2.5}
                thumbnail="/assets/countup-card-1.webp"
              />
              <CountUpCard
                title="Repositories on Git"
                end={200000000}
                duration={2.5}
                thumbnail="/assets/countup-card-2.webp"
              />
              <CountUpCard
                title="Total Git Users"
                end={73000000}
                duration={2.5}
                thumbnail="/assets/countup-card-3.webp"
              />
            </div>
          </motion.section>
        </AnimatedSection>
      </motion.div>
      {/* <HeroLogo /> */}
    </div>
  );
}

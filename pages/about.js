import { motion } from 'framer-motion';
import Head from 'next/head';
import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const fadeIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

export default function About() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center">
      <Head>
        <title>Gitty - About Us</title>
        <meta
          name="description"
          content="Learn about Gitty's mission to help others learn git workflow and version control."
        />
        <meta
          name="keywords"
          content="git, github, git workflow, education, tutorial, learn git, about us, mission"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <motion.section
        className="relative h-screen flex items-center justify-center"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: '#000',
              },
            },
            particles: {
              color: {
                value: '#fff',
              },
              links: {
                color: {
                  value: '#fff',
                },
                distance: 150,
                opacity: 0.4,
              },
              move: {
                attract: {
                  rotate: {
                    x: 600,
                    y: 1200,
                  },
                },
                enable: true,
                outModes: {
                  bottom: 'out',
                  left: 'out',
                  right: 'out',
                  top: 'out',
                },
                speed: 1,
              },
              number: {
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: 'circle',
              },
              size: {
                value: 3,
              },
            },
          }}
        />
        <div className="text-center text-white px-4 z-10">
          <motion.h1 className="text-5xl font-bold mb-4" variants={fadeIn}>
            About Gitty
          </motion.h1>
          <motion.h2 className="text-3xl mb-4" variants={fadeIn}>
            Our Mission
          </motion.h2>
          <motion.p className="text-2xl mb-8" variants={fadeIn}>
            Gitty was created with a mission to help others learn git workflow
            and version control, vitally important workplace skills that many,
            including myself, have struggled with.
          </motion.p>
          <motion.h2 className="text-3xl mb-4" variants={fadeIn}>
            Interactive Learning
          </motion.h2>
          <motion.p className="text-2xl mb-8" variants={fadeIn}>
            Through interactive lessons and hands-on exercises, Gitty aims to
            make learning git workflow accessible and enjoyable for everyone.
            Gitty also encourages a community-sourced approach to lesson
            building: Anyone can contribute a lesson and improve Gitty!
          </motion.p>
          <motion.h2 className="text-3xl mb-4" variants={fadeIn}>
            Empowering Individuals
          </motion.h2>
          <motion.p className="text-2xl" variants={fadeIn}>
            Our goal is to empower individuals with the knowledge and confidence
            they need to excel in their careers and contribute to the
            ever-evolving world of technology.
          </motion.p>
        </div>
      </motion.section>
    </div>
  );
}

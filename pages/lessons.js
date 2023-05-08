import React from 'react';
import getIconByName from './helpers/getIconByName';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Lessons.module.css';
import AnimatedSection from './components/AnimatedSection';
import lessonsData from './lessons/lessonData';
import ParticlesBackground from './components/ParticlesBackground';

export default function Lessons() {
  return (
    <div className="page-container">
      <Head>
        <title>Lessons - Improve Your Git Skills</title>
        <meta
          name="description"
          content="12 lessons to improve your Git skills and become a better developer."
        />
        <meta name="keywords" content="git, lessons, skills, developer" />
      </Head>
      <ParticlesBackground />
      <h1
        className="page-title"
        style={{
          zIndex: '1',
          margin: '2rem',
          textAlign: 'center',
          padding: '5px',
          backgroundColor: '#6EE7B7',
          borderRadius: '15px',
          position: 'relative',
        }}
      >
        12 Lessons to Improve your Git Skills
      </h1>
      <div className={`container ${styles.timeline}`}>
        {lessonsData.map((lesson, index) => {
          const isEven = index % 2 === 0;

          return (
            <React.Fragment key={index}>
              <AnimatedSection>
                <Link href={`/lessons/${index + 1}`} className={styles.link}>
                  <div
                    className={`${styles.timelineRow} ${
                      isEven ? styles.left : styles.right
                    }`}
                  >
                    <div className={styles.timelineItem}>
                      <div
                        className={`${styles.icon} ${
                          isEven ? styles.leftIcon : styles.rightIcon
                        } transition-colors duration-500`}
                      >
                        {getIconByName(lesson.icon)}
                      </div>

                      <div
                        className={`dark:bg-gray-800 transition-colors duration-500 ${styles.timelineContent}`}
                      >
                        <h3 className={styles.lessonTitle}>{lesson.title}</h3>

                        <p>{lesson.description}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

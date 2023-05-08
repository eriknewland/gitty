import dynamic from 'next/dynamic';
import React from 'react';
import { useRouter } from 'next/router';
import lessonsData from './lessonData';
import getIconByName from '../helpers/getIconByName';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import CodeRenderer from '../components/CodeRenderer';
import styles from '../../styles/Lesson.module.css';
import 'font-awesome/css/font-awesome.min.css';

export default function Lesson({ lesson }) {
  const router = useRouter();
  const Mermaid = dynamic(() => import('../components/Mermaid'), {
    ssr: false,
    loading: () => (
      <div className="page-container dark:bg-gray-900 p-4">
        <div className="md:w-1/2 md:absolute md:top-10 md:right-10 p-4">
          <div className={styles.ldsring}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    ),
  });

  function InputRenderer({ type }) {
    if (type === 'checkbox') {
      return (
        <input
          className={styles.checkbox}
          type="checkbox"
          onChange={() => {}}
          style={{ marginRight: '0.5rem', cursor: 'pointer' }}
        />
      );
    }
    return <input type={type} />;
  }

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="page-container dark:bg-gray-800 p-4">
      <Head>
        <title>Gitty.io - Improve Your Git Skills</title>
        <meta
          name="description"
          content="12 lessons to improve your Git skills and become a better developer."
        />
        <meta name="keywords" content="git, lessons, skills, developer" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <div className="flex flex-col md:flex-row md:space-x-4">
        <div className="flex-1">
          <h1 className="page-title text-4xl font-bold text-gray-800 mb-4 dark:text-white transition-colors duration-500">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              {lesson.title} {getIconByName(lesson.icon)}
            </div>
          </h1>
          <p
            className="text-lg text-gray-800 mb-6 dark:text-white transition-colors duration-500 flex"
            style={{ maxWidth: '48%' }}
          >
            {lesson.longDescription}
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2 dark:text-white transition-colors duration-500">
            Objectives
          </h2>
          <ul className="list-disc list-inside text-gray-800 mb-6 dark:text-white transition-colors duration-500">
            {lesson.objectives.map((objective, index) => (
              <li key={index}>{objective}</li>
            ))}
          </ul>
          {lesson.content.map((section, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2 dark:text-white transition-colors duration-500">
                {section.sectionTitle}
              </h3>
              <div
                className="text-lg text-gray-800 dark:text-white transition-colors duration-500"
                style={{ whiteSpace: 'pre-wrap' }}
              >
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    input: InputRenderer,
                    code: CodeRenderer,
                  }}
                >
                  {section.sectionContent}
                </ReactMarkdown>
              </div>
            </div>
          ))}
          <h2 className="text-2xl font-semibold text-gray-800 mb-2 dark:text-white transition-colors duration-500">
            Exercises
          </h2>
          {lesson.exercises.map((exercise, index) => (
            <div key={index} className="mb-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2 dark:text-white">
                {exercise.exerciseTitle}
              </h4>
              <div className="text-lg text-gray-800 dark:text-white transition-colors duration-500">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    input: InputRenderer,
                  }}
                >
                  {exercise.exerciseInstructions}
                </ReactMarkdown>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="md:w-1/2 md:absolute md:top-20 md:right-10 p-4"
        style={{
          marginTop: parseInt(router.query.lessonId) === 1 ? '-1rem' : '5rem',
        }}
      >
        <Mermaid chart={lesson.chartDefinition} />
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = lessonsData.map((_, index) => ({
    params: { lessonId: (index + 1).toString() },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const lesson = { ...lessonsData[parseInt(params.lessonId) - 1] };

  if (!lesson) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      lesson,
    },
    revalidate: 1,
  };
}

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Offcanvas, Collapse } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faFile, faTimes } from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faLinkedin,
  faFacebook,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import styles from '../../styles/Layout.module.css';
// import BuyMeACoffee from './BuyMeACoffee';
import dynamic from 'next/dynamic';

export default function Layout({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [folder1Open, setFolder1Open] = useState(false);
  const [folder2Open, setFolder2Open] = useState(false);
  const [folder3Open, setFolder3Open] = useState(false);

  const Coffee = dynamic(() => import('./BuyMeACoffee'), {
    ssr: false,
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  const router = useRouter();

  const isActiveLink = (href) => {
    return router.pathname === href;
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 flex flex-col transition-colors duration-500">
      <header
        className="bg-gray-200 dark:bg-gray-800 py-4 px-8 transition-colors duration-500"
        style={{ zIndex: '1' }}
      >
        <div className="flex justify-between items-center">
          <Link legacyBehavior href="/">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 cursor-pointer transition-colors duration-500">
              Gitty
            </h1>
          </Link>
          <nav className="nav nav-tabs">
            <Link legacyBehavior href="/lessons">
              <a
                className={`nav-link ${
                  isActiveLink('/lessons') ? 'active' : ''
                } text-gray-900 dark:text-gray-100 hover:text-gray-200  transition-colors duration-500 ${
                  styles['custom-link']
                }`}
              >
                Lessons
              </a>
            </Link>
            <Link legacyBehavior href="/about">
              <a
                className={`nav-link ${
                  isActiveLink('/about') ? 'active' : ''
                } text-gray-900 dark:text-gray-100 hover:text-gray-200 transition-colors duration-500 ${
                  styles['custom-link']
                }`}
              >
                About Us
              </a>
            </Link>
            <button
              className={`nav-link text-gray-900 dark:text-gray-100 hover:text-gray-200 transition-colors duration-500 ${styles['custom-link']}`}
              onClick={toggleDropdown}
            >
              More
            </button>
            <Offcanvas
              show={dropdownOpen}
              onHide={toggleDropdown}
              placement="end"
              className="bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 w-80"
            >
              <Offcanvas.Header>
                <Offcanvas.Title className="text-gray-900 dark:text-gray-100">
                  <h2>Explorer</h2>
                </Offcanvas.Title>
                <button
                  type="button"
                  className={`transition-colors duration-500 text-gray-900 dark:text-white ${styles['test']}`}
                  onClick={toggleDropdown}
                  aria-label="Close"
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </Offcanvas.Header>
              <Offcanvas.Body className="text-gray-900 dark:text-gray-100 text-1.5xl">
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <FontAwesomeIcon
                      icon={faFolder}
                      className="mr-2 text-2xl"
                      style={{ color: 'orange' }}
                    />
                    <button
                      className={`btn btn-link p-0 m-0 align-baseline custom-btn-link text-gray-900 dark:text-gray-100 hover:text-gray-200 transition-colors duration-500 ${styles['custom-btn-link']}`}
                      onClick={() => setFolder1Open(!folder1Open)}
                      aria-controls="folder1-collapse"
                      aria-expanded={folder1Open}
                    >
                      <span className="text-2xl">Contribute</span>
                    </button>
                    <Collapse in={folder1Open}>
                      <ul className="list-unstyled ml-4" id="folder1-collapse">
                        <li className="mb-2">
                          <FontAwesomeIcon
                            icon={faFile}
                            className="mr-2"
                            style={{ color: '#F0DB4F' }}
                          />
                          <a
                            className={`custom-link hover:text-gray-200 transition-colors duration-500 ${styles['custom-link']}`}
                            href="#"
                            onClick={toggleDropdown}
                            style={{ textDecoration: 'none' }}
                          >
                            Create a Lesson
                          </a>
                        </li>
                      </ul>
                    </Collapse>
                  </li>
                  <li className="mb-2">
                    <FontAwesomeIcon
                      icon={faFolder}
                      className="mr-2 text-2xl"
                      style={{ color: 'blue' }}
                    />
                    <button
                      className={`btn btn-link p-0 m-0 align-baseline custom-btn-link text-gray-900 dark:text-gray-100 hover:text-gray-200 transition-colors duration-500 ${styles['custom-btn-link']}`}
                      onClick={() => setFolder2Open(!folder2Open)}
                      aria-controls="folder2-collapse"
                      aria-expanded={folder2Open}
                    >
                      <span className="text-2xl">Account</span>
                    </button>
                    <Collapse in={folder2Open}>
                      <ul className="list-unstyled ml-4" id="folder2-collapse">
                        <li className="mb-2">
                          <FontAwesomeIcon icon={faFile} className="mr-2" />
                          <a
                            className={`custom-link hover:text-gray-200 transition-colors duration-500 ${styles['custom-link']}`}
                            href="#"
                            onClick={toggleDropdown}
                            style={{ textDecoration: 'none' }}
                          >
                            Settings - Coming Soon!
                          </a>
                        </li>
                      </ul>
                    </Collapse>
                  </li>
                  <li className="mb-2">
                    <FontAwesomeIcon
                      icon={faFolder}
                      className="mr-2 text-2xl"
                      style={{ color: 'green' }}
                    />
                    <button
                      className={`btn btn-link p-0 m-0 align-baseline custom-btn-link text-gray-900 dark:text-gray-100 hover:text-gray-200 transition-colors duration-500 ${styles['custom-btn-link']}`}
                      onClick={() => setFolder3Open(!folder3Open)}
                      aria-controls="folder3-collapse"
                      aria-expanded={folder3Open}
                    >
                      <span className="text-2xl">Share</span>
                    </button>
                    <Collapse in={folder3Open}>
                      <ul className="list-unstyled ml-4" id="folder3-collapse">
                        <li className="mb-2">
                          <FontAwesomeIcon
                            icon={faTwitter}
                            className="mr-2"
                            style={{ color: '#1DA1F2' }}
                          />
                          <a
                            className={`custom-link hover:text-gray-200 transition-colors duration-500 ${styles['custom-link']}`}
                            href="#"
                            onClick={toggleDropdown}
                            style={{ textDecoration: 'none' }}
                          >
                            Twitter
                          </a>
                        </li>
                        <li className="mb-2">
                          <FontAwesomeIcon
                            icon={faLinkedin}
                            className="mr-2"
                            style={{ color: '#0077B5' }}
                          />
                          <a
                            className={`custom-link hover:text-gray-200 transition-colors duration-500 ${styles['custom-link']}`}
                            href="#"
                            onClick={toggleDropdown}
                            style={{ textDecoration: 'none' }}
                          >
                            LinkedIn
                          </a>
                        </li>
                        <li className="mb-2">
                          <FontAwesomeIcon
                            icon={faFacebook}
                            className="mr-2"
                            style={{ color: '#1877F2' }}
                          />
                          <a
                            className={`custom-link hover:text-gray-200  transition-colors duration-500 ${styles['custom-link']}`}
                            href="#"
                            onClick={toggleDropdown}
                            style={{ textDecoration: 'none' }}
                          >
                            Facebook
                          </a>
                        </li>
                        <li className="mb-2">
                          <FontAwesomeIcon
                            icon={faInstagram}
                            className="mr-2"
                            style={{ color: '#C13584' }}
                          />
                          <a
                            className={`custom-link hover:text-gray-200 transition-colors duration-500 ${styles['custom-link']}`}
                            href="#"
                            onClick={toggleDropdown}
                            style={{ textDecoration: 'none' }}
                          >
                            Instagram
                          </a>
                        </li>
                      </ul>
                    </Collapse>
                  </li>
                </ul>
                <div
                  style={{
                    // marginTop: '25rem',
                    // marginLeft: '3.5rem',
                    position: 'absolute',
                    bottom: 10,
                    right: 80,
                  }}
                >
                  <input
                    type="checkbox"
                    id="darkmode-toggle"
                    onChange={toggleDarkMode}
                    className={styles.input}
                  />
                  <label
                    id="toggle-label"
                    htmlFor="darkmode-toggle"
                    className={styles.label}
                  >
                    {darkMode ? (
                      <img
                        className={styles.sun}
                        src="/assets/sun.svg"
                        alt="Sun icon"
                      />
                    ) : (
                      <img
                        className={styles.sun}
                        src="/assets/sun-white.svg"
                        alt="Sun icon"
                      />
                    )}
                    {!darkMode ? (
                      <img
                        className={styles.moon}
                        src="/assets/moon.svg"
                        alt="Moon icon"
                      />
                    ) : (
                      <img
                        className={styles.moon}
                        src="/assets/moon-white.svg"
                        alt="Moon icon"
                      />
                    )}
                  </label>
                </div>
              </Offcanvas.Body>
            </Offcanvas>
          </nav>
        </div>
      </header>
      <main className="flex-grow flex items-center justify-center text-gray-900 dark:text-gray-100 transition-colors duration-500 ">
        {children}
      </main>
      <footer
        className="border-t border-gray-300 bg-gray-200 dark:bg-gray-800 py-4 px-8 transition-colors duration-500"
        style={{ zIndex: '1' }}
      >
        <p
          className="text-gray-900 dark:text-gray-100 transition-colors duration-500"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 0,
          }}
        >
          <a
            href="https://eriknewland.netlify.app/"
            target="blank"
            style={{
              color: 'inherit',
              display: 'flex',
              verticalAlign: 'baseline',
            }}
          >
            {new Date().getFullYear()} Erik Newland
          </a>
          <Coffee />
        </p>
      </footer>
    </div>
  );
}

import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/HeroLogo.module.css';

const HeroLogo = () => {
  const animationContainerRef = useRef(null);
  const testRef = useRef(null);
  const [showInput, setShowInput] = useState(false);
  const router = useRouter();

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && event.target.value.trim() === 'git commit') {
      router.push('/lessons');
    }
  };

  useEffect(() => {
    const animationContainer = animationContainerRef.current;
    const gitCommands = [
      'git push',
      'git commit',
      'git fetch',
      'git pull',
      'git merge',
      'git branch',
      'git checkout',
    ];
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    function getRandomCharacter() {
      return characters.charAt(Math.floor(Math.random() * characters.length));
    }

    function animateText(element, target, index = 0) {
      if (index < target.length) {
        const randomText = Array.from({ length: target.length }, () =>
          getRandomCharacter()
        ).join('');
        element.textContent = randomText;
        setTimeout(() => animateText(element, target, index + 1), 100);
      } else {
        element.textContent = target;
        setTimeout(() => startAnimation(element), 2000);
      }
    }

    function startAnimation(element) {
      const command =
        gitCommands[Math.floor(Math.random() * gitCommands.length)];
      animateText(element, command);
    }

    function createAnimationTextElements() {
      const containerWidth = animationContainer.clientWidth;
      const containerHeight = animationContainer.clientHeight;
      const fontSize = 24;
      const columns = Math.floor(containerWidth / fontSize);
      const rows = Math.floor(containerHeight / fontSize);

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
          const animationText = document.createElement('div');
          animationText.classList.add(styles.animationText);
          animationContainer.appendChild(animationText);
          setTimeout(
            () => startAnimation(animationText),
            (i * columns + j) * 50
          );
        }
      }
    }

    function writeTextArea(textArea, text, index = 0, callback) {
      if (index < text.length) {
        textArea.value += text[index];
        setTimeout(() => writeTextArea(textArea, text, index + 1, callback), 5);
      } else {
        if (callback) {
          callback();
        }
      }
    }

    function replaceWithTextArea() {
      if (!testRef.current) {
        return;
      }
      const animationTextDivs = document.querySelectorAll(
        `.${styles.animationText}`
      );
      animationTextDivs.forEach((div) => div.remove());
      animationContainer.remove();
      testRef.current.innerHTML = '';

      const textArea = document.createElement('textarea');
      textArea.style.width = '100%';
      textArea.style.height = '650px';
      textArea.style.zIndex = '1';
      textArea.style.backgroundColor = '#222';
      textArea.style.color = '#0f0';
      textArea.style.fontFamily = 'monospace';
      textArea.style.fontSize = '18px';
      textArea.style.border = 'none';
      textArea.style.resize = 'none';
      textArea.readOnly = true;

      const asciiText = `
        GGGGGGGGGGGGG  iiii          tttt               tttt
     GGG::::::::::::G i::::i      ttt:::t            ttt:::t
   GG:::::::::::::::G  iiii       t:::::t            t:::::t
  G:::::GGGGGGGG::::G             t:::::t            t:::::t
 G:::::G       GGGGGGiiiiiiittttttt:::::tttttttttttttt:::::tttttttyyyyyyy           yyyyyyy
G:::::G              i:::::it:::::::::::::::::tt:::::::::::::::::t y:::::y         y:::::y
G:::::G               i::::it:::::::::::::::::tt:::::::::::::::::t  y:::::y       y:::::y
G:::::G    GGGGGGGGGG i::::itttttt:::::::tttttttttttt:::::::tttttt   y:::::y     y:::::y
G:::::G    G::::::::G i::::i      t:::::t            t:::::t          y:::::y   y:::::y
G:::::G    GGGGG::::G i::::i      t:::::t            t:::::t           y:::::y y:::::y
G:::::G        G::::G i::::i      t:::::t            t:::::t            y:::::y:::::y
 G:::::G       G::::G i::::i      t:::::t    tttttt  t:::::t    tttttt   y:::::::::y
  G:::::GGGGGGGG::::Gi::::::i     t::::::tttt:::::t  t::::::tttt:::::t    y:::::::y
   GG:::::::::::::::Gi::::::i     tt::::::::::::::t  tt::::::::::::::t     y:::::y
     GGG::::::GGG:::Gi::::::i       tt:::::::::::tt    tt:::::::::::tt    y:::::y
        GGGGGG   GGGGiiiiiiii         ttttttttttt        ttttttttttt     y:::::y
                                                                        y:::::y
                                                                       y:::::y
                                                                      y:::::y
                                                                     y:::::y
                                                                    yyyyyyy    git workflow and version control exercises
  `;

      testRef.current.appendChild(textArea);
      writeTextArea(textArea, asciiText, 0, () => setShowInput(true));
    }

    setTimeout(replaceWithTextArea, 12000);
    createAnimationTextElements();
  }, []);

  return (
    <div style={{ width: '100%' }}>
      <div
        ref={animationContainerRef}
        className={styles.animationContainer}
      ></div>
      <div ref={testRef} className={styles.test}>
        {showInput && (
          <input
            type="text"
            className={styles.textInput}
            placeholder="Type git commit and press enter..."
            onKeyPress={handleKeyPress}
          />
        )}
      </div>
    </div>
  );
};

export default HeroLogo;

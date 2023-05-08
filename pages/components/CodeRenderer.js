import React, { useState } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { monokaiSublime } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { AiOutlineCopy } from 'react-icons/ai';
import monokaiSublime from '../../constants/syntax-highlighter-styles';

export default function CodeRenderer({
  // eslint-disable-next-line no-unused-vars
  node,
  inline,
  className,
  children,
  ...props
}) {
  const language = className?.replace('language-', '');
  const [copyButtonText, setCopyButtonText] = useState('');

  const handleCopy = () => {
    setCopyButtonText('Copied!');
    setTimeout(() => setCopyButtonText(''), 2000);
  };

  if (inline) {
    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  }

  return (
    <div style={{ position: 'relative' }}>
      <SyntaxHighlighter language={language} {...props} style={monokaiSublime}>
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
      <CopyToClipboard
        text={String(children).replace(/\n$/, '')}
        onCopy={handleCopy}
      >
        <button
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            color: 'white',
            border: 'none',
            borderRadius: '3px',
            padding: '5px 10px',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            // backgroundColor: 'rgba(0, 0, 0, 0.6)',
          }}
        >
          <div
            style={{ height: '24px', position: 'absolute', top: 5, right: 5 }}
          >
            <div style={{ display: 'flex' }}>
              <span
                style={{
                  marginRight: '10px',
                  position: 'absolute',
                  top: -5,
                  right: 10,
                  color: '#6EE7B7',
                }}
              >
                {copyButtonText}
              </span>
              <AiOutlineCopy color="#6EE7B7" />
            </div>
          </div>
          <div style={{ height: '20px', marginTop: '1rem' }}>
            {/* {copyButtonText} */}
          </div>
        </button>
      </CopyToClipboard>
    </div>
  );
}

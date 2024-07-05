// src/App.tsx
import React, { useState } from 'react';
import CodeEditor from './components/CodeEditor';

const App: React.FC = () => {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');

  const generatePreview = () => {
    return `
      <html>
        <style>${css}</style>
        <body>
          ${html}
          <script>${js}<\/script>
        </body>
      </html>
    `;
  };

  return (
    <div className="App">
      <div className="editor-container">
        <h2>HTML</h2>
        <CodeEditor language="xml" value={html} onChange={setHtml} />
      </div>

      <div className="editor-container">
        <h2>CSS</h2>
        <CodeEditor language="css" value={css} onChange={setCss} />
      </div>

      <div className="editor-container">
        <h2>JavaScript</h2>
        <CodeEditor language="javascript" value={js} onChange={setJs} />
      </div>
      
      <div className="preview-container">
        <h2>Live Preview</h2>
        <iframe
          srcDoc={generatePreview()}
          title="Live Preview"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default App;

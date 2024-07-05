// components/CodeEditor.tsx

import React from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml'; // for HTML
import 'codemirror/mode/css/css'; // for CSS
import 'codemirror/mode/javascript/javascript'; // for JavaScript

interface CodeEditorProps {
  language: string;
  value: string;
  onChange: (value: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ language, value, onChange }) => {
  return (
    <CodeMirror
      value={value}
      options={{
        mode: language === 'xml' ? 'xml' : language === 'css' ? 'css' : 'javascript',
        theme: 'material',
        lineNumbers: true
      }}
      onBeforeChange={(editor, data, value) => {
        onChange(value);
      }}
    />
  );
};

export default CodeEditor;

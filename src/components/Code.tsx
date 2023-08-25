import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface CodeInputProps {
  children: string | string[];
  language: string;
}
const Code: React.FC<CodeInputProps> = ({ children, language }) => {
  return (
    <div className="code">
      <SyntaxHighlighter language={language} style={tomorrow}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export default Code;

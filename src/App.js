import "./Markdown.css";
import { marked } from "marked";
import React, { useState } from "react";

function App() {
  const [markdown, setMarkdown] = useState("");

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  const createMarkup = () => {
    return { __html: marked(markdown) };
  };

  return (
    <>
      <div className="App">
        <div className="header">
          <h1>Markdown Previewer</h1>
          <h4>Amil Labib</h4>
        </div>
        <div className="body">
          <div className="section">
            <h1>Editor</h1>
            <textarea
              id="editor"
              value={markdown}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="section">
            <h1>Preview</h1>
            <div
              className="preview"
              id="preview"
              dangerouslySetInnerHTML={createMarkup()}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

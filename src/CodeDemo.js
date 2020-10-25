import React, { useState, useEffect, Fragment } from 'react'
import { Controlled as CodeMirror } from 'react-codemirror2'
import styles from './CodeDemo.module.css'
import 'codemirror/mode/htmlmixed/htmlmixed'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/dracula.css'

// From MDN
const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

function CodeDemo({initialCode, editable=true, mode='html'}) {
  const [code, setCode] = useState(initialCode || '')
  const [runCode, setRunCode] = useState(code)
  const [jsReturn, setJsReturn] = useState('')
  useEffect(() => {
    if(mode !== 'js') {
      setRunCode(code)
    }
  }, [code, mode])

  let modeArg = 'htmlmixed'
  if(mode === 'js') { modeArg = 'javascript' }
  return <div className={styles.wrapper}>
    <div className={styles.editorContainer}>
      <div className={styles.title}>Editor</div>
      <CodeMirror
        className={styles.editor}
        value={code}
        onBeforeChange={(_, __, value) => {
          if(editable) { setCode(value) }
        }}
        options={{
          mode: modeArg,
          theme: 'dracula',
          lineNumbers: true,
          lineWrapping: true,
        }}
      />
    </div>
    {mode === 'js' && editable && <button
      className={styles.runButton}
      onClick={() => {
        setRunCode(code)
      }}
    >Run ▶️</button> }
    <div className={styles.resultContainer}>
      <div className={styles.title}>Return Value</div>
      {mode === 'js' ?
        <Fragment>
          <iframe srcDoc={`<script>
              window.myFunction = () => {
                ${runCode}
              }
            </script>`
            }
            title='result'
            className={styles.resultHidden}
            onLoad={(e) => setJsReturn(e.target.contentWindow.myFunction())}
          ></iframe>
            <div className={styles.jsReturn}>{JSON.stringify(jsReturn, getCircularReplacer())}</div>
        </Fragment>
      :
        <iframe srcDoc={runCode} title='result' className={styles.result}></iframe>
      }
    </div>
  </div>
}

export default CodeDemo

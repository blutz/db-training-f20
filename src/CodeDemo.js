import React, { useState, useEffect, useCallback, Fragment } from 'react'
import CodeMirror from '@uiw/react-codemirror';
import { dracula } from '@uiw/codemirror-theme-dracula'
import { javascript } from '@codemirror/lang-javascript'
import { html } from '@codemirror/lang-html'
import styles from './CodeDemo.module.css'

// From MDN. Fixes JSON.stringify so we can use it with circular references
const getCircularReplacer = () => {
  const seen = new WeakSet()
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return
      }
      seen.add(value)
    }
    return value
  }
}

function combineHtmlPart(code, htmlPart) {
  if(!htmlPart) { return code }
  return htmlPart + '<script>' + code + '</script>'
}

function CodeDemo({initialCode, editable=true, mode='html', htmlPart}) {
  const delayedRun = (mode === 'js' || mode === 'jsdom')
  const [code, setCode] = useState(initialCode || '')
  const [runCode, setRunCodeRaw] = useState(combineHtmlPart(code, htmlPart))
  const [jsReturn, setJsReturn] = useState('')
  const setRunCode = useCallback((code) => {
    setRunCodeRaw(combineHtmlPart(code, htmlPart))
  }, [setRunCodeRaw, htmlPart])
  useEffect(() => {
    if(!delayedRun) { setRunCode(code) }
  }, [code, delayedRun, setRunCode])

  let extensionsArg = [html()]
  if(mode === 'js' || mode === 'jsdom') { extensionsArg = [javascript()]}

  function handleKeyCombo(e) {
    if((e.ctrlKey || e.metaKey) && e.keyCode === 13) {
      setRunCode(code)
    }
  }

  return <div className={styles.wrapper}>
    <div className={styles.editorContainer} onKeyDown={handleKeyCombo}>
      <div className={styles.title}>Editor</div>
      <CodeMirror
        className={styles.editor}
        value={code}
        onChange={value => {
          if(editable) { setCode(value) }
        }}
        theme={dracula}
        extensions={extensionsArg}
      />
    </div>

    {delayedRun && editable && <button
      className={styles.runButton}
      onClick={() => setRunCode(code)}>
        Run ▶️
    </button> }

    <div className={styles.resultContainer}>
      <div className={styles.title}>Output/Return</div>
      {mode === 'js' ?
        <Fragment>
          <iframe srcDoc={`<script>
              window.myFunction = () => { ${runCode} }
            </script>`}
            title='result'
            className={styles.resultHidden}
            onLoad={(e) => {
              e.target.contentWindow.myFunction &&
              setJsReturn(e.target.contentWindow.myFunction())
            }}
          ></iframe>
          <div className={styles.jsReturn}>
            {JSON.stringify(jsReturn, getCircularReplacer())}
          </div>
        </Fragment>
      :
        <iframe srcDoc={runCode} title='result' className={styles.result}></iframe>
      }
    </div>
  </div>
}

export default CodeDemo

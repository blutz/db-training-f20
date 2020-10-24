import React, { useState } from 'react'
import { Controlled as CodeMirror } from 'react-codemirror2'
import styles from './CodeDemo.module.css'
import 'codemirror/mode/htmlmixed/htmlmixed'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/dracula.css'

function CodeDemo({initialCode, editable=true}) {
  const [code, setCode] = useState(initialCode || '')
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
          mode: 'htmlmixed',
          theme: 'dracula',
          lineNumbers: true,
          lineWrapping: true,
        }}
      />
    </div>
    <div className={styles.resultContainer}>
      <div className={styles.title}>Result</div>
      <iframe srcDoc={code} title='result' className={styles.result}></iframe>
    </div>
  </div>
}

export default CodeDemo

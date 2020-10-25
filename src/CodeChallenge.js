import React, { useState } from 'react'
import ReactSpoiler from 'react-spoiler'
import CodeDemo from './CodeDemo'
import style from './CodeChallenge.module.css'

function CodeChallenge({title, description, descriptionImg, hint, initialCode, solution, solutionDescription, htmlPart, mode='html'}) {
  const [solutionShown, setSolutionShown] = useState(false)
  return <section className={style.container}>
    <h3>{title}</h3>
    <div style={{display: 'flex'}}>
      <p style={{flex: 1}}>{description}</p>
      {descriptionImg && <div style={{flex: 0.5, maxWidth: '50%'}}>
        <img src={descriptionImg} alt='Sample' style={{maxWidth: '100%'}} />
      </div>}
    </div>
    {hint && <div><strong>Hint:</strong>&nbsp;
      <ReactSpoiler className='spoiler'>{hint}</ReactSpoiler>
    </div>}
    {htmlPart && <div><strong>HTML:</strong>
      <pre>{htmlPart}</pre>
    </div>}
    <CodeDemo initialCode={initialCode || ''} mode={mode} htmlPart={htmlPart} />
    <button onClick={() => setSolutionShown(!solutionShown)}>{solutionShown ? 'Hide' : 'Show'} sample solution</button>
    {solutionShown && <div>
      <CodeDemo initialCode={solution} editable={false} mode={mode} htmlPart={htmlPart} />
      <p>{solutionDescription}</p>
    </div>}
  </section>
}

export default CodeChallenge

import React, { useState } from 'react'
import ReactSpoiler from 'react-spoiler'
import CodeDemo from './CodeDemo'
import style from './CodeChallenge.module.css'

function CodeChallenge({title, description, descriptionImg, hint, solution, solutionDescription}) {
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
    <CodeDemo />
    <button onClick={() => setSolutionShown(!solutionShown)}>{solutionShown ? 'Hide' : 'Show'} sample solution</button>
    {solutionShown && <div>
      <CodeDemo initialCode={solution} editable={false} />
      <p>{solutionDescription}</p>
    </div>}
  </section>
}

export default CodeChallenge

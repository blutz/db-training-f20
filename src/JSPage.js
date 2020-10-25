import React, { Fragment } from 'react'
import CodeChallenge from './CodeChallenge'

function JSPage() {
  return <Fragment>
    <h2>Javascript Exercises</h2>
    <CodeChallenge
      title='Test'
      description='hello'
      initialCode='return "Text here..."'
      mode='jsdom'
      solution='return "Hello World"'
      htmlPart={`
        <div>This is a test</div>
      `}
    />
  </Fragment>
}

export default JSPage

import React, { Fragment } from 'react'
import CodeChallenge from './CodeChallenge'

function JSPage() {
  return <Fragment>
    <h2>Javascript Exercises</h2>
    <CodeChallenge
      title='Test'
      description='hello'
      initialCode='return "Text here..."'
      mode='js'
      solution='return "Hello World"'
    />
  </Fragment>
}

export default JSPage

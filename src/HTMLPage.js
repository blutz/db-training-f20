import React, { Fragment } from 'react'
import CodeChallenge from './CodeChallenge'

function HTMLPage() {
  return <Fragment>
    <h2>HTML Exercises</h2>
    <CodeChallenge
      title='1: Link to a new tab'
      description='Make a link to the Daily Bruin homepage that opens in a new tab (and is secure!)'
      hint={<Fragment>Remember to use <code>noopener</code> and <code>noreferrer</code></Fragment>}
      solution={`<a href='https://dailybruin.com' target='_blank' rel='noopener noreferrer'>Go to Daily Bruin</a>`}
      solutionDescription={<Fragment><code>target='_blank'</code> means open the link in a new tab. <code>rel='noopener noreferrer'</code> makes sure that the website, in this case dailybruin.com, cannot gain access or control this page.</Fragment>}
    />


    <CodeChallenge
      title='2: Page skeleton'
      description='Write out the basic page skeleton for any HTML5 page'
      hint='Be sure to include doctype, title, and charset'
      solution={`<!doctype html>
<html>
<head>
  <meta charset='utf-8'>
  <title>Page title goes here</title>
</head>
<body>
  Content goes here
</body>
</html>
`}
    />

    <CodeChallenge
      title='3: News article'
      description='As shown in the image, make a news article with a title, image, byline, and a paragraph. You can grab text/images from dailybruin.com'
      descriptionImg='/img/news-article-demo.jpg'
      solution={`<h1>In-person instructors experience excitement, hesitation ahead of return to campus</h1>
<img src='https://wp.dailybruin.com/images/2020/09/web.news_.inpersoncourses.CQ_.Benny_.jpg' alt='mask photo illustration' width='200'/>
<p><strong>By Bobby Hekel</strong></p>
<p>Darah Wilson said she is prepared for the fall and what it entails for her: being one of the first instructors at UCLA to return to in-person instruction.</p>`}
    />

    <CodeChallenge
      title='4: Headings'
      description='Make consecutive headings 1-6 with a horizontal rule through each one. Link h1 to DailyBruin.com'
      solution={`<h1><a href='https://dailybruin.com'>Heading 1</a></h1>
<hr />
<h2>Heading 2</h2>
<hr />
<h3>Heading 3</h3>
<hr />
<h4>Heading 4</h4>
<hr />
<h5>Heading 5</h5>
<hr />
<h6>Heading 6</h6>`}
    />

    <CodeChallenge
      title='5: Lists'
      description='Make a REVERSED ordered list with links to your top 5 favorite websites. Highlight your number one website'
      hint={<Fragment>You may need to use <a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol' target='_blank' rel='noopener noreferrer'>the MDN reference for <code>ol</code></a> to find how to reverse a list</Fragment>}
      solution={`<ol reversed>
  <li><a href='https://www.unicamp.org'>UCLA UniCamp</a></li>
  <li><a href='https://ucla.edu'>UCLA</a></li>
  <li><a href='https://wikipedia.org'>Wikipedia</a></li>
  <li><a href='https://developer.mozilla.org/en-US/'>MDN Web Docs</a></li>
  <li><mark><a href='https://dailybruin.com'>Daily Bruin</a></mark></li>
</ol>`}
    />

    <CodeChallenge
      title='6: Favorite quote'
      description={<Fragment>Use <code>blockquote</code> and <code>footer</code> tags to write your favorite quote with a citation of who said it.</Fragment>}
      hint={`We didn't talk about these tags, so search Google for "mdn blockquote" and "mdn footer" to learn about them. All the info you need for this is on MDN's <blockquote> tag page`}
      solution={`<p>Favorite quote:</p>
<blockquote>
  <p>Were it left to me to decide whether we should have a government without newspapers, or newspapers without a government, I should not hesitate a moment to prefer the latter.</p>
  <footer>—Benjamin Franklin</footer>
</blockquote>`}
    />

  </Fragment>
}

export default HTMLPage

import React, { Fragment } from 'react'
import CodeChallenge from './CodeChallenge'

function JSPage() {
  return <Fragment>
    <h2>Javascript Exercises</h2>
    <p>Click "run" or cmd/ctrl+enter to run your code. Right-click (anywhere on this page) > Inspect to access the Chrome Dev Tools and see your <code>console.log</code> messages.</p>

    <CodeChallenge
      title='1: Strings &amp; Arrays'
      description='Without modifying this array, return the string: "The winning lottery numbers are: 1, 2, 3, 4". Use string interpolation.'
      hint="You should only need two total lines of code. Use backticks for string interpolation and .join for the array"
      initialCode={`const lotteryNumbers = [1, 2, 3, 4]

return 'Your return value here'`}
      mode='js'
      solution={"const lotteryNumbers = [1, 2, 3, 4]\n\n"+
"return `The winning lottery numbers are: ${lotteryNumbers.join(', ')}.`"}
    />

    <CodeChallenge
      title='2: String transformation'
      description={<Fragment>Without modifying the first line, convert this string to the array <code>["THIS", "IS", "MY", "SAMPLE", "STRING"]</code></Fragment>}
      mode='js'
      initialCode={`const mystr = '   this is my sample string   '

return 'Your return value here'`}
      solution={`const mystr = '   this is my sample string   '

return mystr.toUpperCase().trim().split(' ')`}
    />

    <CodeChallenge
      title='3: Harder string transformation'
      description={<Fragment>Without modifying the first line, convert this string to the array <code>["THIS", "IS", "MY", "SAMPLE", "STRING"]</code></Fragment>}
      hint='Look up array.filter on MDN. Feel free to come back to this one at the end'
      mode='js'
      initialCode={`const mystr = '   this     is  my          sample string   '

return 'Your return value here'`}
      solution={`const mystr = '   this is my sample string   '

return mystr.toUpperCase().split(' ').filter(el => el.length)`}
    />

    <CodeChallenge
      title='4: Searching through strings'
      description="Fill in the function that will return true for any string that contains 'bruin' (case-insensitive). The return statement will return 'true' when it is correct. Don't modify the return statement!"
      mode='js'
      initialCode={`function hasBruin(str) {
  // Your code here. Return true or false
}

return hasBruin('I am a bruin') && hasBruin('I am a bRuIn') && !hasBruin('BR  UIN') && !hasBruin('I am not a trojan')`}
      solution={`function hasBruin(str) {
  return str.toLowerCase().includes('bruin')
}

return hasBruin('I am a bruin') && hasBruin('I am a bRuIn') && !hasBruin('BR  UIN') && !hasBruin('I am not a trojan')`}
    />

    <CodeChallenge
      title='5: Sorting an array'
      description="Sort this array. Expected output: ['a', 'b', 'c', 'd', 'e']"
      mode='js'
      hint="Don't write your own sort algorithm. Use array.sort()"
      initialCode={`const myArray = ['d', 'e', 'a', 'b', 'c']

return 'Your return value here'`}
      solution={`const myArray = ['d', 'e', 'a', 'b', 'c']

return myArray.sort()`}
    />

    <CodeChallenge
      title='6: Sorting another array'
      description="Only using .sort(), sort this array, case-insensitively. Expected output: ['A', 'b', 'C', 'd', 'E']"
      mode='js'
      hint=".sort() takes a 'compare function' as an argument. Look up the MDN docs for it and pay special attention to the values that the compare function needs to return. Come back to this one if you are stuck."
      initialCode={`const myArray = ['d', 'E', 'A', 'b', 'C']

return 'Your return value here'`}
      solution={`const myArray = ['d', 'E', 'A', 'b', 'C']

return myArray.sort((first, second) => {
  const a = first.toLowerCase()
  const b = second.toLowerCase()
  if(a < b) { return -1 }
  else if (b < a) { return 1 }
  return 0
})`}
    />

    <CodeChallenge
      title='7: Multiplying an array'
      description='Complete this function that takes in an array and multiplies every element by 2 into a new array. Expected output from the return statement: [2, 4, 6, 8, 10]'
      hint='Use the array.map() function'
      mode='js'
      initialCode={`const double = (arr) => {
  // Your code here...
}

return double([1, 2, 3, 4, 5])`}
      solution={`const double = (arr) => {
  return arr.map(el => el*2)
}

return double([1, 2, 3, 4, 5])`}
    />

    <h3><mark>DOM-specific exercises</mark></h3>
    <p>From here out, the code on the left side will run on the HTML specified above. The right pane shows the HTML preview.</p>
    <p>Right-click in the preview pane and click inspect to launch dev tools for that iframe.</p>


    <CodeChallenge
      title='8: Horizontal Rules'
      description='Delete all the <hr> tags from the page.'
      initialCode='// Your code here. No need for a return statement.'
      hint='HTML elements have a .remove() method that will remove them from the DOM'
      mode='jsdom'
      solution={`const nodes = document.querySelectorAll('hr')
for (node of nodes) {
  node.remove()
}`}
      htmlPart={`
<hr>
<h1>Help</h1>
<hr>
<hr>
<hr>
<p>We've been taken over by</p>
<hr>
<hr>
<p>horizontal rules!</p>
<hr>
<hr>
      `}
    />

    <CodeChallenge
      title='9: Add a class'
      description='Add the "huge" class to the SECOND (and only the second) paragraph'
      initialCode='// Your code here. No need for a return statement.'
      mode='jsdom'
      solution={`document.querySelectorAll('p')[1].classList = 'huge'`}
      htmlPart={`
<style>.huge { font-size: 2em; color: green; font-weight: bold; }</style>
<p>This is the first paragraph</p>
<p>This is the second paragraph</p>
<p>This is the third paragraph</p>
      `}
    />

    <CodeChallenge
      title='10: Alert!'
      description='Make this button pop up an alert that says "Hello World" when it is clicked. Select the button by id.'
      hint='You can send an alert by calling window.alert(). You can attack a click handler by setting the .onclick property of an element.'
      initialCode='// Your code here. No need for a return statement.'
      mode='jsdom'
      solution={`document.getElementById('myButton').onclick = () =>
	window.alert('Hello World')`}
      htmlPart={`<button id='myButton'>Click me!</button>`}
    />

    <CodeChallenge
      title="11: What's my IP?"
      description={<Fragment>Display the current user's IP address in the placeholder div#myip and remove the loading class. You can get the IP address from a web service at <code>//api.ipify.org?format=json</code>. <em>Note: you may need to disable your ad blocker for this to work</em></Fragment>}
      hint="Use fetch, try/catch, and .textContent. This is more complicated than the rest of the exercises, so we'll go over this one together."
      mode='jsdom'
      initialCode={`(async () => {
  // This is an immediately invoked async function
  // so you can use async/await here.
})()`}
      solution={`(async () => {
  let newText
  try {
    const resp = await fetch('//api.ipify.org?format=json')
    const obj = await resp.json()
    newText = obj.ip
  } catch (e) {
    console.error(e)
    newText = 'Error retrieving your IP address'
  }

  const container = document.getElementById('myip')
  container.classList = ''
  // innerHTML would be dangerous here. Use textContent instead.
  container.textContent = newText
})()`}
      htmlPart={`
<style>.loading { opacity: 0.2; } </style>
<h1>Your IP address is: <span id='myip' class='loading'>loading...</span></h1>
      `}
    />



  </Fragment>
}

export default JSPage

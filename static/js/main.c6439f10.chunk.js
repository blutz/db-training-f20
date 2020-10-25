(this.webpackJsonptraining=this.webpackJsonptraining||[]).push([[0],{23:function(e,t,n){e.exports={container:"CodeChallenge_container__OrRtk"}},30:function(e,t,n){},31:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n(1),r=n.n(o),s=n(20),a=n.n(s),c=(n(30),n(31),n(10)),l=n(2);var d=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Slides"}),Object(i.jsx)("p",{children:"Navigate the non-Google slides with the arrows in the corner or the arrow keys on your keyboard"}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"/slides/intro.html",children:"Intro/Journalism"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"/slides/html.html",children:"HTML"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"/slides/css.html",children:"CSS"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"https://docs.google.com/presentation/d/1sjXNHiMxkigvD12SvLz6XNOe89u5Y4BbFOCHJoAaK_M/edit?usp=sharing",children:"Git"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"https://docs.google.com/presentation/d/1iOlrF8uuqd06nXTuriemlNTDcuYkdnNVvwmXkSNNiPU/edit?usp=sharing",children:"React"})})]})]})},h=n(9),u=n(21),m=n.n(u),j=n(22),p=n(7),b=n.n(p),g=(n(32),n(18),n(35),n(36),function(){var e=new WeakSet;return function(t,n){if("object"===typeof n&&null!==n){if(e.has(n))return;e.add(n)}return n}});function f(e,t){return t?t+"<script>"+e+"<\/script>":e}var y=function(e){var t=e.initialCode,n=e.editable,r=void 0===n||n,s=e.mode,a=void 0===s?"html":s,c=e.htmlPart,l="js"===a||"jsdom"===a,d=Object(o.useState)(t||""),u=Object(h.a)(d,2),m=u[0],p=u[1],y=Object(o.useState)(f(m,c)),x=Object(h.a)(y,2),O=x[0],w=x[1],C=Object(o.useState)(""),v=Object(h.a)(C,2),k=v[0],S=v[1],T=Object(o.useCallback)((function(e){w(f(e,c))}),[w,c]);Object(o.useEffect)((function(){l||T(m)}),[m,l,T]);var N="htmlmixed";return"js"!==a&&"jsdom"!==a||(N="javascript"),Object(i.jsxs)("div",{className:b.a.wrapper,children:[Object(i.jsxs)("div",{className:b.a.editorContainer,onKeyDown:function(e){(e.ctrlKey||e.metaKey)&&13===e.keyCode&&T(m)},children:[Object(i.jsx)("div",{className:b.a.title,children:"Editor"}),Object(i.jsx)(j.Controlled,{className:b.a.editor,value:m,onBeforeChange:function(e,t,n){r&&p(n)},options:{mode:N,theme:"dracula",lineNumbers:!0,lineWrapping:!0}})]}),l&&r&&Object(i.jsx)("button",{className:b.a.runButton,onClick:function(){return T(m)},children:"Run \u25b6\ufe0f"}),Object(i.jsxs)("div",{className:b.a.resultContainer,children:[Object(i.jsx)("div",{className:b.a.title,children:"Output/Return"}),"js"===a?Object(i.jsxs)(o.Fragment,{children:[Object(i.jsx)("iframe",{srcDoc:"<script>\n              window.myFunction = () => { ".concat(O," }\n            <\/script>"),title:"result",className:b.a.resultHidden,onLoad:function(e){e.target.contentWindow.myFunction&&S(e.target.contentWindow.myFunction())}}),Object(i.jsx)("div",{className:b.a.jsReturn,children:JSON.stringify(k,g())})]}):Object(i.jsx)("iframe",{srcDoc:O,title:"result",className:b.a.result})]})]})},x=n(23),O=n.n(x);var w=function(e){var t=e.title,n=e.description,r=e.descriptionImg,s=e.hint,a=e.initialCode,c=e.solution,l=e.solutionDescription,d=e.htmlPart,u=e.mode,j=void 0===u?"html":u,p=Object(o.useState)(!1),b=Object(h.a)(p,2),g=b[0],f=b[1];return Object(i.jsxs)("section",{className:O.a.container,children:[Object(i.jsx)("h3",{children:t}),Object(i.jsxs)("div",{style:{display:"flex"},children:[Object(i.jsx)("p",{style:{flex:1},children:n}),r&&Object(i.jsx)("div",{style:{flex:.5,maxWidth:"50%"},children:Object(i.jsx)("img",{src:r,alt:"Sample",style:{maxWidth:"100%"}})})]}),s&&Object(i.jsxs)("div",{children:[Object(i.jsx)("strong",{children:"Hint:"}),"\xa0",Object(i.jsx)(m.a,{className:"spoiler",children:s})]}),d&&Object(i.jsxs)("div",{children:[Object(i.jsx)("strong",{children:"HTML:"}),Object(i.jsx)("pre",{children:d})]}),Object(i.jsx)(y,{initialCode:a||"",mode:j,htmlPart:d}),Object(i.jsxs)("button",{onClick:function(){return f(!g)},children:[g?"Hide":"Show"," sample solution"]}),g&&Object(i.jsxs)("div",{children:[Object(i.jsx)(y,{initialCode:c,editable:!1,mode:j,htmlPart:d}),Object(i.jsx)("p",{children:l})]})]})};var C=function(){return Object(i.jsxs)(o.Fragment,{children:[Object(i.jsx)("h2",{children:"HTML Exercises"}),Object(i.jsx)(w,{title:"1: Link to a new tab",description:"Make a link to the Daily Bruin homepage that opens in a new tab (and is secure!)",hint:Object(i.jsxs)(o.Fragment,{children:["Remember to use ",Object(i.jsx)("code",{children:"noopener"})," and ",Object(i.jsx)("code",{children:"noreferrer"})]}),solution:"<a href='https://dailybruin.com' target='_blank' rel='noopener noreferrer'>Go to Daily Bruin</a>",solutionDescription:Object(i.jsxs)(o.Fragment,{children:[Object(i.jsx)("code",{children:"target='_blank'"})," means open the link in a new tab. ",Object(i.jsx)("code",{children:"rel='noopener noreferrer'"})," makes sure that the website, in this case dailybruin.com, cannot gain access or control this page."]})}),Object(i.jsx)(w,{title:"2: Page skeleton",description:"Write out the basic page skeleton for any HTML5 page",hint:"Be sure to include doctype, title, and charset",solution:"<!doctype html>\n<html>\n<head>\n  <meta charset='utf-8'>\n  <title>Page title goes here</title>\n</head>\n<body>\n  Content goes here\n</body>\n</html>\n"}),Object(i.jsx)(w,{title:"3: News article",description:"As shown in the image, make a news article with a title, image, byline, and a paragraph. You can grab text/images from dailybruin.com",descriptionImg:"".concat("","/img/news-article-demo.jpg"),solution:"<h1>In-person instructors experience excitement, hesitation ahead of return to campus</h1>\n<img src='https://wp.dailybruin.com/images/2020/09/web.news_.inpersoncourses.CQ_.Benny_.jpg' alt='mask photo illustration' width='200'/>\n<p><strong>By Bobby Hekel</strong></p>\n<p>Darah Wilson said she is prepared for the fall and what it entails for her: being one of the first instructors at UCLA to return to in-person instruction.</p>"}),Object(i.jsx)(w,{title:"4: Headings",description:"Make consecutive headings 1-6 with a horizontal rule through each one. Link h1 to DailyBruin.com",solution:"<h1><a href='https://dailybruin.com'>Heading 1</a></h1>\n<hr />\n<h2>Heading 2</h2>\n<hr />\n<h3>Heading 3</h3>\n<hr />\n<h4>Heading 4</h4>\n<hr />\n<h5>Heading 5</h5>\n<hr />\n<h6>Heading 6</h6>"}),Object(i.jsx)(w,{title:"5: Lists",description:"Make a REVERSED ordered list with links to your top 5 favorite websites. Highlight your number one website",hint:Object(i.jsxs)(o.Fragment,{children:["You may need to use ",Object(i.jsxs)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol",target:"_blank",rel:"noopener noreferrer",children:["the MDN reference for ",Object(i.jsx)("code",{children:"ol"})]})," to find how to reverse a list"]}),solution:"<ol reversed>\n  <li><a href='https://www.unicamp.org'>UCLA UniCamp</a></li>\n  <li><a href='https://ucla.edu'>UCLA</a></li>\n  <li><a href='https://wikipedia.org'>Wikipedia</a></li>\n  <li><a href='https://developer.mozilla.org/en-US/'>MDN Web Docs</a></li>\n  <li><mark><a href='https://dailybruin.com'>Daily Bruin</a></mark></li>\n</ol>"}),Object(i.jsx)(w,{title:"6: Favorite quote",description:Object(i.jsxs)(o.Fragment,{children:["Use ",Object(i.jsx)("code",{children:"blockquote"})," and ",Object(i.jsx)("code",{children:"footer"})," tags to write your favorite quote with a citation of who said it."]}),hint:'We didn\'t talk about these tags, so search Google for "mdn blockquote" and "mdn footer" to learn about them. All the info you need for this is on MDN\'s <blockquote> tag page',solution:"<p>Favorite quote:</p>\n<blockquote>\n  <p>Were it left to me to decide whether we should have a government without newspapers, or newspapers without a government, I should not hesitate a moment to prefer the latter.</p>\n  <footer>\u2014Benjamin Franklin</footer>\n</blockquote>"})]})};var v=function(){return Object(i.jsxs)(o.Fragment,{children:[Object(i.jsx)("h2",{children:"CSS Exercises"}),Object(i.jsx)("p",{children:"In these, add CSS styles to match the example image"}),Object(i.jsx)(w,{title:"1: Text styling",descriptionImg:"/img/css1.jpg",hint:'On PCs, the font is "Comic Sans" but on other platforms it\'s "Comic Sans MS". How can you make sure the correct font is displayed on all computers?',initialCode:"<style>\n\n</style>\n\n<p>Undergraduate Students Association Council Facilities Commission and Financial Supports Commission partnered with the Westwood Village Improvement Association to create the coupon code, \u201cILOVEWESTWOOD,\u201d announced via social media on Oct 13. Customers can use the code in person or via phone.</p>\n<p>Twelve restaurants, including Sweetfin Poke, Nick the Greek and Pinches Tacos have signed onto the initiative so far to offer discounts to UCLA students and faculty. Students can get 20% off orders at Tocaya Organica and $0.99 fish tacos from Baja California Tacos on Wednesdays.</p>\n<p>USAC Facilities Commissioner Sachi Cooper said USAC created the coupons to make food more affordable to the UCLA community during a difficult financial time. FAC promoted the discounts on social media, designed graphics for the coupons and flyers and published ads on Twitter and Instagram.</p>\n<p>The coupon codes will also benefit the many struggling businesses in the Village, said Cooper, a third-year geography student.</p>",solution:"<style>\n  p {\n    font-family: 'Comic Sans', 'Comic Sans MS', sans-serif;\n    font-weight: bold;\n    text-align: right;\n    color: green;\n    line-height: 2rem;\n    text-decoration: underline;\n    font-size: 1.2rem;\n    font-style: italic;\n    text-shadow: 0 2px 3px red;\n  }\n</style>\n\n<p>Undergraduate Students Association Council Facilities Commission and Financial Supports Commission partnered with the Westwood Village Improvement Association to create the coupon code, \u201cILOVEWESTWOOD,\u201d announced via social media on Oct 13. Customers can use the code in person or via phone.</p>\n<p>Twelve restaurants, including Sweetfin Poke, Nick the Greek and Pinches Tacos have signed onto the initiative so far to offer discounts to UCLA students and faculty. Students can get 20% off orders at Tocaya Organica and $0.99 fish tacos from Baja California Tacos on Wednesdays.</p>\n<p>USAC Facilities Commissioner Sachi Cooper said USAC created the coupons to make food more affordable to the UCLA community during a difficult financial time. FAC promoted the discounts on social media, designed graphics for the coupons and flyers and published ads on Twitter and Instagram.</p>\n<p>The coupon codes will also benefit the many struggling businesses in the Village, said Cooper, a third-year geography student.</p>"}),Object(i.jsx)(w,{title:"2: Block styling",description:"Make sure there is no horizontal (or vertical) scroll within the pane, but the box should be full width",hint:'Remember, box-sizing is your friend. Look up box-shadow on MDN and look for "inset". Look up "border-radius" on MDN',descriptionImg:"/img/css2.jpg",initialCode:"<style>\n</style>\n\n<div>This is my content</div>",solution:"<style>\ndiv {\n  width: 100%;\n  background-color: pink;\n  padding: 100px 0 0 50px;\n  box-sizing: border-box;\n  color: purple;\n  box-shadow: 0 0 8px rgba(0,0,0,0.5) inset;\n  border-radius: 20px;\n}\n</style>\n\n<div>This is my content</div>"})]})};var k=function(){return Object(i.jsxs)(o.Fragment,{children:[Object(i.jsx)("h2",{children:"Javascript Exercises"}),Object(i.jsxs)("p",{children:['Click "run" or cmd/ctrl+enter to run your code. Right-click (anywhere on this page) > Inspect to access the Chrome Dev Tools and see your ',Object(i.jsx)("code",{children:"console.log"})," messages."]}),Object(i.jsx)(w,{title:"1: Strings & Arrays",description:'Without modifying this array, return the string: "The winning lottery numbers are: 1, 2, 3, 4". Use string interpolation.',hint:"You should only need two total lines of code. Use backticks for string interpolation and .join for the array",initialCode:"const lotteryNumbers = [1, 2, 3, 4]\n\nreturn 'Your return value here'",mode:"js",solution:"const lotteryNumbers = [1, 2, 3, 4]\n\nreturn `The winning lottery numbers are: ${lotteryNumbers.join(', ')}.`"}),Object(i.jsx)(w,{title:"2: String transformation",description:Object(i.jsxs)(o.Fragment,{children:["Without modifying the first line, convert this string to the array ",Object(i.jsx)("code",{children:'["THIS", "IS", "MY", "SAMPLE", "STRING"]'})]}),mode:"js",initialCode:"const mystr = '   this is my sample string   '\n\nreturn 'Your return value here'",solution:"const mystr = '   this is my sample string   '\n\nreturn mystr.toUpperCase().trim().split(' ')"}),Object(i.jsx)(w,{title:"3: Harder string transformation",description:Object(i.jsxs)(o.Fragment,{children:["Without modifying the first line, convert this string to the array ",Object(i.jsx)("code",{children:'["THIS", "IS", "MY", "SAMPLE", "STRING"]'})]}),hint:"Look up string.filter on MDN. Feel free to come back to this one at the end",mode:"js",initialCode:"const mystr = '   this     is  my          sample string   '\n\nreturn 'Your return value here'",solution:"const mystr = '   this is my sample string   '\n\nreturn mystr.toUpperCase().split(' ').filter(el => el.length)"}),Object(i.jsx)(w,{title:"4: Searching through strings",description:"Fill in the function that will return true for any string that contains 'bruin' (case-insensitive). The return statement will return 'true' when it is correct. Don't modify the return statement!",mode:"js",initialCode:"function hasBruin(str) {\n  // Your code here. Return true or false\n}\n\nreturn hasBruin('I am a bruin') && hasBruin('I am a bRuIn') && !hasBruin('BR  UIN') && !hasBruin('I am not a trojan')",solution:"function hasBruin(str) {\n  return str.toLowerCase().includes('bruin')\n}\n\nreturn hasBruin('I am a bruin') && hasBruin('I am a bRuIn') && !hasBruin('BR  UIN') && !hasBruin('I am not a trojan')"}),Object(i.jsx)(w,{title:"5: Sorting an array",description:"Sort this array. Expected output: ['a', 'b', 'c', 'd', 'e']",mode:"js",hint:"Don't write your own sort algorithm. Use array.sort()",initialCode:"const myArray = ['d', 'e', 'a', 'b', 'c']\n\nreturn 'Your return value here'",solution:"const myArray = ['d', 'e', 'a', 'b', 'c']\n\nreturn myArray.sort()"}),Object(i.jsx)(w,{title:"6: Sorting another array",description:"Only using .sort(), sort this array, case-insensitively. Expected output: ['A', 'b', 'C', 'd', 'E']",mode:"js",hint:".sort() takes a 'compare function' as an argument. Look up the MDN docs for it and pay special attention to the values that the compare function needs to return. Come back to this one if you are stuck.",initialCode:"const myArray = ['d', 'E', 'A', 'b', 'C']\n\nreturn 'Your return value here'",solution:"const myArray = ['d', 'E', 'A', 'b', 'C']\n\nreturn myArray.sort((first, second) => {\n  const a = first.toLowerCase()\n  const b = second.toLowerCase()\n  if(a < b) { return -1 }\n  else if (b < a) { return 1 }\n  return 0\n})"}),Object(i.jsx)(w,{title:"7: Multiplying an array",description:"Complete this function that takes in an array and multiplies every element by 2 into a new array. Expected output from the return statement: [2, 4, 6, 8, 10]",hint:"Use the array.map() function",mode:"js",initialCode:"const double = (arr) => {\n  // Your code here...\n}\n\nreturn double([1, 2, 3, 4, 5])",solution:"const double = (arr) => {\n  return arr.map(el => el*2)\n}\n\nreturn double([1, 2, 3, 4, 5])"}),Object(i.jsx)("h3",{children:Object(i.jsx)("mark",{children:"DOM-specific exercises"})}),Object(i.jsx)("p",{children:"From here out, the code on the left side will run on the HTML specified above. The right pane shows the HTML preview."}),Object(i.jsx)("p",{children:"Right-click in the preview pane and click inspect to launch dev tools for that iframe."}),Object(i.jsx)(w,{title:"8: Horizontal Rules",description:"Delete all the <hr> tags from the page.",initialCode:"// Your code here. No need for a return statement.",hint:"HTML elements have a .remove() method that will remove them from the DOM",mode:"jsdom",solution:"const nodes = document.querySelectorAll('hr')\nfor (node of nodes) {\n  node.remove()\n}",htmlPart:"\n<hr>\n<h1>Help</h1>\n<hr>\n<hr>\n<hr>\n<p>We've been taken over by</p>\n<hr>\n<hr>\n<p>horizontal rules!</p>\n<hr>\n<hr>\n      "}),Object(i.jsx)(w,{title:"9: Add a class",description:'Add the "huge" class to the SECOND (and only the second) paragraph',initialCode:"// Your code here. No need for a return statement.",mode:"jsdom",solution:"document.querySelectorAll('p')[1].classList = 'huge'",htmlPart:"\n<style>.huge { font-size: 2em; color: green; font-weight: bold; }</style>\n<p>This is the first paragraph</p>\n<p>This is the second paragraph</p>\n<p>This is the third paragraph</p>\n      "}),Object(i.jsx)(w,{title:"10: Alert!",description:'Make this button pop up an alert that says "Hello World" when it is clicked. Select the button by id.',hint:"You can send an alert by calling window.alert(). You can attack a click handler by setting the .onclick property of an element.",initialCode:"// Your code here. No need for a return statement.",mode:"jsdom",solution:"document.getElementById('myButton').onclick = () =>\n\twindow.alert('Hello World')",htmlPart:"<button id='myButton'>Click me!</button>"}),Object(i.jsx)(w,{title:"11: What's my IP?",description:Object(i.jsxs)(o.Fragment,{children:["Display the current user's IP address in the placeholder div#myip and remove the loading class. You can get the IP address from a web service at ",Object(i.jsx)("code",{children:"//api.ipify.org?format=json"}),". ",Object(i.jsx)("em",{children:"Note: you may need to disable your ad blocker for this to work"})]}),hint:"Use fetch, try/catch, and .textContent. This is more complicated than the rest of the exercises, so we'll go over this one together.",mode:"jsdom",initialCode:"(async () => {\n  // This is an immediately invoked async function\n  // so you can use async/await here.\n})()",solution:"(async () => {\n  let newText\n  try {\n    const resp = await fetch('//api.ipify.org?format=json')\n    const obj = await resp.json()\n    newText = obj.ip\n  } catch (e) {\n    console.error(e)\n    newText = 'Error retrieving your IP address'\n  }\n\n  const container = document.getElementById('myip')\n  container.classList = ''\n  // innerHTML would be dangerous here. Use textContent instead.\n  container.textContent = newText\n})()",htmlPart:"\n<style>.loading { opacity: 0.2; } </style>\n<h1>Your IP address is: <span id='myip' class='loading'>loading...</span></h1>\n      "})]})};var S=function(){return Object(i.jsx)(c.a,{children:Object(i.jsxs)("div",{className:"App",children:[Object(i.jsxs)("nav",{children:[Object(i.jsxs)("h1",{children:["Daily Bruin Online Training ",Object(i.jsx)("em",{children:"Fall 2020"})]}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:Object(i.jsx)(c.b,{exact:!0,to:"/",children:"Home"})}),Object(i.jsx)("li",{children:Object(i.jsx)(c.b,{to:"/html",children:"HTML"})}),Object(i.jsx)("li",{children:Object(i.jsx)(c.b,{to:"/css",children:"CSS"})}),Object(i.jsx)("li",{children:Object(i.jsx)(c.b,{to:"/js",children:"Javascript"})})]})]}),Object(i.jsxs)(l.c,{children:[Object(i.jsx)(l.a,{path:"/html",children:Object(i.jsx)(C,{})}),Object(i.jsx)(l.a,{path:"/css",children:Object(i.jsx)(v,{})}),Object(i.jsx)(l.a,{path:"/js",children:Object(i.jsx)(k,{})}),Object(i.jsx)(l.a,{path:"/",children:Object(i.jsx)(d,{})})]})]})})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,i=t.getFID,o=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),i(e),o(e),r(e),s(e)}))};a.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(S,{})}),document.getElementById("root")),T()},7:function(e,t,n){e.exports={wrapper:"CodeDemo_wrapper__C_Lnz",editorContainer:"CodeDemo_editorContainer__p9uO-",resultContainer:"CodeDemo_resultContainer__2W-ru",result:"CodeDemo_result__EJmH6",title:"CodeDemo_title__38h0H",resultHidden:"CodeDemo_resultHidden__qtHMC",jsReturn:"CodeDemo_jsReturn__2Rp9s",runButton:"CodeDemo_runButton__1fkGj"}}},[[41,1,2]]]);
//# sourceMappingURL=main.c6439f10.chunk.js.map
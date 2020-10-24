import React, { Fragment } from 'react'
import CodeChallenge from './CodeChallenge'

function CSSPage() {
  return <Fragment>
    <h2>CSS Exercises</h2>
    <p>In these, add CSS styles to match the example image</p>
    <CodeChallenge
      title='1: Text styling'
      descriptionImg='/img/css1.jpg'
      hint={`On PCs, the font is "Comic Sans" but on other platforms it's "Comic Sans MS". How can you make sure the correct font is displayed on all computers?`}
      initialCode={`<style>

</style>

<p>Undergraduate Students Association Council Facilities Commission and Financial Supports Commission partnered with the Westwood Village Improvement Association to create the coupon code, “ILOVEWESTWOOD,” announced via social media on Oct 13. Customers can use the code in person or via phone.</p>
<p>Twelve restaurants, including Sweetfin Poke, Nick the Greek and Pinches Tacos have signed onto the initiative so far to offer discounts to UCLA students and faculty. Students can get 20% off orders at Tocaya Organica and $0.99 fish tacos from Baja California Tacos on Wednesdays.</p>
<p>USAC Facilities Commissioner Sachi Cooper said USAC created the coupons to make food more affordable to the UCLA community during a difficult financial time. FAC promoted the discounts on social media, designed graphics for the coupons and flyers and published ads on Twitter and Instagram.</p>
<p>The coupon codes will also benefit the many struggling businesses in the Village, said Cooper, a third-year geography student.</p>`}
      solution={`<style>
  p {
    font-family: 'Comic Sans', 'Comic Sans MS', sans-serif;
    font-weight: bold;
    text-align: right;
    color: green;
    line-height: 2rem;
    text-decoration: underline;
    font-size: 1.2rem;
    font-style: italic;
    text-shadow: 0 2px 3px red;
  }
</style>

<p>Undergraduate Students Association Council Facilities Commission and Financial Supports Commission partnered with the Westwood Village Improvement Association to create the coupon code, “ILOVEWESTWOOD,” announced via social media on Oct 13. Customers can use the code in person or via phone.</p>
<p>Twelve restaurants, including Sweetfin Poke, Nick the Greek and Pinches Tacos have signed onto the initiative so far to offer discounts to UCLA students and faculty. Students can get 20% off orders at Tocaya Organica and $0.99 fish tacos from Baja California Tacos on Wednesdays.</p>
<p>USAC Facilities Commissioner Sachi Cooper said USAC created the coupons to make food more affordable to the UCLA community during a difficult financial time. FAC promoted the discounts on social media, designed graphics for the coupons and flyers and published ads on Twitter and Instagram.</p>
<p>The coupon codes will also benefit the many struggling businesses in the Village, said Cooper, a third-year geography student.</p>`}
    />

    <CodeChallenge
      title='2: Block styling'
      description='Make sure there is no horizontal (or vertical) scroll within the pane, but the box should be full width'
      hint='Remember, box-sizing is your friend. Look up box-shadow on MDN and look for "inset". Look up "border-radius" on MDN'
      descriptionImg='/img/css2.jpg'
      initialCode={`<style>
</style>

<div>This is my content</div>`}
      solution={`<style>
div {
  width: 100%;
  background-color: pink;
  padding: 100px 0 0 50px;
  box-sizing: border-box;
  color: purple;
  box-shadow: 0 0 8px rgba(0,0,0,0.5) inset;
  border-radius: 20px;
}
</style>

<div>This is my content</div>`}

    />
  </Fragment>
}

export default CSSPage

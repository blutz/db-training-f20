import { useState, Fragment } from React

function SayHi() {
  const [name, setName] = useState('human')
  const [popupShown, setPopupShown] = useState(false)
  return <Fragment>
    <label>
      Your name
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </label>
    <button onClick={() => setPopupShown(true)}>Say Hello</button>
    <Popup shown={popupShown} onClose={() => setPopupShown(false)}>
      Hello {name}!
    </Popup>
  </Fragment>
}

function Popup({children, shown, onClose}) {
  if(!shown) { return null }
  return <div>
    {children}
    <button onClick={onClose}>&times;</button>
  </div>
}

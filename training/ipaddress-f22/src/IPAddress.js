import { Fragment, useEffect, useState } from 'react'
import './IPAddress.css'

const URL = '//api.ipify.org?format=json'

async function getIP() {
  return (await (await fetch(URL)).json()).ip
}

function IPAddress() {
  const [ip, setIp] = useState()
  const [error, setError] = useState()
  const [ready, setReady] = useState(false)
  useEffect(() => {
    (async () => {
      try {
        setIp(await getIP())
        setError(null)
      } catch (e) {
        setError(e)
        setIp(null)
      } finally {
        setReady(true)
      }
    })()
  }, [])
  if(!ready) {
    return <span className='loading'>Loading&hellip;</span>
  }
  return <Fragment>
    {error && <span className='error'>
      Error: {error?.message || JSON.stringify(error)}
    </span>}
    {ip}
  </Fragment>
}

export default IPAddress

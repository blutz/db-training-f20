import { Fragment, useState, useEffect } from 'react'
import './IPAddress.css'

const URL = '//api.ipify.org?format=json'

function IPAddress() {
  const [ready, setReady] = useState(false)
  const [error, setError] = useState(null)
  const [ip, setIp] = useState()
  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(URL)
        const data = await res.json()
        setIp(data.ip)
        setError(null)
      } catch(e) {
        setError(e.message)
      } finally {
        setReady(true)
      }
    }
    getData()
  }, [])

  if(!ready) { return <Fragment>Loading...</Fragment> }

  return <Fragment>
    <span className='error'>{error}</span>
    {ip}
  </Fragment>
}

export default IPAddress

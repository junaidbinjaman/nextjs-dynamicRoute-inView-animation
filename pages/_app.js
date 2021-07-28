import { createContext, useState } from 'react'
import '../styles/globals.css'

export const RoutePatch = createContext()

function MyApp({ Component, pageProps }) {
  const [route, setRoute] = useState('')
  return (
    <RoutePatch.Provider value={[route, setRoute]}>
      <Component {...pageProps} />
    </RoutePatch.Provider>
  )
}

export default MyApp

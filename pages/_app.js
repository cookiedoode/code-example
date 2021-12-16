import Nav from '../src/components/nav'
import '../styles/global.css'

const App = ({ Component, pageProps }) => {
  return (
      <div>
        <Nav />
        <Component {...pageProps} />
      </div>      
  )
}

export default App
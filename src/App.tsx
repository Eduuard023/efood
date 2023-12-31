import { BrowserRouter } from 'react-router-dom'
import Rotas from './routes'
import Footer from './components/Footer'
import { GlobalCss } from './styles'

const App = () => {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App

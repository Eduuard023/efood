import CardList from './components/CardList'
import Footer from './components/Footer'
import Header from './components/Header'
import { GlobalCss } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <div className="container">
        <CardList />
      </div>
      <Footer />
    </>
  )
}

export default App

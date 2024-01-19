import './App.css'
import Search from './components/Search/Search'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <div>
      <Header />
      <main>
        <Search />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App

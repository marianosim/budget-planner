import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AppProvider } from './components/context/AppContext';
import { CardsContainer } from './components/Cards/CardsContainer';
import { MainContent } from './components/MainContent/MainContent';
import { NavBar } from './components/navbar/NavBar';


const App = () => {

  return (
    <BrowserRouter>
      <AppProvider>
        <div className='container'>
          <NavBar />
          <CardsContainer />
          <Routes>
            <Route path='/' element={<MainContent />} />
          </Routes>
        </div>
      </AppProvider>
    </BrowserRouter>

  )
}

export default App;
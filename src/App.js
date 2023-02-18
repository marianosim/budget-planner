import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import { Budget } from './components/Cards/Budget';
// import { Remaining } from './components/Cards/Remaining';
// import { ExpenseTotal } from './components/Cards/ExpenseTotal';
// import { ExpenseList } from './components/ExpenseList/ExpenseList';
// import { AddExpenseForm } from './components/AddExpenseForm/AddExpenseForm';
import { AppProvider } from './components/context/AppContext';
import { CardsContainer } from './components/Cards/CardsContainer';
import { MainContent } from './components/Main Content/MainContent';
import { NavBar } from './components/navbar/NavBar';


const App = () => {

  return (
    <BrowserRouter>
      <AppProvider>
        <div className='container'>
          <NavBar/>
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
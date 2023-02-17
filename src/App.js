import 'bootstrap/dist/css/bootstrap.min.css';
import { Budget } from './components/Cards/Budget';
import { Remaining } from './components/Cards/Remaining';
import { ExpenseTotal } from './components/Cards/ExpenseTotal';
import { ExpenseList } from './components/ExpenseList/ExpenseList';
import { AddExpenseForm } from './components/AddExpenseForm/AddExpenseForm';
import { AppProvider } from './components/context/AppContext';


const App = () => {
 
  return (
    <AppProvider>
      <div className='container'>
        <nav className='navbar-dark bg-dark mt-3'>My Budget Planner</nav>
        <div className='row mt-3'>
          <div className='col-sm'>
            <Budget />
          </div>
          <div className='col-sm'>
            <Remaining />
          </div>
          <div className='col-sm'>
            <ExpenseTotal />
          </div>
        </div>
        <h3 className='mt-3'>Expenses</h3>
        <div className='row-mt3'>
          <div className='col-sm'>
            <ExpenseList />
          </div>
          <h3 className='mt-3'>Add Expense:</h3>
          <div className='mt-3'>
            <div className='col-sm'>
              <AddExpenseForm />
            </div>
          </div>
        </div>
      </div>
    </AppProvider>
  )
}

export default App;
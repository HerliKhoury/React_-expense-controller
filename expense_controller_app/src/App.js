import Expenses from './components/Expenses/Expenses';
import './App.css';
import NewExpense from './components/NewExpense/NewExpense';

function App() {

  const expenses = [{
    title:'Magic cards',
    amount:120.45,
    date:new Date(2022, 3, 28)
  },{
    title:'Card Box',
    amount:40.45,
    date:new Date(2022, 7, 6)
  }];

  const addExpenseHandler = expense => {
    console.log('In APP.js');
    console.log(expense);
  };

  

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;

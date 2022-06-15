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

  

  return (
    <div className="App">
      <NewExpense/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;

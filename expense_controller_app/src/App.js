import ExpenseItem from './components/ExpenseItem';
import './App.css';

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
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />

      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />  
    </div>
  );
}

export default App;

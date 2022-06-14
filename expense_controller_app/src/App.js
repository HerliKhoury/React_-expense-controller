import Expenses from './components/Expenses';
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
       <Expenses items={expenses}/>
    </div>
  );
}

export default App;

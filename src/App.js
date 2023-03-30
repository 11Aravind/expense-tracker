import './App.css';
import {Expensetracker} from './component/Expensetracker'
function App() {
  return (
  <>
  <div className="Container">
  <div className="mainContainer">
      <h4>Expense Tracker</h4>
  <Expensetracker/>
  </div>
  <div className="image">
    <img src="https://cdni.iconscout.com/illustration/premium/thumb/manage-expenses-7074226-5752244.png" alt="image" />
  </div>
  </div>
  </>
  );
}

export default App;

import NewCost from "./NewCost";
import Costs from "./Costs";
function App() {
  const cost =[
    {
      date: new Date(2025, 2, 3),
      description:"Холодильник",
      amount: 20000
    },
    {
      date: new Date(2025, 6, 3),
      description:"Джинсы",
      amount: 10000
    },
    {
      date: new Date(2025, 2, 3),
      description:"Монитор",
      amount: 25000
    }
  ]
  return (
    <div>
      <NewCost />
      <Costs cost = {cost}
      />
    </div>
    
  );
}

export default App;

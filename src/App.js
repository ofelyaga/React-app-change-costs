import NewCost from "./NewCost";
import Costs from "./Costs";
import React, { useState } from "react";

const INITIAL_COSTS =[
  {
    id:'0',
    date: new Date(2025, 2, 3),
    description:"Холодильник",
    amount: 20000
  },
  {
    id:'2',
    date: new Date(2025, 6, 3),
    description:"Джинсы",
    amount: 10000
  },
  {
    id:'9',
    date: new Date(2025, 2, 3),
    description:"Монитор",
    amount: 25000
  }
]
function App() {
  const [costs,setCosts] = useState(INITIAL_COSTS)
  const addCostHandler = (cost)=>{
    setCosts(prevValues=>{
      return[cost,...prevValues]
    })
  }
  return (
    <div>
      <NewCost onAddCost = {addCostHandler}/>
      <Costs costs = {costs}
      />
    </div>
    
  );
}

export default App;

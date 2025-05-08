import CostsFilter from "./CostFilter";
import CostItem from "./CostItem"
import "./costs.css"
function Costs(props) {
    console.log(props)
    return (
        <div>
            {/* <CostsFilter></CostsFilter> */}
            {
                props.costs.map(
                    (cost)=>{
                        <CostItem
                        date={cost.date}
                        description={cost.description}
                        amount={cost.amount}
                    ></CostItem>
                    }
                )
            }
           
            
        </div>
    )
}
export default Costs;
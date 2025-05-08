import CostForm from "./CostForm";
import './newCost.css'
function NewCost(props){
    const saveCostData = (inputCostData)=>{
        const costData = {
            ...inputCostData,
            id:Math.random().toString()
        }
        console.log(costData)
        props.onAddCost(costData)
    }
    return(
        <div className="new-cost">
            <CostForm onSaveCostData ={saveCostData}></CostForm>
        </div>
    )
}
export default NewCost;
import { useState } from "react";
import CostForm from "./CostForm";
import './newCost.css'

function NewCost(props){
    const [isFormVisible, setIsFormVisible]=useState(false)
    const saveCostData = (inputCostData)=>{
        const costData = {
            ...inputCostData,
            id:Math.random().toString()
        }
        console.log(costData)
        props.onAddCost(costData)
    }
    const inputCost = ()=>{
        setIsFormVisible(true)
    }
    const cancelCostAdd = ()=>{
        setIsFormVisible(false)
    }
    return(
        <div className="new-cost">
            {
                !isFormVisible && <button onClick ={inputCost}>Добавить новый расход</button>
            }
            {
                isFormVisible && <CostForm onSaveCostData ={saveCostData} onCancel = {cancelCostAdd}></CostForm>
            }
            
        </div>
    )
}
export default NewCost;
import CostsFilter from "./CostFilter";
import CostList from "./CostList";
import "./costs.css";
import React, {useState} from "react";
function Costs(props) {
    const [selectedYear, setSelectedYear]=useState('2021')
    const yearChangeHandler=(year)=>{
        setSelectedYear(year)
    }
    const filteredCosts = props.costs.filter((costs)=>{
        return costs.date.getFullYear().toString()===selectedYear
    })
    console.log(props)
    return (
        <div>
             <CostsFilter year = {selectedYear} onChangeYear = {yearChangeHandler}></CostsFilter>   
             <CostList costs = {filteredCosts}></CostList>
        </div>
    )
}
export default Costs;
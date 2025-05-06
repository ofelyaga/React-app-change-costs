import './costItem.css'
import CostDate from './CostDate';
import React, {useState} from "react";

function CostItem(props){
    //console.log(props)
    let [description, setDescription] 
    //description - начальное значение
    //setDescription - присвоенное значение
    = useState(props.description)
    
    function changeDescription(){
        //description = "Text"
        setDescription("text")
        //console.log(description)
        //console.log(props)
    }
      return (
        <div className='cost-item'>
            <CostDate date = {props.date}/>
            <div className='cost-item__description'><h2>{description}</h2>
            <div className='cost-item__price'>{props.amount} руб.
            </div>
            </div>
            <button onClick ={changeDescription}>Изменить</button>
           
        </div>
        
    )
}

export default CostItem;
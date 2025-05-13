import './costform.css'
import React, {useState} from 'react';

function CostForm(props){

    const [inputName, setInputName] = useState('')
    const [inputAmount, setInputAmount] = useState('')
    const [inputDate, setInputDate] = useState('')
    function nameChange(event){
        setInputName(event.target.value)     
    }
    function dateChange(event){
        setInputDate(event.target.value)
    }
    function amountChange(event){
        setInputAmount(event.target.value)
    }
    function submitHandler(event){
        event.preventDefault()
        const costData = {
            description:inputName,
            amount:inputAmount,
            date:new Date(inputDate)
        }
        console.log(costData)
        props.onSaveCostData(costData)
        setInputAmount('')
        setInputName('')
        setInputDate('')
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='new-cost__controls'>
                <div className='new-cost__controls'>
                    <label>Название</label>
                    <input type = "text" onChange={nameChange} value = {inputName}></input>
                </div>
                <div className='new-cost__controls'>
                    <label>Сумма</label>
                    <input type="nuber" min="0.01" step = "0.01" onChange={amountChange} value = {inputAmount}></input>
                </div>
                <div className='new-cost__controls'>
                    <label>Дата</label>
                    <input type = "date" min = "2022-01-01" onChange={dateChange} value = {inputDate}></input>
                </div>
                <div className='new-cost__actions'>
                    <button>Добавить расход</button>
                    <button onClick = {props.onCancel}>Отмена</button>
                </div>
            </div>
        </form>
    )
}
export default CostForm;
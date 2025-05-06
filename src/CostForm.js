import './costform.css'

function CostForm(){
    function nameChange(){
        console.log('Название изменилось')
    }
    return (
        <form>
            <div className='new-cost__controls'>
                <div className='new-cost__controls'>
                    <label>Название</label>
                    <input type = "text" onChange={nameChange}></input>
                </div>
                <div className='new-cost__controls'>
                    <label>Сумма</label>
                    <input type="nuber" min="0.01" step = "0.01"></input>
                </div>
                <div className='new-cost__controls'>
                    <label>Дата</label>
                    <input type = "date" min = "2022-01-01"></input>
                </div>
                <div className='new-cost__actions'>
                    <button>Добавить расход</button>
                </div>
            </div>
        </form>
    )
}
export default CostForm;
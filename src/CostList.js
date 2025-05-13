import "./CostList.css"
import CostItem from "./CostItem"
function CostList(props) {
    let content = <p>в этом году не было расходов</p>
    if(props.costs.length > 0){
        content = props.costs.map(
            (cost) => {
                return <CostItem
                    key={cost.id}
                    date={cost.date}
                    description={cost.description}
                    amount={cost.amount}></CostItem>
    
            })
    } 

    return <ul className="cost-list">{content}</ul>

}
export default CostList
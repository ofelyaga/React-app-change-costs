import Diagram from "./Diagram"
const CostsDiagram = (props)=>{
    const diagramDataSets =[
        {label:'Jan', value: 0},
        {label:'Feb',value:0},
        {label:'Mar',value:0},
        {label:'Apr',value:0},
        {label:'May',value:0},
        {label:'Jun',value:0},
        {label:'Jul',value:0},
        {label:'Aug',value:0},
        {label:'Sep',value:0},
        {label:'Oct',value:0},
        {label:'Nov',value:0},
        {label:'Dec',value:0}
    ]
        for(let cost of props.costs){
            const costMonth = cost.date.getMonth()
            console.log(diagramDataSets[costMonth])
            diagramDataSets[costMonth].value += cost.amount
        }
    
    return <Diagram dataSets = {diagramDataSets}></Diagram>
}
export default CostsDiagram
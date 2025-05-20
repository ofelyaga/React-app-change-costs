import './Diagram.css'
import DiagramBar from './DiagramBar'

const Diagram = (props)=>{
    return <div className='diagram'>
        {props.dataSets.map((dataset)=>{
            return <DiagramBar
            key={Math.random()}
            value = {dataset.value}
            maxValue = {Math.max([...dataset.value])}
            label = {dataset.label}
            ></DiagramBar>
        })
        }
    </div>
}
export default Diagram
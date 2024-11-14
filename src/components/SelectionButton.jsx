import '../App.css'
const SelectionButton = (props) => {
    return(
        <button className="selectionBtn"> 
            {props.name}
            <button className="deleteBtn" onClick={props.handleDelete}>x</button>
        </button>
    )
    
}
export default SelectionButton
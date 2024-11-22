import '../App.css'
const SelectionButton = (props) => {
    return(
        <button className="selectionBtn"> 
            {props.name}
            <span class="material-symbols-outlined" onClick={props.handleDelete}>close</span>
        </button>
    )
    
}
export default SelectionButton
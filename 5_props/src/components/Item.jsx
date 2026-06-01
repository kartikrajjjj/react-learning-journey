const Item = (props) =>{
    return(
        <li  className="list-group-item">
            {props.item.name}
          </li>
    )
}
export default Item;
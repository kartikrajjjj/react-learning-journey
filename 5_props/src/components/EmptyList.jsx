const EmptyList=(props) =>{
    

    return(
        <>
        {props.foodItems.length===0 ? <h3>Empty list</h3> : null}
        </>
    );
    
};
export default EmptyList;
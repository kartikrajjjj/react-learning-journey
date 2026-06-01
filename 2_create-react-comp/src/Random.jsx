function Random(){
    let number=Math.random() *100;
    return(
        <p style={{'backgroundColor': '#901cd3'}}>Random number is: {Math.round(number)}</p>
    )
}
export default Random; 
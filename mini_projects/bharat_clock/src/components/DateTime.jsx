function DateTime(){
    let currentTime=new Date();

    return(
        <p id='DateTime'> This is the current time: {currentTime.toLocaleDateString()}-{currentTime.toLocaleTimeString()}</p>
    )
}
export default DateTime;
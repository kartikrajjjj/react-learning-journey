function Hello(){
    let myName='kartik';
    let fullName= () =>{
        return 'Kartik Rajput';
    }


    return (
        <div>
        <p>Hello {myName}</p> 
        <p>Hello {fullName()}</p>
        </div>
        
    )
}
export default Hello; 
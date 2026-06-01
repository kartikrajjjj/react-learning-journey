function App() {
  let foodItems = [
    { id: 1, name: "Pulses" },
    { id: 2, name: "Green Leafy Vegetables" },
    { id: 3, name: "Eggs" },
    { id: 4, name: "Fruits" },
    { id: 5, name: "Chicken" },
    { id: 6, name: "Ghee" },
  ];
  //let foodItems =[];
//conditional rendering if-else
  
  return (
    <>
      <h1>Healthy foods to eat</h1>
      
      {foodItems.length===0 ? <h3>Empty list</h3> : null}
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item.id} className="list-group-item">
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;

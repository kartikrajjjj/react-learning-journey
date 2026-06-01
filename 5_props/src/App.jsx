import Heading from "./components/Heading";
import EmptyList from "./components/EmptyList";
import FoodItems from "./components/FoodItems";


function App() {
  let foodItems = [
    { id: 1, name: "Pulses" },
    { id: 2, name: "Green Leafy Vegetables" },
    { id: 3, name: "Eggs" },
    { id: 4, name: "Fruits" },
    { id: 5, name: "Chicken" },
    { id: 6, name: "Ghee" },
    { id:7, name: "Oats"}
  ];
  
  return (
    <>
      <Heading></Heading>
      <EmptyList foodItems={foodItems}></EmptyList>
      <FoodItems foodItems={foodItems}></FoodItems>
    </>
  );
} 

export default App;

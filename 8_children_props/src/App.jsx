import Container from "./components/Container"
import styles from "./components/Container.module.css";
function App() {
  return (
    <>

    <Container>
    <p className={styles.heading}>KARTIK IS LEARNING:</p>;
    <ul className="list-group">
  <li className="list-group-item active" aria-current="true">MongoDB</li>
  <li className="list-group-item">Express.js</li>
  <li className="list-group-item">React.js</li>
  <li className="list-group-item">Node.js</li>
  <li className="list-group-item">DSA in C++</li>
</ul>
</Container>

<Container>
  <p>Above is the list of subjects I am studying/revising after recovery from car accident</p>
</Container>
    </>
  )
}

export default App
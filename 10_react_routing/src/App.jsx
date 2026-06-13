import './App.css'
import {createBrowserRouter , RouterProvider} from "react-router-dom";
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import ParamsComp from './components/ParamsComp';

const router=createBrowserRouter(
    [
      {
        path:"/",
        element:<div>
          <NavBar></NavBar>
          <Home></Home>
        </div>
      },
      {
        path:"/about",
        element:<div>
          <NavBar></NavBar>
          <About></About>
        </div>
      },
      {
        path:"/dashboard",
        element:<div>
          <NavBar></NavBar>
          <Dashboard></Dashboard>
        </div>
      },{
        
        path:"/student/:id",
        element:<div>
          <NavBar></NavBar>
          <ParamsComp></ParamsComp>
        </div>
      },
    ]
);

function App() {

  return (
    <div>
      write ".../student/(any id) in URL to get ID using params. Example-localhost:5173/student/123"
      <RouterProvider router={router} />
    </div>
      
  )
}

export default App

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css';
import {Header} from "./Header";
import {Bestsellers} from "./Bestsellers";
import {Product} from "./Product";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Bestsellers/>,
  },
  {
    path: "product/:productId",
    element: <Product/>,
  },
]);

function App() {
  return (
    <div className='appContainer'>
      <Header/>
      <hr className='divider'/>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
